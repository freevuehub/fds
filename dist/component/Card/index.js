"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_1 = __importDefault(require("@emotion/styled"));
var component_1 = require("~/component");
var Wrap = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  border-radius: 15px;\n  background-color: #fff;\n  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);\n"], ["\n  overflow: hidden;\n  border-radius: 15px;\n  background-color: #fff;\n  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);\n"])));
var Content = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 20px;\n"], ["\n  padding: 20px;\n"])));
var Card = function (props) {
    var onClick = function (event) {
        props.onClick && props.onClick(event);
    };
    return (react_1.default.createElement(Wrap, { className: props.className || '', onClick: onClick },
        props.cover && react_1.default.createElement(component_1.Image, { src: props.cover }),
        props.children && (react_1.default.createElement(Content, null, props.children))));
};
Card.defaultProps = {
    border: false
};
exports.default = Card;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map