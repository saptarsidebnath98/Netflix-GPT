export const checkValidData = (email, password, fullName) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullNameValid =  /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName);
    
    if(fullName !== undefined && !isFullNameValid) return "Full Name is not valid!"
    if(!isEmailValid) return "Email ID is not valid!";

    if(!isPasswordValid) return "Password is not valid!";


    return null;
}