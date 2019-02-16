import request from '../utils/request';

const query = function () {
  return request('/api/examinations');
}

export default { query }
