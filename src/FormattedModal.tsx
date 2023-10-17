import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';
import { useModal } from './ModalProvider';

export default function FormattedModal({children, className}: {children: ReactNode | ReactNode[], className?: string}) {
    const {clearModal} = useModal();

    return (
        <div className={`modal ${className || ''}`}>
            <div className='modal-contents'>
                <button className='close' onClick={clearModal}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                {children}
            </div>
        </div>
    );
}