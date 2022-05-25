![](/webacademy.png)
#  👩🏽‍💻 CRUD Node.js 👨🏽‍💻
Projeto desenvolvido com um CRUD básico de disciplinas para o módulo testes do programa Web Academy.

## 💻 Como rodar o projeto?

* git clone

* usar o comando: 
```npm init (pode dar enter em todas as perguntas)```

* Agora é a hora de instalar o express, dentro da pasta use o comando no terminal: 
```npm install express```

* Instale o nodemon: 
```npm install -g nodemon```

* Comando para rodar o projeto:
```node index.js ```

* Para verificar se está funcionando entre no http://localhost:3010/cursos

## ✅ Tests Usados no Postman
* Função espera um requisição com o status code 200: ```pm.test("Status code is 200", function () {pm.response.to.have.status(200);});```
* Função espera um requisição com o status code 201/202:```pm.test("Successful POST request", function () {pm.expect(pm.response.code).to.be.oneOf([201, 202]);});```

## 🎥 Video de Configuração:
https://www.youtube.com/watch?v=2FrHcxLvN98&t=1s
## 🎥 CRUD usando o postman:
https://www.youtube.com/watch?v=s4z8jGNkKY0&t=23s
## 🎥 CRUD usando o Insomnia: 
https://www.youtube.com/watch?v=Q7l67HmPBgQ
