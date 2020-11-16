# Crud Clientes
### Descrição
Projeto de CRUD de clientes de uma loja fictícia (Maria Bonita) em Django.

### Tecnologias utilizadas
| Tecnologias |
| ------ |
| Django | 
| Javascript (ES6) | 
| PostgreSQL | 
| PGAdmin-4 |
| Postman |

### Endpoints da API
| Endpoint | HTTP Method | Resultado |
| ------ | ------ | ------ |
| clients/ | GET | Lista todos os clientes cadastrados. |
| clients/ |  POST | Cadastra um cliente. | 
| clients/id | GET | Lista os dados de um cliente. |
| clients/id | PATCH | Atualiza os dados de um cliente. |
| clients/id | DELETE | Deleta um cliente. |

### To Dos
- Implementar atualização, listagem e remoção de cliente no frontend. (DONE)
- Rotear as páginas pelo navbar. (DONE)
- Gerar os elementos da listagem de clientes pelo js. (DONE)
- Validar os inputs (email, telefone, nome, etc).
- Criar restrições na atualização dos dados.
- Consumir API Via CEP no frontend para dar autocomplete no formulário. (DONE)
- Mostrar mensagem de sucesso/erro ao cadastrar cliente (DONE)

### Informações adicionais
- Backend configurado para funcionar com o postgresql, precisa ser instalado: https://www.postgresql.org/.
- Credenciais utilizadas para conexão com o banco de dados estão no arquivo de configurações do django (settings.py).
- Deploy no heroku não funcionou, por algum motivo o heroku não está lendo as dependências no requirements.txt.

### Exemplo de JSON
POST/GET clients/ (o get retorna um array contendo todos os objetos no formato abaixo) e PATCH clients/id
(endpoint de atualização de dados).

```
{
    "name": "Iago Filipe",
    "phone": "81986949918",
    "birth": "2000-03-05",
    "address": "279",
    "neighborhood": "Pau Amarelo",
    "cep": "53429620",
    "state": "PE",
    "city": "Paulista",
    "reference_point": "Em frente a um depósito de bebidas.",
    "email": "hiagoestrelas@gmail.com"
}
```