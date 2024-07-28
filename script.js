document.getElementById('gasolineForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const kilometers = document.getElementById('kilometers').value;
    const gasPrice = document.getElementById('gasPrice').value;
    const consumption = document.getElementById('consumption').value;
    const passengers = document.getElementById('passengers').value || 1;
    
    if (kilometers && gasPrice && consumption) {
        const litersNeeded = (kilometers / 100) * consumption;
        const totalCost = litersNeeded * gasPrice;
        const costPerPerson = totalCost / passengers;

        document.getElementById('result').innerText = 
            `Costo total de gasolina: €${totalCost.toFixed(2)}
            \nCosto por persona: €${costPerPerson.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Por favor, completa todos los campos obligatorios.';
    }
});
