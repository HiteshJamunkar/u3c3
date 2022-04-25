// Store the wallet amount to your local storage with key "amount"


let wallet = document.getElementById("wallet");
let amount = localStorage.getItem("amount") || 0;
console.log(amount);
wallet.innerText = amount;

function addwallet() {
  let amount1 = document.getElementById("amount").value;
  amount = parseInt(amount) + parseInt(amount1);
  localStorage.setItem("amount", amount);
  wallet.innerText = amount;
  amount = null;
}