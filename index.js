const express = require ('express');

const server = express();

server.use(express.json());

var cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube'];

//Retorna um Curso
server.get('/cursos/:index',(req,res) => {
    const { index } = req.params

    return res.json(cursos[index]);
})

//Retornar todos os cursos
server.get('/cursos',(req,res) =>{
    return res.json(cursos)
});

//Criar um novo Curso
server.post('/cursos',(req,res)=>{
     const {name} = req.body;
     cursos.push(name);

     return res.status(201).send('');
});

//Atualizar um Curso
server.put('/cursos/:index', (req,res) =>{
   
    const {index} = req.params;
    const {name} = req.body;

    if(index-1 > cursos.length)
    return res.json({message: `Curso não existe`});

    cursos[index] = name;

    return res.json(cursos);
});

//Deletar um curso
server.delete('/cursos/:index', (req,res)=>{
    const {index} = req.params;

    if(index-1 > cursos.length)
        return res.json({message: `index not found`});

    const cursoDeleted = cursos[index];
    cursos = cursos.filter((item,i)=>{
        if(i!=index)
        return item
    })
    
    return res.json({message: `O Curso ${cursoDeleted} foi deletado com sucesso`});
});





server.listen(3010);
