import axios from "axios";

export const getChannels = () => {
    const url = `https://epg.domru.ru/channel/list?domain=ekat&digit=1`;
    return axios.get(url)
        .then(response => response.data)
        .catch(console.log)
}

export const getProgram = currentChannel => {
    const date = new Date();
    const today = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`
    const tomorrow = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + (date.getDate() + 1)).slice(-2)}`
    const url = `https://epg.domru.ru/program/list?domain=ekat&digit=1&date_from=${today}+00%3A00%3A00&date_to=${tomorrow}+00%3A00%3A00&xvid[0]=${currentChannel.xvid}`;

    return axios.get(url)
        .then(response => response.data)
        .catch(console.log)
}
