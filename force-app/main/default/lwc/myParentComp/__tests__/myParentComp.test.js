import {createElement} from 'lwc';
import MY_PARENT_COMP from 'c/myParentComp';

const USER_RESULT = 'Adnan';

describe('c-my-parent-comp suite', ()=>{
    beforeEach(()=>{
        const element = createElement('c-my-parent-comp',{
            is:MY_PARENT_COMP
        })
        document.body.appendChild(element);
    })

    it('render child component', ()=>{
        const element = document.querySelector('c-my-parent-comp');
        const childCompElement = element.shadowRoot.querySelectorAll('c-my-child-comp');
        expect(childCompElement.length).toBe(1);
    })

    it('set user data property correctly', ()=> {
        const element = document.querySelector('c-my-parent-comp');
        const childCompElement = element.shadowRoot.querySelector('c-my-child-comp');
        expect(childCompElement.userDetail.Name).toBe(USER_RESULT)
    })
})