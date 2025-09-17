// frontend/src/api.js
import axios from "axios";

const API = "http://localhost:8001";

export const getSummary = () => axios.get(`${API}/summary`);
export const getSalesByMonth = () => axios.get(`${API}/sales_by_month`);
export const getColumns = () => axios.get(`${API}/columns`);
export const getData = () => axios.get(`${API}/data`);
export const getHead = (n = 5) => axios.get(`${API}/head`, { params: { n } });
export const getMetadata = () => axios.get(`${API}/metadata`);
export const getMissing = () => axios.get(`${API}/missing`);
export const getUniques = () => axios.get(`${API}/uniques`);
