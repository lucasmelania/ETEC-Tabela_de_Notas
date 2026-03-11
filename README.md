# 📊 ETEC - Tabela de Notas

Projeto desenvolvido em sala de aula com o objetivo de calcular a média dos alunos e exibir o status final de aprovação.

## 📌 Objetivo

Criar uma tabela de alunos onde o sistema calcula automaticamente a média das três notas e define o status do aluno (Aprovado, Recuperação ou Reprovado), utilizando conceitos de **JavaScript modular**, **HTML** e manipulação do **DOM**.

## ✅ Requisitos do Projeto

- [x] Tabela com **nomes dos alunos**
- [x] Três **notas por aluno**
- [x] **Cálculo automático da média**
- [x] Definição do **status do aluno**:
  - Média menor que **4** → REPROVADO
  - Média entre **4 e 5.9** → RECUPERAÇÃO
  - Média **6 ou maior** → APROVADO
- [x] Uso de **módulos JavaScript (import/export)**
- [x] Manipulação da **DOM para atualizar a tabela**

## ⚙️ Funcionamento

O script percorre cada linha da tabela (`tbody`), coleta as três notas do aluno, calcula a média e define o status com base nas regras estabelecidas.

Funções utilizadas:

- `calcularMedia()` → calcula a média das três notas
- `definirStatus()` → retorna o status do aluno com base na média

## 👨‍💻 Desenvolvedor

- Lucas Lopes Melania

---
Projeto educacional desenvolvido na **ETEC** para prática de **JavaScript, módulos e manipulação de tabelas no HTML**.
