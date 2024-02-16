import Header from "./Header";
import Meta from "./Meta";

export default function Layout(props) {
  return (
    <section className="max-w-5xl mx-auto p-5 md:p-0">
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Header siteTitle={props.siteTitle} />
      <div>{props.children}</div>
    </section>
  );
}
