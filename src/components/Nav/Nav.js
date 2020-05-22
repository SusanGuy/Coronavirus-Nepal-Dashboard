import React, { useState } from "react";
import * as Icon from "react-feather";
import "./Nav.scss";
import NavExpand from "../NavExpand/NavExpand";
import { useWindowSize } from "react-use";
import { Link } from "react-router-dom";
const Nav = ({ mode, setMode }) => {
  const [expand, setExpand] = useState(false);
  const windowSize = useWindowSize();
  return (
    <div className="Navbar">
      <div className="LanguageSwitcher">
        <Link to="/">
          <img
            alt="logo"
            src="https://images.squarespace-cdn.com/content/v1/5c4085e585ede1f50f94a4b9/1581018457505-JM3FO6WMFN9BGP3IOE8D/ke17ZwdGBToddI8pDm48kL5hQm_JZO5i_9Equza1B-57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URbcWFoTofQNHE0Fe4ADwtkYw2N2aveJw6FaFCcRrQmU3WUfc_ZsVm9Mi1E6FasEnQ/2019-nCoV-CDC-23312_without_background.png"
            className="button"
          />
        </Link>
      </div>
      {window.innerWidth > 769 && (
        <div
          className="navbar-left"
          onClick={() => {
            if (localStorage.getItem("mode")) {
              const localMode = JSON.parse(localStorage.getItem("mode"));
              localStorage.setItem("mode", !localMode);
            } else {
              localStorage.setItem("mode", true);
            }
            setMode(!mode);
          }}
        >
          {mode ? <Icon.Sun color={"#ffc107"} /> : <Icon.Moon />}
        </div>
      )}
      <div className="navbar-middle">
        <Link
          to="/"
          onClick={() => {
            setExpand(false);
          }}
        >
          Covid19 &nbsp;
          <span>Nepal</span>
        </Link>
      </div>

      <div
        className="navbar-right"
        onClick={() => {
          setExpand(!expand);
        }}
        onMouseEnter={() => {
          if (window.innerWidth > 769) {
            setExpand(true);
          }
        }}
      >
        {windowSize.width < 769 && (
          <span>{expand ? <Icon.Minimize /> : <Icon.Menu />}</span>
        )}
        {windowSize.width > 769 && (
          <React.Fragment>
            <span>
              <Link to="/">
                <Icon.Home />
              </Link>
            </span>
            <span>
              <Link to="/about-us">
                <Icon.Users />
              </Link>
            </span>
            <span>
              <Link to="/feed">
                <Icon.Twitter />
              </Link>
            </span>
          </React.Fragment>
        )}
      </div>

      {expand && (
        <NavExpand setMode={setMode} mode={mode} setExpand={setExpand} />
      )}
    </div>
  );
};
export default Nav;
