import axios from "axios";

export const getChannels = () => {
  const url = `https://epg.domru.ru/channel/list?domain=ekat&digit=1`;
  return axios.get(url)
    .then(response => response.data)
    .catch(console.log)
}

export const getProgram = xvid => {
  const today = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
  const url = `https://epg.domru.ru/program/list?domain=ekat&digit=1&date_from=${today}+00%3A00%3A00&date_to=${today}+23%3A59%3A59&xvid=${xvid}`;
  // const url = `https://epg.domru.ru/program/list?domain=ekat&digit=1&date_from=${today}+00%3A00%3A00&date_to=${today}+23%3A59%3A59&xvid[0]=1&xvid[1]=2&xvid[2]=479`;

  return axios.get(url)
    .then(console.log)
    .catch(console.log)
}