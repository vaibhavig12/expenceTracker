const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && category && !isNaN(amount)) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${description}</td>
            <td>${category}</td>
            <td>${amount}</td>
        `;
        expenseList.appendChild(newRow);

        // Reset the form after adding the expense
        expenseForm.reset();
    } else {
        alert('Please fill out all fields correctly.');
    }
});
