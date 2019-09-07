const uuid = require('uuid/v4');

const items = [
  {
    id: uuid(),
    name: 'Pão de queijo porção c/10',
    price: '3.49'
  },
  {
    id: uuid(),
    name: 'Mini wafer',
    price: '1.49'
  },
  {
    id: uuid(),
    name: 'Meia lua de queijo',
    price: '3.99'
  }
];

exports.handler = async() => {
  const randomIndex = Math.floor(Math.random() * items.length);

  return {
    statusCode: 200,
    body: JSON.stringify(items[randomIndex])
  };
};
