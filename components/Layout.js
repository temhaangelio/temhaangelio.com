import Header from "./Header";
import Meta from "./Meta";

export default function Layout(props) {
  return (
    <main className="max-w-3xl text-lg mx-auto p-5 md:p-0">
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Header siteTitle={props.siteTitle} />
      <section>{props.children}</section>
    </main>
  );
}
