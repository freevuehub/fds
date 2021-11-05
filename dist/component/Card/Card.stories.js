"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cover = exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = __importDefault(require("./index"));
exports.default = {
    title: 'UI/Card',
    component: index_1.default,
    decorators: [
        function (Story) { return (react_1.default.createElement("div", { style: { width: 300 } },
            react_1.default.createElement(Story, null))); }
    ],
    args: {
        border: false,
    },
};
var Template = function (args) { return react_1.default.createElement(index_1.default, __assign({}, args), "Hello World"); };
exports.Default = Template.bind({});
exports.Cover = Template.bind({});
exports.Cover.args = {
    cover: 'https://cdn.pixabay.com/photo/2017/08/01/00/44/laptop-2562361_1280.jpg'
};
//# sourceMappingURL=Card.stories.js.map