import CurrencyAPI from "./api.js";
import UI from "./ui.js";

document.getElementById('fetch-rates').addEventListener('click', async () => {
    const rates = await CurrencyAPI.fetchRates();
    UI.displayRates(rates);
});