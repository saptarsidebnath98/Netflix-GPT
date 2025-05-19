import { LOGO_IMG_URL, USER_ICON_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector(state => state.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="py-2 px-8 absolute bg-gradient-to-b from-black w-full z-10 flex justify-between items-center">
      <img className="w-40" src={LOGO_IMG_URL} alt="netflix logo" />
      {user && <div className="flex items-center space-x-2">
        <img src={user?.photoURL || USER_ICON_URL} alt="user icon" className="h-8 w-8 rounded-full border-2 border-red-600"/>
        <button
          className="border p-1 text-xs font-bold rounded-md text-white"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>}
      
    </div>
  );
};

export default Header;
