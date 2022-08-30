function validateForm() {
  const firstName = document.getElementById("inputFname").value;
  const lastName = document.getElementById("inputLname").value;
  const emailId = document.getElementById("inputEmail").value;
  const phoneNumber = document.getElementById("inputPhone").value;
  const batchNo = document.getElementById("InputBatches").value;
  const moduleNo = document.getElementById("inputModule").value;
  const check = document.getElementById("checkCondition").checked;

  let error = false;
  // Sucess
  const fSucess = document.getElementById("fSucess");
  const lSucess = document.getElementById("lSucess");
  const eSucess = document.getElementById("eSucess");
  const pSucess = document.getElementById("pSucess");
  const bSucess = document.getElementById("bSucess");
  const mSucess = document.getElementById("mSucess");
  const aSucess = document.getElementById("aSucess");

  // Erorrs
  const fError = document.getElementById("fnameError");
  const lError = document.getElementById("lnameError");
  const emailError = document.getElementById("emailError");
  const phError = document.getElementById("phError");
  const bError = document.getElementById("batchError");
  const mError = document.getElementById("moduleError");
  const aError = document.getElementById("conditionError");

  if (firstName.length < 3 || firstName == "" || firstName == null) {
    fError.style.visibility = "visible";
    fSucess.style.visibility = "hidden";
    error = true;
  } else {
    fSucess.style.visibility = "visible";
    fError.style.visibility = "hidden";
    error = false;
  }
  if (lastName.length < 3 || lastName == "" || lastName === null) {
    lError.style.visibility = "visible";
    lSucess.style.visibility = "hidden";
    error = true
  } else {
    lSucess.style.visibility = "visible";
    lError.style.visibility = "hidden";
    error = true;
  }
  if (
    emailId.includes("@") &&
    emailId.includes(".") &&
    emailId.lastIndexOf(".") <= emailId.length - 3 &&
    emailId.indexOf("@") !== 0
  ) {
    emailError.style.visibility = "hidden";
    eSucess.style.visibility = "visible";
    error = false
  } else {
    emailError.style.visibility = "visible";
    eSucess.style.visibility = "hidden";
    error = true;
  }
  if(phoneNumber.length == 10){
    pSucess.style.visibility = 'visible';
    phError.style.visibility = 'hidden';
    error = false
  }else if(phoneNumber.length < 10){
    pSucess.style.visibility = 'hidden';
    phError.innerText = `*Invalid Phone number digits are less then 10`;
    phError.style.visibility = 'visible';
    error = true
  }else if (phoneNumber.length > 10){
    phError.innerText = `*Invalid Phone number digits are more then 10`;
    phError.style.visibility = 'visible';
    pSucess.style.visibility = 'hidden';
    error = true
  }else{
    pSucess.style.visibility = 'visible';
    phError.style.visibility = 'hidden';
    error = false
  }

  // console.log(batchNo);

  if(batchNo !== ""){
    bSucess.style.visibility = 'visible';
    bError.style.visibility = 'hidden';
  }else{
    bError.style.visibility = 'visible';
    bSucess.style.visibility = 'hidden';
    error = true
  }

  if(moduleNo !== ""){
    mSucess.style.visibility = 'visible';
    mError.style.visibility = 'hidden';
  }else{
    mError.style.visibility = 'visible';
    mSucess.style.visibility = 'hidden';
    error = true
  }


  if(check){
    aSucess.style.visibility = 'visible';
    aError.style.visibility = 'hidden';
  }else{
    aSucess.style.visibility = 'hidden';
    aError.style.visibility = 'visible';
    error = true
  }

  if(error == false){
    alert('Your details have been saved succesfully! ')
  }


}
