import '../styles/globals.css';
import Head from 'next/head'
import Layout from '../components/globals/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Piotr Purzycki | Front-End developer | Wordpress Vue.js React.js</title>
        <meta name='description' content="Jestem Front-End developerem z Wrocławia. Posiadam duże doświadczenie w budowaniu strop opartych na wordpress. Obecnie chce rozwijać się w Vue.js i React.js" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
