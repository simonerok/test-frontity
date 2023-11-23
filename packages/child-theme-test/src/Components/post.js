//display content and title of a POST from wp

import React from "react";
import { connect } from "frontity";
import dayjs from "dayjs";
const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  //formatted date
  const formattedDate = dayjs(post.date).format("DD MMMM YYYY");

  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <p>
        <strong>Posted {formattedDate}</strong>
      </p>
      <p>
        <strong>Author: {author.name}</strong>
      </p>

      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};
export default connect(Post);
