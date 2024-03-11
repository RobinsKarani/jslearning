
const RollBtn = document.getElementById('RollBtn');
let Label1 = document.getElementById('label1');
let Label2 = document.getElementById('label2');
let Label3 = document.getElementById('label3');
const min = 1;
const max = 6;
let RandomNumber1;
let RandomNumber2;
let RandomNumber3;

RollBtn.onclick = function(){
    RandomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
    RandomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    RandomNumber3 = Math.floor(Math.random() * (max - min + 1)) + min;
    Label1.textContent = RandomNumber1;
    Label2.textContent = RandomNumber2;
    Label3.textContent = RandomNumber3;
}