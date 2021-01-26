const express = require("express");

const bodyParser = require('body-parser')
const date=require(__dirname+"/date.js")
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
let day=date.getDay();
  res.render("list", {kindday:day , newitems:items});
});
app.post("/",function(req,res){
  let item=req.body.ev;
  items.push(item);
  res.redirect("/");
});

app.get("/about",function(req,res){
  res.render("about");
});
app.listen(3000, function() {
  console.log("server is runnning om port 3000");
})
