const userList = document.querySelector('.names-list');
const listInput = document.querySelector('.list-input');
const addListBtn = document.querySelector('.add-list-btn');

addListBtn.addEventListener('click', function() {
    // create li out of thin air
    const newLI = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);

    // add value to new li
    newLI.appendChild(liContent);

    // add this new li to existing list
    userList.appendChild(newLI);
});