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
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useState } from 'react';
export var ModalContext = createContext({
    launchModal: function () { return null; },
    clearModal: function () { return null; },
});
export function useModal() {
    return useContext(ModalContext);
}
export default function ModalProvider(_a) {
    var children = _a.children;
    var _b = useState(null), currentModal = _b[0], setCurrentModal = _b[1];
    var _c = useState(null), currentData = _c[0], setCurrentData = _c[1];
    var contextData = useMemo(function () {
        return {
            launchModal: function (name, data) {
                setCurrentModal(name);
                setCurrentData(data);
            },
            clearModal: function () {
                setCurrentModal(null);
                setCurrentData(null);
            },
        };
    }, []);
    var currentModalNode = useMemo(function () {
        return children
            .filter(function (e) { return typeof e.type === 'function' &&
            e.type.name === 'UseModal' &&
            e.props.name === currentModal; })[0];
    }, [currentModal, currentData]);
    return (_jsxs(ModalContext.Provider, __assign({ value: contextData }, { children: [currentModalNode ? __assign(__assign({}, currentModalNode), { props: __assign(__assign({}, currentModalNode.props), { data: currentData }) }) : false, children.filter(function (e) { return typeof e.type === 'string' || e.type.name !== 'UseModal'; })] })));
}
