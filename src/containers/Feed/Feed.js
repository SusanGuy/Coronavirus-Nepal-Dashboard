import React from "react";
import FacebookFeed from "../../components/FacebookFeed/FacebookFeed";

const Feed = () => {
  return (
    <div
      className={"Home"}
      style={{ marginTop: "20px", paddingTop: "0px", textAlign: "center" }}
    >
      <div className="about-header">
        <h1>Feed</h1>
      </div>
      <div className="home-left">
        <FacebookFeed link="mohpnep" />
      </div>

      <div className="home-right">
        <FacebookFeed link="officialroutineofnepalbanda" />
      </div>
    </div>
  );
};

export default Feed;
