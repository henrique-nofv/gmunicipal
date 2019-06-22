const express = require('express');
const router = express.Router();

const importFirebase = require("firebase");

const firebaseDB = require("../model/FirebaseDB.js")
var path = require('path');

const testeJson = require("../../ANOS/BaseDados.json")

router.get('/json', (req, res) => {
/*
    let db = new firebaseDB();

    db.Conectar();

    importFirebase.database().ref('/').once('value').then(snapshot => {
        res.json(snapshot);
    });
*/

res.json(testeJson);


});


module.exports = router;

/*
app.get('/', function (req, resp) {
    resp.sendFile('teste.html', { root: path.join(__dirname, '../../view/') });
});
*/




