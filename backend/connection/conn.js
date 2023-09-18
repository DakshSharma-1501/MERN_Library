const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://dakshmaster:7777@cluster0.h71lhjv.mongodb.net/crudop?retryWrites=true&w=majority"
)
.then(()=>console.log("Connected"));