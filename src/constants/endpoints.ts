const v1Endpoints = {
  VERIFY_OTP: "/otp/verify",
};

type Endpoint = {
  [key: string]: string;
};

const endpoints: Endpoint = {};

Object.entries(v1Endpoints).forEach(([key, value]) => {
  endpoints[key] = `http://localhost:3002/api/v1${value}`;
});

export default endpoints;
// http://localhost:3002/api/v1/otp/verify
