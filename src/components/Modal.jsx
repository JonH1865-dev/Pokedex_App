import React, { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';

export default function Modal(props) {
    const { children, handleCloseModal } = props;
    const modalRef = useRef(null);
    const firstFocusableElementRef = useRef(null);
    const lastFocusableElementRef = useRef(null);

    // Focus trapping logic
    const trapFocus = (event) => {
        if (event.key === 'Tab') {
            if (event.shiftKey) { // Shift + Tab to go backward
                if (document.activeElement === firstFocusableElementRef.current) {
                    event.preventDefault();
                    lastFocusableElementRef.current.focus();
                }
            } else { // Tab forward
                if (document.activeElement === lastFocusableElementRef.current) {
                    event.preventDefault();
                    firstFocusableElementRef.current.focus();
                }
            }
        }
    };

    // Close modal on Esc key press
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleCloseModal();
        }
    };

    useEffect(() => {
        // Trap focus and handle key events
        const modalContent = modalRef.current;
        modalContent.focus();  // Initially focus the modal

        document.addEventListener('keydown', handleKeyDown);
        modalContent.addEventListener('keydown', trapFocus);

        // Cleanup event listeners on unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            modalContent.removeEventListener('keydown', trapFocus);
        };
    }, []);

    return ReactDom.createPortal(
        <div className="modal-container">
            <button onClick={handleCloseModal} className="modal-underlay" />
            <div
                className="modal-content"
                ref={modalRef}
                tabIndex={-1} // Makes the modal focusable
            >
                <button
                    className="close-button"
                    onClick={handleCloseModal}
                    aria-label="Close Modal"
                >
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>
                {children}
                <button ref={firstFocusableElementRef} style={{ visibility: 'hidden' }} />
                <button ref={lastFocusableElementRef} style={{ visibility: 'hidden' }} />
            </div>
        </div>,
        document.getElementById('portal')
    );
}
