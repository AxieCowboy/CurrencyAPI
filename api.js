import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

const API_URL = 'https://currencyapi-net.p.rapidapi.com/rates?output=JSON&base=USD';
const API_HEADERS = {
    'x-rapidapi-key': 'YOUR_API_KEY', // Replace with your key
    'x-rapidapi-host': 'currencyapi-net.p.rapidapi.com'
};

export default class CurrencyAPI {
    static async fetchRates() {
        try {
            const response = await axios.get(API_URL, { headers: API_HEADERS});
            return response.data.rates;
        } catch (error) {
            console.error("Error fetching data", error);
            return null;
        }
    }
}