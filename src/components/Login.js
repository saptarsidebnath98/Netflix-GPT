import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMG_URL, USER_ICON_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null)
  };

  const handleButtonClick = () => {
    //validate the form data
    // checkValidData(email, password);
    if (!isSignInForm) {
      const errMessage = checkValidData(email.current.value,password.current.value,fullName.current.value);
      setErrorMessage(errMessage);
      if (errMessage) return;
      // sign up logic here
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value || "User Name",
            photoURL: USER_ICON_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message)
            });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage)
        });

    } else {
      const errMessage = checkValidData(
        email.current.value,
        password.current.value
      );

      setErrorMessage(errMessage);
      if (errMessage) return;

      // sign in logic here
      signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div className="w-full">
      <Header />
      <div className="absolute w-full">
        <img
          src={BACKGROUND_IMG_URL}
          alt="background"
          className="h-screen w-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-11/12 md:w-80 bg-black bg-opacity-80 flex flex-col space-y-4 p-4 md:p-10 pb-20 text-white top-20 right-1/2 translate-x-1/2 rounded-md"
      >
        <h1 className="text-xl md:text-3xl font-bold mb-2">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 focus:outline-none bg-gray-700 border bg-opacity-50 border-gray-400 rounded-md text-sm"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 bg-gray-700 focus:outline-none border bg-opacity-50 border-gray-400 rounded-md text-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 bg-gray-700 border bg-opacity-50 border-gray-400 rounded-md text-sm"
        />
        <p className="text-[14px] font-bold text-[#e50914]">{errorMessage}</p>

        <button
          className="bg-[#e50914] text-white rounded-md text-sm font-semibold pt-1 pb-2"
          onClick={handleButtonClick}
        >
          Sign {isSignInForm ? "In" : "Up"}
        </button>

        <p className="text-sm text-gray-400" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix?" : "Already registered?"}
          <span className="text-white font-semibold cursor-pointer">
            {isSignInForm ? "Sign Up now." : "Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
