"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventByTagName = exports.isTagChangeable = exports.isTagWriteable = void 0;

var _models = require("../models");

const isTagWriteable = (tag, type) => tag === _models.Tag.input && type === _models.TagType.text || tag === _models.Tag.textarea;

exports.isTagWriteable = isTagWriteable;

const isTagChangeable = (tag, type) => tag === _models.Tag.input && type !== _models.TagType.text || tag === _models.Tag.select;

exports.isTagChangeable = isTagChangeable;

const getEventByTagName = (tag, type) => {
  if (tag === _models.Tag.form) return _models.Event.submit;
  if (isTagWriteable(tag, type)) return _models.Event.input;
  if (isTagChangeable(tag, type)) return _models.Event.change;
  return _models.Event.click;
};

exports.getEventByTagName = getEventByTagName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9ldmVudC50cyJdLCJuYW1lcyI6WyJpc1RhZ1dyaXRlYWJsZSIsInRhZyIsInR5cGUiLCJUYWciLCJpbnB1dCIsIlRhZ1R5cGUiLCJ0ZXh0IiwidGV4dGFyZWEiLCJpc1RhZ0NoYW5nZWFibGUiLCJzZWxlY3QiLCJnZXRFdmVudEJ5VGFnTmFtZSIsImZvcm0iLCJFdmVudCIsInN1Ym1pdCIsImNoYW5nZSIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sTUFBTUEsY0FBYyxHQUFHLENBQUNDLEdBQUQsRUFBV0MsSUFBWCxLQUM1QkQsR0FBRyxLQUFLRSxZQUFJQyxLQUFaLElBQXFCRixJQUFJLEtBQUtHLGdCQUFRQyxJQUF2QyxJQUFnREwsR0FBRyxLQUFLRSxZQUFJSSxRQUR0RDs7OztBQUdBLE1BQU1DLGVBQWUsR0FBRyxDQUFDUCxHQUFELEVBQVdDLElBQVgsS0FDN0JELEdBQUcsS0FBS0UsWUFBSUMsS0FBWixJQUFxQkYsSUFBSSxLQUFLRyxnQkFBUUMsSUFBdkMsSUFBZ0RMLEdBQUcsS0FBS0UsWUFBSU0sTUFEdEQ7Ozs7QUFHQSxNQUFNQyxpQkFBaUIsR0FBRyxDQUFDVCxHQUFELEVBQVdDLElBQVgsS0FBOEI7QUFDOUQsTUFBSUQsR0FBRyxLQUFLRSxZQUFJUSxJQUFoQixFQUFzQixPQUFPQyxjQUFNQyxNQUFiO0FBQ3RCLE1BQUliLGNBQWMsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLENBQWxCLEVBQStCLE9BQU9VLGNBQU1SLEtBQWI7QUFDL0IsTUFBSUksZUFBZSxDQUFDUCxHQUFELEVBQU1DLElBQU4sQ0FBbkIsRUFBZ0MsT0FBT1UsY0FBTUUsTUFBYjtBQUNoQyxTQUFPRixjQUFNRyxLQUFiO0FBQ0EsQ0FMTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50LCBUYWcsIFRhZ1R5cGUgfSBmcm9tICdtb2RlbHMnXHJcblxyXG5leHBvcnQgY29uc3QgaXNUYWdXcml0ZWFibGUgPSAodGFnOiBUYWcsIHR5cGU/OiBUYWdUeXBlKSA9PlxyXG5cdCh0YWcgPT09IFRhZy5pbnB1dCAmJiB0eXBlID09PSBUYWdUeXBlLnRleHQpIHx8IHRhZyA9PT0gVGFnLnRleHRhcmVhXHJcblxyXG5leHBvcnQgY29uc3QgaXNUYWdDaGFuZ2VhYmxlID0gKHRhZzogVGFnLCB0eXBlPzogVGFnVHlwZSkgPT5cclxuXHQodGFnID09PSBUYWcuaW5wdXQgJiYgdHlwZSAhPT0gVGFnVHlwZS50ZXh0KSB8fCB0YWcgPT09IFRhZy5zZWxlY3RcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRFdmVudEJ5VGFnTmFtZSA9ICh0YWc6IFRhZywgdHlwZT86IFRhZ1R5cGUpID0+IHtcclxuXHRpZiAodGFnID09PSBUYWcuZm9ybSkgcmV0dXJuIEV2ZW50LnN1Ym1pdFxyXG5cdGlmIChpc1RhZ1dyaXRlYWJsZSh0YWcsIHR5cGUpKSByZXR1cm4gRXZlbnQuaW5wdXRcclxuXHRpZiAoaXNUYWdDaGFuZ2VhYmxlKHRhZywgdHlwZSkpIHJldHVybiBFdmVudC5jaGFuZ2VcclxuXHRyZXR1cm4gRXZlbnQuY2xpY2tcclxufVxyXG4iXX0=