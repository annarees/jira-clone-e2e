//Task 2:start deletion process for recently created issue, but cancel it.
//Create new test in the same spec file: open recently created issue, click to delete it, but cancel action in the confirmation dialogue.
//Expected result: Issue is not deleted, it is still displayed on the board, deletion confirmation dialogue is not visible.

//Task 3: Push your newly created spec file with all today’s tests to your repository master. 
//Expected result: Code is committed to the repository and new test run is visible in the Circle CI/CD and in Cypress cloud dashboard.

//Task 1: Create new test: open recently created issue (issue that was created in the beforeEach() section is always first in the backlog column) and delete it.
//Expected result: Issue is deleted and not displayed on the Jira board. 

describe('Workshop 22', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Workshop 22 Task 1', () => {
        cy.get('[data-testid="icon:plus"]').click();
        cy.get('[data-testid="modal:issue-create"]').should('be.visible');
        cy.get('[data-testid="select:type"]').click();
        cy.get('[data-testid="select-option:Story"]').click();
        cy.get('[data-testid="select:type"]').should('have.text', 'Story');
        cy.get('[name="title"]').type('Pealkiri');
        cy.get('[name="title"]').should('have.value', 'Pealkiri');
        cy.get('.ql-editor').type('TEST_DESCRIPTION');
        cy.get('.ql-editor').should('not.be.empty');
        cy.get('[data-testid="select:reporterId"]').click();
        cy.get('[data-testid="select-option:Baby Yoda"]').click();
        cy.get('[data-testid="select:reporterId"]').should('have.text', 'Baby Yoda');
        cy.get('[data-testid="select:userIds"]').click();
        cy.get('[data-testid="select-option:Baby Yoda"]').click();
        cy.get('[data-testid="select:priority"]').click();
        cy.get('[data-testid="select-option:High"]').click();
        cy.get('[data-testid="select:priority"]').should('have.text', 'High');
        cy.get('button[type="submit"]').click();
        cy.get('[data-testid="board-list:backlog]').should('be.visible');
    });
});

    it.only('Delete the issue',() => {
        cy.get('[data-testid="board-list:backlog] [p class=>Pealkiri<]');
    });



