import { createContext, ReactElement, useContext, useMemo, useState } from 'react';

export interface ModalContextData {
    launchModal: (name: string, data?: any) => void;
    clearModal: () => void;
}

export const ModalContext = createContext<ModalContextData>({
    launchModal: () => null,
    clearModal: () => null,
});

export function useModal() {
    return useContext(ModalContext);
}

export default function ModalProvider({ children }: { children: ReactElement[] }) {
    const [currentModal, setCurrentModal] = useState<string | null>(null);
    const [currentData, setCurrentData] = useState<any>(null);

    const contextData = useMemo(() => {
        return {
            launchModal: (name: string, data?: any) => {
                setCurrentModal(name);
                setCurrentData(data);
            },
            clearModal: () => {
                setCurrentModal(null);
                setCurrentData(null);
            },
        };
    }, []);

    const currentModalNode = useMemo(() => {
        return children
            .filter(
                e => typeof e.type === 'function' &&
                    e.type.name === 'UseModal' &&
                    e.props.name === currentModal
            )[0];
    }, [currentModal, currentData]);

    return (
        <ModalContext.Provider value={contextData}>
            {
                currentModalNode ? {...currentModalNode, props: {...currentModalNode.props, data: currentData}} : false
            }
            {
                children.filter(
                    e => typeof e.type === 'string' || e.type.name !== 'UseModal'
                )
            }
        </ModalContext.Provider>
    );
}