const BackButton = document.getElementById('backBtn');

BackButton.addEventListener('click', function(){
    window.location.href = 'index.html';
})

function changeOptionRace(option) {
    document.querySelector('.Race').textContent = option;
}

function changeOptionClass(option) {
    document.querySelector('.ClassList').textContent = option;
}

function changeOptionHistory(option) {
    document.querySelector('.HistoryCharac').textContent = option;
}