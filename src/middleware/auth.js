function adminAuth(req,res,next){
    const token = "XYZ";
    const isAdmin = token === "XYZ";
    if (!isAdmin) res.status(400).send("Logged in user is not an ADMIN");
    else next();
}

module.exports={adminAuth};

