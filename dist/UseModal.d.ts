import { ReactElement } from 'react';
export type ModalProps<T extends any> = {
    data?: T;
};
export default function UseModal({ children, data }: {
    name: string;
    children: ReactElement;
    data?: any;
}): {
    props: any;
    type: string | import("react").JSXElementConstructor<any>;
    key: string | null;
};
