import request from '../utils/request';

const fetch = function () {
  return request('/api/subjects');
}

export default { fetch }
