//display content and title of a PAGE from wp

import React from "react";
import { connect, Global, css, styled } from "frontity";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <div>
      <h2>{page.title.rendered}</h2>
      <ColoredSection
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </div>
  );
};
export default connect(Page);
const ColoredSection = styled.section`
  max-width: auto;
  background: rgb(251, 250, 249);
  background: linear-gradient(
    0deg,
    rgba(251, 250, 249, 1) 0%,
    rgba(170, 186, 193, 1) 50%,
    rgba(251, 250, 249, 1) 100%
  );
`;
