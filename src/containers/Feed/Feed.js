import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Feed = ({ mode }) => {
  return (
    <div className={"Home"} style={{ textAlign: "center" }}>
      <div className="about-header" style={{ marginTop: "10px" }}>
        <h1>Feed</h1>
      </div>
      <div className="home-left" style={{ paddingTop: "50px" }}>
        <TwitterTimelineEmbed
          sourceType="timeline"
          theme={mode && "dark"}
          url={"https://twitter.com/mohpnep"}
          options={{ height: 600, width: 400 }}
        />
      </div>

      <div className="home-right" style={{ paddingTop: "50px" }}>
        <TwitterTimelineEmbed
          theme={mode && "dark"}
          sourceType="timeline"
          url={"https://twitter.com/RONBupdates"}
          options={{ height: 600, width: 400 }}
        />
      </div>
    </div>
  );
};

export default Feed;
