import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory'
import createLoading from 'dva-loading'
// 1. Initialize
const app = dva({
  history: createHistory(),
  onError (err, dispatch) {
    console.log(err)
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models/subjects').default);
app.model(require('./models/examinations').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
