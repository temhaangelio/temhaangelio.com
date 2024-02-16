import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main attribute="class">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
