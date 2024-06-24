import { LightningElement, track } from 'lwc';

export default class ModalWithSpinner extends LightningElement {
    @track isModalOpen = false;
    @track isLoading = false;

    openModal() {
        this.isModalOpen = true;
        this.isLoading = true;

        // Simulate loading process
        setTimeout(() => {
            this.isLoading = false;
        }, 2000); // Adjust the timeout as needed
    }

    closeModal() {
        this.isModalOpen = false;
    }
}
