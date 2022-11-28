# Trabalho Final Flutter (Server)

Trabalho Final Flutter (Server) - Disciplina PROGRAMAÇÃO DISPOSITIVOS MÓVEIS (2022.2)

Backend feito para armazenar os dados vindos do aplicativo de previsões, feito usando NodeJS, MongoDB e clean-architecture.

## Requisitos para iniciar 🛠

- Docker >= 20.10.21
- Docker compose >= 1.29.2
- NodeJS >= 14.18.3
- NPM >= 6.14.15
- Crie um arquivo `.env.local` na raiz do projeto. Baseado no `.env.example` preencha as variáveis de ambiente se quiser (já deixei elas preenchidas com o que irá precisar, a porta do servidor localhost e a URL do MongoDB).

## Como iniciar

```bash
$ docker-compose up -d # inicia o container do MongoDB
$ npm i # instala as dependências do NodeJS
$ npm run dev # inicia o servidor em modo de desenvolvimento
```

----------
By [Victor B. Fiamoncini](https://github.com/Victor-Fiamoncini) ☕️
