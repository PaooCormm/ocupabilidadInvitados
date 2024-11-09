const tablesContainer = document.getElementById("tables-container");

// Cargar el estado de los asientos desde localStorage o inicializar vacío
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
        seatDiv.textContent = seatNum;

        // Comprobar si el asiento está ocupado en seatingData
        if (seatingData[seatId]) {
            seatDiv.classList.add("occupied");
            seatDiv.textContent = seatingData[seatId].name;
        }

        // Añadir evento para seleccionar asiento
        seatDiv.addEventListener("click", () => reserveSeat(seatId, seatDiv, tableNum, seatNum));

        seatGrid.appendChild(seatDiv);
    }

    tableDiv.appendChild(seatGrid);
    tablesContainer.appendChild(tableDiv);
}

// Función para reservar un asiento
function reserveSeat(seatId, seatDiv, tableNum, seatNum) {
    // Si el asiento ya está ocupado, no hacer nada
    if (seatDiv.classList.contains("occupied")) {
        alert("Este asiento ya está reservado.");
        return;
    }

    // Pedir el nombre del usuario que reservará el asiento
    const occupantName = prompt(`Ingrese el nombre para reservar el asiento Mesa ${tableNum}, Silla ${seatNum}:`);
    if (!occupantName) return; // Si no ingresa nombre, cancelar reserva

    // Marcar el asiento como ocupado y mostrar el nombre
    seatDiv.classList.add("occupied");
    seatDiv.textContent = occupantName;

    // Guardar los datos en seatingData y en localStorage
    seatingData[seatId] = { name: occupantName };
    localStorage.setItem("seatingData", JSON.stringify(seatingData));
}
