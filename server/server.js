const url = "mongodb+srv://imarticus:imarticus@cluster0.06lzmt8.mongodb.net/?retryWrites=true&w=majority";
// const url = "mongodb://localhost:27017/admin";
// const bodyParser = require("body-parser");

const userSchema = require("./Schema/userDetailSchema")
var exp = require('express');
var cors = require('cors')
const mongoose = require("mongoose");

var app = exp();
// app.use(bodyParser.json());
mongoose.set('strictQuery', false);

mongoose.connect(url);

app.use(cors({ origin: "http://45.132.241.86/" }));
app.use(exp.json());


let code = ["CT56C4UVY7", "KA39BG57CT", "9JF56BG59H", "KPE547TCT5", "TYK498RM5X"];

let Program_Scholarship = {
     "Certified Investment Banking Operations Professional": 25000,
     "Postgraduate Program In Banking & Finanace": 30000,
     "Postgraduate Program In Machine Learning & A.I.": 45000,
     "Postgraduate Program In Data Science & Analytics": 45000,
     "Postgraduate Program In Cybersercurity": 55000,
     "Certified Full Stack Developer Pro": 25000,
     "Postgraduate Program in Digital Marketing": 10000
}
// const userExist{ }

function getDis(req) {

     let discount;
     switch (req.body.course) {
          case "Certified Investment Banking Operations Professional":
               discount = 25000;
               break;
          case "Postgraduate Program In Banking & Finanace":
               discount = 30000;
               break;
          case "Postgraduate Program In Machine Learning & A.I.":
               discount = 45000;
               break;
          case "Postgraduate Program In Data Science & Analytics":
               discount = 45000;
               break;
          case "Postgraduate Program In Cybersercurity":
               discount = 55000;
               break;
          case "Certified Full Stack Developer Pro":
               discount = 25000;
               break;
          case "Postgraduate Program in Digital Marketing":
               discount = 10000;
               break;
          default:
               discount = 10000;
     }
     return discount
}


app.post("/discount", (req, resp) => {
     const referal = Math.floor(Math.random() * code.length);

     resp.send(JSON.stringify({ discount: getDis(req), referalCode: code[referal] }));

});

app.post("/details", async (req, resp) => {

     try {
          const user = new userSchema({
               name: req.body.username,
               email: req.body.email,
               phone: req.body.phone,
               course: req.body.course,
               center: req.body.center
          })

          resp.send(JSON.stringify(getDis(req)));

          await user.save();
     } catch {
          resp.send("something went wrong!! sorry.")
     }
})

app.listen(8000, function (err) {
     if (err) console.log(err);
     console.log("Server listening on PORT", 8000);
});

