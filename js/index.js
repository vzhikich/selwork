// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDfvcdaO53QVUIVI94xyJiRmNggxDHpKhA",
//     authDomain: "selfwork-dnd.firebaseapp.com",
//     databaseURL: "https://selfwork-dnd-default-rtdb.firebaseio.com",
//     projectId: "selfwork-dnd",
//     storageBucket: "selfwork-dnd.appspot.com",
//     messagingSenderId: "761999415379",
//     appId: "1:761999415379:web:80f432eac33da0d69acea6"
// }
// 
// firebase.initializeApp(firebaseConfig);

// var contactFormDB = firebase.database().ref('selfworkDnD');

// document.getElementById("registerForm").addEventListener("submit", submitLogin);



const button = document.getElementById('CharactersBtn');
const createButton = document.getElementById('CharactersCreateBtn');

createButton.addEventListener('click', function(){
    window.location.href = '../charactersCreate.html';
})

button.addEventListener('click', function() {
    window.location.href = '../characters.html';
});
