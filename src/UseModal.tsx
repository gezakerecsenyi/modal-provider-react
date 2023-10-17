import { ReactElement } from 'react';

export type ModalProps<T extends any> = { data?: T };

export default function UseModal({ children, data }: { name: string, children: ReactElement, data?: any }) {
    return { ...children, props: { ...children.props, data } };
}