import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';

// configureStore创建一个redux数据
export default configureStore({
  reducer: {
    counter: counterSlice
  }
});
