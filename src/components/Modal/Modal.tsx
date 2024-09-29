import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        } else {
            document.body.style.overflow = ''; // Re-enable scroll
        }

        return () => {
            document.body.style.overflow = ''; // Clean up scroll setting
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Close modal when clicking on the backdrop
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center"
            onClick={handleBackdropClick} // Listen for backdrop clicks
        >
            <div className="bg-white rounded-lg p-6 relative w-[450px] max-w-full" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
                    <span className="text-xl font-bold text-right">{title}</span>
                    <button className="text-gray-500" onClick={onClose}>
                        ✕
                    </button>
                </div>
                <div className="overflow-y-auto max-h-[70vh] py-3">
                    {children}
                </div>
            </div>
        </div>
    );
};
