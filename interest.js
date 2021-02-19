function calculateInterest(){
    let principal = document.getElementById('p').value;
    let rate = documemt.getElementById('r').value;
    let time = document.getElementById('t').value;

    let si = principal * rate * time / 100;
    document.getElementByID('interest').innerHTML = si;
}