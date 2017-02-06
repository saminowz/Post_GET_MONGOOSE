/**
 * Created by nowz on 2/6/17.
 */
const mongoose=require("mongoose");
var Todos=mongoose.model("Todos",
    {
        text:{
            type:String,
            minlength:2,
            maxlength:24,
            required:true,
            trim:true
        }
    });
module.exports={Todos};
