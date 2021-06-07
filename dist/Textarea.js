"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Textarea = function (_a) {
    var className = _a.className, _b = _a.rows, rows = _b === void 0 ? 2 : _b, defaultValue = _a.defaultValue, placeholder = _a.placeholder, isDisabled = _a.isDisabled, onChange = _a.onChange;
    className = className || "";
    return (react_1.default.createElement("textarea", { rows: rows, className: "textarea " + className, placeholder: placeholder, defaultValue: defaultValue, disabled: isDisabled, onChange: function (event) { return onChange && onChange(event.target.value, event); } }));
};
exports.default = Textarea;
//# sourceMappingURL=Textarea.js.map