import {createElement} from 'lwc';
import MyWireComponent from 'c/myWireComponent';
import {registerApexTestWireAdapter} from '@salesforce/sfdx-lwc-jest'
import getContactList from '@salesforce/apex/ContactController.getContactList';

const mockGetContactList = require('./data/getContactList.json');
const mockGetContactListNoRecords = require('./data/getContactListNoRecord.json');
const getContactListAdapter = registerApexTestWireAdapter(getContactList);

describe('c-my-wire-component suite',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-wire-component',{
            is:MyWireComponent
        })
        document.body.appendChild(element);
    })
    afterEach(()=>{
        jest.clearAllMocks();
    })

    it('Contacts should be displayed',()=>{
        const element = document.querySelector('c-my-wire-component');
        getContactListAdapter.emit(mockGetContactList);
        return Promise.resolve().then(()=>{
            const pElement = element.shadowRoot.querySelectorAll('p');
            expect(pElement.length).toBe(mockGetContactList.length);
            expect(pElement[0].textContent).toBe(mockGetContactList[0].Name);

        })
    })

    it('renders no item when no records are available',()=>{
        const element = document.querySelector('c-my-wire-component');
        getContactListAdapter.emit(mockGetContactListNoRecords);
        return Promise.resolve().then(()=>{
            const pElement = element.shadowRoot.querySelectorAll('p');
            expect(pElement.length).toBe(mockGetContactListNoRecords.length);
        })
    })

    it('getContactList @wire error',()=>{
        const element = document.querySelector('c-my-wire-component');
        getContactListAdapter.error();
        return Promise.resolve().then(()=>{
            const errorElement = element.shadowRoot.querySelectorAll('.error');
            expect(errorElement.textContent).not.toBeNull();
        })
    })
})