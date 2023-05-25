import { Fragment } from "react";
import Write from "../components/write/Write";
import { useSession } from "@supabase/auth-helpers-react";


function WritePage() {
  return (
    <Fragment>
      <Write />
    </Fragment>
  );
}

export default WritePage;
