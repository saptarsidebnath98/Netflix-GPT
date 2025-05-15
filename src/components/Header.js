import { LOGO_IMG_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="py-2 px-8 absolute bg-gradient-to-b from-black w-full z-10">
      <img
      className="w-40"
        src={LOGO_IMG_URL}
        alt="netflix logo"
      />
    </div>
  );
};

export default Header;
