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
    *fetch({ payload }, { call, put, select }) {  // eslint-disable-line
      const res = yield call(SubjectsService.fetch)
      // const xxx = yield select(state => state.xxx)
      yield put({ type: 'save', payload: { ..._.get(res, ['data', 'data']) } });
      // yield put({
      //   type: 'examinations/fetch'
      // })
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
}
