let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
      } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = '原神怎么你了，' + myName;
  }
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '原神怎么你了，' + storedName;
}

myButton.onclick = function(){
    setUserName();
}
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/头像1.png'){
        myImage .setAttribute('src', 'images/头像2.png');
    }else{
        myImage .setAttribute('src', 'images/头像1.png');
    }
}