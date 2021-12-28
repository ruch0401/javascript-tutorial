const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

spanHi.classList.add("new-class"); // adds a new class to existing classlist
spanHi.classList.remove("hi1"); // removes a class from the existing classlist
spanHi.classList.toggle("hi3"); // removes it if exists already or adds if does not exist
