import {createElement} from 'lwc';
import HelloWorld from 'c/helloWorld';

describe('c-hello-world test suite',()=>{
    test('display first greeting',()=>{
        const element = createElement('c-hello-world',{
            is:HelloWorld
        });
        document.body.appendChild(element);
        const firstDiv = element.shadowRoot.querySelector('div.first')
        expect(firstDiv.textContent).toBe('Hello, World!')
    })

    test('display second greeting',()=>{
        const element = createElement('c-hello-world',{
            is:HelloWorld
        });
        document.body.appendChild(element);
        const secondDiv = element.shadowRoot.querySelector('div.second')
        expect(secondDiv.textContent).toBe('My, World!')
    })
})