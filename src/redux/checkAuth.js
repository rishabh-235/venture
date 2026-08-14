import { checkAuthStatus as checkAuthThunk } from "./slice/authSlice";

const checkAuthStatus = () => checkAuthThunk();

export default checkAuthStatus;
