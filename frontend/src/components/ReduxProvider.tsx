'use client' // runs on the browser

import {Provider} from 'react-redux' // wraps the app and makes the store available everywhere
import {store} from '@/store/store'

export default function ReduxProvider({children} : { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider> // entire app goes here as {children}
}
