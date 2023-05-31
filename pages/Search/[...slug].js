import { Fragment } from "react";
import SearchBlogs from '../../components/search/Search'

function SearchPostPage() {
  return (
    <Fragment>
      <div className="searchBlogsContainer"></div>
      <SearchBlogs />
    </Fragment>
  );
}

export default SearchPostPage;