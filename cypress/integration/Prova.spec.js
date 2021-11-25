/// <reference types="cypress" />
import ComecarAutomacao from '../support/BrunoBatista/index'

context('acessar conteudo', () => {

    it('clicar em comecar automação', () => {

        ComecarAutomacao.primeiroacesso()        
        ComecarAutomacao.validarpagina()
        
    });
    
});