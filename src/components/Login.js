import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage)
        });

    } else {
      const errMessage = checkValidData(
        email.current.value,
        password.current.value,
      );

      setErrorMessage(errMessage);
      if (errMessage) return;

      // sign in logic here
    }
  };
  return (
    <div className="w-full">
      <Header />
      <div className="absolute">
        <img
          src="
            https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-80 bg-black bg-opacity-80 flex flex-col space-y-4 p-10 pb-20 text-white top-20 right-1/2 translate-x-1/2 rounded-md"
      >
        <h1 className="text-3xl font-bold mb-2">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2  bg-gray-700 border bg-opacity-50 border-gray-400 rounded-md text-sm"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 bg-gray-700 border bg-opacity-50 border-gray-400 rounded-md text-sm"
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
