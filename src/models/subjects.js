import SubjectsService from '../services/subjects'
import * as _ from 'lodash'

export default {

  namespace: 'subjects',

  state: [],

  subscriptions: {
    setup({ history }) {
      return history.listen(() => {
        console.log('location changed')
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const res = yield call(SubjectsService.fetch)
      yield put({ type: 'save', payload: { ..._.get(res, ['data', 'data']) } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
}
