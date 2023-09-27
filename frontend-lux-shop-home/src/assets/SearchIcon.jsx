import React from "react";

const SearchIcon = (props) => {
  return (
    <svg
      class="t4s-icon t4s-icon--search "
      aria-hidden="true"
      focusable="false"
      role="presentation"
      fill={props.fill}
      stroke={props.stroke}
      className={props.className}
    >
      <use href="#icon-h-search"></use>
    </svg>
  );
};

export default SearchIcon;
