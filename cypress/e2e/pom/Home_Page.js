export class HomePage{

travelInsuranceLink = '[href="https://www.policybazaar.ae/travel-insurance/buy-insurance/?utm_source=homepage&utm_medium=icon&utm_campaign=internal"]';




clickTravelInsuranceLnk(){

cy.get(this.travelInsuranceLink).click();


}


}