import { BrowserRouter } from 'react-router-dom';
import Routes from '@/routes';

import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

import AntdProvider from './AntdProvider';

const App = () => {
  return (
    <AntdProvider>
      <ReduxProvider store={store}>
        <BrowserRouter basename="/">
          <Routes />
        </BrowserRouter>
      </ReduxProvider>
    </AntdProvider>
  );
};

export default App;
