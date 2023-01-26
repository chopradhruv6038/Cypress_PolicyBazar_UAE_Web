export class TripDate{



nextMonthIcon = '.react-calendar__navigation__next-button'; //handle according to current month
fromDate = ':nth-child(12) > abbr'; //March 10th

toMonth = '';
toDate = ':nth-child(32) > abbr'; //March 30th




selectFromDateInCalendar(){


cy.get(this.nextMonthIcon).click();
cy.get(this.nextMonthIcon).click();
cy.get(this.fromDate).click();


}


selectToDateInCalendar(){

cy.get(this.toDate).click();


}


}