const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const newList = (listProducts, listPrices) => listProducts.map((product, index) => ({ [product]: listPrices[index] }
    ));

    const listProducts = newList(products, prices);
    console.log(listProducts);