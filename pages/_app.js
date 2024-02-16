import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main
      className={`flex flex-col h-screen bg-repeat bg-cover bg-center bg-[url('/bg-1.png')]`}
    >
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
