import React from "react";

const RuleIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 136 512 240"
      class="t4s-ani-none"
      fill={props.fill}
      stroke={props.stroke}
      className={props.className}
    >
      <path d="M0,136v240h512V136H0z M472,336H40V176h38v48h40v-48h40v88h40v-88h38v48h40v-48h38v88h40v-88h40v48h40v-48h38V336z"></path>
    </svg>
  );
};

export default RuleIcon;
