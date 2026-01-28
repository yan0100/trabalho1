#  tecnolog - site sobre tecnologias

Este projeto é uma aplicação web interativa que funciona como um catálogo de informações sobre o mundo da tecnologia. Foi desenvolvido como o trabalho prático da disciplina de programaçao basica para web

** Link do Projeto (GitHub Pages):** [https://yan0100.github.io/trabalho1/](https://yan0100.github.io/trabalho1/)

##  Resumo do Projeto
O site permite que o utilizador explore diferentes tecnologias, filtre conteúdos através de uma barra de pesquisa e guarde os seus itens favoritos. A aplicação consome dados externos via API, demonstrando o uso de fluxos assíncronos e persistência de dados local.

##  Checklist de Conformidade
Conforme exigido nos requisitos técnicos, o projeto contempla:

- [x] **Estruturas básicas:** Uso de `let`/`const`, condicionais (`if/else`) e laços de repetição.
- [x] **Objetos e Arrays:** Modelagem da entidade "Tecnologia" e uso de métodos `map`, `filter` e `sort`.
- [x] **Arrow functions:** Implementadas em todos os manipuladores de eventos e funções auxiliares.
- [x] **DOM Dinâmico:** Renderização de cards de conteúdo e atualização da interface sem recarregar a página.
- [x] **Assíncrono (Fetch):** Requisição para [NOME DA API OU ARQUIVO .JSON] com tratamento de **Loading** e **Erros**.
- [x] **Promises & Async/Await:** Fluxos de dados tratados tanto com `.then/.catch` quanto com `async/await` + `try/catch`.
- [x] **Web Storage:** Uso de `localStorage` para manter a lista de favoritos mesmo após fechar o browser.
- [x] **API HTML5 Opcional:** Implementação da [NOME DA API, ex: Clipboard API para copiar links].
- [x] **Responsividade & Acessibilidade:** Layout Mobile-First, uso de HTML semântico e contrastes adequados.
- [x] **Organização:** Código separado em `index.html`, `styles.css` e `app.js`.

##  Decisões Técnicas
- **Manipulação de Dados:** Utilizei o método `.filter()` para a funcionalidade de busca em tempo real, garantindo que a lista de tecnologias seja filtrada enquanto o utilizador digita.
- **Tratamento de Erros:** Implementei um bloco `try/catch` na função de fetch para que, caso a API falhe, o utilizador veja uma mensagem de erro amigável em vez de uma tela vazia.
- **UX (User Experience):** Adicionei um indicador visual de "Carregando..." enquanto os dados da API são processados.

##  Como Executar
1. Clone este repositório: `git clone https://github.com/yan0100/trabalho1.git`
2. Abra o arquivo `index.html` no seu navegador de preferência.

##  Prints / GIFs
*(Dica: Adicione aqui uma imagem do seu site funcionando)*
![Preview do Site](site.png)

##  Declaração de Uso de IA
Este projeto contou com o apoio da IA **Gemini (Google)** para as seguintes tarefas:
- Estruturação inicial deste arquivo README.
- Sugestões de boas práticas para a implementação do `localStorage`.
- Refatoração de funções tradicionais para o padrão Arrow Function.
As decisões finais sobre design e lógica de negócio foram tomadas por mim, garantindo a autoria do projeto.

---
**Autor:** Yan Felipe Ferreira de Souza
**Matrícula:** 202510350016
**Disciplina:** programaçao basica para web
