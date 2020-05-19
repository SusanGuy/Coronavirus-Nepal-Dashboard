import React from "react";
import "./Nav.scss";
import Avatar from "../Avatar/Avatar";
const Nav = () => {
  return (
    <div className="column nav-column">
      <img
        alt="logo"
        src="https://images.squarespace-cdn.com/content/v1/5c4085e585ede1f50f94a4b9/1581018457505-JM3FO6WMFN9BGP3IOE8D/ke17ZwdGBToddI8pDm48kL5hQm_JZO5i_9Equza1B-57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URbcWFoTofQNHE0Fe4ADwtkYw2N2aveJw6FaFCcRrQmU3WUfc_ZsVm9Mi1E6FasEnQ/2019-nCoV-CDC-23312_without_background.png"
        className="logo"
      />
      <h1 className="nav-title">Nepal Coronavirus Dashboard</h1>
      <div>
        <h3 style={{ color: "white" }}>Contributors:</h3>
        <div className="avatars">
          <Avatar
            github="https://github.com/sushantbaskota2"
            src="https://avatars3.githubusercontent.com/u/49043517?s=460&u=7c4af2704ee5e490cf8725961f46401afdc98c4e&v=4"
          />
          <Avatar
            github="https://github.com/SusanGuy"
            src="https://avatars0.githubusercontent.com/u/31829258?s=460&u=c0e094fb4cbc0ee4a64e731fbf26108c982e1304&v=4"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
