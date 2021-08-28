import {createElement} from 'lwc';
import MY_EVENT_TESTING from 'c/myEventTesting';
import { create } from 'istanbul-reports';
import { promised } from 'q';

describe('c-my-event-testing suite',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-event-testing',{
            is:MY_EVENT_TESTING
        });
        document.body.appendChild(element);
    })
    test('Test default greet value should be Hello, World!', ()=>{
        const element = document.querySelector('c-my-event-testing');
        const pTag = element.shadowRoot.querySelector('p');
        expect(pTag.textContent).toBe('Hello, World!');
    })

    test('Test default greet value should not be Hello, Adnan!', ()=>{
        const element = document.querySelector('c-my-event-testing');
        const pTag = element.shadowRoot.querySelector('p');
        expect(pTag.textContent).not.toBe('Hello, Adnan!');
    })

    test('Test input change event value', ()=>{
        const element = document.querySelector('c-my-event-testing');
        const inputElement = element.shadowRoot.querySelector('lightning-input');
        inputElement.value='Salesforce';
        inputElement.dispatchEvent(new CustomEvent('change'));
        const text = element.shadowRoot.querySelector('p');
        return Promise.resolve().then(()=>{
            expect(text.textContent).toBe('Hello, Salesforce!');
        })
    })
})