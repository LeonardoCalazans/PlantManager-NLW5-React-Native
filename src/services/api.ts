import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/KallDrayck/PlantManager-NLW5-React-Native'
})

export default api

// baseURL: 'https://my-json-server.typicode.com/KallDrayck/PlantManager-NLW5-React-Native'

// baseURL: 'http://192.168.1.6:3333'
// json-server ./src/services/server.json --host 192.168.1.6 --port 3333 --delay 700