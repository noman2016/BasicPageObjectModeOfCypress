///<reference types="cypress" />
import{loginPage} from "../pom_file/login_page.cy"

const loginPage_ver =new loginPage()

    it('login test', function(){

        loginPage_ver.navigate('https://trytestingthis.netlify.app/')
        loginPage_ver.enterUsername('test')
        loginPage_ver.enterPassword('test')
        loginPage_ver.clickLogin()

    })

/*///<reference types="cypress" />

it('login test', function(){

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()
    
})*/