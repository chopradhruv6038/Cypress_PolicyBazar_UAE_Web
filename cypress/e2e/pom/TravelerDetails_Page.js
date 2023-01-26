export class TravelerDetails{



dobSelectorOpen = '.edit-dob > span';
dobSelector01 = '.react-calendar__navigation__label__labelText';
dobYearMoverLeftArrow = '.react-calendar__navigation__prev-button'; //2 clicks to 1991
dobMonthSelector = ':nth-child(11) > abbr'; //November selector
dobDateSelector = ':nth-child(34) > abbr'; //30th November

genderMale = 'ul.gender-item > :nth-child(1)';

nextBtn = '#submitBtn';





selectDateOfBirth(){

cy.get(this.dobSelectorOpen).click();
cy.get(this.dobSelector01).click();
cy.get(this.dobYearMoverLeftArrow).click();
cy.get(this.dobYearMoverLeftArrow).click();
cy.get(this.dobMonthSelector).click();
cy.get(this.dobDateSelector).click();

}

selectGenderMale(){

cy.get(this.genderMale).click();

}

clickNextBtn(){

cy.get(this.nextBtn).click();


}

}