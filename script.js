let task = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
loadData();
function updateTask() {
  if (task.value == "") {
    alert("iamsanjeev please enter some task to add");
  } else {
    let li = document.createElement("li");
    li.innerHTML = task.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  task.value = "";
}

// We add an event listener to the parent <ul> element with the list - container.
// Inside the event listener, we check if the clicked element (event.target) is an <li> element by checking its tagName.
// In JavaScript, the tagName property returns the tag name of an element in uppercase.
//  Therefore, when checking if the tag name is "LI", it needs to be in uppercase.
// If the clicked element is an <li>, we toggle the class "active" on it using classList.toggle("active").
// This way, we are delegating the click event to the parent <ul> element, and it handles the clicks on the <li> elements dynamically.

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function loadData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
