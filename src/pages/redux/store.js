import { configureStore } from '@reduxjs/toolkit'

import builderSlice from './feature/builderSlice'


const store = configureStore({
  reducer: {
    builder: builderSlice
  }
})

export default store