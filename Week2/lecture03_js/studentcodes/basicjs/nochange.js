// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
  //add your code here
  const french = document.getElementById("french").value;
  const coffee = document.getElementById("coffee").value;
  const tea = document.getElementById("tea").value;

  // Compute the cost
  totalCost = 3.49 * french + 2.5 * coffee + 1.5 * tea;
  document.getElementById("cost").value = totalCost;
} //* end of computeCost

const check = (e) => {
  if (e.value < 0) {
    alert("Invalid input");
    e.value = "";
    e.focus();
    return;
  }
};
