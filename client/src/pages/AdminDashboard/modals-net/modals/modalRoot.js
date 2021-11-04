import {useState, useEffect } from "react";
import modalService from "../../modals/services/modalService";
import styles from './styles/modalRoot.module.css';

export default function modalRoot(){
    const [modal, setModal] = useState({});
    useEffect(() => {
        modalService.on('open', ({component, props}) => {
            setModal({
                component,
                props,
                close: value => {
                    setModal({});
                },
            });
        });
    }, []);

    const ModalComponent = modal.component ? ModalComponent : null;

    return (
        <section className={ ModalComponent ? styles.modalRoot : ''}>
            {ModalComponent && (
                <ModalComponent {...modal.props}
                    close = {modal.close}
                    className = {ModalComponent ? 'd-block' : ''}
                />
            )}
        </section>
    );

}