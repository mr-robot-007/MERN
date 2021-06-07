let express = require("express");
let cors = require('cors');
let mongoose = require('mongoose');
const { response } = require("express");
let app = express();

app.use(cors());
app.use(express.json());

let PORT = 5000;

const URLSchema = new mongoose.Schema({
  short: String,
  complete: String,
});

const URLModel = mongoose.model('URLModel', URLSchema);





let handlePing = async function (req, res) {
  let short = req.params.short;
  let doc = await URLModel.findOne({short});
  console.log(doc);
  if(doc && doc.short)
  {
    res.redirect(doc.complete);
  }
  else{
    res.redirect("https://codeforcause.org")
  }

};

let handleFormSubmission = function (req, res) {
  let data = req.body;

  if (data.short && data.complete) {
    let short = new URLModel({
      short: data.short,
      complete: data.complete,
    });
    short.save().then((respose) => {
      res.send("Submitted");
    }).catch(err => {
      res.statusCode(501);
    })
  }
  else {
    res.statusCode(501);
  }

  console.log(data);
};


app.get("/:short", handlePing);

// app.post("/submit/", handleFormSubmission);
app.post("/short/", handleFormSubmission);

function start() {
  mongoose
    .connect('mongodb+srv://anuj:mrrobot007@cluster0.gnwe6.mongodb.net/Bingo?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    .then((response) => {
      console.log("Connected to mongodb");

      let short = new URLModel({
        short: "happy",
        complete: "https://github.com/mr-robot-007",
      });
      short.save().then((response) => console.log(response));


      app.listen(PORT, function () {
        console.log(`listening to port ${PORT}`);
      });
    })

}



start();