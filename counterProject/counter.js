const DecreaseBtn = document.getElementById('DecreaseBtn');
const ResetBtn = document.getElementById('ResetBtn');
const IncreaseBtn = document.getElementById('IncreaseBtn');
const CountLabel = document.getElementById('CountLabel');
let count = 0;

DecreaseBtn.onclick = function(){
    count--; 
    CountLabel.textContent = count;
}

ResetBtn.onclick = function(){
    count = 0;
    CountLabel.textContent = count;
}


IncreaseBtn.onclick = function(){
    count++; 
    CountLabel.textContent = count;
}
