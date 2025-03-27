class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default ErrorHandler;  // Ensure this is the default export


// Without Error.captureStackTrace:-  
// If you didn’t use this line, the error report would include unnecessary technical details  
// like where the ErrorHandler class itself is defined.  
// That’s not very helpful when you’re trying to debug.  

// With Error.captureStackTrace, you’re saying:  
// “Skip all the setup details and just show me where the error occurred.”
