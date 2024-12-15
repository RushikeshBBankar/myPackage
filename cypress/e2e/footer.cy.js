/// <reference types="Cypress" />
import {footerCount} from '../pages/footer'

export function Amazon() {
        describe('Amazon Footer Links', () => {
                context('Footer Length',()=>{
                        
                        before(() => {
                                cy.HomePage()
                        })
                
                        footerCount()
                })
        });
}
