# 🥯 DOCES SOBRE RODAS

<p align="center">
  <img src="assets/images/logotipo-1.jpg" width="250">
</p>

MODELAGEM EM BANCO DE DADOS
---

## 🪪 Identificação

Doces Sobre Rodas: uma loja móvel focada na venda de doces artesanais, com controles 100% manuais.

---

## ⚠️ Problemas

- Desalinhamento do Cardápio: Itens esgotados continuam visíveis para os clientes devido à falta de sincronização com o estoque.

- ​Fragilidade nos Dados: O controle manual gera contagens incorretas e perda de informações por danos físicos aos papéis.

- ​Prejuízo Comercial: A demora no atendimento e a desorganização causam insatisfação nos clientes e perda de vendas.

---

## ✔️ Solução

A automação do atendimento e do controle de estoque, que substituiu planilhas e cardápios físicos, eliminou erros de dados e perda de vendas. Além de zerar a insatisfação dos clientes, a nova solução agilizou o serviço e organizou visualmente os doces por categorias.

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

<p align="center">
  <img src="assets/images/MySQL.jpg" width="250">
</p>

<a href="https://1drv.ms/u/c/53ab9e01f485d193/IQAc1GFvzeXvQJZoDgdy8iyAATiyen1gAfY1ZXxb21G6bc8?e=t3Qxwn" target="_blank" title="Abrir banco de dados MySQL - Doces Sobre Rodas">
  <img src="https://img.shields.io/badge/abrir%20MySQL-FF69B4?style=for-the-badge&logo=mysql&logoColor=white" alt="Link para abrir o MySQL">
</a>

---

## 💻 Site

<a href="https://syntaxkills.github.io/doces_sobre_rodas" target="_blank">
  <img src="https://img.shields.io/badge/Abrir%20Site-%234caf50.svg?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Abrir Site">
</a>

<a href="https://1drv.ms/p/c/A0D1E845FA457165/IQC-YBRveSPDTKkW2lwIbCENAfO7-Jw7cTUwqG-fhn3VJ14?e=K0tlp1" target="_blank">
 <img src="https://img.shields.io/badge/documentação-%230078D4.svg?style=for-the-badge&logo=read-the-docs&logoColor=white" alt="documentação">
</a>

---

## 🛠️ Ferramentas

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

---

## 👨🏻‍💻 Desenvolvedores

- Victor Cândido Silva
- Alex Júnior Silva Santiago
- Fernanda Costa Pereira de Jesus
- Igor Silva Macedo
- Lucas Gonçalves Araujo Silva
- Eduardo Alarcon da Silva

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

<a href="https://docs.google.com/presentation/d/1Z1JEYpZCUBj-RJkqjyvJypKkr1_7TbpGNy1NsUmmOUc/edit?usp=drivesdk" target="_blank">
 <img src="https://img.shields.io/badge/slides-red.svg?style=for-the-badge&logo=read-the-docs&logoColor=white" alt="slides">
</a>


```

Copyright © 2026 Doces Sobre Rodas
