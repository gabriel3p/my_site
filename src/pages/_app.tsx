import type { AppProps } from 'next/app'
import Script from 'next/script';
import GlobalStyles from '../styles/global'
import { useRouter } from 'next/router'

import { ThemeProvider } from 'styled-components';
import theme from '../styles/themes/theme';


const App: React.FC<AppProps> = ({ Component, pageProps }) => {


  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />

        {/* Arquivos de JS do Bootstrap */}
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />

    </ThemeProvider>
  )
}

export default App;
