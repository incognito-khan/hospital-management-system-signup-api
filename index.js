const express = require('express');
const {dbConnector} = require('./db');

const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes');

const corsOptions = {
origin: 'http://localhost:3000',
};

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

// API Routes
app.use("/api/user/", userRouter);

dbConnector.connect();
// PORT
const PORT = 5000;

// Listening to the server
 app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

// Unhandled Error Rejection handling 
// process.on('unhandledRejection', (err) => {
//     `An error occured: ${err.message}`
//     server.close(() => process.exit(1));
//   });