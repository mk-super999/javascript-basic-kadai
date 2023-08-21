const btnClk=document.getElementById('btn');
const chengetext=document.getElementById('text');
btnClk.addEventListener('click',()=>{
    setTimeout(()=>{
        chengetext.textContent='ボタンをクリックしました'
        ;},2000)});


