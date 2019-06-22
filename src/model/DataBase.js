class DataBase{
    constructor(){
        this.apiKey = "AIzaSyAacLMgpmWatOonijAAITJjBcg48nFD6cM"
        this.authDomain = "dashboardguardamunicipal.firebaseapp.com"
        this.databaseURL = "https://dashboardguardamunicipal.firebaseio.com"
        this.projectId =  "dashboardguardamunicipal"
        this.storageBucket = "dashboardguardamunicipal.appspot.com"
        this.messagingSenderId = "783126249638"
        this.appId = "1:783126249638:web:0429f0155911c21c"
    }
    
    Conectar(){
        throw new Error('Deve ser implementada pela classe filha!');
    }
}

module.exports = DataBase