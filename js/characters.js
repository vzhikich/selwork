// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfvcdaO53QVUIVI94xyJiRmNggxDHpKhA",
    authDomain: "selfwork-dnd.firebaseapp.com",
    databaseURL: "https://selfwork-dnd-default-rtdb.firebaseio.com",
    projectId: "selfwork-dnd",
    storageBucket: "selfwork-dnd.appspot.com",
    messagingSenderId: "761999415379",
    appId: "1:761999415379:web:80f432eac33da0d69acea6"
}

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const contactFormDB = database.ref('selfworkDnD');

const  arrayjson = [];
contactFormDB.once('value')
  .then((snapshot) => {
    const data = snapshot.val();
    const keys = Object.keys(data); 
    for (let i = 0; i < keys.length; i++) {
        var fieldValue = data[keys[i]];
        arrayjson[i] = fieldValue;
    }

    const elements = [];
    for(let i = 0; i < arrayjson.length;i++){
        elements.push(arrayjson[i].name);
    }
    const buttonContainer = document.getElementById('button-container');

    var buttons = [];
    elements.forEach((element, index) => {
        const button = document.createElement('button');
        button.textContent = element;
        buttonContainer.appendChild(button);
        buttons[index] = button;
    });



  })
  .catch((error) => {
    console.error('Error reading data:', error);
});

// name : nameCha,
// maxHp : maxHp,
// armor : armorCha,
// strengt : statarray[0],
// dexterity : statarray[1],
// constitution : statarray[2],
// intelligence : statarray[3],
// wisdom : statarray[4],
// charisma : statarray[5],
// class : ClassChosen,
// race : RaceChosen,
// history : HistoryChosen,
// saveDice1 : SaveCheckboxes[0].id,
// saveDive2 : SaveCheckboxes[1].id,
// skillDice1 : SkillsCheckboxes[0].id,
// skillDice2 : SkillsCheckboxes[1].id,
// skillDice3 : SkillsCheckboxes[2].id,
// skillDice4 : SkillsCheckboxes[3].id,
const BackButton = document.getElementById('backBtn');
BackButton.addEventListener('click', function(){
    window.location.href = './';
});

