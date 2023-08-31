
const ans = document.getElementById("ans"),
  checker = document.getElementById("checker"),
  sp = document.getElementById("sp"),
  btn1 = document.getElementById("btn"),
  btn2 = document.getElementById("btn2")

const arr = [
  `sufyan`,
  `safia`,
  `hussain`,
  `zaid`,
  `waleed`,
  `salman`,
  `shagufta`,
  `ertugrul`,
  `ahmed`,
  `maria`,
  `saleem`,
  `kaleem`,
  `nadeem`,
  `naeem`,
  `talha`,
  `talal`,
  `zakir`,
  `nayan`,
  `moin`,
  `zain`,
  `ayesha`,
  `muhammad`,
  `aaban`,
  `abbas`,
  `aadil`,
  `aabirah`,
  `aabid`,
  `fatima`,
  `aariz`,
  `aadam`,
  `aalim`,
  `ayaan`,
  `arham`,
  `aamir`,
  `hamza`,
  `aalam`,
  `inaya`,
  `sana`,
  `aafiya`,
  `bilal`,
  `umar`

]
let ran;

let vanish = () => {
  setTimeout(() => {
    ans.innerHTML = ""
  }, 3000);
}

let newSpan;


const tell = () => {



  // btn2.disabled = false;
  // btn2.style.backgroundColor = "black"
  // btn2.style.color = "white"

  btn1.disabled = true;
  btn1.style.backgroundColor = 'rgb(48, 48, 48)'




  const b = Math.floor(Math.random() * arr.length)
  ran = arr[b]
  ans.innerHTML = "Please type something in the box to match the words"
  console.log(ran)

  vanish()


  let newSpan;
  for (let i = 1; i <= ran.length; i++) {
    newSpan = document.createElement("span");

    sp.appendChild(newSpan);


    const newListItem = document.createElement("li");
    newListItem.id = `span${i}`
    newSpan.appendChild(newListItem);

  }


  val()
}

let pr;
let pr2;
let pr3;
let pr4;
let pr5;
let pr6;
let pr7;
let pr8;
let pr9;
let newArr = []
const val = () => {
  pr = document.getElementById("span1")
  pr.innerHTML = ran[0]
  pr2 = document.getElementById("span2")
  pr2.innerHTML = ran[1]
  pr3 = document.getElementById("span3")
  pr3.innerHTML = ran[2]
  pr4 = document.getElementById("span4")
  pr4.innerHTML = ran[3]
  try {
    pr5 = document.getElementById("span5")
    pr5.innerHTML = ran[4]
  } catch (error) {
    console.log("Not find")
  }
  try {
    pr6 = document.getElementById("span6")
    pr6.innerHTML = ran[5]
  } catch (error) {
    console.log("Not find")
  }
  try {
    pr7 = document.getElementById("span7")
    pr7.innerHTML = ran[6]
  } catch (error) {
    console.log("Not find")
  }
  try {
    pr8 = document.getElementById("span8")
    pr8.innerHTML = ran[7]
  } catch (error) {
    console.log("Not find")
  }
  try {
    pr9 = document.getElementById("span9")
    pr9.innerHTML = ran[8]
  } catch (error) {
    console.log("Not find")
  }



}


let doesMatch;
let chances = 5;

const match = () => {

  const charactersToMatch = `${ran}`;
  const regexPattern = new RegExp(`[${charactersToMatch}]`, "i"); // "i" flag for case-insensitive matching
  const inputString = `${checker.value}`;
  doesMatch = regexPattern.test(inputString);

  console.log(doesMatch)

  if (!doesMatch) {
    ans.innerHTML = "No You are not Correct"
  }

  x()

  vanish()

  if (!doesMatch) {
    chances--;
    const h2 = document.getElementById("h2").innerHTML = `you have ${chances} Chances Left`
  }

  if (chances == 0) {
    btn2.disabled = true;
    btn2.style.backgroundColor = 'rgb(48, 48, 48)'
    refreshButton.style.display = "block"
    btn3.style.display = "block"
  }

  result()
  resultWon()
  win()
  ri()
  checker.value = ""
  checker.focus()

}

let p2 = document.getElementById("p2")
let arr3 = []
const ri = () => {
  arr3.push(` ${checker.value}`)
  p2.innerHTML = arr3
}




const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function () {
  location.reload(); // Reload the page
});

refreshButton.style.display = "none"

const win = () => {
  if (newArr.length == ran.length) {
    refreshButton.style.display = "block"
    btn2.disabled = true
    btn2.style.backgroundColor = 'rgb(48, 48, 48)'
  }
}

const x = () => {


  let see = document.getElementById("span1")
  if (checker.value == span1.innerHTML) {
    see.style.display = "block"
  }

  let see2 = document.getElementById("span2")
  if (checker.value == span2.innerHTML) {
    see2.style.display = "block"
  }
  let see3 = document.getElementById("span3")
  if (checker.value == span3.innerHTML) {
    see3.style.display = "block"
  }
  try {
    let see4 = document.getElementById("span4")
    if (checker.value == span4.innerHTML) {
      see4.style.display = "block"
    }
  } catch (error) {
    console.log("No")
  }
  try {
    let see5 = document.getElementById("span5")
    if (checker.value == span5.innerHTML) {
      see5.style.display = "block"
    }
  } catch (error) {
    console.log("No")
  }
  try {
    let see6 = document.getElementById("span6")
    if (checker.value == span6.innerHTML) {
      see6.style.display = "block"
    }
  } catch (error) {
    console.log("No")
  }
  try {
    let see7 = document.getElementById("span7")
    if (checker.value == span7.innerHTML) {
      see7.style.display = "block"
    }
  } catch (error) {
    console.log("No")
  }
  try {

    let see8 = document.getElementById("span8")
    if (checker.value == span8.innerHTML) {
      see8.style.display = "block"
    }
  } catch (error) {
    console.log("No")
  }
  try {
    let see9 = document.getElementById("span9")
    if (checker.value == span9.innerHTML) {
      see9.style.display = "block"
    }
  } catch (error) {
    console.log("No")
  }

  if (checker.value == span1.innerHTML) {
    newArr.push(`${span1.innerHTML}`)
  }
  if (checker.value == span2.innerHTML) {
    newArr.push(`${span2.innerHTML}`)
  }
  if (checker.value == span3.innerHTML) {
    newArr.push(`${span3.innerHTML}`)
  }
  if (checker.value == span4.innerHTML) {
    newArr.push(`${span4.innerHTML}`)
  }
  try {
    if (checker.value == span5.innerHTML) {
      newArr.push(`${span5.innerHTML}`)
    }
  } catch (error) {
    console.log("Not Find")
  }
  try {
    if (checker.value == span6.innerHTML) {
      newArr.push(`${span6.innerHTML}`)
    }
  } catch (error) {
    console.log("Not Find")
  }
  try {
    if (checker.value == span7.innerHTML) {
      newArr.push(`${span7.innerHTML}`)
    }
  } catch (error) {
    console.log("Not Find")
  }
  try {
    if (checker.value == span8.innerHTML) {
      newArr.push(`${span8.innerHTML}`)
    }
  } catch (error) {
    console.log("Not Find")
  }
  try {
    if (checker.value == span9.innerHTML) {
      newArr.push(`${span9.innerHTML}`)
    }
  } catch (error) {
    console.log("Not Find")
  }



}


const show = () => {
  ans.innerHTML = ran
  vanish()
}
const btn3 = document.getElementById("btn3")
btn3.style.display = "none"

const p = document.getElementById("p")
const result = () => {
  if (chances == 0) {
    popup.style.display = "block"
    p.innerHTML = "You are Lose"
  }
}


const closePopupButton = document.getElementById("closePopupButton");
const popup = document.getElementById("popup");



// Close the popup when the close button is clicked
closePopupButton.addEventListener("click", function () {
  popup.style.display = "none";
});

// Close the popup when clicking outside the popup content
window.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

const resultWon = () => {
  if (newArr.length == ran.length) {
    popup.style.display = "block"
    p.innerHTML = "You are Winner"
  }
}

