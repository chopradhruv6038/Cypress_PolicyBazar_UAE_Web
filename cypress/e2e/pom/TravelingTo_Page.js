export class TravelingTo{

cntrySlctnDrpDownOpen = '.multi-select__value-container';    
cntrySelectionFrmDrpDwn = '#react-select-2-option-148';

nextBtn = '.btn';



selectCountryFromDropdown(){


cy.get(this.cntrySlctnDrpDownOpen).click();
cy.get(this.cntrySelectionFrmDrpDwn).click();

}


clickNxtBtn(){

cy.get(this.nextBtn).click();

}




}