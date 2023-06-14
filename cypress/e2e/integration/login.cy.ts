///<reference types="cypress" />
import{loginPage} from "../pom_file/login_page.cy"

const loginPage =new loginPage()

    it('login test', function(){

        loginPage.navigate()
        loginPage.enterUsername()
        loginPage.enterPassword()
        loginPage.clickLogin()

    })

/*///<reference types="cypress" />

it('login test', function(){

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()
    
})*/