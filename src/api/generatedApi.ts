import { api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    apiUsersRetrieve: build.query<
      ApiUsersRetrieveApiResponse,
      ApiUsersRetrieveApiArg
    >({
      query: () => ({ url: `/api/users/` }),
    }),
    apiUsersAuthRefreshCreate: build.mutation<
      ApiUsersAuthRefreshCreateApiResponse,
      ApiUsersAuthRefreshCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/auth/refresh/`,
        method: "POST",
        body: queryArg.tokenRefresh,
      }),
    }),
    apiUsersAuthSigninCreate: build.mutation<
      ApiUsersAuthSigninCreateApiResponse,
      ApiUsersAuthSigninCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/auth/signin/`,
        method: "POST",
        body: queryArg.mfaTokenObtainPair,
      }),
    }),
    apiUsersAuthSignupCreate: build.mutation<
      ApiUsersAuthSignupCreateApiResponse,
      ApiUsersAuthSignupCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/auth/signup/`,
        method: "POST",
        body: queryArg.user,
      }),
    }),
    apiUsersSettingsPartialUpdate: build.mutation<
      ApiUsersSettingsPartialUpdateApiResponse,
      ApiUsersSettingsPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/settings/`,
        method: "PATCH",
        body: queryArg.patchedUserSettings,
      }),
    }),
    apiUsersTotpConfirmCreate: build.mutation<
      ApiUsersTotpConfirmCreateApiResponse,
      ApiUsersTotpConfirmCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/totp/confirm/`,
        method: "POST",
        body: queryArg.totpConfirm,
      }),
    }),
    apiUsersTotpConnectCreate: build.mutation<
      ApiUsersTotpConnectCreateApiResponse,
      ApiUsersTotpConnectCreateApiArg
    >({
      query: () => ({ url: `/api/users/totp/connect/`, method: "POST" }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedApi };
export type ApiUsersRetrieveApiResponse = /** status 200  */ UserRead;
export type ApiUsersRetrieveApiArg = void;
export type ApiUsersAuthRefreshCreateApiResponse =
  /** status 200  */ TokenRefreshRead;
export type ApiUsersAuthRefreshCreateApiArg = {
  tokenRefresh: TokenRefreshWrite;
};
export type ApiUsersAuthSigninCreateApiResponse =
  /** status 200  */ TokenObtainPair;
export type ApiUsersAuthSigninCreateApiArg = {
  mfaTokenObtainPair: MfaTokenObtainPair;
};
export type ApiUsersAuthSignupCreateApiResponse = /** status 201  */ UserRead;
export type ApiUsersAuthSignupCreateApiArg = {
  user: UserWrite;
};
export type ApiUsersSettingsPartialUpdateApiResponse =
  /** status 200  */ UserSettings;
export type ApiUsersSettingsPartialUpdateApiArg = {
  patchedUserSettings: PatchedUserSettings;
};
export type ApiUsersTotpConfirmCreateApiResponse = unknown;
export type ApiUsersTotpConfirmCreateApiArg = {
  totpConfirm: TotpConfirm;
};
export type ApiUsersTotpConnectCreateApiResponse = /** status 200  */ TotpSetup;
export type ApiUsersTotpConnectCreateApiArg = void;
export type User = {
  username: string;
};
export type UserRead = {
  id: string;
  username: string;
};
export type UserWrite = {
  username: string;
  password: string;
};
export type ErrorResponse = {
  status_code: number;
  error: string;
  message: string;
  details: {
    [key: string]: string[];
  };
};
export type TokenRefresh = {};
export type TokenRefreshRead = {
  access: string;
};
export type TokenRefreshWrite = {
  refresh: string;
};
export type TokenObtainPair = {
  access: string;
  refresh: string;
};
export type MfaTokenObtainPair = {
  username: string;
  password: string;
  /** Code for MFA and unblock */
  code?: string;
  remember_device?: boolean;
  /** Secure fingerprint */
  device_id: string;
};
export type MfaTypeEnum = "sms" | "totp";
export type UserSettings = {
  mfa_type?: MfaTypeEnum;
};
export type PatchedUserSettings = {
  mfa_type?: MfaTypeEnum;
};
export type TotpConfirm = {
  code: string;
};
export type TotpSetup = {
  otp_uri: string;
  qr_code: string;
};
export const {
  useApiUsersRetrieveQuery,
  useApiUsersAuthRefreshCreateMutation,
  useApiUsersAuthSigninCreateMutation,
  useApiUsersAuthSignupCreateMutation,
  useApiUsersSettingsPartialUpdateMutation,
  useApiUsersTotpConfirmCreateMutation,
  useApiUsersTotpConnectCreateMutation,
} = injectedRtkApi;
