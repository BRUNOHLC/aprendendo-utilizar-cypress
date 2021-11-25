/// <reference types="cypress" />
import elements from '../BrunoBatista/elements'

before(() => {
    cy.visit('')
});

class ComecarAutomacao {

    primeiroacesso() {

        cy.get(elements.btn_comecar).click()

    }

    validarpagina() {

        cy.get(elements.validarPag1).contains('Bem vindo')
    }

    criarUsuario() {

        cy.get(elements.new_user).click()
        cy.get(elements.validarNovoUsuario).contains('Novo Usuário!!')
        cy.get(elements.nome_usuario).type('bruno')
        cy.get(elements.ultimo_nome).type('carvalho')
        cy.get(elements.email).type('b@b.com')
        cy.get(elements.endereco).type('aaaaaaaaaaaaaaaaaa')
        cy.get(elements.universidade).type('estacio')
        cy.get(elements.profissao).type('QA')
        cy.get(elements.genero).type('Masc')
        cy.get(elements.idade).type('31')
        cy.get(elements.criar_novo_usuario).click('')
        cy.get(elements.validar_usuario_criado).contains('Usuário Criado com sucesso')

    }

    

}

export default new ComecarAutomacao 