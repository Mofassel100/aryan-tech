import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux';
import { store } from '@/component/redux/store';



export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (

    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>



  );
}
