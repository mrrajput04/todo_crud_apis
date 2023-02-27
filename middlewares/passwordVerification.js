const passwordVerify = (req,res,next)=>{
    if (req.body.password !== req.body.confirmPassword) 
    
    return res.status(500).json({ Error: 'password does not matched' });

        next();

    }

    module.exports = passwordVerify;