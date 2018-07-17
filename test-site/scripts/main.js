var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/web-projects/test-site/images/doggo.png') {
      myImage.setAttribute ('src','/web-projects/test-site/images/doggo2.png');
    } else {
      myImage.setAttribute ('src','/web-projects/test-site/images/doggo.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'dont be like karen, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Dont be a Karen, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}