// In order to display the list of posts, let's create a new file in the components directory and call it list.js.
// This will contain a component called <List> which will first get the data for the current URL (remember that this is stored in state.router.link) using the get helper function.
// File: /packages/my-first-theme/src/components/list.js

// File: /packages/my-first-theme/src/components/list.js

import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <div>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        return (
          <Link key={item.id} link={post.link}>
            {post.title.rendered}
            <br />
          </Link>
        );
      })}
    </div>
  );
};

export default connect(List);
