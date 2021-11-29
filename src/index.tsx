import React, { useState, useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import rootReducer from './redux';
import history from './history';
import PageLayout from './layout/page-layout';
import { GlobalContext } from './context';
import './style/index.less';
import './mock';
import Login from './pages/login';
import checkLogin from './utils/checkLogin';

const store = createStore(rootReducer);

function Index() {
  const [locale, setLocale] = useState();

  async function fetchLocale(ln?: string) {
    const locale = (await import(`./locale/${ln || 'zh-CN'}`)).default;
    setLocale(locale);
  }

  function fetchUserInfo() {
    axios.get('/api/user/userInfo').then(res => {
      store.dispatch({
        type: 'update-userInfo',
        payload: { userInfo: res.data },
      });
    });
  }

  useEffect(() => {
    fetchLocale();
  }, []);

  useEffect(() => {
    if (checkLogin()) {
      fetchUserInfo();
    } else {
      history.push('/user/login');
    }
  }, []);

  const contextValue = {
    locale,
  };

  return locale ? (
    <Router history={history}>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <GlobalContext.Provider value={contextValue}>
            <Switch>
              <Route path="/user/login" component={Login} />
              <Route path="/" component={PageLayout} />
            </Switch>
          </GlobalContext.Provider>
        </Provider>
      </ConfigProvider>
    </Router>
  ) : null;
}

ReactDOM.render(<Index />, document.getElementById('root'));
