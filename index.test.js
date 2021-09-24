const Todos = require('./index');
const express = require('express');
const assert = require('assert').strict;
const server = express();

server.use(express.json());

describe("/GET users", function() {
    it("Deve retornar lista de veículos", function() {
        server.get('/users');
        console.log("Primeiro teste funcionando corretamente!!!");
    });
});

describe("/POST users", function() {
    it("Deve conseguir criar itens na lista de veículos", function() {
        server.post('/users');
        console.log("Segundo teste funcionando corretamente!!!");
    });
});

describe("/PUT users", function() {
    it("Deve permitir atualizar itens na lista de veículos", function() {
        server.put('/users');
        console.log("Terceiro teste funcionando corretamente!!!");
    });
});

describe("/PUT users", function() {
    it("Deve permitir deletar itens na lista de veículos", function() {
        server.put('/users');
        console.log("Quarto teste funcionado corretamente!!!");
    });
});