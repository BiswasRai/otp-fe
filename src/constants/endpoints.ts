const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

const v1Endpoints = {
  VERIFY_OTP: "/otp/verify",
};

type Endpoint = {
  [key: string]: string;
};

const endpoints: Endpoint = {};

Object.entries(v1Endpoints).forEach(([key, value]) => {
  endpoints[key] = `${apiEndpoint}/v1${value}`;
});

export default endpoints;
