# TodoList

Esta aplicação é uma API que adiciona itens em uma lista, como por exemplo uma lista de conteúdos para se estudar.


## Tecnologias que vamos usar:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MySQL` | Sistema que gerencia o banco de dados|
| `Jest` | Framework de testes|
<br>
<br>

## 📁 Arquitetura

```
📁 TODOLIST
   |
   |-  📁 src
   |
   |    |- 📁 controllers
   |         |- 📄 tasksController.js
   |         
   |    |- 📁 middlewares
   |         |- 📄 tasksMiddleware.js
   |
   |    |- 📁 models
   |         |- 📄 connection.js 
             |- 📄 tasksModel.js 
   | 
   |    |- app.js
        |- router.js
        |- server.js
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .eslintrc.json
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   ```
<br>

## Projeto desenvolvido por: 

### Larissa Monteiro
-[linkedin](https://www.linkedin.com/in/larissa-silva-monteiro/)
-[github](https://github.com/LcsMonteiro)