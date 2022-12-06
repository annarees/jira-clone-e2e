describe('Workshop 20', () => {
    it('Workshop 20', () => {
        cy.visit('/');
        cy.get('[data-testid="icon:plus"]').click();
        cy.get('[data-testid="modal:issue-create"]').should('be.visible');
        cy.get('[data-testid="select:type"]').click();
        cy.get('[data-testid="select-option:Story"]').click();
        cy.get('[data-testid="select:type"]').should('have.text','Story');
        cy.get('[name="title"]').type('Pealkiri');
        cy.get('[name="title"]').should('have.value','Pealkiri');
        cy.get('.ql-editor').type('TEST_DESCRIPTION');
        cy.get('.ql-editor').should('not.be.empty');
        cy.get('[data-testid="select:reporterId"]').click();
        cy.get('[data-testid="select-option:Baby Yoda"]').click();
        cy.get('[data-testid="select:reporterId"]').should('have.text','Baby Yoda');
        cy.get('[data-testid="select:userIds"]').click();
        cy.get('[data-testid="select-option:Baby Yoda"]').click();
        cy.get('[data-testid="select:priority"]').click();
        cy.get('[data-testid="select-option:High"]').click();
        cy.get('[data-testid="select:priority"]').should('have.text','High');
        cy.get('button[type="submit"]').click();

    });
});
describe('Workshop 20 Task1', () => {
    it('Workshop 20 Task1', () => {
        cy.visit('/');
        cy.get('[data-testid="icon:plus"]').click();
        cy.get('[data-testid="modal:issue-create"]').should('be.visible')
        cy.get('[data-testid="form-field-13"][data-testid="icon:close"]').click();
        cy.get('[data-testid="select:reporterId"][data-testid="icon:close"]').click();
        
        //cy.get('[data-testid="select-option:Select"]').click();
        //cy.get('[data-testid="select:type"]').should('have.text','Story');
        //cy.get('[textarea[placeholder="Search"]');
       // cy.get('.sc-dxgOiQ jiQqGY').clear();
        cy.get('[name="title"]').should('be.empty');
        cy.get('.ql-container').clear();
        cy.get('[data-testid="select:reporterId"][data-testid="icon:close"]').click();//.click('bottomRight');
        //cy.get('textarea[placeholder="Search"]').click('right');
       // cy.get('[class="sc-Rmtcm gJIJXg"]')
        //.get(':: before').click();
        //cy.get('[class="sc-bdVaJa buNcFy sc-bRBYWo emFNex"]').click();
        //cy.get('[data-testid="icon:close"]').click();
        //cy.get('[data-testid="select-option"]');
        cy.get('[data-testid="select:userIds"]');
        //cy.get('[data-testid="select-option"]');
        cy.get('[data-testid="select:priority"]');
        //cy.get('[data-testid="select-option:High"]');

        //cy.get('[data-testid="select:type"]').should('contain', 'This field is required');
        //cy.get('button[type="submit"]').click();

    });
});
describe('Workshop 20 Task1', () => {
    it('Workshop 20 Task1', () => {
        cy.visit('/');
        cy.get('[data-testid="icon:plus"]').click();
        cy.get('[data-testid="modal:issue-create"]').should('be.visible')
        cy.get('[data-testid="select:type"]').click()//('This field is required');
        cy.get('[name="title"]').should('be.empty')//('This field is required');
        cy.get('.ql-container').clear()//('This field is required');
        cy.get('[data-testid="select:reporterId"]').click();
        cy.get('[data-testid="form-field:userIds"]').click();
        cy.get('[data-testid="data-testid="form-field:priority""]').click();

        //cy.get('[data-testid="select:type"]').should('contain', 'This field is required');
        //cy.get('button[type="submit"]').click();
        
    });
});
describe('Workshop 20 Task1', () => {
    it.only('Workshop 20 Task1', () => {
        cy.visit('/');
        cy.get('[data-testid="icon:plus"]').click();
        cy.get('[data-testid="modal:issue-create"]').should('be.visible')
        cy.get('[data-testid="form-field:type"]').click();
        //click on the x button in the type field to remove by default chosen Task type
        cy.get('[data-testid="form-field:type"] [data-testid="icon:close"]').click();
        //click outside of the dropdown on the Description label
        cy.get('[data-testid="form-field:description"] label').click();
        cy.get('.ql-container').clear()//('This field is required');
        cy.get('[data-testid="form-field:reporterId"]').click();
        cy.get('[data-testid="form-field:reporterId"] [data-testid="icon:close"]').click();
        cy.get('[data-testid="form-field:description"] label').click();
        cy.get('[data-testid="form-field:userIds"]').click();
        cy.get('[data-testid="form-field:description"] label').click();
        cy.get('[data-testid="form-field:priority"]').click();
        cy.get('[data-testid="form-field:priority"] [data-testid="icon:close"]').click();
        cy.get('[data-testid="form-field:description"] label').click();
       // cy.get('[data-testid="form-field:type"]').should('contain', 'This field is required');





        
    });
});
