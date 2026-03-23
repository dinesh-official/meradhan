import type { BaseResponseData } from "../../../types/base";

export type ISignupOtpVerifyResponse = BaseResponseData<{
  token: string;
}>;

export type IAuthCompleteResponse = BaseResponseData<{
  id: number;
  email: string;
  avatar: string | null;
  token: string;
}>;

export type ISignInRequestResponse = BaseResponseData<{
  id: number;
  firstName: string;
  lastName: string;
<<<<<<< HEAD
=======
  token: string;
>>>>>>> 9dd9dbd (Initial commit)
}>;

export type ISignInSendOtpResponse = BaseResponseData<{
  id: number;
  firstName: string;
  lastName: string;
  token: string;
}>;

export type IResetPasswordResponse = BaseResponseData<{
  message: string;
}>;

export type ISessionResponse = BaseResponseData<{
  id: number;
  avatar: string | null;
  userName: string;
  emailAddress: string;
  firstName: string;
  middleName: string;
  lastName: string;
  kycStatus: string;
<<<<<<< HEAD
=======
  /** KRA verification status when KRA exists for the user (e.g. VERIFIED, PENDING, DOWNLOAD_KRA). */
  kraStatus?: string | null;
>>>>>>> 9dd9dbd (Initial commit)
  isRekycUnderReview?: boolean;
  /** True when user has any KYC flow with markExpired (rekyc flow). */
  hasRekycExpiredFlow?: boolean;
}>;
