import { LOGO_IMG_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { VscSignOut } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { LuSearchCode } from "react-icons/lu";
import { removeGptMovieResults, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { FaHome } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

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
  };

  const handleShowMenu = () => {
    setShowMenu(prevState => !prevState);
  }

  return (
    <div className={`py-2 px-2  md:px-8 absolute bg-gradient-to-b from-black w-full z-10 flex justify-between items-center flex-col md:flex-row gap-2 ${user && "bg-black border-b-2 border-red-600"}  md:bg-transparent md:border-none`}>
      {user && <button className="text-white absolute right-2 top-5 md:hidden" onClick={handleShowMenu}>{showMenu ? <RxCross2 /> : <IoMenu />}</button>}
      <img className="w-24 md:w-40" src={LOGO_IMG_URL} alt="netflix logo" />
      {user && (
        <div className={`${showMenu ? "flex" : "hidden" } md:flex items-center w-full justify-between md:justify-end relative md:bg-transparent rounded-sm bg-opacity-50 transform space-x-2`}>

          <div className="flex items-center">
          {isGptPage && <select className="bg-black bg-opacity-25 text-white text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 w-12 md:w-24 focus:outline-none" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option value={lang.identifier} key={lang.identifier} className="bg-black mt-2">{lang.name}</option>)}
          </select>}
          

          <button className="bg-gradient-to-r from-indigo-500 to-red-600 text-white font-semibold p-2 rounded-md text-xs shadow-lg mx-1 md:mx-2 flex items-center gap-1 hover:border hover:border-purple-300 transform transition-all" onClick={handleGptSearchClick}>
            {isGptPage ?  (<><FaHome size={15} /><span className="hidden md:block">Homepage</span></>):(<><LuSearchCode size={15} /> 
           <span> GPT Search </span></>)}

          </button>
          </div>

          <div className="flex space-x-2 items-center">
          <p className="font-bold text-white text-xs md:text-sm">
            {user?.displayName?.split(" ")[0] || "User"}
          </p>
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              alt="user icon"
              className="h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-red-600"
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
        </div>
      )}
    </div>
  );
};

export default Header;
