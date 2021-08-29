ReadMe

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