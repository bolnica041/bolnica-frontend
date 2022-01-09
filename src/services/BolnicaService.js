import axios from "axios";

const BOLNICA_API_BASE_URL = "http://localhost:8080/bolnica";

class BolnicaService {

    getBolnica(){
        return axios.get(BOLNICA_API_BASE_URL);
    }

}

export default new BolnicaService()