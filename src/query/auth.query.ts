import { gql } from "@apollo/client";

export const SIGNUP_USER_QUERY = gql`
  mutation SignupUser($signupdata: CreateUserInput!) {
    signupUser(signupdata: $signupdata) {
      email
      message
      statusCode
    }
  }
`;

export const VERIFY_OTP_QUERY = gql`
  mutation VerifyOtp($verifyOtpVerifyData2: VerifyOtpInput!) {
    verifyOtp(verifyData: $verifyOtpVerifyData2) {
      message
      statusCode
      token
      user {
        email
        id
        platform
        username
        verified
      }
    }
  }
`;
