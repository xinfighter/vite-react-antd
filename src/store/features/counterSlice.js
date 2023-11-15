import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter', // 命名空间，在调用action的时候会默认的设置为action的前缀
  // 初始值
  initialState: {
    count: 1
  },
  // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    increment(state, { payload }) {
      state.count += payload // 内置了immutable
    },
    decrement(state) {
      state.count -= 1
    }
  }
})

// 导出actions
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer // 导出reducer，在创建store时使用到
