document.getElementById("donationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var amount = parseFloat(document.getElementById("amount").value);
  if (amount > 0) {
    // Here you can implement the code to handle the donation, like sending it to a server
    document.getElementById("message").innerHTML = "Thank you for your donation of $" + amount.toFixed(2) + "!";
  } else {
    document.getElementById("message").innerHTML = "Please enter a valid donation amount.";
  }
});
