import { ERROR, SUCCESS, UNKNOWN_ERROR } from "@/constants/message.constant";
import BaseService from "./BaseService";
import showToast from "@/utils/toast";

const ApiService = {
  fetchData(param) {
    return new Promise((resolve, reject) => {
      BaseService(param)
        .then((response) => {
          if (
            response.status === true &&
            param.method &&
            param.method.toUpperCase() !== "GET"
          ) {
            showToast(SUCCESS, response.message || "Success");
          }
          resolve(response);
        })
        .catch((errors) => {
          let errorMessage = UNKNOWN_ERROR;
          if (errors) {
            if (errors.message) {
              errorMessage = errors.message;
            } else if (errors.errors) {
              errorMessage = errors.errors.join(", ");
            }
          }
          showToast(ERROR, errorMessage);
          reject(errorMessage);
        });
    });
  },
};

export default ApiService;
