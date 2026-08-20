import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../redux/slice/authSlice";
import SocialLoginButtons from "../../components/ui/SocialLoginButtons";
import AuthForm from "../../components/ui/AuthForm";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const resultAction = await dispatch(loginUserThunk(formData));

      if (loginUserThunk.fulfilled.match(resultAction)) {
        setIsLoggedIn(true);
      } else {
        setErrors({
          password: resultAction.payload || "Login failed. Please try again.",
        });
      }
    } catch (error) {
      setErrors({
        password: "Login failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    window.location.href = `${
      process.env.REACT_APP_AUTH_BASE_URL || "http://localhost:8000"
    }/auth/${provider}`;
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome back!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            New to VentureList?{" "}
            <a
              href="/signup"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Sign up here
            </a>
          </p>
        </div>

        <div className="space-y-6">
          <SocialLoginButtons onSocialLogin={handleSocialLogin} />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          <AuthForm
            formData={formData}
            errors={errors}
            isLoading={isLoading}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            submitText="Sign In"
            fields={[
              {
                name: "email",
                type: "email",
                label: "Email Address",
                required: true,
              },
              {
                name: "password",
                type: "password",
                label: "Password",
                required: true,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
