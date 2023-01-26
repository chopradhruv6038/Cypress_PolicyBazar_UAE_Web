import { BasePage } from "../pom/Base_Page";
import { HomePage } from "../pom/Home_Page";
import { TravelTypeSelection } from "../pom/TravelTypeSelection_Page";
import { TypeOfInsuranceCover } from "../pom/TypeOfInsuranceCover_Page";
import { TripDate } from "../pom/TripDates_Page";

const basepage = new BasePage();
const homepage = new HomePage();
const traveltypeselection = new TravelTypeSelection();
const typeofinsurancecover = new TypeOfInsuranceCover();
const tripdate = new TripDate();


describe('This suite will load Home page and execute its tests', ()=> {

beforeEach('',()=> {

basepage.clearCache();  
basepage.loadUrl();
basepage.updateViewPortTo1280X720();


})

it('This test will click on travel insurance on home page', ()=> {

homepage.clickTravelInsuranceLnk();
traveltypeselection.clickTravelOutOfUAEBtn();
typeofinsurancecover.clickSingleTripBtn();
tripdate.selectFromDateInCalendar();
tripdate.selectToDateInCalendar();



})


})