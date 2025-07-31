const getSumBtn = document.getElementById("getTotal");

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
  let total = 0;
  
  priceElements.forEach(item => {
    total += parseInt(item.textContent);
  });

  document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);
