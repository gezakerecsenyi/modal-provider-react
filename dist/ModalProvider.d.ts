import { ReactElement } from 'react';
export interface ModalContextData {
    launchModal: (name: string, data?: any) => void;
    clearModal: () => void;
}
export declare const ModalContext: import("react").Context<ModalContextData>;
export declare function useModal(): ModalContextData;
export default function ModalProvider({ children }: {
    children: ReactElement[];
}): import("react/jsx-runtime").JSX.Element;
