import FormattedModal from './FormattedModal';
import ModalProvider, { ModalContext, ModalContextData, useModal } from './ModalProvider';
import UseModal, { ModalProps } from './UseModal';

export default ModalProvider;

export {
    ModalContext,
    useModal,
    UseModal,
    FormattedModal,
};

export type {
    ModalProps,
    ModalContextData,
}