import axios from "axios";

const CALLLOG_API_BASE_URL = "https://aircall-job.herokuapp.com/activities";

class callLogClass {
  getAllCalls() {
    return axios.get(CALLLOG_API_BASE_URL);
  }

  getCallById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
  }
  updateEmployee(call, id) {
    return axios.post(EMPLOYEE_API_BASE_URL + "/" + id, call);
  }
}

export default new callLogClass();
