import CurrencyAPI from './api.js';
import UI from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById('fetch-rates');

    if (!fetchButton) {
        console.error("Button not found in DOM!");
        return;
    }

    fetchButton.addEventListener('click', async () => {
        console.log("Fetching rates..."); // Debugging
        const rates = await CurrencyAPI.fetchRates();
        console.log("Rates received:", rates); // Debugging
        UI.displayRates(rates);
    });
});
