///<reference types="cypress" />

export class loginPage{
    /* 4 */
    loginPage_username = '#uname'
    loginPage_pasword = '#pwd'
    loginPage_loginButton = '[type="submit"]'

    navigate(url:string){
        cy.visit(url) 
    }
    enterUsername(username:string){
        cy.get(this.loginPage_username).type(username)
    }
    enterPassword(password:string){
        cy.get(this.loginPage_pasword).type(password)
    }
    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
    /* 3 */

    /*navigate(url:string){
        cy.visit(url) 
    }
    enterUsername(username:string){
        cy.get('#uname').type(username)
    }
    enterPassword(password:string){
        cy.get('#pwd').type(password)
    }
    clickLogin(){
        cy.get('[type="submit"]').click()
    }*/
    
    /* 2 */
    /*navigate(){
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
    }*/
    
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