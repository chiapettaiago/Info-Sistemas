const express = require('express');
const server = express();

server.use(express.json());

//Dados Utilizados
const users = [
    {id:'1', placa: 'KMP-2130', chassi: '8Ax HCP9C3 ez 1y5661', renavam: '13766268391', marca: 'GM - Chevrolet', modelo: 'CRUZE LTZ 1.8 16V FlexPower 4p Aut.', ano: '2009'},  
    {id:'2', placa: 'KRZ-9492', chassi: '6t3 j8A0cT 4H G10196', renavam: '97849938131', marca: 'Renault', modelo: 'Master 2.3 dCi Chassi 16V Diesel', ano: '2021'},
    {id:'3', placa: 'KXT-0000', chassi: '1r2 tAA535 U7 Jb8421', renavam: '97882911328', marca: 'Ford', modelo: 'Fiesta 1.0 8V Flex/Class 1.0 8V Flex 5p', ano: '2012'},
    {id:'4', placa: 'LQH-1513', chassi: '2A9 5aMACV 09 by3625', renavam: '02140582963', marca: 'Mitsubishi', modelo: 'Eclipse GS/ GS Turbo Mec', ano: 2008}
]


//Listagem de dados
server.get('/users', (req, res) => {
    return res.json(users);
});

//Criação de Dados
server.post('/users', (req, res) => {
    const {name} = req.body

    users.push(name)

    return res.json(users)
});

//Atualização de dados
server.put('/users/:index', (req, res) => {
    const {index} = req.params
    const {name} = req.body

    users [index] = name

    return res.json(users)
});

//Deletar dados
server.put('/users/:index', (req, res) => {
    users.splice(index, 1)
});


server.listen(4000, () => console.log("Servidor está sendo executado!!!") );