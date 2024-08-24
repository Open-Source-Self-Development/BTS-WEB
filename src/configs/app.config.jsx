import { API_URL } from "@/constants/app.constant";

const appConfig = {

    apiPrefix:API_URL, // will be taken from .env
    authenticatedEntryPath: '/',
    unAuthenticatedEntryPath: '/', // sign-in 
    tourPath: '/',
    signPath:'/sign-in'
  };
  
  export default appConfig;
