import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link); //get fetches the url's links and we store in data var
  return (
    <>
      <p>Virker dette?? {state.router.link}</p>
      {/* add menu */}
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/booking">Booking</Link>
        <br />
        <Link link="/om-os">Om os</Link>
      </nav>
      <hr />
      <main>
        {/* get info about current link is a post or page or list using switch statement  
      the when="PROPERTY" is taken from wp as source data*/}
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPage} />
          <Post when={data.isPost} />
        </Switch>
      </main>
    </>
  );
};
export default connect(Root);
