import React from "react";

const UserIcon = (props) => {
  return (
    <div>
      <svg
        class="t4s-icon t4s-icon--account "
        aria-hidden="true"
        focusable="false"
        role="presentation"
        fill={props.fill}
        stroke={props.stroke}
        className={props.className}
      >
        <use href="#icon-h-account"></use>
      </svg>
    </div>
  );
};

export default UserIcon;
