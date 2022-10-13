/* === Nucleus ====
API - conexão com backend e base de dados Mysql 8.1
*/

import axios from 'axios';
const api = axios.create({baseURL: "https://bucleus-backend.herokuapp.com"});

//const api = axios.create({baseURL: "http://localhost:1337"});

export default api;