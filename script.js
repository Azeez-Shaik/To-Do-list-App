const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//starting after clicking on task
function addTask() {
  // checking the input box is empty or not
  // if it is empty we are printing write something
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    // adding rows as list after adding
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // adding cross icon in the span tag
    li.appendChild(span); // displaying the span
  }
  inputBox.value = ""; // setting empty value in input after adding
  saveData(); // calling saveData() everytime after refreshing/reloading
}

// code for click function

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // will check and perform line through
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); //if we click on span/cross it will delete the parent element
      saveData();
    }
  },
  false
);

// function where the todo app will be saved
// means it will not go after refreshing/reloading untill deleted

// saving data
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// displaying saveData() everytime in the browser

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// calling showTask()
showTask();
