import request from '../utils/request';

const query = function () {
  return request('/api/subjects');
}

export default { query }
