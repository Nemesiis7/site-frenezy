let dropdown = document.querySelector('.dropdown');
let dropdowncontent = document.querySelector('.dropdown-content');
let dropbtn = document.querySelector('.dropbtn');

dropdown.addEventListener('mouseover', () => {
  dropDownToggle();
})

dropdown.addEventListener('mouseout', () => {
  dropDownToggle();
})

let dropDownToggle = () => {
  dropdowncontent.classList.toggle('show');
}


