const rootElem = document.querySelector('.root');



const bodyElem = document.createElement('div');
const calsElem = document.createElement('div')
const elem0 = document.createElement('p');
const buttonsElem = document.createElement('div')


elem0.innerText = `0`;


bodyElem.classList.add('cals');
calsElem.classList.add('cals_scr')
buttonsElem.classList.add('buttons');



const butt = [
{id: 1, simvol: 'AC', color: 'grey'},{id:2, simvol: '+/-', color: 'grey'},{id:3, simvol: '%', color: 'grey'},{id:4, simvol: '/', color: 'orange'},
{id: 5, simvol: 7},   {id:6, simvol: 8},    {id:7, simvol: 9},  {id:8, simvol: 'X', color: 'orange'},
{id: 9, simvol: 4},   {id:10, simvol: 5},   {id:11, simvol: 6}, {id:12, simvol: '-', color: 'orange'},
{id: 13, simvol: 1},  {id:14, simvol: 2},   {id:15, simvol: 3}, {id:16, simvol: '+', color: 'orange'},
{id: 17, simvol: 0},  {id:18, simvol: '.'}, {id:19, simvol: '=', color: 'orange'}];

butt.forEach(({simvol,id, color})=>{
    const simvolElem = document.createElement('div');
     

  

    simvolElem.classList.add('btn')
       
    // simvolElem.classList.toggle = ((butt.id )) => classList.toggle('ac')) ;

   

    if(id == 1){simvolElem.classList.toggle('ac', )} else 
    if(id == 2){simvolElem.classList.toggle('plus_minus', )} else
    if(id == 3){simvolElem.classList.toggle('percent', )} else
    if(id == 4){simvolElem.classList.toggle('division', )} else
    if(id == 5){simvolElem.classList.toggle('seven')} else
    if(id == 6){simvolElem.classList.toggle('eigth')} else
    if(id == 7){simvolElem.classList.toggle('nine')} else
    if(id == 8){simvolElem.classList.toggle('myltiply',)} else
    if(id == 9){simvolElem.classList.toggle('four')} else
    if(id == 10){simvolElem.classList.toggle('five')} else
    if(id == 11){simvolElem.classList.toggle('six')} else
    if(id == 12){simvolElem.classList.toggle('minus',)} else
    if(id == 13){simvolElem.classList.toggle('one')} else
    if(id == 14){simvolElem.classList.toggle('two')} else
    if(id == 15){simvolElem.classList.toggle('three')} else
    if(id == 16){simvolElem.classList.toggle('plus',)} else
    if(id == 17){simvolElem.classList.toggle('zero')} else
    if(id == 18){simvolElem.classList.toggle('dot')} else
    if(id == 19){simvolElem.classList.toggle('equals')};

    // simvolElem.classList.add = (color) =='grey' ? 'grey' : 'orange';

    if(color == 'grey'){simvolElem.classList.toggle('bg_grey')} else
    if(color =='orange'){simvolElem.classList.toggle('bg_orange')}


    simvolElem.innerText = `${simvol}`;

    buttonsElem.append(simvolElem);
})



calsElem.append(elem0);
bodyElem.append(calsElem,  buttonsElem);
rootElem.append(bodyElem);



// const simvols = butt.map(el => el.simvol);
//   const colors = butt.map(el => el.color);

//   butt.forEach(el => {
//     const par = document.createElement('p');
//     par.classList.add(simvols[el.id - 1]);

//     if (colors[el.id - 1] !== undefined) {
//       par.classList.add(colors[el.id - 1]);
//     }

//     rootElem.append(par);
//   });

