import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/style.css'
import Layout from '../compornents/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
