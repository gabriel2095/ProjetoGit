# 1. Qual o Objetivo do código e como ele funciona? 

 O código tem como **principal** objetivo ler a URL de um repositório git digitado pelo usuário (<https://api.github.com/repos/> + Repositório Git), filtrando os dados em uma estrutura Json e o transformando em um arquivo CSV. 
 Ao digitar a URL do repositório de sua escolha, o link será "armazenado" em uma constante e  será manipulada/transformanda (através da função fetch) em um arquivo Json. 
 
 Esse arquivo Json é filtrado através de uma função _Filter_  contendo os campos principais de aplicação: 

**Campos**

1. Title
2. Body
3. State
4. Number
5. Assign
6. Label
7. MilistoneName

##  2. A parte que não consegui efetuar:
O código deveria pegar os dados filtrados e armazenar em uma String (pensei em fazer com o método replace(), mas não soube como iria implementá-lo), e após isso ser convertido em um arquivo CSV. 

