import { Fragment } from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";

function Layout(props: any) {
  return (
    <Fragment>
      <Topbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
export default Layout;