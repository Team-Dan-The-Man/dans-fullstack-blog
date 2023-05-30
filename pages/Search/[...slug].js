import { Fragment } from "react";
import SearchBlogs from '../../components/search/Search'

function SearchPostPage() {
  return (
    <Fragment>
      <h1>This page shows the posts/blogs you searched for</h1>
      <SearchBlogs />
    </Fragment>
  );
}

export default SearchPostPage;