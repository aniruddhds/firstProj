function calculate(){
    const inputEle = document.querySelector('.jsInput');

    let cost = inputEle.value;

    if (cost<40) {
        cost = cost + 10;
        
    }

    document.querySelector('.jsTotalCost').innerHTML = `$${cost}`;

}