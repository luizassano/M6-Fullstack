### <h1 align="center">Registex</h1>


## Install

    yarn install

## Configuração .env

    Criar o arquivo .env e configurar como o .env.example

## Migration

    $ sudo yarn typeorm migration:generate src/migrations/client -d src/data-source.ts

## Migration Run

    $ sudo api yarn typeorm migration:run -d src/data-source.ts

## Startar aplicação

    $ sudo yarn dev


## Rotas

* POST /registers
* POST /login
* GET /registers
* PATCH /registers/:id
* DELETE /registers/:id
* POST /associate
* PATCH /associate/:associate_id
* DELETE /associate/:associate_id
* GET /associate/:associate_id
* GET /associate
