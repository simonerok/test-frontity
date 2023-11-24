//display content and title of a PAGE from wp

import React from "react";
import { connect, Global, css, styled } from "frontity";

// const Page = ({ state }) => {
//   const data = state.source.get(state.router.link);
//   const page = state.source[data.type][data.id];

//   return (
//     <div>
//       <h2>{page.title.rendered}</h2>
//       <ColoredSection
//         dangerouslySetInnerHTML={{
//           __html: page.content.rendered("wp-block-heading"),
//         }}
//       />
//       <section></section>
//     </div>
//   );
// };

//chatgpt suggestion
const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  // Use regular expression to split content based on <h1> tags
  const sections = page.content.rendered.split(/<\/?h1>/);

  return (
    <div>
      {/* <h1>{page.title.rendered}</h1> */}

      {/* Map through sections and render each one */}
      {sections.map((section, index) => (
        // Check if the index is odd before rendering ColoredSection

        <ColoredSection
          key={index}
          style={{
            backgroundColor:
              index % 4 === 1
                ? `linear-gradient(
                  0deg,
                  rgba(251, 250, 249, 1) 0%,
                  rgba(170, 186, 193, 1) 50%,
                  rgba(251, 250, 249, 1) 90%
                )`
                : "#FBFAF9", // Set background color based on even or odd index
          }}
          dangerouslySetInnerHTML={{
            __html: section,
          }}
        />
      ))}
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
    rgba(170, 186, 193, 0.6) 45%,
    rgba(251, 250, 249, 1) 80%
  );
`;
