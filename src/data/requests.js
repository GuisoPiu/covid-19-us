import axios from 'axios';
import parsers from './parsers';

async function usStats() {
    const response = await axios.get('https://covidtracking.com/api/v1/states/current.json')

return parsers.usStats(response.data)
};

export default {
    usStats,
};