import React from "react";

const SearchInput = () => {
  return (
    <>
      <div className="container-custom position-relative">
        <div className="main-search-container position-absolute">
          <form className="search search-full">
            <div className="search-wrapper">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              id="search-input"
              placeholder="How can we help?"
              autocomplete="off"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
