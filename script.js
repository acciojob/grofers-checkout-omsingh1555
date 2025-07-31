window.addEventListener("DOMContentLoaded", function () {
  const priceCells = document.querySelectorAll(".prices");
  let total = 0;

  priceCells.forEach((cell) => {
    total += Number(cell.textContent);
  });

  // Set answer in <h1 id="ans">
  document.getElementById("ans").textContent = total;

  // Create new row for total in the table
  const table = document.getElementById("cart");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2; // Assuming 2 columns (Item and Price)
  totalCell.textContent = total;
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
});

