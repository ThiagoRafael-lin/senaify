describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    // cy.viewport("iphone-xr") //tamanho da tela
    
  })

  it('Verificar está axibido', () => {

    // *[aria-label='title-head'] // esse comando procura estilização
    cy.get("[aria-label='title-head']")
    cy.get("[aria-label='title-head']").should("contain", "Good morning")

  })

  it('Verificar se tem uma lista com as playlist exibida', () => {
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)

  });

  it("Clicar em uma opção de playlist e listar suas músicas", () => {

    cy.get("[aria-label='playlist-item']").first().click()
    cy.wait(2000)
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)

  });

  it("Clicar em uma opção de playlist e listar suas músicas", () => {

    cy.get("[aria-label='music-item']").eq(4).click()

    cy.scrollTo("top")

  });
})