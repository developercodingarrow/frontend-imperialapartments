export const signUpInputs = [
  {
    id: 1,
    name: "fullName",
    type: "text",
    placeholder: "User Name",
    lable: "Name",
    validation: {
      required: "Name is required.",
    },
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "email",
    lable: "email",
    validation: {
      required: "Email is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address.",
      },
    },
  },

  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "password",
    lable: "password",
    validation: {
      required: "Password is required.",
    },
  },
];

export const otpVerifation = [
  {
    id: 1,
    name: "otp",
    type: "text",
    placeholder: "OTP",
    validation: {
      required: "OTP is required.",
    },
  },
];

export const loginInputs = [
  {
    id: 1,
    name: "email",
    type: "text",
    placeholder: "email",
    lable: "email",
    validation: {
      required: "Email is required.",
    },
  },
  {
    id: 2,
    name: "password",
    type: "text",
    placeholder: "password",
    lable: "password",
    validation: {
      required: "Password is required.",
    },
  },
  {
    id: 3,
    name: "forgot password",
    type: "link",
    linkPath: "forgot-password",
  },
];

export const ForgotPasswordInput = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "email Your Register email",
    validation: {
      required: "Email is required.",
    },
  },
];

export const newPasswordInputs = [
  {
    id: 1,
    name: "password",
    type: "password",
    placeholder: "New Password",
    lable: "password",
    validation: {
      required: "new Password is required.",
    },
  },
];
