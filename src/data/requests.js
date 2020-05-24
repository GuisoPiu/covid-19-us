import axios from 'axios';
import parsers from './parsers';

async function usStats() {
    const response = await axios.get('https://covidtracking.com/api/v1/us/current.json');

    return parsers.usStats(response.data)
};

async function stateStats(state) {
    const response = await axios.get('https://covidtracking.com/api/v1/states/info.json');    

    return parsers.stateStats(state, response.data);
}

async function historicUs() {
    const response = await axios.get('https://covidtracking.com/api/v1/us/daily.json');

    return parsers.historicUs(response.data);
}

async function historicState(state) {
    const response = await axios.get('https://covidtracking.com/api/v1/states/daily.json');

    return parsers.historicState(state, response.data);
}

export default {
    usStats,
    stateStats,
    historicUs,
    historicState,
};