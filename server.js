const express = require('express');
const app = express();
const PORT = 8082;
const studentRouter = require('./routes/studentRoute');
const teacherRouter = require('./routes/teacherRoute');

app.set('view engine', 'ejs'); 

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send("data has been send");
})

app.listen(PORT, (err) => {
    if(err) console.log("error " + err);
    else console.log(`server is running on port : ${PORT}`);
});

