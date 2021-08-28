import {createElement} from 'lwc';
import MY_CONDITIONAL_RENDERING from 'c/myConditionalRendering';

describe('c-my-conditional-rendering test suite',()=>{
    beforeEach(()=>{
        const element = createElement("c-my-conditional-rendering",{
            is:MY_CONDITIONAL_RENDERING
        })
        document.body.appendChild(element);
    })

    it('password should be hidden by default',()=>{
        const element = document.querySelector('c-my-conditional-rendering');
        const div = element.shadowRoot.querySelector('div.userInfo');
        expect(div.textContent).toBe('My Password is **********');
    })

    it('show user password when checkbox is checked',()=>{
        const element = document.querySelector('c-my-conditional-rendering');
        const inputElement = element.shadowRoot.querySelector('lightning-input');
        inputElement.checked = true;
        inputElement.dispatchEvent(new CustomEvent('change'));
        const div = element.shadowRoot.querySelector('div.userInfo');
        return Promise.resolve().then(()=>{
            expect(div.textContent).toBe('My Password is AdnanMohd');
        })
    })
})