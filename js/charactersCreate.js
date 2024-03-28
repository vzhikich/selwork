var ClassChosen = '';
var RaceChosen = '';
var HistoryChosen = '';

document.getElementById('backBtn').addEventListener('click', function(){
    const answer=confirm("Бажаєте вийти? Персонажа не буде збережено!");
    if (answer) {
        console.log("Вихід з сторінки");
        window.location.href = '../index.html';
    }
})

var Strcount = 0;
var Dexcount = 0;
var Concount = 0;
var Intcount = 0;
var Wiscount = 0;
var Chacount = 0;
function switchCount(textarea) {
    console.log(textarea);
    switch (textarea) {
        case StrengthValue:
            Strcount++;
            console.log(Strcount);
            break;
        case DexterityValue:
            Dexcount++;
            console.log(Dexcount);
            break;
        case ConstitutionValue:
            Concount++;
            console.log(Concount);
            break;
        case IntelligenceValue:
            Intcount++;
            console.log(Intcount);
            break;
        case WisdomValue:
            Wiscount++;
            console.log(Wiscount);
            break;
        case CharismaValue:
            Chacount++;
            console.log(Chacount);
            break;
        default:
            break;
    }
}
function switchResetCount(textarea) {
    console.log(textarea);
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
            console.log('Введіть число у проміжку між 8 та 15');
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
            console.log('Введіть число');
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
    ClassChosen = option;
    alert("TEXT: " + option);
    document.querySelector('.Race').textContent = option;
}

function changeOptionClass(option) {
    RaceChosen = option;
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
