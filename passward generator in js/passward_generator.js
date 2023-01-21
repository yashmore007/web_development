let alpha = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let alpha_capital = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
let funny_pass_array=[ "password","ineedapassword","changem", "secret", "iamforgetful", "newpassword", "IamACompleteIdiot", "nothing", "nothingagain", "iforgot", "whydoialwaysforget", "qwer", "asdf", "alpls" ,"user","YouWontGuessThisOne", "PasswordShmashword", "youmoron","doubleclick", "iamnottellingyoumypw", "masterpassword", "yetanotherpassword","nomorepasswords", "password123","myonlypassword", "cantremember", "dontaskdonttell","memorysucks", "earlyalzheimers","passwordforoldpeople"]
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
//arrays to strore a passward 
let Strong_pass_array = [];
let super_strong_pass_array=[];
let weak_pass_array=[];

//fuction to create a strong passward
const Strong_pass = () => {
  for (let i = 0; i < 4; i++) {
    let pass = alpha[Math.floor(0 + (27 * Math.random()))]
    Strong_pass_array.push(pass);
  }
  for (let i = 0; i < 4; i++) {
    let pass = alpha_capital[Math.floor(0 + (27 * Math.random()))]
    Strong_pass_array.push(pass);
  }
  for (let i = 0; i < 4; i++) {
    let pass = num[Math.floor(0 + (11 * Math.random()))]
    Strong_pass_array.push(pass);
  }
  for (let i = 0; i < 4; i++) {
    let pass = special[Math.floor(0 + (13 * Math.random()))]
    Strong_pass_array.push(pass);
  }
}
//function to create a super strong passward
const super_strong_pass=()=>{
  for (let i = 0; i < 5; i++) {
    let pass = alpha[Math.floor(0 + (27 * Math.random()))]
    super_strong_pass_array.push(pass);
  }
  for (let i = 0; i < 5; i++) {
    let pass = alpha_capital[Math.floor(0 + (27 * Math.random()))]
    super_strong_pass_array.push(pass);
  }
  for (let i = 0; i < 5; i++) {
    let pass = num[Math.floor(0 + (11 * Math.random()))]
    super_strong_pass_array.push(pass);
  }
  for (let i = 0; i < 5; i++) {
    let pass = special[Math.floor(0 + (13 * Math.random()))]
    super_strong_pass_array.push(pass);
  }
}

//function to create a weak passward
const weak_pass=()=>{
  for (let i = 0; i < 4; i++) {
    let pass = alpha[Math.floor(0 + (27 * Math.random()))]
    weak_pass_array.push(pass);
  }
  for (let i = 0; i < 4; i++) {
    let pass = num[Math.floor(0 + (11 * Math.random()))]
    weak_pass_array.push(pass);
  }
}

// function to create a funny passward
const funny_pass=()=>{
 let random_guess= Math.floor(0 + (31 * Math.random()))
  let funny=funny_pass_array[random_guess]
  return funny;
  
}
//code for first strong pasward method
Strong_pass();
shuffle(Strong_pass_array);
let Strong_pass_text = Strong_pass_array.toString();
let new_array_strong = Strong_pass_text.replaceAll(",", "");
console.log("strong passward is:   "+new_array_strong);

//code for super strong method

super_strong_pass();
shuffle(super_strong_pass_array);
let super_strong_pass_text=super_strong_pass_array.toString();
let super_strong_pass_string=super_strong_pass_text.replaceAll(",","");
console.log(" super strong passsward is :  "+super_strong_pass_string);

//code for weak passward 

weak_pass();
shuffle(weak_pass_array);
let waek_pass_text=weak_pass_array.toString();
let weak_pass_string=waek_pass_text.replaceAll(",","");
console.log("weak passward is :  "+weak_pass_string);

//code for funny passward

let funny_pass_text=funny_pass();
console.log("funny passward is :   "+funny_pass_text);

