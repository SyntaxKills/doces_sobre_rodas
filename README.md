Está muito bom e bem organizado, mas encontrei alguns pontos que precisam ser corrigidos para o Markdown e o Mermaid funcionarem corretamente no GitHub.

Os principais problemas são:

O bloco mermaid não foi fechado corretamente.

Algumas entidades usadas no diagrama não foram definidas (CATEGORIA, QUIOSQUE, FUNCIONARIO, ITENS_PEDIDO).

O final do README possui um ``` sobrando.

Pequenos ajustes de escrita deixam o texto mais profissional.


Aqui está a versão corrigida:

🥯 DOCES SOBRE RODAS

<p align="center">
  <img src="assets/images/logotipo-1.jpg" width="250">
</p>MODELAGEM EM BANCO DE DADOS

---

🪪 Identificação

Doces Sobre Rodas: uma loja móvel focada na venda de doces artesanais, com controles 100% manuais.

---

⚠️ Problema

Os principais problemas são:

- Erros e confusões no cardápio: os produtos são listados por categoria, mas itens esgotados continuam sendo exibidos, gerando desalinhamento entre o cardápio e o estoque.

- Dados inconsistentes: o controle manual está sujeito a erros de contagem e a acidentes físicos (como papéis molhados ou rasgados), tornando as informações de estoque incertas e pouco confiáveis.

- Insatisfação e perda de vendas: a falta de organização e a demora para confirmar a disponibilidade dos doces geram uma experiência negativa para os clientes, resultando na perda de vendas.

---

✔️ Solução

A substituição de planilhas e cardápios físicos por um sistema automatizado reduziu erros de vendas, inconsistências de dados e a insatisfação dos clientes.

A nova solução agiliza o atendimento e organiza o estoque de doces por categorias, facilitando a visualização e o controle dos produtos.

---

📌 Regras de Negócio

- RN01 (Vínculo de Categoria): todo produto deve estar obrigatoriamente vinculado a uma categoria ("Chave Estrangeira").

- RN02 (Nome Único): o nome do produto deve ser exclusivo no sistema para evitar duplicidade no catálogo ("Valor Único").

- RN03 (Data de Validade): a data de validade do produto não pode ser retroativa, ou seja, deve ser igual ou maior que a data de cadastro ("Regra de Validação").

- RN04 (Controle de Estoque): a quantidade de produtos em estoque nunca pode ser um valor negativo ("Regra de Validação").

- RN05 (Itens do Pedido): um pedido pode conter vários produtos, e um produto pode estar presente em vários pedidos ("Relacionamento N:N").

- RN06 (Fechamento de Venda): o registro da forma de pagamento é obrigatório para a finalização de qualquer venda ("Preenchimento Obrigatório").

- RN07 (Preço do Produto): o valor de venda do produto deve ser obrigatoriamente maior que zero ("Regra de Validação").

---

📈 Modelo Entidade-Relacionamento (MER)

erDiagram
    CLIENTE ||--o{ PEDIDO : realiza
    PEDIDO ||--|{ ITENS_PEDIDO : possui
    PAGAMENTO ||--|| PEDIDO : confirma
    PRODUTO ||--o{ ITENS_PEDIDO : incluido_em
    CATEGORIA ||--o{ PRODUTO : classifica
    QUIOSQUE ||--o{ PEDIDO : processa
    QUIOSQUE ||--o{ ESTOQUE_QUIOSQUE : possui
    PRODUTO ||--o{ ESTOQUE_QUIOSQUE : armazenado_em
    QUIOSQUE ||--o{ FUNCIONARIO : emprega

    CLIENTE {
        int id_cliente PK
        string nome
        string email
        string telefone
    }

    PEDIDO {
        int id_pedido PK
        datetime data_pedido
        decimal valor_total
        int id_cliente FK
        int id_quiosque FK
    }

    PRODUTO {
        int id_produto PK
        string nome
        string descricao
        decimal preco
        int id_categoria FK
    }

    CATEGORIA {
        int id_categoria PK
        string nome_categoria
    }

    ITENS_PEDIDO {
        int id_item PK
        int quantidade
        decimal subtotal
        int id_pedido FK
        int id_produto FK
    }

    PAGAMENTO {
        int id_pagamento PK
        string forma_pagamento
        string status_pagamento
        int id_pedido FK
    }

    QUIOSQUE {
        int id_quiosque PK
        string nome
        string localizacao
    }

    FUNCIONARIO {
        int id_funcionario PK
        string nome
        string cargo
        int id_quiosque FK
    }

    ESTOQUE_QUIOSQUE {
        int id_estoque PK
        int quantidade
        int id_quiosque FK
        int id_produto FK
    }

---

💻 Apresentação do Site

Desenvolvendo...

---

🛠️ Ferramentas

"HTML5" (https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

"CSS3" (https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

"JavaScript" (https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

"MySQL" (https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

---

👨🏻‍💻 Desenvolvedores

- Victor Cândido
- Alex Júnior
- Eduardo Alarcon
- Lucas Gonçalves
- Igor Macedo
- Isaac Matos
- Fernanda Costa

---

📞 Contato

<a href="https://instagram.com/doce_sobre_rodas" target="_blank">
  <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram">
</a>---

📄 Documentação

<a href="documento.txt" target="_blank">
  <img src="https://img.shields.io/badge/documentação-%230078D4.svg?style=for-the-badge&logo=read-the-docs&logoColor=white" alt="documentação">
</a>---

🍩 Doces Sobre Rodas

Doces artesanais de qualidade, unindo automação e sabor para garantir a melhor experiência em cada pedido.

---

Copyright © 2026 Doces Sobre Rodas
