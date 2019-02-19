import ExaminationsService from '../services/examinations'
import * as _ from 'lodash'

export default {

  namespace: 'examinations',

  state: [],

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const res = yield call(ExaminationsService.fetch)
      yield put({ type: 'save', payload: { ..._.get(res, ['data', 'data']) } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
}
