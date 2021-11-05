"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_1 = __importDefault(require("@emotion/styled"));
var Wrap = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  canvas {\n    display: none;\n    filter: blur(5px);\n    transition: all .3s;\n  }\n  &.on {\n    canvas {\n      display: block;\n      filter: blur(0);\n    }\n  }\n"], ["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  canvas {\n    display: none;\n    filter: blur(5px);\n    transition: all .3s;\n  }\n  &.on {\n    canvas {\n      display: block;\n      filter: blur(0);\n    }\n  }\n"])));
var Canvas = styled_1.default.canvas(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  min-height: 100%;\n"], ["\n  display: block;\n  width: 100%;\n  min-height: 100%;\n"])));
var LazyImage = function (props) {
    var canvas = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(true), loading = _a[0], setLoading = _a[1];
    var onImageClick = function () {
        props.onClick && props.onClick();
    };
    var onImageLoad = function (event) {
        var $canvas = canvas.current;
        var $img = event.currentTarget;
        if ($canvas !== null) {
            var width = $img.width, height = $img.height;
            var context = $canvas.getContext('2d');
            $canvas.width = width;
            $canvas.height = height;
            if (context) {
                var clientWidth = $canvas.clientWidth, clientHeight = $canvas.clientHeight;
                $canvas.width = clientWidth;
                $canvas.height = clientHeight;
                context.clearRect(0, 0, clientWidth, clientHeight);
                context.drawImage($img, 0, 0, clientWidth, clientHeight);
                setLoading(false);
            }
        }
    };
    (0, react_1.useEffect)(function () {
        var io = new IntersectionObserver(function () {
            var image = new Image();
            image.onload = onImageLoad;
            if (loading) {
                image.src = props.src;
            }
        });
        if (canvas.current) {
            io.observe(canvas.current);
        }
    }, [props.src]);
    return props.src ? (react_1.default.createElement(Wrap, { className: (props.className || '') + " " + (loading ? '' : 'on'), onClick: onImageClick },
        react_1.default.createElement(Canvas, { ref: canvas }))) : react_1.default.createElement(react_1.default.Fragment, null);
};
exports.default = LazyImage;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map