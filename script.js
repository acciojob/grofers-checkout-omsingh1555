// Select the button and add an event listener
document.getElementById("getSumBtn").addEventListener("click", function() {
  // Select all elements with the class 'price'
  const prices = document.querySelectorAll('.price');
  let total = 0;

  // Loop through each price element, parse the value, and sum it
  prices.forEach((cell) => {
    const value = parseFloat(cell.textContent); // Convert text to a number
    if (!isNaN(value)) { // Check if the value is a valid number
      total += value; // Add to total
    }
  });

  // Select the table to append the total row
  const table = document.querySelector("table");
  
  // Remove any existing total row to avoid duplication
  const existingTotalRow = document.getElementById("totalRow");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row for the total
  const newRow = document.createElement("tr");
  newRow.id = "totalRow"; // Set an ID for the new row

  // Create a cell for the total price
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // Make the cell span two columns
  totalCell.style.fontWeight = "bold"; // Make the text bold
  totalCell.textContent = `Total Price: ₹${total}`; // Set the total text

  // Append the total cell to the new row and the row to the table
  newRow.appendChild(totalCell);
  table.appendChild(newRow);
});


