'use client'
import { configureStore } from '@reduxjs/toolkit'



import buildSlice from './feature/buildSlice'



export const store = configureStore({
  reducer: {
    component: buildSlice
  }
})
