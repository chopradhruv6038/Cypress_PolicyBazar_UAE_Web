export class TravelTypeSelection{

travelOutOfUAE = '.only-two-item > ul > :nth-child(2) > span';




clickTravelOutOfUAEBtn(){

cy.get(this.travelOutOfUAE).click();


}



}