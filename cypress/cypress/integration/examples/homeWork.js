///reference types= "cypress"/>

describe('Onbox test', () => {
    it('Testing onboy e-mail client', () => {
      // Open e-mail client
      cy.visit("https://www.onbox.hu/")

      // log in to account
      cy.get(":nth-child(6) > .c02107").click()
      cy.get ("strong").should("be.visible")
      cy.get ("#username").type('attila.toth.teszt.mail@onbox.hu')
      cy.get("#password").type('QO5kaN2pUVQPhKTU')
      cy.get("#loginBtn").click()
      
      // open arrived e-mails, I put some extra waiting here, because sometimes, the the runs out of timeout
      cy.get(".c02267 > .c0279 > .c0288", { timeout: 10000 }).should('be.visible');
      cy.get("[href='#/folder/184906036'] > .c02288").should('be.visible')
      cy.get("[href='#/folder/184906036'] > .c02288").click()
      
      // write e-mail to myself
      cy.wait(2000)
      cy.get('.c02259 > .c0249 > .c0268').click()
      cy.get ('#compose-to').type('attila.toth.teszt.mail@onbox.hu')
      cy.get ('#subject').type('Automatic test e-mail')
      cy.get (".c02571 > div").type("This is my a-mail, what I wrote to myself to test whether this mail client sends it to me.")
      cy.get (".c02607 > .c0249").click()
      // I wait 10 sec here
      cy.wait(10000)
      // I didn't receive any e-mail, although the mail, what I wrote is among the sent mails
      // so I try to reload the page.
      cy.reload()
      // and a wait 10 sec here too, for finishing the reload
      cy.wait(10000)
      // and here I put finally an assertion, when the "Nincs üzenet" sigh is visible 
      cy.get(":nth-child(2) > .c0225").should("not.be.visible")
    })
  })