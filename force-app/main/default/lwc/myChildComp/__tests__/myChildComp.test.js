import {createElement} from 'lwc';
import MyChildComp from 'c/myChildComp';

const USER_DATA = {
    Id: '1',
    Name: 'Adnan'
};
const MESSAGE = 'No user data available';

describe('testing of my child component', ()=>{
    
    it('renders name based on public property', ()=>{
        const element = createElement('c-my-child-comp',{
            is:MyChildComp
        })
        element.userDetail = USER_DATA;
        document.body.appendChild(element);    
        const div = element.shadowRoot.querySelector('.userName');
        expect(div.textContent).toBe(USER_DATA.Name);
    })

    it('render message if user data is not available', ()=>{
        const element = createElement('c-my-child-comp',{
            is:MyChildComp
        })
        document.body.appendChild(element);
        const pElement = element.shadowRoot.querySelector('p');
        expect(pElement.textContent).toBe(MESSAGE);
    })
})