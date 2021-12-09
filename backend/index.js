const express = require('express')
const mongoose=require("mongoose")
const cors =require("cors");
const app = express()
const port = 8080
app.use(express.json());
//middleware
app.use(cors());

const User = require('./db');

mongoose.connect(
  'mongodb+srv://ballu:EiB439wrBNkOEVjM@whatsapp.cvjlv.mongodb.net/users?retryWrites=true&w=majority',

  { useNewUrlParser: true }
);


app.post('/register', async (req, res) => {
  const data =(req.body);
  console.log(req.body);
  const user = new User({
    username: data.username,
    email: data.email,
    password: data.password,
  });
  try {
    const usersaved = await user.save();
    res.send(usersaved._id);
  } catch (err) {
      console.log("err")
    res.send('False');
  }
});

app.post('/login', async (req, res) => {
  const data = (req.body);
  try {
    const usertoreturn = await User.findOne(
      { email: data.email },
      { email: 1, password: 1 }
    );
    if (usertoreturn.password != data.password) {
      res.send('False');
    } else {
      res.send(usertoreturn._id);
    }
  } catch (err) {
    res.send('False');
  }
});






app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

