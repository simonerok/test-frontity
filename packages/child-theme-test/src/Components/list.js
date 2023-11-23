// In order to display the list of posts, let's create a new file in the components directory and call it list.js.
// This will contain a component called <List> which will first get the data for the current URL (remember that this is stored in state.router.link) using the get helper function.

import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

//LIST OF POSTS
const List = ({ state }) => {
  const data = state.source.get(state.router.link); //access routers link data source from wordpress
  return (
    <div>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]; //access a posts link and title
        return (
          <Link key={item.id} link={post.link}>
            {/* get title from post data */}
            {post.title.rendered}
            <br />
          </Link>
        );
      })}
    </div>
  );
};
export default connect(List);
