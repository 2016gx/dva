import request from '../utils/request';

const fetch = function (data) {
  return request('/api/subjects');
}

export default { fetch }
