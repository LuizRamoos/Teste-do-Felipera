(function () {
  "use strict";

  let items = [
    {
      productId: "001",
      name: "Notebook Gamer",
      price: 4500.0,
      quantity: 1,
    },
    {
      productId: "002",
      name: "Mouse Sem Fio",
      price: 150.0,
      quantity: 2,
    },
    {
      productId: "003",
      name: "Teclado Mecânico",
      price: 350.0,
      quantity: 1,
    },
    {
      productId: "004",
      name: "Monitor 27'' 144Hz",
      price: 1800.0,
      quantity: 1,
    },
    {
      productId: "005",
      name: "Headset Gamer",
      price: 400.0,
      quantity: 1,
    },
  ];

  /*
### Exercício 1: Contar o número total de produtos no carrinho
Conte a quantidade total de produtos no carrinho, considerando a quantidade de cada item.
  */
  let sumQuantity = 0;
  for (let index = 0; index < items.length; index++) {
    sumQuantity += items[index].quantity;
  }
  console.log(sumQuantity);

  /*### Exercício 2: Calcular o valor total dos produtos no carrinho
Calcule o preço total do carrinho multiplicando o price de cada produto pela sua quantity e somando os resultados.
*/
  let sumPrice = 0;
  for (let index = 0; index < items.length; index++) {
    sumPrice += items[index].price * items[index].quantity;
  }
  console.log(sumPrice);

  /*
### Exercício 3: Listar os nomes dos produtos no carrinho
Liste os nomes de todos os produtos no carrinho.
*/
  let nameList = [{}];
  for (let index = 0; index < items.length; index++) {
    nameList.push(items[index].name);
  }
  console.log(nameList);
  /*
### Exercício 4: Filtrar produtos que têm quantidade maior que 1
Filtre os produtos que possuem quantidade maior que 1.
*/
  let quantityFilter;
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity > 1) {
      quantityFilter = items[index];
    }
  }
  console.log(quantityFilter);

  /*
### Exercício 5: Verificar se o carrinho tem algum produto com preço superior a 2000
Verifique se o carrinho contém algum produto com preço superior a 2000 e retorne a mensagem "Produto caro encontrado" ou "Nenhum produto caro encontrado".
*/
  for (let index = 0; index < items.length; index++) {
    if (items[index].price > 2000.0) {
      console.log("Produto caro encontrado" || "Nenhum produto caro encontrado");
    }
  }
})();
