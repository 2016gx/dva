import request from '../utils/request';

const fetch = function (data) {
  console.log('data', data)
  return request('/api/subjects');
}

export default { fetch }
