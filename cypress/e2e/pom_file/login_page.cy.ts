///<reference types="cypress" />

export class loginPage{
    
    navigate(){
        cy.visit('https://trytestingthis.netlify.app/') 
    }
    enterUsername(){
        cy.get('#uname').type('test')
    }
    enterPassword(){
        cy.get('#pwd').type('test')
    }
    clickLogin(){
        cy.get('[type="submit"]').click()
    }
    
}

/*export class loginPage{
    
    navigate(){
        cy.visit('https://trytestingthis.netlify.app/') 
    }
    enterUsername(){
        cy.get('#uname').type('test')
    }
    enterPassword(){
        cy.get('#pwd').type('test')
    }
    clickLogin(){
        cy.get('[type="submit"]').click()
    }
    
}*/