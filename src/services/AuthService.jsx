import ApiService from './ApiService';

//example
export async function apiSignIn(data) {
  return ApiService.fetchData({
    url: '/api/auth/login',
    method: 'post',
    data
  });
}

