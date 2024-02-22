const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName() {
  const myName = prompt ('Por favor digite seu nome.')
  if(!myName) {
    setUserName();
  } else {  
    localStorage.setItem('name', myName);
    myHeading.innerHTML = `Olá ${myName}`;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = () => {
  setUserName ()
}
