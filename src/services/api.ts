import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.6:3333'
})

export default api

// json-server ./src/services/server.json --host 192.168.1.6 --port 3333 --delay 700