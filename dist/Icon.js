"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon = function (_a) {
    var className = _a.className, name = _a.name, color = _a.color, text = _a.text, isSelected = _a.isSelected, isDisabled = _a.isDisabled, onClick = _a.onClick;
    className = className || "";
    var iconClass = text ? "" : "icon--" + name;
    var colorClass = !isDisabled && color ? "icon--" + color : "icon--black-3";
    var selectedClass = isSelected ? "icon-button--selected" : "";
    if (onClick) {
        return (react_1.default.createElement("button", { style: {
                padding: 0,
                cursor: "default",
            }, disabled: isDisabled, onClick: onClick, className: "icon-button " + selectedClass + " " + className },
            react_1.default.createElement("div", { className: "icon " + iconClass }, text)));
    }
    else {
        return (react_1.default.createElement("div", { className: "icon " + iconClass + " " + colorClass + " " + className }, text));
    }
};
exports.default = Icon;
//# sourceMappingURL=Icon.js.map