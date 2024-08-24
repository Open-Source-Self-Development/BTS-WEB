import axios from "axios";
import appConfig from "@/configs/app.config";
import { REQUEST_HEADER_AUTH_KEY } from "@/constants/api.constant";
import { PERSIST_STORE_NAME } from "@/constants/app.constant";
import deepParseJson from "@/utils/deepParseJson";
import store from "@/store";
import { onSignOutSuccess } from "../store/auth/sessionSlice";
import showToast from "@/utils/toast";
import { ERROR } from "@/constants/message.constant";

const unauthorizedCode = [401];

const BaseService = axios.create({
  timeout: 60000, // 1 min, 60 second
  baseURL: appConfig.apiPrefix,
});

BaseService.interceptors.request.use(
  (config) => {
    const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME);
    const persistData = deepParseJson(rawPersistData);

    const accessToken = persistData.auth.session.token;
    if (accessToken) {
      config.headers[REQUEST_HEADER_AUTH_KEY] = `${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BaseService.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    const { response } = error;

    if (response && unauthorizedCode.includes(response.status)) {
      store.dispatch(onSignOutSuccess());
    }
    if (response) {
      // Handle errors based on status codes
      if (unauthorizedCode.includes(response.status)) {
        // store.dispatch(onSignOutSuccess());
        // showToast(ERROR, "Unauthorized access - signing out...");
        // toast.error("Unauthorized access - signing out...");
      } else {
        // showToast(ERROR,`${response.statusText}`)
        // toast.error(`Error ${response.status}: ${response.statusText}`);
      }
    } else {
      showToast(
        ERROR,
        "Network error or server is down"
      );
    }

    return Promise.reject(response ? response.data : error.message);
  }
);

export default BaseService;
