function loginEmail(){
  auth.signInWithEmailAndPassword(email.value, password.value)
  .then(() => window.location = "index.html")
  .catch(e => alert(e.message));
}

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  'recaptcha-container'
);

let confirmationResult;

function sendOTP(){
  auth.signInWithPhoneNumber(phone.value, recaptchaVerifier)
  .then(result => {
    confirmationResult = result;
    alert("OTP sent");
  })
  .catch(e => alert(e.message));
}

function verifyOTP(){
  confirmationResult.confirm(otp.value)
  .then(() => window.location = "index.html")
  .catch(() => alert("Invalid OTP"));
}

function logout(){
  auth.signOut().then(() => {
    window.location = "login.html";
  });
}
