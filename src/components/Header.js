import { LOGO_IMG_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { VscSignOut } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { LuSearchCode } from "react-icons/lu";
import { removeGptMovieResults, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const isGptPage = useSelector((store) => store.gpt.showGptSearch);

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
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
    if(!isGptPage){
      dispatch(removeGptMovieResults());
    }
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="py-2 px-8 absolute bg-gradient-to-b from-black w-full z-10 flex justify-between items-center">
      <img className="w-40" src={LOGO_IMG_URL} alt="netflix logo" />
      {user && (
        <div className="flex items-center space-x-2">

          {isGptPage && <select className="bg-black bg-opacity-55 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 " onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option value={lang.identifier} key={lang.identifier} className="bg-black mt-2">{lang.name}</option>)}
          </select>}
          

          <button className="bg-gradient-to-r from-indigo-500 to-red-600 text-white font-semibold p-2 rounded-md text-xs shadow-lg mx-2 flex items-center gap-1 hover:border hover:border-purple-300 transform transition-all" onClick={handleGptSearchClick}>
            {isGptPage ?  (<><FaHome size={15} /><span>Homepage</span></>):(<><LuSearchCode size={15} /> 
           <span> GPT Search </span></>)}
            
            

          </button>
          <p className="font-bold text-white">
            {user?.displayName?.split(" ")[0] || "User"}
          </p>
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              alt="user icon"
              className="h-8 w-8 rounded-full border-2 border-red-600"
            />
          ) : (
            <FaRegUserCircle
              size={30}
              className="text-red-600 bg-gradient-to-b rounded-full"
            />
          )}

          <button
            className="p-1 text-xs font-bold rounded-md shadow-xl text-white hover:text-red-600"
            onClick={handleSignOut}
          >
            <VscSignOut size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
