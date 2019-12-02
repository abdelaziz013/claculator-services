
exports.errorHandeler =(req,validationResult)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errMessage= errors.array()[0].msg
        const error =new Error(errMessage)
        throw error;
    } 
}
