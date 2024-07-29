import axios from 'axios';
import { login, logout } from './slice/authSlice';

const checkAuthStatus = async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8000/api/v1/user/verifyToken', {
      withCredentials: true,
    });

    if (response.status === 200) {
      dispatch(login(response.data.data));
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      try {
        const refreshResponse = await axios.post('http://localhost:8000/api/v1/user/refreshToken', {}, {
          withCredentials: true,
        });

        if (refreshResponse.status === 200) {
          dispatch(login(refreshResponse.data.data));
        }
      } catch (refreshError) {
        console.error('Failed to refresh token:', refreshError);
        dispatch(logout());
      }
    }
    else if(error.response && error.response.status === 400){
    }
    else {
      console.error('Failed to verify token:', error.message);
      dispatch(logout());
    }
  }
};

export default checkAuthStatus;
