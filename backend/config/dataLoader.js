const db = require("../models");
const testsData = require( '../dump/tests.json' );

// Init UserRole Collection
const dbConfig = require("./dbConfig");

function initStart() {
    db.mongoose
        .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
        .then(() => {
            console.log("Successfully connect to MongoDB.");
            // Init dummy data
            basicDatabaseDataInit();
        })
        .catch((err) => {
            console.error("Connection error", err);
            process.exit();
        });
}

// MongoDB connection

const Test = db.test;

/**
 * Init basic database data.
 * This will only be triggered if the database is empty.
 * To generate the dummy data, delete all collections in your mongoDB database.
 */
function basicDatabaseDataInit() {
    // init pack
    /* Pack.estimatedDocumentCount(async (err) => {
        if (!err) {
            await Pack.remove({});
            Pack.insertMany(packsData);
            console.log("Pack Data Initialized");
        }
    }); */
    /*Test.estimatedDocumentCount().then(async (err, count) => {
        if (!err && count === 0) {
            Test.insertMany(testsData);
            console.log("Test Data Initialized");
        }
    });*/
    // Test.insertMany(testsData);
    // console.log("Test Data Initialized");
}

module.exports = {
    initStart: initStart,
};
