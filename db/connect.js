/**
 * Created by nowz on 2/6/17.
 */
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/learn");
mongoose.Promise=global.Promise;