import express from 'express';
import bodyParser from 'body-parser';
import data from './data.js';
import path from 'path';

const app = express();
app.set('view engine', 'ejs');

console.log(path.resolve()  + '/item/public');

app.use(bodyParser.json());
app.use(express.static('public'));
// app.use(express.static(path.resolve()  + '/item/public'));


app.get('/', (req, res) => {
    // res.send('Hello World!');
    let name = 'Anshal';
    res.render('index', {name});
});

// app.get('/about', (req, res) => {

//     res.json(data);


// });

function mid(req,res,next){
    // const {name} = req.body;
    const valid = "anshal"
    if (req.query.q === valid) {
        next();
    } else {
        res.status(401).json({'Unauthorized':"cn't access"});
    }
}

// app.get('/about', mid,(req, res) => {
//     res.send(data);
// });
// app.post('/about', mid,(req, res) => {
//     res.send(data);
// });

app.get('/about',mid,(req, res) => {
    const {q} = req.query;
    if (q === 'anshal') {
        res.send(data);
    } else {
        res.status(401).json({'Unauthorized':"cn't access"});
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
