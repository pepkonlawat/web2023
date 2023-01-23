// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
  //add your code here
  var french = document.getElementById("french").value;
  var coffee = document.getElementById("coffee").value;
  var tea = document.getElementById("tea").value;
  if (
    (french > 5 || french < 0) &&
    (coffee > 5 || tea < 0) &&
    (tea > 5 || tea < 0)
  ) {
    [french, coffee, tea] = [0, 0, 0];
  }
  // Compute the cost
  totalCost = french * 3.49 + coffee * 2.5 + tea * 1.5;
  document.getElementById("cost").value = totalCost;
} //* end of computeCost
