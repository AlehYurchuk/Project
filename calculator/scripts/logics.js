let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];


const out = document.querySelector('.cals_scr p')

function clearAll (){
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}


document.querySelector('.ac').addEventListener = clearAll;



document.querySelector('.buttons').addEventListener = (event) =>{
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    elem0.textContent = '';

    out.textContent = '';
    const key = event.target.textContent;

    if(digit.includes(key)){
        a += key;
        console.log(a, b, sign);
        elem0.textContent = a ;
    }
    if(action.includes(key)){
        sign += key;
        console.log(a, b, sign);
        elem0.textContent = a ;
    }
};