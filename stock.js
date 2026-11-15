const products = [
  { name: 'Rice (50 kg bag)', qty: 6, minQty: 2, buy: 21000, sell: 23500 },
  { name: 'Groundnut oil (1 L)', qty: 1, minQty: 6, buy: 1100, sell: 1300 },
  { name: 'Sugar (1 kg)', qty: 0, minQty: 5, buy: 750, sell: 900 },
  { name: 'Maggi cubes (packet)', qty: 30, minQty: 10, buy: 900, sell: 1000 },
];

// Products needing restock
const lowStock = products.filter((p) => p.qty < p.minQty);

console.log('Products to restock:');
for (const p of lowStock) {
  console.log(`- ${p.name}: ${p.qty} left`);
}

// Stock value at buying price
const stockValue = products.reduce((total, p) => total + p.qty * p.buy, 0);

console.log(`Stock value at buying price: ${stockValue} XAF`);

// STEP 5
function profitPerUnit(product) {
  return product.sell - product.buy;
}

const highestProfitProduct = products.reduce((best, current) =>
  profitPerUnit(current) > profitPerUnit(best) ? current : best
);

console.log(
  `Highest profit per unit: ${highestProfitProduct.name} (${profitPerUnit(highestProfitProduct)} XAF)`
);

// ASSIGNMENT 1
function getOutOfStockProducts(products) {
  return products.filter((p) => p.qty === 0);
}

console.log('\nOut of stock products:');
getOutOfStockProducts(products).forEach((p) => console.log(`- ${p.name}`));

// ASSIGNMENT 2
const sellingValue = products.reduce((total, p) => total + p.qty * p.sell, 0);

const totalProfit = products.reduce(
  (total, p) => total + p.qty * (p.sell - p.buy),
  0
);

console.log(`\nStock value at selling price: ${sellingValue} XAF`);
console.log(`Total profit if all stock is sold: ${totalProfit} XAF`);
