import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class MyWireComponent extends LightningElement {
    @wire(getContactList)
    contacts

    renderedCallback(){
            console.log('data--'+JSON.stringify(this.contacts.data));
    }
}