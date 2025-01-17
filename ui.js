export default class UI {
    static displayRates(rates) {
        const ratesContainer = document.getElementById('rates');
        ratesContainer.innerHTML = "";

        if (!rates) {
            ratesContainer.innerHTML = "<p>Failed to load data.</p>";
            return;
        }

        const currencies = ['CAD', 'EUR', 'GBP', 'JPY'];
        currencies.forEach(currencies => {
            const rate = rates[currency];
            if (rate) {
                const rateElement = document.createElement('p');
                rateElement.textContent = `1 USD = ${rate} ${currency}`;
                ratesContainer.appendChild(rateElement);
            }
        });
    }
}