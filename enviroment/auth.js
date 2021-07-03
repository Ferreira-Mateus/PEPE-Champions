var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');

btnLogin.addEventListener('click', function () {

  firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      alert('Senha Correta');
      window.location.replace('index.html');
      console.log(user);
      // ...
    })
    .catch((error) => {
      alert('Senha Errada')
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });

});