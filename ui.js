class UI {
    static displayRates(rates) {
        const ratesContainer = document.getElementById("rates-container");
        if (!ratesContainer) {
            console.error("Element #rates-container not found!");
            return;
        }

        ratesContainer.innerHTML = ""; // Clear previous results

        Object.entries(rates).forEach(([currencyCode, rate]) => {
            const rateElement = document.createElement("p");
            rateElement.textContent = `1 USD = ${rate} ${currencyCode}`;
            ratesContainer.appendChild(rateElement);
        });
    }
}

export default UI;
