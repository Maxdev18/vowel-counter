let input = document.querySelector('.input');
let submit = document.querySelector('.submit');

submit.addEventListener('click', displayAlert);

function displayAlert() {
    alert(input.value.match(/[aeiou]/gi).length);
    input.value = '';
}