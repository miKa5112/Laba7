var n = prompt('Please enter your age', 0);
if (n%2 == 0) {
    alert('The number is even!')
    } else {
    alert('The number is odd')
    }

var i1 = 1
var sum = 0
while (i1 < 11) {
    sum += i1
    i1 += 1
}

var i2 = 1;
var dob = 1;
while (i2 < 11) {
    dob = dob * i2
    i2 += 1
}

var nRyad = prompt('Будь ласка введіть n ряду', 0);
var odin = 2;
var kont = String(1);

if (nRyad == 1){
    true
} else{
    while (nRyad != 1) {
        kont += String(odin)
        nRyad = nRyad - 1
        odin = odin + 1
    }
}
document.getElementById("nRyad").textContent = kont;
document.getElementById("suma").textContent = sum;
document.getElementById("dob").textContent = dob;