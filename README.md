ReadMe

----------------
Write Jest tests to:
1. Test a component in isolation
2. Test a component's public api (@api properties and methods, events)
3. Test basic user interaction (clicks)
4. Verify DOM output of a component
5. Verify that events fire when expected

-----------

Prerequisites for beginning with JEST testing:

1. Check node and npm is installed
Commands - 
node -v
npm -v

2. Ensure Package.json is existing in your project if not then use the below Commands
npm int -y and ensure it contains devdependencies for sfdx jest testing

3. Install sfdx-lwc-jest node module
npm install @salesforce/sfdx-lwc-jest --save-dev

4. Run You Jest Test Cases
Command - npm run test:unit or node ./node_modules/@salesforce/lwc-jest/bin/sfdx-lwc-jest

--------------------------
Nested Component testing - Conditions:
Parent - 
* Check whether the child component is rendering properly or not
* Check whether the user details is having correct data or not in child component

Child -
* Check when user details is available
* Check when user details is not available


-----------------------------
Apex Imperative Method Testing - Steps for Mocking
1. Import method and mock reference
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
const APEX_ACCOUNTLIST_ERROR = require('./data/accountsError.json');
const APEX_ACCOUNTLIST_SUCCESS = require('./data/accountsList.json');

2. In Imperative method we need to mock explicitly
//jest.mock(moduleName, factory, options)
jest.mock('@salesforce/apex/MyAccountController.getAccountList',
()=>({
    default:jest.fn()
}),
{virtual:true}
)

3. mock implementation with success
getAccountList.mockResolvedValue(APEX_ACCOUNTLIST_SUCCESS);

4. mock implementation with failure
getAccountList.mockRejectedValue(APEX_ACCOUNTLIST_ERROR);