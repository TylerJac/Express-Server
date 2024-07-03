import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// Define the port to run on.
const PORT = process.env.PORT || 3000;
// Create an instance of the Express application.
const app = express();

// Logger Middleware: Use morgan to log all incoming requests to the console.
app.use(morgan('dev'));

// Body Parser Middleware: Use body-parser to parse incoming request bodies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes Middleware: Use routes to handle incoming requests.
app.get('/', (req, res) => {
  res.send('Hello to the server');
});

// Routes Middleware: Use routes to handle incoming requests.
app.get('/about', (req, res) => {
    res.send('This server is built to demonstrate basic Express setup with middleware.');
});

// Error Handling Middleware: Use routes to handle incoming requests.
app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});


// Start the server.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


