import Modal from './Modal'
import ModalBody from './ModalBody'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'

export default function testModal(props){
    return(
        <Modal>
            <ModalHeader>
                <h3>Test Modal #1</h3>
            </ModalHeader>
            <ModalBody>
                <p>Body of modal #1</p>
            </ModalBody>
            <ModalFooter>
                <button onClick = {props.close} className = "btn btn-primary">Close Modal</button>
            </ModalFooter>
        </Modal>
    );
}