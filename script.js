const getTotalBtn = document.getElementById("getTotal");

getTotalBtn.addEventListener("click", function () {
  const prices = document.querySelectorAll(".price");
  let sum = 0;
  prices.forEach((priceCell) => {
    sum += parseInt(priceCell.textContent);
  });

  // ✅ यह line Cypress test pass करने के लिए जरूरी है
  document.getElementById("ans").textContent = sum;
});


