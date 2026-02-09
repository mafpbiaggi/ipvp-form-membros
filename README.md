# Projeto - IPVP Form Membros

## Sobre
Este repositório contém arquivos para o sistema de atualização de membros da Igreja Presbiteriana de Vila Prudente.

## Estrutura do Sistema
```
ipvp-form-membros/
├── index.html
├── app.php
├── database-modelo.php
├── README.md
├── assets/
│   ├── css/
│   │   └── appStyle.css
│   ├── js/
│   │   ├── app.js
│   │   └── mask.js
│   └── img/
│       └── logo_branco.svg
│       └── logo-fundo-branco.png
├── docker/
│   ├── atualiza_membros_ipvp.sql
│   ├── atualiza_membros.dockerfile
|   └── dc-atualiza-membros-ipvp.yaml
```

### Observações
    1. Após adicionar os dados no arquivo _database-modelo.php_, altere o nome do arquivo para _database.php_.
    1. O arquivo 'docker/atualiza_membros_ipvp.sql' está vazio e deve ser importado depois da criação dos containers.

## Dados da Equipe
**Nome**: Marco Aurélio Biaggi ([@mafpbiaggi](https://github.com/mafpbiaggi))  
**E-mail**: mafpbiaggi@gmail.com | ti.ipvilaprudente@gmail.com
