"use strict";

document.getElementById("demo1").innerHTML = "<button>Click Me</button>";
document.querySelector("#demo2").innerHTML = "<p>where will this text show</p>";

let myDivs = document.querySelectorAll('div');
for(let i=0; i<myDivs.length; i++){
    myDivs[i].style.backgroundColor = "rebeccaPurple"
}
console.log(myDivs);

let dessertArray = ["Pie", "Cake", "Ice Cream", "Cookies", "Creme Brulee"];

let myButton = document.querySelector('button');
myButton.style.color = "red";
myButton.classList.add("button")
myButton.addEventListener("click",()=> {
    let addtoDiv = document.getElementById("demo3");

    let newList = document.createElement('ul')

    while(dessertArray.length > 0){
        console.log(dessertArray.length, "length");
        let randNum = Math.floor(Math.random()*dessertArray.length)
        let newListItem = document.createElement('li');
        newListItem.textContent = dessertArray[randNum]
        newList.appendChild(newListItem)
        dessertArray = dessertArray.filter((item, index) => {
            if(index !== randNum){
                return item
            }
        })
        
    }

    addtoDiv.appendChild(newList);


    let myLi = document.querySelectorAll('li');
    console.log(myLi)
    for(let i = 0; i< myLi.length; i++){
        let myText = myLi[i].textContent
        myLi[i].innerHTML = myText + '<button class=delete>Delete</button>'
    }

    let myButtons = document.getElementsByClassName("delete");
    console.log(myButtons);

    for(let i=0; i<myButtons.length; i++){
        myButtons[i].addEventListener("click", ()=> {
            myButtons[i].parentElement.remove();
            if(document.querySelectorAll('li').length === 0){
                document.querySelector('ul').remove();
            }
        })
    }

})

