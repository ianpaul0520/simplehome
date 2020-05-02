displayInfo();

function displayInfo() {
  let greetings = document.getElementById("greeting");
  let time = document.getElementById("time");

  let myName = "Christian Paul";

  let date = new Date();
  let meridiem = ["am", "pm"];

  if (date.getHours() > 12 && date.getHours() <= 20) {
    greetings.innerHTML = "Good Afternoon, " + myName;
  } else if (date.getHours() > 20 && date.getHours()) {
    greetings.innerHTML = "Good Evening, " + myName;
  } else {
    greetings.innerHTML = "Good Morning, " + myName;
  }
  console.log("Hour: " + date.getHours());

  setInterval(function () {
    if (date.getHours() > 12) {
      time.textContent = mytime() + " " + meridiem[1];
    } else if(date.getHours() < 23){
      time.textContent = mytime() + " " + meridiem[0];
    }
  }, 1000);
}

function mytime() {
  //This outputs current Time
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  let formatted = `${hour} : ${minute} : ${seconds}`;
  return formatted;
}


// Hovers
let mySection = document.getElementsByClassName("section");
let collection = [];

for (let i = 0; i <= mySection.length; i++) {
  collection.push(mySection[i]);
}
console.log(collection);
