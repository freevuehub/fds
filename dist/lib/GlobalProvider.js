"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@emotion/react");
var styles_1 = require("~/styles");
var GlobalProvider = function (props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Global, { styles: [styles_1.reset] }),
        props.children));
};
exports.default = GlobalProvider;
//# sourceMappingURL=GlobalProvider.js.map