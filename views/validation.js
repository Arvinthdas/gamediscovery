// validation.js

// Email validation function
export const validateEmail = (email) => {
    // Basic email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Password validation function
  export const validatePassword = (password) => {
    // Password must be at least 6 characters long
    return password.length >= 6;
  };
  