"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = require("./");
var InputComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, type = _a.type, defaultValue = _a.defaultValue, value = _a.value, placeholder = _a.placeholder, isDisabled = _a.isDisabled, onChange = _a.onChange, required = _a.required, pattern = _a.pattern;
    return (react_1.default.createElement("input", { type: type, className: className, placeholder: placeholder, defaultValue: defaultValue, value: defaultValue, disabled: isDisabled, required: required, pattern: pattern, onChange: function (event) { return onChange && onChange(event.target.value, event); } }));
};
var Input = function (_a) {
    var className = _a.className, type = _a.type, icon = _a.icon, _b = _a.iconColor, iconColor = _b === void 0 ? "black3" : _b, defaultValue = _a.defaultValue, value = _a.value, placeholder = _a.placeholder, isDisabled = _a.isDisabled, onChange = _a.onChange, required = _a.required, pattern = _a.pattern;
    className = className || "";
    type = type || "text";
    var inputClass = "input__field";
    if (icon) {
        return (react_1.default.createElement("div", { className: "input input--with-icon" },
            react_1.default.createElement(_1.Icon, { name: icon, color: iconColor, isDisabled: isDisabled }),
            react_1.default.createElement(InputComponent, { className: inputClass + " " + className, type: type, defaultValue: defaultValue, value: value, placeholder: placeholder, isDisabled: isDisabled, required: required, pattern: pattern, onChange: onChange })));
    }
    else {
        return (react_1.default.createElement("div", { className: "input" },
            react_1.default.createElement(InputComponent, { className: inputClass + " " + className, type: type, defaultValue: defaultValue, value: value, placeholder: placeholder, isDisabled: isDisabled, required: required, pattern: pattern, onChange: onChange })));
    }
};
exports.default = Input;
//# sourceMappingURL=Input.js.map