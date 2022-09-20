# pasta para o backend

## Subindo o servidor
Para rodar o servidor é necessário rodar o comando `npm install` para fazer o download dos pacotes. Em seguida, basta rodar o script `npm run dev` que o servidor estará de pé.

## Configurando e integrando com o banco de dados
O banco de dados será mantido na plataforma Cloud do MongoDB, Atlas. Para acessá-lo é necessário criar um arquivo `.env` na raiz da pasta `/backend` utilizando o `.env.example` como exemplo, porém devem ser inseridas as credenciais corretamente. Uma vez com o banco configurado, é possível realizar consultas e inserções através das rotas disponibilizadas no arquivo `src/app.js`.

## Consumindo a aplicação
Com o servidor rodando, é possível acessá-lo pelo `localhost:3000` em seu navegador ou softwares como Insomnia.