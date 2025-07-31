const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach((cell) => {
    const value = parseFloat(cell.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  const table = document.querySelector("table");

  // Remove previous total row if already added (to avoid duplication)
  const existingTotalRow = document.getElementById("totalRow");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  const newRow = document.createElement("tr");
  newRow.id = "totalRow"; // to identify and remove later if needed

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: ₹${total}`;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


