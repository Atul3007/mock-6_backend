const express = require("express");
const { connection } = require("./config/db");
const {user_router}=require("./routes/user.routes");
const {note_router}=require("./routes/notes.routes");
const {authhenticate}=require("./middleware/authenticate.middleware");
const cors=require("cors");
const app = express();
app.use(express.json());
app.get("/api", (req, res) => {
    res.send("Welcome");
})
app.use(cors({
    origin: '*'
}));
 
app.use("/api/",user_router); 
app.use(authhenticate);
app.use("/api/flight",note_router);
app.listen(8000, async () => {
    try {
        await connection;
        console.log("Connected to Db");
    } catch (error) {
        console.log(error);
        console.log("Problem in db");
    }
    console.log("4500 running");
})


// {
//     "airline": "aer",
//   "flightNo": "1452",
//   "departure": "Def",
//   "arrival": "Abc",
//   "departureTime": "22-10-2022",
//   "arrivalTime": "23-10-2022",
//   "seats": 1,
//   "price": 2
// }



// "email": "babu@gmail.com",
// "pass": "123"