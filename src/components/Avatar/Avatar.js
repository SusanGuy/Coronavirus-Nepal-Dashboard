import React from "react";

const Avatar = ({ src, github }) => {
  return (
    <a href={github} target="_blank">
      <img alt="creator" class="user-avatar -large" src={src} />
    </a>
  );
};

export default Avatar;
