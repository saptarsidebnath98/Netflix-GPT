import { LOGO_IMG_URL } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { VscSignOut } from "react-icons/vsc";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((_error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="py-2 px-8 absolute bg-gradient-to-b from-black w-full z-10 flex justify-between items-center">
      <img className="w-40" src={LOGO_IMG_URL} alt="netflix logo" />
      {user && <div className="flex items-center space-x-2">
        <p className="font-bold text-white">{user?.displayName.split(" ")[0]} </p>
        <img src={user?.photoURL} alt="user icon" className="h-8 w-8 rounded-full border-2 border-red-600"/>
        <button
          className="p-1 text-xs font-bold rounded-md shadow-xl text-white hover:text-red-600"
          onClick={handleSignOut}
        >
          <VscSignOut size={24}/>
        </button>
      </div>}
      
    </div>
  );
};

export default Header;
