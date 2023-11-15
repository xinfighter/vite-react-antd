import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from '@/routes'
import AntdProvider from './AntdProvider'
import store from './store'

const App = () => {
  return (
    <AntdProvider>
      <ReduxProvider store={store}>
        <BrowserRouter basename="/">
          <Routes />
        </BrowserRouter>
      </ReduxProvider>
    </AntdProvider>
  )
}

export default App
