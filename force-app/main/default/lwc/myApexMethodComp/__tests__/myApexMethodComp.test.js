import {createElement} from 'lwc';
import MyApexMethodComp from 'c/myApexMethodComp';
import getAccountList from '@salesforce/apex/MyAccountController.getAccountList';

const APEX_ACCOUNTLIST_ERROR = require('./data/accountsError.json');
const APEX_ACCOUNTLIST_SUCCESS = require('./data/accountsList.json');

//jest.mock(moduleName, factory, options)
jest.mock('@salesforce/apex/MyAccountController.getAccountList',
()=>({
    default:jest.fn()
}),
{virtual:true}
)

describe('c-my-apex-method-comp suite',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-apex-method-comp',{
            is:MyApexMethodComp
        })
        document.body.appendChild(element);
    })
    afterEach(()=>{
        while(document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    })

    it('renders accounts returned from imperative apex call',()=>{
        getAccountList.mockResolvedValue(APEX_ACCOUNTLIST_SUCCESS);
        const element = document.querySelector('c-my-apex-method-comp');
        const btnElement = element.shadowRoot.querySelector('lightning-button');
        btnElement.click();
        return new Promise(setImmediate).then(()=>{
            const detailsElement = element.shadowRoot.querySelectorAll('p.accountName');
            expect(detailsElement.length).toBe(APEX_ACCOUNTLIST_SUCCESS.length);
            expect(detailsElement[0].textContent).toBe(APEX_ACCOUNTLIST_SUCCESS[0].Name);
            expect(detailsElement[1].textContent).toBe(APEX_ACCOUNTLIST_SUCCESS[1].Name);
        })
    })

    it('renders the error when apex return an error',()=>{
        getAccountList.mockRejectedValue(APEX_ACCOUNTLIST_ERROR);
        const element = document.querySelector('c-my-apex-method-comp');
        const btnElement = element.shadowRoot.querySelector('lightning-button');
        btnElement.click();
        return new Promise(setImmediate).then(()=>{
            const errorElement = element.shadowRoot.querySelector('.error');
            expect(errorElement.textContent).not.toBeNull();
        })
    })
})