public with sharing class MyAccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, AnnualRevenue from Account WHERE AnnualRevenue != null LIMIT 5];
    }
}
