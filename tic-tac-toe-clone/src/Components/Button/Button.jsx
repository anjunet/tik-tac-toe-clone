import React from "react";
import { ButtonWrapper } from "./Button.styled";

function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>; //Access the button throught, using props.children
}

export default Button;

// import React from "react";
// import { ButtonWrapper } from "./Button.styled";

// function Button({ children, ...props }) {
//   return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
// }

// export default Button;
