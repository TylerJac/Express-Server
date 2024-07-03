import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello to the server');
});

app.get('/about', (req, res) => {
    res.send('This server is built to demonstrate basic Express setup with middleware.');
});

app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


