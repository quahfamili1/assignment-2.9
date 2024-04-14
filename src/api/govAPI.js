import axios from "axios";

/*
  Base URL of the backend server 
*/
const BASE_URL = "https://data.gov.sg/api/action/datastore_search";
const govAPI = axios.create({ baseURL: BASE_URL });

export default govAPI;
