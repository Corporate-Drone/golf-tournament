const express = require('express');
const mongoose = require('mongoose');
const path = require("path")
const cors = require('cors');
const { check } = require('express-validator/check');
const { validationResult } = require('express-validator/check');
require('dotenv').config()

const Attendee = require('./models/attendee');

const app = express();

const connectUrl = process.env.DB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(connectUrl, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        console.log(err)
        process.exit(1);
    }
};

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //used to parse req.body
app.use(express.static(path.join(__dirname, "client", "build")))

app.get('/attendees', async (req, res) => {
    const allAttendees = await Attendee.find({});
    res.send(allAttendees);
});

app.post('/register', [
    check('first', 'First name must be at least 1 character and less than 14 characters.').isLength({ min: 1, max: 14 }),
    check('last', 'Last name must be at least 1 character and less than 14 characters.').isLength({ min: 1, max: 14 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const attendee = new Attendee(req.body);
        await attendee.save();
        res.send('saved')
    } catch (error) {
        console.log(error)
    }
})

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.send({ message: error.message || 'An unknown error occurred!' });
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})