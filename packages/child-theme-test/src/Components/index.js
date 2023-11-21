import React from "react";
import { connect } from "frontity";

const Root = ({ state }) => {
  return (
    <>
      <p>Virker dette?? {state.router.link}</p>
    </>
  );
};
export default connect(Root);
