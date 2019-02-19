import ExaminationsService from '../services/examinations'
import * as _ from 'lodash'

export default {

  namespace: 'examinations',

  state: [],

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log('payload', payload)
      const res = yield call(ExaminationsService.fetch)
      yield put({ type: 'save', payload: { ..._.get(res, ['data', 'data']) } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(( { pathname } ) => {
        if (pathname === '/examinations') {
          dispatch({
            type: 'fetch'
          })
        }
      });
    },
  }
}
