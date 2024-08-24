import { useSelector, useDispatch } from "react-redux";
import { onSignInSuccess, onSignOutSuccess } from "@/store/auth/sessionSlice";
import appConfig from "@/configs/app.config";
import { useNavigate } from "react-router-dom";
import { setAuthority } from "@/store/auth/authoritySlice";

function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, signedIn } = useSelector((state) => state.auth.session);

  const signIn = async (values) => {
    try {
      // const resp = await apiSignIn(values);
      // if (resp.data.token) {
        dispatch(onSignInSuccess(resp.data.token));
        // dispatch(setUser({adiSoyadi:resp.data.adiSoyadi}));
        dispatch(setAuthority(resp.data.role));
        
        // swal({
        //   type: SUCCESS,
        //   title: 'TEST',
        //   text: 'TEST',
        //   onConfirm: () => {
        //     let redirectUrl = null;
        //     navigate(
        //       redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath,
        //       { replace: true }
        //     );
        //   }
        // });
        
        return {
          status: "success",
          message: "",
        };
      // }
    } catch (error) {
   
      // swal({
      //   type: ERROR,
      //   title: "TEST",
      //   text: error,
      // });

      return {
        status: "failed",
        message: error,
        statusCode: error.response ? error.response.status : 400
      };
    }
  };

  const handleSignOut = () => {
    dispatch(onSignOutSuccess());
    navigate(appConfig.unAuthenticatedEntryPath);
    window.location.reload();
  };

  const signOut = async () => {
    handleSignOut();
  };

  return {
    authenticated: token && signedIn,
    signIn,
    signOut,
  };
}


export default useAuth;
