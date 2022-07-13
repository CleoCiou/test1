import "../styles/globals.scss";
import "../styles/blog.css";
import "../styles/common.css";
import "../styles/index.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
