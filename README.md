# 🐱 Servidor HTTP Node.js com Códigos de Status (http.cat)

Este projeto foi desenvolvido como parte da disciplina **Desenvolvimento de Sistemas Web**, com o objetivo de entender e praticar os códigos de status HTTP utilizando **Node.js nativo**, sem frameworks.

Cada rota exibe uma imagem correspondente ao código HTTP, baseada no site [http.cat](https://http.cat).

---

## 🚀 Como executar o projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git
Entre na pasta do projeto:

bash
Copiar
Editar
cd nome-do-repo
Execute o servidor:

bash
Copiar
Editar
node server.js
Acesse as rotas no navegador:

Rota	Código HTTP	Descrição
/ok	200	OK
/processing	102	Processing
/proxy	305	Use Proxy
/bad	400	Bad Request
/failed	417	Expectation Failed
/notfound	404	Not Found
/conflict	409	Conflict
/unsupported	415	Unsupported Media Type
/error	500	Internal Server Error
/conection	599	Network Connect Timeout

Caso uma rota inválida seja acessada, o servidor retorna um erro 404 com mensagem em JSON.

### 📚 Tecnologias utilizadas
Node.js

Módulos nativos http, https e url

API pública http.cat

### 📝 Objetivo educacional
Este projeto faz parte da atividade de consolidação da aula de 16/05/2025, e tem como finalidade reforçar o uso dos códigos HTTP estudados. Os alunos devem implementar um código novo, que ainda não foi usado em aula, e poderão ser sorteados para apresentarem na aula do dia segunda-feira às 20:20.

### 💡 Observações
O projeto não utiliza Express nem outras bibliotecas externas, sendo totalmente construído com Node.js puro.

As imagens dos status HTTP são fornecidas pelo serviço gratuito do http.cat.

Feito para fins de aprendizado.

Obrigado pela visita! <3
