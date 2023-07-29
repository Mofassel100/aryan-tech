import { configureStore } from '@reduxjs/toolkit'
import builderSlice from './feature/builderSlice'


const store = configureStore({
  reducer: {
    builderSlice: builderSlice
  }
})

export default store