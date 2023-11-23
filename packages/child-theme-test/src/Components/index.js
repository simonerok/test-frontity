import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link); //get fetches the url's links and we store in data var
  return (
    <>
      {/* add global styling */}
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: DM-Serif-Text, Forum, serif;
          }
        `}
      />

      {/* add menu */}
      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <HeaderContent>
          <Link link="/">Fodklinik Nythaab</Link>
          <Menu>
            <Link link="/behandlinger">Behandlinger</Link>
            <Link link="/booking">Booking</Link>

            <Link link="/om-os">Om os</Link>
          </Menu>
        </HeaderContent>
      </Header>
      <hr />
      <Main>
        {/* get info about current link is a post or page or list using switch statement  
      the when="PROPERTY" is taken from wp as source data*/}
        <Switch>
          <List when={data.isArchive} />
          <Page when={data.isPage} />
          <Post when={data.isPost} />
        </Switch>
      </Main>
    </>
  );
};
export default connect(Root);

const Header = styled.header`
  background-color: #fbfaf9;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${(props) =>
    props.isPostType
      ? props.isPage
        ? "lightsteelblue"
        : "lightseagreen"
      : "maroon"};
`;

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
  display: flex;
  flex-direction: row;
`;
const Main = styled.main`
  max-width: 1000px;
  padding: 1em;
  margin: auto;
  background-color: #fbfaf9;
  img {
    max-width: 100%;
  }
  h1 {
    font-size: 80px;
    & > a {
      font-size:40px
      margin-right: 1em;
      color: steelblue;
      text-decoration: none;
      
    }
  }
  h2 {
    font-size: 55px;
    margin: 0.5em 0;
  }
  p {
    font-family: Forum;
    font-size: 20px;
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
`;
const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  margin-left: auto;
  gap: 1em;
  & > a {
    font-size:40px
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
    
  }
`;
