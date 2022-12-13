import { apiSlice } from '../api/apiSlice';
import { URL_HOME_PAGE, API_URL} from '../../Helpers/Paths'
export const authUserApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: credentials => ({
        url: API_URL.LOG_IN,
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    fetchCurrentUser: builder.query({
      query: () => '/auth/user',
      method: 'GET',
      transformResponse: response => response.data,
    }),
    // registerUser: builder.mutation({
    //   query: credentials => ({
    //     url: '/auth/register',
    //     method: 'POST',
    //     body: { ...credentials },
    //   }),
    // }),
    // restorePassword: builder.mutation({
    //   query: credentials => ({
    //     url: '/auth/restorePassword',
    //     method: 'POST',
    //     body: { ...credentials },
    //   }),
    // }),
  }),
});

export const {
  useLoginUserMutation,
  // useRegisterUserMutation,
  // useRestorePasswordMutation,
  useLogoutUserQuery,
  useFetchCurrentUserQuery,
} = authUserApi;
