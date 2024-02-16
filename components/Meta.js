import Head from "next/head";

export default function Meta(props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{props.siteTitle}</title>
      <meta name="Description" content={props.description}></meta>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://widgets.superpeer.com/widget.css"
      />
      <script
        type="text/javascript"
        src="https://widgets.superpeer.com/widget.js"
        async
      ></script>
    </Head>
  );
}
