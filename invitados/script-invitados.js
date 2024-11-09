const tablesContainer = document.getElementById("tables-container");

// Cargar el estado de los asientos desde localStorage
let seatingData = JSON.parse(localStorage.getItem("seatingData")) || {};

// Crear 15 mesas con 8 sillas cada una
for (let tableNum = 1; tableNum <= 15; tableNum++) {
    const tableDiv = document.createElement("div");
    tableDiv.classList.add("table");
    tableDiv.innerHTML = `<h2>Mesa ${tableNum}</h2>`;
    
    const seatGrid = document.createElement("div");
    seatGrid.classList.add("seat-grid");

    for (let seatNum = 1; seatNum <= 8; seatNum++) {
        const seatId = `table${tableNum}-seat${seatNum}`;
        const seatDiv = document.createElement("div");
        seatDiv.classList.add("seat");

        // Comprobar si el asiento está ocupado y mostrar el nombre del ocupante
        if (seatingData[seatId]) {
            seatDiv.classList.add("occupied");
            seatDiv.textContent = seatingData[seatId].name;
        } else {
            seatDiv.textContent = seatNum; // Mostrar número de asiento si está disponible
        }

        // Deshabilitar cualquier evento de clic en el asiento
        seatDiv.style.pointerEvents = "none";

        seatGrid.appendChild(seatDiv);
    }

    tableDiv.appendChild(seatGrid);
    tablesContainer.appendChild(tableDiv);
}
