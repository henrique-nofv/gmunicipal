const firebase = require("firebase");
const DB = require("../model/DataBase.js")

class FirebaseDB extends DB {
    Conectar() {

        if (!firebase.apps.length) {
            return firebase.initializeApp(this);
        }

    }
}

module.exports = FirebaseDB