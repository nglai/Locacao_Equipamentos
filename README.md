Projeto: Empresa de locação de equipamentos para eventos.
1. Criar Api que provisionará informações para aplicações cliente (Web e Mobile).

Dependencias:
npm init -y => Inicializa o projeto node, cria o package.json
npm i express => Biblioteca node
npm i @types/express => Tipagem do express
npm i @types/node => Tipagem do node
npm i typescript -D => Instala typescript em dev
npm i ts-node-dev -D => Biblioteca responsavel por converter o codigo ts para uma forma que o node entenda. Evitar precisar usar tsc para transpilar em JS toda hora.
tsc --init => Cria o tsconfig.json, traz algumas configurações de TS.

No primeiro momento os dados serão locais, armazenadas em data.ts.

A API deve ter uma rota GET/health que retornará um objeto JSON {healthCheck: true}
Primeiro foi criada o controller que contém a implementação do retorno do objeto e responde a rota.
Depois foi criado a rota e chamada no app.ts.

O Router ajuda a criar uma lista de todas as rotas da API e associá-las ao controlador que contém o código de implementação.

Status de resposta HTTP:
Respostas de informação (100-199),
Respostas de sucesso (200-299),
Redirecionamentos (300-399),
Erros do cliente (400-499),
Erros do servidor (500-599).
200 - Requisição bem sucedida
201 - Requisição sucedida e recurso criado - Post
400 - Bad request - o servidor não entendeu a requisição
401 - Unauthorized - cliente deve se autenticar
404 - Servidor não pode encontrar o recurso solicitado
500 - Internal Server Error - Servidor encontrou uma situação que não sabe lidar

A API cliente usada para simular foi o Postman.