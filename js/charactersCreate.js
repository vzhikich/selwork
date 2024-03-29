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

var contactFormDB = firebase.database().ref('selfworkDnD');

var ClassChosen = "";
var RaceChosen = "";
var HistoryChosen = "";

var content = document.querySelector('.ClassList').textContent;

document.getElementById('backBtn').addEventListener('click', function(){
    const answer=confirm("Бажаєте вийти? Персонажа не буде збережено!");
    if (answer) {
        console.log("Вихід з сторінки");
        window.location.href = './';
    }
})

const savebutton = document.getElementById('saveBtn').addEventListener('click',saveButtonHandler);

var statarray = [];

function saveButtonHandler(event){
    event.preventDefault();
    var ccc = 1;
    var nametextArea = document.getElementById('CharacterName');
    var maxHP = document.getElementById('MaxHpValue');
    var armor = document.getElementById('ArmorValue');
    if(nametextArea.value === ""){
        ccc = 0;
        alert("Уведіть ім'я!");
    }
    else if(ClassChosen === "" || RaceChosen === "" || HistoryChosen === ""){
        ccc = 0;
        alert("Виберіть клас/расу/предісторію!");
    }
    else if(SaveCheckboxes.length !== 2){
        ccc = 0;
        alert("Виберіть два кидки рятунку");
    }
    else if(SkillsCheckboxes.length !== 4){
        ccc = 0;
        alert("Виберіть чотири навички");
    }
    else if(maxHP.value === "" || armor.value === ""){
        ccc = 0;
        alert("Уведіть значення здоров'я і броні");
    }
    else if(CheckStatsBoxes()){
        ccc = 0;
    }
    if(ccc === 1){
        var statbox = document.getElementById('StrengthValue');
        statarray.push(statbox.value);
        statbox = document.getElementById('DexterityValue');
        statarray.push(statbox.value);
        statbox = document.getElementById('ConstitutionValue');
        statarray.push(statbox.value);
        statbox = document.getElementById('IntelligenceValue');
        statarray.push(statbox.value);
        statbox = document.getElementById('WisdomValue');
        statarray.push(statbox.value);
        statbox = document.getElementById('CharismaValue');
        statarray.push(statbox.value);
        saveMesage(nametextArea.value, maxHP.value, armor.value);
        alert("Персонажа збережено!");
        console.log("Вихід з сторінки");
        window.location.href = './';
    }
}

const saveMesage = (nameCha, maxHp, armorCha) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : nameCha,
        maxHp : maxHp,
        armor : armorCha,
        strengt : statarray[0],
        dexterity : statarray[1],
        constitution : statarray[2],
        intelligence : statarray[3],
        wisdom : statarray[4],
        charisma : statarray[5],
        class : ClassChosen,
        race : RaceChosen,
        history : HistoryChosen,
        saveDice1 : SaveCheckboxes[0].id,
        saveDive2 : SaveCheckboxes[1].id,
        skillDice1 : SkillsCheckboxes[0].id,
        skillDice2 : SkillsCheckboxes[1].id,
        skillDice3 : SkillsCheckboxes[2].id,
        skillDice4 : SkillsCheckboxes[3].id,
    });
}

function CheckStatsBoxes() {
    var bool = 0;
    var statbox = document.getElementById('StrengthValue');
    if(statbox.value === ""){
        alert("Введіть значення сили");
        bool = 1;
    }
    statbox = document.getElementById('DexterityValue');
    if(statbox.value === ""){
        alert("Введіть значення вправності");
        bool = 1;
    }
    statbox = document.getElementById('ConstitutionValue');
    if(statbox.value === ""){
        alert("Введіть значення статури");
        bool = 1;
    }
    statbox = document.getElementById('IntelligenceValue');
    if(statbox.value === ""){
        alert("Введіть значення інтелекту");
        bool = 1;
    }
    statbox = document.getElementById('WisdomValue');
    if(statbox.value === ""){
        alert("Введіть значення мудрість");
        bool = 1;
    }
    statbox = document.getElementById('CharismaValue');
    if(statbox.value === ""){
        alert("Введіть значення харизма");
        bool = 1;
    }
    return bool;
}

var Strcount = 0;
var Dexcount = 0;
var Concount = 0;
var Intcount = 0;
var Wiscount = 0;
var Chacount = 0;
function switchCount(textarea) {
    switch (textarea) {
        case StrengthValue:
            Strcount++;
            break;
        case DexterityValue:
            Dexcount++;
            break;
        case ConstitutionValue:
            Concount++;
            break;
        case IntelligenceValue:
            Intcount++;
            break;
        case WisdomValue:
            Wiscount++;
            break;
        case CharismaValue:
            Chacount++;
            break;
        default:
            break;
    }
}
function switchResetCount(textarea) {
    switch (textarea) {
        case StrengthValue:
            Strcount = 0;
            break;
        case DexterityValue:
            Dexcount = 0;
            break;
        case ConstitutionValue:
            Concount = 0;
            break;
        case IntelligenceValue:
            Intcount = 0;
            break;
        case WisdomValue:
            Wiscount = 0;
            break;
        case CharismaValue:
            Chacount = 0;
            break;
        default:
            break;
    }
}
function countMoreThanOne(textarea){
    switch (textarea) {
        case StrengthValue:
            if(Strcount > 1){
                return 1;
            }
            break;
        case DexterityValue:
            if(Dexcount > 1){
                return 1;
            }
            break;
        case ConstitutionValue:
            if(Concount > 1){
                return 1;
            }
            break;
        case IntelligenceValue:
            if(Intcount > 1){
                return 1;
            }
            break;
        case WisdomValue:
            if(Wiscount > 1){
                return 1;
            }
            break;
        case CharismaValue:
            if(Chacount > 1){
                return 1;
            }
            break;
        default:
            break;
    }
}

function limitInput(textarea, maxLength) {

    var text = textarea.value;
    switchCount(textarea);
    var number = parseInt(text);
    if(countMoreThanOne(textarea)){
        if (!isNaN(number) && number >= 8 && number <= 15) 
        {
        } 
        else 
        {
            alert("'Введіть число у проміжку між 8 та 15");
            switchResetCount(textarea);
            textarea.value = '';
        }
        if (text.length > maxLength) {
            textarea.value = text.slice(0, maxLength);
        }

    }
}

var KOcount = 0;
var Hitcount = 0;
function limitInputHits(textarea, maxLength) {
    var text = textarea.value;
    if(textarea === MaxHpValue){
        Hitcount++;
    }
    else if(textarea === ArmorValue){
        KOcount++;
    }
    var number = parseInt(text);
    if((textarea === MaxHpValue && Hitcount > 1) || (textarea === ArmorValue && KOcount > 1)){
        if (isNaN(number)) 
        {
            alert("Введіть число");
            if(textarea === MaxHpValue){
                Hitcount = 0;
            }
            else if(textarea === ArmorValue){
                KOcount = 0;
            }
            textarea.value = '';
        } 
        if (text.length > maxLength) {
            textarea.value = text.slice(0, maxLength);
        }
    }
}

function changeOptionRace(option) {
    RaceChosen = option;
    document.querySelector('.Race').textContent = option;
}

function changeOptionClass(option) {
    ClassChosen = option;
    document.querySelector('.ClassList').textContent = option;
}

function changeOptionHistory(option) {
    HistoryChosen = option;
    document.querySelector('.HistoryCharac').textContent = option;
}

var SaveCheckboxes = [];

function limitCheckbox(checkbox) {
  if (checkbox.checked) {
    if (SaveCheckboxes.length >= 2) {
      var oldestCheckbox = SaveCheckboxes.shift();
      oldestCheckbox.checked = false;
    }
    SaveCheckboxes.push(checkbox);
  } else {
    SaveCheckboxes.splice(SaveCheckboxes.indexOf(checkbox), 1);
  }
}

var SkillsCheckboxes = [];
function limitSkillsCheckbox(checkbox) {
    if (checkbox.checked) {
      if (SkillsCheckboxes.length >= 4) {
        var oldestCheckbox = SkillsCheckboxes.shift();
        oldestCheckbox.checked = false;
      }
      SkillsCheckboxes.push(checkbox);
    } else {
      SkillsCheckboxes.splice(SkillsCheckboxes.indexOf(checkbox), 1);
    }
}

function restrictInput(event) {
    var textarea = event.target;
    var text = textarea.value;

    var filteredText = text.replace(/[^a-zA-Zа-яА-Я\s]/g, '');
    if (filteredText !== text) {
      textarea.value = filteredText;
    }
}
