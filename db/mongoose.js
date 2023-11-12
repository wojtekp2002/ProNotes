const mongoose = require('mongoose');
const {database} = require('../config');

//db connect
mongoose.connect(database).then(
    () => {
        console.log('Lets gooooo!!!');
    },
).catch((err) => {
    console.log('Slabo mordko nie fajnie :(' + err);
    process.exit();
});
