import request from '../utils/request';

const fetch = function () {
  return request('/api/examinations');
}

export default { fetch }
