"use strict";
const prefix = "";
module.exports = {
  EXPIRES: 86400,
  PREFIX: prefix,
  JWT_SECRET_KEY: "Tradingo",
  MailTemplate: {
    Register: 1,
    ForgotPassword: 2,
    AdminForgotPassword: 10,
    AdminRegister: 11
  },
  AUTH_URL: [
    prefix + "/adminAuthenticate",
    prefix + "/forgotPassword",
    prefix + "/"
  ],
  CROS_OPTIONS: {
    origin: [
      "http://localhost:3000"
    ],
    allowedHeaders: [
      "Content-Type",
      "Access-Control-Allow-Origin",
      "Authorization",
      "ud",
      "X-Requested-With",
      "Access-Control-Allow-Credentials",
      "Access-Control-Max-Age",
      "Access-Control"
    ],
    EXPOSEDHEADERS: ["Authorization"],
    ALLOWEDMETHODS: ["GET,POST"],
    credentials: true
  },
  isDefault: true
};
