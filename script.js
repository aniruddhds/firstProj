function calculate(){
    const inputEle = document.querySelector('.jsInput');

    let cost = Number(inputEle.value);

    if (cost<40) {
    cost = cost + 10;
    }

    document.querySelector('.jsTotalCost').innerHTML = `$${cost}`;
    inputEle.value='';
}

function handleCostKeydown(event){
    if (event.key === 'Enter') {
        calculate(); 
    }
}

function changeDisplay(){
    document.querySelector('.para').innerHTML="YOU ARE IN THE SYSTEM!";
}

function resetButton(){
    document.querySelector('.para').innerHTML = "WELCOME BACK TO THE NEW FRONTIER!!";
}