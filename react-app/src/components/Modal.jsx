import styles from './Modal.module.css';

export default function Modal({ onModalIsVisible, children }) {
    return (
        <>
            <div className={styles.backdrop} onClick={onModalIsVisible} />
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </>
    );
}
