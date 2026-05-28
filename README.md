# 🥯 DOCES SOBRE RODAS

<p align="center">
  <img src="assets/images/logotipo-1.jpg" width="250">
</p>

MODELAGEM EM BANCO DE DADOS

---

## ⚠️ Problemas

Os principais problemas são:

- Confusão no Cardápio: Itens esgotados continuam sendo exibidos, gerando desalinhamento com o estoque real[span_0](start_span)[span_0](end_span).
- Estoque Inconsistente: O controle manual gera erros de contagem e perda de dados por acidentes físicos (papéis molhados ou rasgados)[span_1](start_span)[span_1](end_span).
- Insatisfação e Perda de Vendas: A demora para confirmar pedidos e os erros de marcação afastam os clientes e geram prejuízo[span_2](start_span)[span_2](end_span).

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

- RN05 (Itens do Pedido): Um pedido pode conter vários produtos, e um produto pode estar presente em vários pedidos distintos (`Relacionamento N:N`).

- RN06 (Fechamento de Venda): O registro da forma de pagamento é obrigatório para a finalização de qualquer venda (`Preenchimento Obrigatório`).

- RN07 (Preço do Produto): O valor de venda do produto deve ser obrigatoriamente maior que zero (`Regra de Validação`).

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

- 📸 Instagram: [@doce_sobre_rodas](https://instagram.com/doce_sobre_rodas)

```

Copyright © 2026 Doces Sobre Rodas
