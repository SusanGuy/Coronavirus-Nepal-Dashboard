import React, { Fragment } from "react";
import { FacebookProvider, Page } from "react-facebook";

const FacebookFeed = ({ link }) => {
  return (
    <Fragment>
      <FacebookProvider appId="1659583547508616">
        <Page href={`https://www.facebook.com/${link}`} tabs="timeline" />
      </FacebookProvider>
    </Fragment>
  );
};

export default FacebookFeed;
