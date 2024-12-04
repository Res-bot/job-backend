//error middleware || next function
const errorMiddleware = (err,req,res,next)=>{
    console.log(err);
    const defaultErrors={
        statusCode: 500,
        message: err
    };
    
    //missing field error
    if(err.name === 'ValidationError'){
        defaultErrors.statusCode = 400;
        defaultErrors.message = Object.values(err.errors).map(item => item.message).join(",")
    }

   
};
export default errorMiddleware;