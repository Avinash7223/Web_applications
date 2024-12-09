function Solve(val) {
    const v = document.getElementById('res');
    const lastChar = v.value.slice(-1);
    if (val === '.' && lastChar === '.') return; // Prevent multiple dots
    v.value += val;
 }
 
 function Result() {
    const num1 = document.getElementById('res').value.replace(/x/g, '*');
    if (!num1) {
       document.getElementById('res').value = '0';
       return;
    }
    try {
       const num2 = Function(`return ${num1}`)();
       document.getElementById('res').value = num2;
    } catch {
       document.getElementById('res').value = 'Error';
    }
 }
 
 function Clear() {
    const inp = document.getElementById('res');
    inp.value = '';
 }
 
 function Back() {
    const ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
 }
 
 document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
       Solve(key);
    } else if (key === 'Enter') {
       Result();
    } else if (key === 'Backspace') {
       Back();
    } else if (key.toLowerCase() === 'c') {
       Clear();
    }
 });
 