# 🥯 DOCES SOBRE RODAS

<p align="center">
  <img src="assets/images/logotipo-1.jpg" width="250">
</p>

MODELAGEM EM BANCO DE DADOS
---

## 🪪 Identificação

Doces Sobre Rodas: uma loja móvel focada na venda de doces artesanais, com controles 100% manuais.

---

## ⚠️ Problema

Os principais problemas são:

- Erros e Confusões no Cardápio: Os produtos são listados por categoria, mas itens esgotados continuam sendo exibidos, gerando desalinhamento entre o cardápio e o estoque.
  
- Dados Inconsistentes: O controle manual está sujeito a erros de contagem e a acidentes físicos (como papéis molhados ou rasgados), tornando as informações de estoque incertas e pouco confiáveis.
  
- Insatisfação e Perda de Vendas: A falta de organização e a demora para confirmar a disponibilidade dos doces geram uma experiência negativa para os clientes, resultando na perda de vendas.

---

## ✔️ Solução

A substituição de planilhas e cardápios físicos por um sistema automatizado zerou a perda de vendas, os erros de dados e a insatisfação dos clientes.

A nova solução agiliza o atendimento e organiza o estoque de doces por categorias, facilitando a visualização.

---

## 📌 Regras de Negócio

- RN01 (Vínculo de Categoria): Todo produto deve estar obrigatoriamente vinculado a uma categoria (`Chave Estrangeira`).

- RN02 (Nome Único): O nome do produto deve ser exclusivo no sistema para evitar duplicidade no catálogo (`Valor Único`).

- RN03 (Data de Validade): A data de validade do produto não pode ser retroativa, ou seja, deve ser igual ou maior que a data de cadastro (`Regra de Validação`).

- RN04 (Controle de Estoque): A quantidade de produtos em estoque nunca pode ser um valor negativo (`Regra de Validação`).

- RN05 (Itens do Pedido): Um pedido pode conter vários produtos, e um produto pode estar presente em vários pedidos (`Relacionamento N:N`).

- RN06 (Fechamento de Venda): O registro da forma de pagamento é obrigatório para a finalização de qualquer venda (`Preenchimento Obrigatório`).

- RN07 (Preço do Produto): O valor de venda do produto deve ser obrigatoriamente maior que zero (`Regra de Validação`).

---

### 📌 Tabela (MySQL)

```mermaid
erDiagram

CLIENTE {
    int id_cliente PK
    string nome
    string email
    string telefone
    string senha
    datetime data_cadastro
}

QUIOSQUE {
    int id_quiosque PK
    string nome
    string shopping
    string cidade
    string endereco
}

FUNCIONARIO {
    int id_funcionario PK
    string nome
    string cargo
    decimal salario
    int quiosque_id FK
}

CATEGORIA {
    int id_categoria PK
    string nome_categoria
}

PRODUTO {
    int id_produto PK
    string nome
    string descricao
    decimal preco
    string imagem
    int id_categoria FK
}

PEDIDO {
    int id_pedido PK
    datetime data_pedido
    decimal valor_total
    string status
    int cliente_id FK
    int quiosque_id FK
}

ITEM_PEDIDO {
    int id_item_pedido PK
    int quantidade
    decimal preco_unitario
    int pedido_id FK
    int produto_id FK
}

PAGAMENTO {
    int id_pagamento PK
    string forma_pagamento
    string status_pagamento
    datetime data_pagamento
    decimal valor_pago
    int pedido_id FK
}

ESTOQUE_QUIOSQUE {
    int id_estoque PK
    int quantidade
    int id_quiosque FK
    int id_produto FK
    int id_categoria FK
}

CLIENTE ||--o{ PEDIDO : realiza
QUIOSQUE ||--o{ PEDIDO : recebe
QUIOSQUE ||--o{ FUNCIONARIO : possui
CATEGORIA ||--o{ PRODUTO : organiza
PEDIDO ||--o{ ITEM_PEDIDO : contem
PRODUTO ||--o{ ITEM_PEDIDO : participa
PEDIDO ||--|| PAGAMENTO : gera
QUIOSQUE ||--o{ ESTOQUE_QUIOSQUE : controla
PRODUTO ||--o{ ESTOQUE_QUIOSQUE : possui
CATEGORIA ||--o{ ESTOQUE_QUIOSQUE : classifica
```

---

## 💻 Site

<a href="https://syntaxkills.github.io/doces_sobre_rodas" target="_blank">
  <img src="https://img.shields.io/badge/Abrir%20Site-%234caf50.svg?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Abrir Site">
</a>

---

## 🛠️ Ferramentas

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

---

## 👨🏻‍💻 Desenvolvedores

- Victor Cândido
- Alex Júnior
- Eduardo Alarcon
- Lucas Gonçalves
- Igor Macedo
- Isaac Matos
- Fernanda Costa

---

## 📞 Contato

<a href="https://instagram.com/doce_sobre_rodas" target="_blank">
  <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram">
</a>

---

## 📄 Documentação

<a href="documento.txt" target="_blank">
 <img src="https://img.shields.io/badge/documentação-%230078D4.svg?style=for-the-badge&logo=read-the-docs&logoColor=white" alt="documentação">
</a>

---

## doces sobre rodas: doces artesanais de qualidade, unindo automação e sabor para garantir a melhor experiência em cada pedido.

```

Copyright © 2026 Doces Sobre Rodas
