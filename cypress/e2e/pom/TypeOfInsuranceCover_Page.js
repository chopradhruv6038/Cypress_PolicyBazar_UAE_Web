export class TypeOfInsuranceCover{

singleTrip = 'ul > :nth-child(1) > span';
multiTrip = 'ul > :nth-child(2) > span';



clickSingleTripBtn(){

cy.get(this.singleTrip).click();

}


clickMultiTrip(){

cy.get(this.multiTrip).click();

}


}