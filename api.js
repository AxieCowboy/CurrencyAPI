const API_URL = 'https://currencyapi-net.p.rapidapi.com/rates?output=JSON&base=USD';
const API_HEADERS = {
    'x-rapidapi-key': '3542b5b3a5mshdc73098d409f016p13c39djsn8ccf8f09919e',
    'x-rapidapi-host': 'currencyapi-net.p.rapidapi.com'
};

class CurrencyAPI {
    static async fetchRates() {
        try {
            console.log("Calling API..."); // Debugging
            const response = await window.axios.get(API_URL, { headers: API_HEADERS });
            console.log("API Response:", response.data); // Debugging
            return response.data.rates;
        } catch (error) {
            console.error("Error fetching currency data:", error);
            return null;
        }
    }
}

export default CurrencyAPI;
