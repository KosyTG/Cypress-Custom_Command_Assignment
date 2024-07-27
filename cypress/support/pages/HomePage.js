class Homepage{
    

    clickSignUpHomePageButton(){
        cy.get(".Header2_header__nav__btn__wRKfY div:nth-child(2) button").should('be.visible').click()
    }

    // clickAnyElement(element){
    //     cy.get(element).should('be.visible').click()

    // }


}
    
export default Homepage