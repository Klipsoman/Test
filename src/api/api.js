import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.binance.com'
})

export const getGlassSymbolApi = async (symbol) => {
    return instance.get(`api/v3/depth?symbol=${symbol}&limit=500`)
}
