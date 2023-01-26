export class IdentityDetails{


name = '#name';
email = '#email';
mobileNumber = '#mo-number';

nationalityDrpDwn = '.dynamic-select-item';
nationalitySelectionIndian = '.dynamic-flag-items span';

updatesToggle = '.circle';

viewQuotesBtn = '#submitBtn';






enterName(Name){

cy.get(this.name).type(Name);

}

enterEmail(Email){

cy.get(this.email).type(Email);

}

enterMobileNumber(Mobile){

    cy.get(this.mobileNumber).type(Mobile);
    
    }


SelectNationality(){

cy.get(this.nationalityDrpDwn).type('ind')

cy.get(this.nationalitySelectionIndian).each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.text() === 'Indian') {
      // wrap this element so we can
      // use cypress commands on it
      cy.wrap($el).click()
    } else {
      // do something else
    }
  })

}

turnOffUpdatesToggleBtn(){

cy.get(this.updatesToggle).click();

}

clickViewQuotesBtn(){

cy.get(this.viewQuotesBtn).click();

}

}