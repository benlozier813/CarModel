var userId;

var password;

var userIdAlert = []

function userAlertArray(userId){
    if (userId.includes("&")){
      userIdAlert.push("&")}
    if (userId.includes("#")){
      userIdAlert.push("#")}
    if (userId.includes("!")){
        userIdAlert.push("!")}
    return userIdAlert.toString(" ");
    }



function isUserIdValid(userId) {
  if(!(userId.includes("&") || userId.includes("#") || userId.includes("!")) && userId.length > 5) {
    return {valid: true};
  } else {
    return {valid: false, reason: "user ID contains a &, #, !, or is shorter than 5 characters"};
  }
};

function checkCase(password) {
  return password.toUpperCase() != password && password.toLowerCase() != password
};

function test(str) {
  return /\d/.test(str);
};

function isPasswordValid(password) {
  if ((password.includes("$") || password.includes("#") || password.includes("!")) && password.length >5 && !password.includes("password") && checkCase(password) && test(password)){
    return {valid: true};
  } else {
    return{ valid: false, reason: "user ID is missing a or is shorter than 5 characters or does not contain both upper and lower case characters"}
  }
};

function areCredentialsValid(userId, password) {
  if(isUserIdValid(userId).valid && isPasswordValid(password).valid) {
  return alert("Your credentials are valid.")
}
if(isUserIdValid(userId).valid === false){
  return alert("user ID contains a " + userAlertArray(userId) + " or is shorter than 5 characters")
}
if(isPasswordValid(userId).valid === false){
  return alert("user ID is missing a &, #, ! or is shorter than 5 characters or does not contain both upper and lower case characters")
};

function getUserId() {
  userId=prompt("Enter User ID");
};

function getUserPassword() {
  password=prompt("Enter Password");
};

function login() {
  getUserId();
  getUserPassword();
  userAlertArray();
  areCredentialsValid(userId, password);
}
}
