/// <reference types = "Cypress"/>

import { BasePage } from "../pom/Base_Page";
import { HomePage } from "../pom/Home_Page";
import { TravelTypeSelection } from "../pom/TravelTypeSelection_Page";
import { TypeOfInsuranceCover } from "../pom/TypeOfInsuranceCover_Page";
import { TripDate } from "../pom/TripDates_Page";
import { TravelingTo } from "../pom/TravelingTo_Page";
import { TravelerDetails } from "../pom/TravelerDetails_Page";
import { IdentityDetails } from "../pom/IdentityDetails_Page";

const basepage = new BasePage();
const homepage = new HomePage();
const traveltypeselection = new TravelTypeSelection();
const typeofinsurancecover = new TypeOfInsuranceCover();
const tripdate = new TripDate();
const travelingto = new TravelingTo();
const travelerdetails = new TravelerDetails();
const identitydetails = new IdentityDetails();

describe('This suite will test if the user is able to get travel insurance quotes or not based on the input details', ()=> {

let details;

let randomText = "";
let testEmail = "";

let randomText02 = "";
let testNumber = "";

it('Creating random string for email using math fnc', ()=> {

    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    for (var i = 0; i < 10; i++)
    randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
   
    testEmail = randomText + '@gmail.com';

})

it('creating random number for mobile number using math fnc', ()=> {

    var pattern = "5858555654343343434543232323345422"

    for (var i = 0; i < 8; i++)
    randomText02+=pattern.charAt(Math.floor(Math.random() * pattern.length));
   
    testNumber = 58 + randomText02;

})


beforeEach('Before Each block for url and view port',()=> {

basepage.clearCache();  
basepage.loadUrl();
basepage.updateViewPortTo1280X720();

})

before('Before block to load json', ()=> {

cy.readFile('cypress/fixtures/identityDetails.json').then((res)=> {

    details = res;

})

})


it('This test will test if the user is able enter all the information all the pages to get travel insurance quotes', ()=> {

homepage.clickTravelInsuranceLnk();

traveltypeselection.clickTravelOutOfUAEBtn();

typeofinsurancecover.clickSingleTripBtn();

tripdate.selectFromDateInCalendar();
tripdate.selectToDateInCalendar();

travelingto.selectCountryFromDropdown();
travelingto.clickNxtBtn();

travelerdetails.selectDateOfBirth();
travelerdetails.selectGenderMale();
travelerdetails.clickNextBtn();

identitydetails.enterName(details.name)
identitydetails.enterEmail(testEmail);
identitydetails.enterMobileNumber(testNumber);
identitydetails.SelectNationality();
identitydetails.turnOffUpdatesToggleBtn();
identitydetails.clickViewQuotesBtn();



})


})