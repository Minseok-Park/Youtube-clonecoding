import React, { useRef } from "react";

const Navbar = ({ onSearch }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const handleSearch = () => {};

  return (
    <div className="navbar">
      <a href="#" className="logo">
        <img src="images/logo.png" alt="유튜브 로고" />
        <span className="logo_name">Youtube</span>
      </a>
      <form ref={formRef} method="get" className="search_form">
        <input className="search_text" type="text" placeholder="Search..." />
        <button type="submit" className="search_btn">
          <img className="search_img" src="images/search.png" alt="검색" />
        </button>
      </form>
    </div>
  );
};

export default Navbar;
