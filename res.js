document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservationForm');
    const tablesContainer = document.getElementById('tables');

    // Simulated available tables
    const availableTables = [
        { id: 1, seats: 2 },
        { id: 2, seats: 4 },
        { id: 3, seats: 6 },
        { id: 4, seats: 2 },
        { id: 5, seats: 4 },
    ];

    // Display available tables
    availableTables.forEach(table => {
        const tableDiv = document.createElement('div');
        tableDiv.className = 'bg-gray-200 p-4 rounded-lg text-center';
        tableDiv.innerHTML = `Table ${table.id} - Seats: ${table.seats}`;
        tablesContainer.appendChild(tableDiv);
    });

    // Handle form submission
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const customerName = document.getElementById('customerName').value;
        const partySize = document.getElementById('partySize').value;
        const reservationTime = document.getElementById('reservationTime').value;

        alert(`Reservation made for ${customerName} for ${partySize} people at ${reservationTime}.`);

        // Reset the form
        reservationForm.reset();
    });
});