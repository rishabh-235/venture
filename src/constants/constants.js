// API endpoints (relative to REACT_APP_API_BASE_URL)
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/user/login",
    REGISTER: "/user/register",
    LOGOUT: "/user/logout",
    VERIFY_TOKEN: "/user/verifyToken",
    REFRESH_TOKEN: "/user/refreshToken",
  },
  USER: {
    GET_FOLLOWERS: "/user/getfollowers",
    GET_FOLLOWING: "/user/getfollowing",
    FOLLOW: "/user/follow",
    UNFOLLOW: "/user/unfollow",
    EDIT_PROFILE: "/user/editprofile",
  },
  STARTUP: {
    REGISTER: "/startup/register",
    MY_STARTUP: "/startup/mystartup",
    EDIT_PITCH: "/startup/editpitch",
    GET_BY_ID: (id) => `/startup/${id}`,
    TOP_FOUNDERS: "/startup/topfounders",
  },
  INVESTOR: {
    TOP_INVESTORS: "/investor/topinvestors",
    REGISTER: "/investor/register",
    UPDATE_INVESTOR: "/investor/updateinvestor",
  },
  PAYMENT: {
    BUY_SHARES: "/payment/buyShares",
    GET_KEY: "/payment/getkey",
  },
};

// App routes
export const ROUTES = {
  HOME: "/",
  HOME_LANDING: "/home",
  LOGIN: "/login",
  SIGNUP: "/signup",
  EXPLORE: "/explore",
  FOUNDERS: "/founder",
  TOP_INVESTORS: "/topinvestor",
  PROFILE: "/profile",
  PORTFOLIO: "/portfolio",
  FOLLOWER: "/follower",
  WATCH: "/watch",
  CASH: "/cash",
  DOCS: "/docs",
  SETTINGS: "/settings",
  PUBLIC_PROFILE: "/settings/public_profile",
  INVESTOR_INFO: "/settings/investor_information",
  RAISE_MONEY: "/register_startup",
  PITCH: "/pitch",
  NOT_FOUND: "*",
};

// Form validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  EMAIL_INVALID: "Please enter a valid email address",
  PASSWORD_MIN_LENGTH: "Password must be at least 8 characters",
  PASSWORDS_DONT_MATCH: "Passwords do not match",
  PHONE_INVALID: "Please enter a valid phone number",
};

// API response messages
export const API_MESSAGES = {
  LOGIN_SUCCESS: "User Logged In successfully",
  REGISTER_SUCCESS: "User registered successfully",
  LOGOUT_SUCCESS: "User logged out successfully",
  ERROR_GENERIC: "Something went wrong. Please try again.",
};

// Local storage keys
export const STORAGE_KEYS = {
  TOKEN: "token",
  USER_DATA: "userData",
  THEME: "theme",
};

// Social login providers
export const SOCIAL_PROVIDERS = {
  GOOGLE: "google",
  GITHUB: "github",
  LINKEDIN: "linkedin",
  FACEBOOK: "facebook",
};

// File upload constraints
export const FILE_CONSTRAINTS = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ["image/jpeg", "image/png", "image/webp"],
  ALLOWED_EXTENSIONS: [".jpg", ".jpeg", ".png", ".webp"],
};

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};

// Theme options
export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};
