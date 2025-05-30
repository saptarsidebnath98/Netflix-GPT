export const BACKGROUND_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg";

export const LOGO_IMG_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_ICON_URL = "https://occ-0-3777-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const NETFLIX_PORTRAIT_IMG_URL = "https://w0.peakpx.com/wallpaper/172/343/HD-wallpaper-netflix-logo-black-logo-minimal-netflix.jpg"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
  }
};

export const TMDB_IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "bengali", name: "Bengali"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "tamil", name: "Tamil"},
  {identifier: "telugu", name: "Telugu"},
  {identifier: "spanish", name: "Spanish"},
  {identifier: "german", name: "German"},
  {identifier: "japanese", name: "Japanese"},
  {identifier: "korean", name: "Korean"},
];

export const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const OPENAI_API_ENDPOINT = "https://models.github.ai/inference";

export const formatToUSCurrency = (number) => {
  return number.toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD' 
  });
}
