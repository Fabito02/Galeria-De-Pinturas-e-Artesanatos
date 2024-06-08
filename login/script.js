// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaVIJxHPHkiLLY8qw8cp2KxGBH1Mv0jn0",
  authDomain: "pinturas-e-artesanatos-gl.firebaseapp.com",
  databaseURL: "https://pinturas-e-artesanatos-gl-default-rtdb.firebaseio.com",
  projectId: "pinturas-e-artesanatos-gl",
  storageBucket: "pinturas-e-artesanatos-gl.appspot.com",
  messagingSenderId: "817700092735",
  appId: "1:817700092735:web:91076dbdca2010b8f6b18a",
  measurementId: "G-BZLN1EJXLL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const auth = firebase.auth();

// Get DOM elements
const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

// Function to validate signup form
function validateSignupForm() {
  const signupEmail = signupEmailIn.value;
  const confirmSignupEmail = confirmSignupEmailIn.value;
  const signupPassword = signupPasswordIn.value;
  const confirmSignUpPassword = confirmSignUpPasswordIn.value;

  if (!signupEmail || !confirmSignupEmail || !signupPassword || !confirmSignUpPassword) {
    window.alert("Please fill out all required fields.");
    return false;
  }

  if (signupEmail !== confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    return false;
  }

  if (signupPassword !== confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    return false;
  }

  return true;
}

// Event listener for create account button
createacctbtn.addEventListener("click", function() {
  if (validateSignupForm()) {
    const signupEmail = signupEmailIn.value;
    const signupPassword = signupPasswordIn.value;

    auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then((userCredential) => {
        window.alert("Success! Account created.");
      })
      .catch((error) => {
        window.alert("Error occurred: " + error.message);
      });
  }
});

// Event listener for submit button
submitButton.addEventListener("click", function() {
  const email = emailInput.value;
  const password = passwordInput.value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.alert("Success! Welcome back!");
    })
    .catch((error) => {
      window.alert("Error occurred: " + error.message);
    });
});

// Event listener for signup button
signupButton.addEventListener("click", function() {
  main.style.display = "none";
  createacct.style.display = "block";
});

// Event listener for return button
returnBtn.addEventListener("click", function() {
  main.style.display = "block";
  createacct.style.display = "none";
});
