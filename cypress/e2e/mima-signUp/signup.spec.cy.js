import { faker } from '@faker-js/faker';
// import Homepage from '../../support/pages/HomePage'
// import SignupPage from '../../support/pages/SignUpPage';
// const home = new Homepage
// const signUp = new SignupPage
describe('Sign up Test Scenerios', () => {
  
  it('User should be able to sign up successfully by filling all required and optional fields', () => {
    cy.fixture('selector').then((data)=>{
      cy.clickAnyElement(data.homePagesignUpBotton)
      cy.typeAnyTextAnywhere(data.fullnameField, faker.person.fullName())
      cy.typeAnyTextAnywhere(data.BiznameField, faker.company.buzzVerb())
      cy.typeAnyTextAnywhere(data.BizemailField, faker.internet.email('provide', 'mail.com'))
      cy.typeAnyTextAnywhere(data.PhonenumberField, faker.phone.number('+23480########'))
      cy.typeAnyTextAnywhere(data.BizregNumField, 'TG2210')
      cy.clickAnyElement(data.nextBottun)
      cy.typeAnyTextAnywhere(data.websiteFiled, faker.internet.url())
      cy.typeAnyTextAnywhere(data.ighandleField, 'TG_Inc')
      cy.typeAnyTextAnywhere(data.XhandleField,'TG@Inc')
      cy.clickAnyElement(data.infoField)
      cy.clickAnyElement(data.dropdownOption).contains('Facebook').click()
      cy.typeAnyTextAnywhere(data.passwordField, 'Tester@22')
      cy.clickAnyElement(data.signUpButton)
      // cy.clickAnyElement(data.welcomeMessage).should('be.visible')
      cy.isMessageVisible(data.welcomeMessage).should('be.visible').and('contains','Welcome' );
  
       

      // signUp.insertNextButton
      // cy.get(data.fullnameField).should('be.visible').click().type('Pentagon Sords')
      // cy.get(data.BiznameField).should('be.visible').click().type('Pent Inc')
      // cy.get(data.BizemailField).should('be.visible').click().type(faker.internet.email({provider:'mail.com'}))
      // cy.get(data.PhonenumberField).should('be.visible').click().type(faker.phone.number('+2348########'))
      // cy.get(data.BizregNumField).should('be.visible').click().type('BN-22010P')
      // cy.get(data.nextBottun).should('be.visible').click()
     

    // cy.get('#website').should('be.visible').click().type('https://www.pentInc.com')
    // cy.get('#instagramHandle').should('be.visible').click().type('pent_Inc')
    // cy.get('#twitterHandle').should('be.visible').click().type('@pent_Inc')
    // cy.get('div.sc-cPiKLX.iafYdr').should('be.visible').click()
    // cy.get('.MimaDropdown_select__options__xLi7K').should('be.visible').contains('Facebook').click()
    // cy.get('#password').should('be.visible').click().type('Tester1234')
  })

  // it.skip('User should be able to sign up successfully by filling all required and optional fields', () => {
  //   cy.fixture('selector').then((data)=>{
  //     // home.clickAnyElement(data.homePagesignUpBotton)
  //     cy.get(data.fullnameField).should('be.visible').click().type('Pentagon Sords')
  //     cy.get(data.BiznameField).should('be.visible').click().type('Pent Inc')
  //     cy.get(data.BizemailField).should('be.visible').click().type(faker.internet.email({provider:'mail.com'}))
  //     cy.get(data.PhonenumberField).should('be.visible').click().type(faker.phone.number('+2348########'))
  //     cy.get(data.BizregNumField).should('be.visible').click().type('BN-22010P')
  //     // cy.get(data.nextBottun).should('be.visible').click()
  //   })

    // cy.get('#website').should('be.visible').click().type('https://www.pentInc.com')
    // cy.get('#instagramHandle').should('be.visible').click().type('pent_Inc')
    // cy.get('#twitterHandle').should('be.visible').click().type('@pent_Inc')
    // cy.get('div.sc-cPiKLX.iafYdr').should('be.visible').click()
    // cy.get('.MimaDropdown_select__options__xLi7K').should('be.visible').contains('Facebook').click()
    // cy.get('#password').should('be.visible').click().type('Tester1234')
  // })

  // it('User should be able to sign up successfully by filling all required and optional fields', () => {
  //   cy.fixture('selector').then((data)=>{
  //     // home.clickAnyElement(data.homePagesignUpBotton)
  //     cy.get(data.fullnameField).should('be.visible').click().type('Pentagon Sords')
  //     cy.get(data.BiznameField).should('be.visible').click().type('Pent Inc')
  //     cy.get(data.BizemailField).should('be.visible').click().type(faker.internet.email({provider:'mail.com'}))
  //     cy.get(data.PhonenumberField).should('be.visible').click().type(faker.phone.number('+2348########'))
  //     cy.get(data.BizregNumField).should('be.visible').click().type('BN-22010P')
  //     // cy.get(data.nextBottun).should('be.visible').click()
  //   })

    // cy.get('#website').should('be.visible').click().type('https://www.pentInc.com')
    // cy.get('#instagramHandle').should('be.visible').click().type('pent_Inc')
    // cy.get('#twitterHandle').should('be.visible').click().type('@pent_Inc')
    // cy.get('div.sc-cPiKLX.iafYdr').should('be.visible').click()
    // cy.get('.MimaDropdown_select__options__xLi7K').should('be.visible').contains('Facebook').click()
    // cy.get('#password').should('be.visible').click().type('Tester1234')
  })

  // it('User should be able to sign up successfully by filling all required and optional fields', () => {
  //   cy.get('#fullname').should('be.visible').click().type('Pentagon Sords')
  //   cy.get('#businessname').should('be.visible').click().type('Pent Inc')
  //   cy.get('#businessemail').should('be.visible').click().type(faker.internet.email({provider:'mail.com'}))
  //   cy.get('#businessphonenumber').should('be.visible').click().type(faker.phone.number('+2348########'))
  //   cy.get('#businessRegNum').should('be.visible').click().type('BN-22010P')
  //   cy.get('button.sc-imWYAI.fDRXF').should('be.visible').click()
  //   cy.get('#website').should('be.visible').click().type('https://www.pentInc.com')
  //   cy.get('#instagramHandle').should('be.visible').click().type('pent_Inc')
  //   cy.get('#twitterHandle').should('be.visible').click().type('@pent_Inc')
  //   cy.get('div.sc-cPiKLX.iafYdr').should('be.visible').click()
  //   cy.get('.MimaDropdown_select__options__xLi7K').should('be.visible').contains('Facebook').click()
  //   cy.get('#password').should('be.visible').click().type('Tester1234')
  // })

  // it.skip('User should be able to sign up successfully by filling all required and optional fields', () => {
  //   cy.get('#fullname').should('be.visible').click().type('Pentagon Sords')
  //   cy.get('#businessname').should('be.visible').click().type('Pent Inc')
  //   cy.get('#businessemail').should('be.visible').click().type(faker.internet.email({provider:'mail.com'}))
  //   cy.get('#businessphonenumber').should('be.visible').click().type(faker.phone.nƒumber('+2348########'))
  //   cy.get('#businessRegNum').should('be.visible').click().type('BN-22010P')
  //   cy.get('button.sc-imWYAI.fDRXF').should('be.visible').click()
  //   cy.get('#website').should('be.visible').click().type('https://www.pentInc.com')
  //   cy.get('#instagramHandle').should('be.visible').click().type('pent_Inc')
  //   cy.get('#twitterHandle').should('be.visible').click().type('@pent_Inc')
  //   cy.get('div.sc-cPiKLX.iafYdr').should('be.visible').click()
  //   cy.get('.MimaDropdown_select__options__xLi7K').should('be.visible').contains('Facebook').click()
  //   cy.get('#password').should('be.visible').click().type('Tester1234')
  // })
})
