"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const WrapCss = react_1.css `
  color: red;
`;
const Card = (props) => {
    return (<div css={react_1.css `color: red;`}>
      {props.children}
    </div>);
};
exports.default = Card;
//# sourceMappingURL=Card.jsx.map