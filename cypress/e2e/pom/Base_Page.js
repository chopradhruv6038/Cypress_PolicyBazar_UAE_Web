export class BasePage{

    url = 'https://www.policybazaar.ae/';




    clearCache(){

 this.clearCache;

    }



    loadUrl(endpoint){
    
    cy.visit(this.url);
    
    }


    updateViewPortTo1280X720(){

     cy.viewport(1280, 720)   // setting the viewport (width height) to get full screen
    

    }

}

