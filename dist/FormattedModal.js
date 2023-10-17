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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModal } from './ModalProvider';
export default function FormattedModal(_a) {
    var children = _a.children, className = _a.className;
    var clearModal = useModal().clearModal;
    return (_jsx("div", __assign({ className: "modal ".concat(className || '') }, { children: _jsxs("div", __assign({ className: 'modal-contents' }, { children: [_jsx("button", __assign({ className: 'close', onClick: clearModal }, { children: _jsx(FontAwesomeIcon, { icon: faTimes }) })), children] })) })));
}
