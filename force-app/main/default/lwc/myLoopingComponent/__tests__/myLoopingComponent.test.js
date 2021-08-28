import {createElement} from 'lwc';
import MY_LOOPING_COMPONENT from 'c/myLoopingComponent';
import Latitude from '@salesforce/schema/Lead.Latitude';

const EXPECTED = ['Adnan', 'Tushar', 'Nitin'];

describe('c-my-looing-component suite',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-looping-component', {
            is:MY_LOOPING_COMPONENT
        });
        document.body.appendChild(element);
    })

    it('check user list length',()=>{
        const element = document.querySelector('c-my-looping-component');
        const userDetails = element.shadowRoot.querySelectorAll('.forEachList>li');
        expect(userDetails.length).toBe(3);
    })

    it('display user list in specific order',()=>{
        const element = document.querySelector('c-my-looping-component');
        const userDetails = Array.from(element.shadowRoot.querySelectorAll('.forEachList>li'));
        const userList = userDetails.map(li=>li.textContent);
        expect(userList.length).toBe(3);
        expect(userList).toEqual(EXPECTED);
    })

    it('displays first and last text in the iterator loop', ()=>{
        const element = document.querySelector('c-my-looping-component');
        const firstDiv = element.shadowRoot.querySelector('.iteratorList>li:first-child>div:first-child');
        expect(firstDiv.textContent).toBe('Start of List');
        const lastDiv = element.shadowRoot.querySelector('.iteratorList>li:last-child>div:last-child');
        expect(lastDiv.textContent).toBe('End of List');
    })

})