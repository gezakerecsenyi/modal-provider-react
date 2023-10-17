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
export default function UseModal(_a) {
    var children = _a.children, data = _a.data;
    return __assign(__assign({}, children), { props: __assign(__assign({}, children.props), { data: data }) });
}
