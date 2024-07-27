import { faker } from '@faker-js/faker';
class SignupPage{
    insertFullname(){
        cy.fixture('selector').then(data=>{
            cy.get(data.fullnameField).should('be.visible').type(faker.person.fullName)
        })
    }

    insertBusinessname(){
        cy.fixture('selector').then(data=>{
            cy.get(data.BiznameField).should('be.visible').type(faker.company.buzzVerb)
        })
    }

    insertBusinessEmail(){
        cy.fixture('selector').then(data=>{
            cy.get(data.BizemailField).should('be.visible').type(faker.internet.email({provider:'yopmail'}))
        })
    }

    insertBusinessPhoneNumber(){
        cy.fixture('selector').then(data=>{
            cy.get(data.PhonenumberField).should('be.visible').type(faker.phone.number('+23481########'))
        })
    }

    insertBusinessRegNumber(){
        cy.fixture('selector').then(data=>{
            cy.get(data.BizregNumField).should('be.visible').type('2yc2210')
        })
    }


    // clickSignUpHomePageButton(){
    //     cy.get(".Header2_header__nav__btn__wRKfY div:nth-child(2) button").should('be.visible').click()
    // }

    // clickAnyElement(element){
    //     cy.get(element).should('be.visible').click()

    // }


}
    
export default SignupPage