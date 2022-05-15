db = connect("mongodb://localhost/pizza_CMC");
db.area.insertMany([
  {
    provincia: "Gerona",
    localidad: "Palafrugell",
  },
  {
    provincia: "Gerona",
    localidad: "Llivia",
  },
  {
    provincia: "Tarragona",
    localidad: "Palafrugell",
  },
  {
    provincia: "Tarragona",
    localidad: "Cambrils",
  },
]);
db.categoria.insertMany([
  {
    id: "1",
    name: "Winter",
  },
  {
    id: "1",
    name: "Summer",
  },
]);
db.full_name.insertMany([
  {
    nom: "Lola",
    cognom: "Maritem",
  },
  {
    id: "Michel",
    name: "Oreli",
  },
  {
    nom: "Julia",
    cognom: "Merced",
  },
  {
    id: "Martin",
    name: "Gonzalez",
  },
  {
    id: "Juan",
    name: "Martin",
  },
  {
    id: "Antoni",
    name: "Balleston",
  },
  {
    id: "Reni",
    name: "Sandrea",
  },
  {
    id: "Ana",
    name: "Durell",
  },
  {
    id: "Stella",
    name: "Dann",
  },
]);
db.empleat.insertMany([
  {
    fullName: { nom: "Lola", cognom: "Maritem" },
    tasc: "cuiner",
    NIF: "M12345678",
    TEL: "123-456-789",
  },
  {
    full_name: { nom: "Michel", cognom: "Oreli" },
    tasc: "repartidor",
    NIF: "J17891164",
    TEL: "155-456-449",
  },
  {
    full_name: { nom: "Ana", cognom: "Durell" },
    tasc: "repartidor",
    NIF: "P12215487",
    TEL: "111-589-780",
  },
  {
    full_name: { nom: "Stella", cognom: "Dann" },
    tasc: "repartidor",
    NIF: "M22558877",
    TEL: "321-498-722",
  },
]);
db.productes.insertMany([
  {
    nom: "Pizza Grand",
    description: "Grand with 4 cheeses",
    image: "",
    preu: "9.50",
    categoryID: { id: "1", nom: "Winter" },
    botiga_id: 1,
  },
  {
    nom: "Pizza Petit",
    description: "Petit with spinach",
    image: "",
    preu: "6.50",
    categoryID: { id: "2", nom: "Summer" },
    botiga_id: 1,
  },
  {
    nom: "Burger Vegan",
    description: "Aubergine and mushroom",
    image: "",
    preu: "8.00",
    botiga_id: 1,
  },
  {
    nom: "Pizza Deep",
    description: "Pizza with salami, cheesy",
    image: "",
    preu: "8.00",
    categoryID: { id: "1", nom: "Winter" },
    botiga_id: 1,
  },
  {
    nom: "Burger Maesto",
    description: "Double burger with bacon",
    image: "",
    preu: "10.00",
    botiga_id: 1,
  },
  {
    nom: "Pep-cola",
    description: "Like Pepsi like cola",
    image: "",
    preu: "2.10",
    botiga_id: 1,
  },
  {
    nom: "Vitagua",
    description: "Natural water",
    image: "",
    preu: "3.70",
    botiga_id: 1,
  },
  {
    nom: "Burger Cheese",
    description: "Double cheese",
    image: "",
    preu: "4.80",
    botiga_id: 1,
  },
  {
    nom: "Pizza Crusty",
    description: "Thin base tomato",
    image: "",
    preu: "7.90",
    categoryID: { id: "2", nom: "Summer" },
    botiga_id: 1,
  },
]);
db.client.insertMany([
  {
    full_name: { nom: "Julia", cognom: "Merced" },
    adreca: {
      calle: "123 Rocafell 3B",
      CP: "05514",
      area: { provincia: "Gerona", localidad: "Palafrugell" },
    },
  },
  {
    full_name: { nom: "Martin", cognom: "Gonzalez" },
    adreca: {
      calle: "Palltel Cases 14-16",
      CP: "05478",
      area: { provincia: "Gerona", localidad: "Llivia" },
    },
  },

  {
    full_name: { nom: "Juan", cognom: "Martin" },
    adreca: {
      calle: "Palltel Cases 14-16",
      CP: "05478",
      area: { provincia: "Gerona", localidad: "Palafrugell" },
    },
  },
  {
    full_name: { nom: "Antoni", cognom: "Balleston" },
    adreca: {
      calle: "88C Fabra Pau 234",
      CP: "05515",
      area: { provincia: "Tarragona", localidad: "Tortosa" },
    },
  },
  {
    full_name: { nom: "Reni", cognom: "Sandrea" },
    adreca: {
      calle: "Palltel Cases 14-16",
      CP: "05478",
      area: { provincia: "Tarragona", localidad: "Cambrils" },
    },
  },
]);

db.commandes.insertMany([
  {
    order_id: 1,
    orderedAt: "2022-01-19 13:10:25",
    DeliveryType: "recollir",
    deliveryAt: "2022-01-19 13:50:25",
    productIDsOrdered: [1, 3, 4, 7],
  },
  {
    order_id: 2,
    orderedAt: "2022-02-18 17:10:25",
    DeliveryType: "domicili",
    deliveryAt: "2022-02-18 18:10:25",
    productIDsOrdered: [3, 4, 7, 8],
  },
  {
    order_id: 3,
    orderedAt: "2022-03-17 20:20:25",
    DeliveryType: "recollir",
    deliveryAt: "2022-03-17 20:46:25",
    productIDsOrdered: [2, 4, 7],
  },
  {
    order_id: 4,
    orderedAt: "2022-04-14 15:20:25",
    DeliveryType: "domicili",
    deliveryAt: "2022-04-14 16:03:25",
    productIDsOrdered: [1, 3, 5, 6],
  },
  {
    order_id: 5,
    orderedAt: "2022-05-11 22:50:25",
    DeliveryType: "recollir",
    deliveryAt: "2022-05-11 23:17:25",
    productIDsOrdered: [1, 3, 9],
  },
]);

db.botiga.insertMany([
  {
    adreca: {
      calle: "123 Rocafell 3B",
      CP: "05514",
      area: { provincia: "Tarragona", localidad: "Tortosa" },
    },
    empleats: [
      {
        fullName: { nom: "Lola", cognom: "Maritem" },
        tasc: "cuiner",
        NIF: "M12345678",
        TEL: "123-456-789",
      },
      {
        full_name: { nom: "Michel", cognom: "Oreli" },
        tasc: "repartidor",
        NIF: "J17891164",
        TEL: "155-456-449",
      },
      {
        full_name: { nom: "Ana", cognom: "Durell" },
        tasc: "repartidor",
        NIF: "P12215487",
        TEL: "111-589-780",
      },
      {
        full_name: { nom: "Stella", cognom: "Dann" },
        tasc: "repartidor",
        NIF: "M22558877",
        TEL: "321-498-722",
      },
    ],

    clients: [
      {
        full_name: { nom: "Julia", cognom: "Merced" },
        adreca: {
          calle: "123 Rocafell 3B",
          CP: "05514",
          area: { provincia: "Gerona", localidad: "Palafrugell" },
        },
      },
      {
        full_name: { nom: "Martin", cognom: "Gonzalez" },
        adreca: {
          calle: "Palltel Cases 14-16",
          CP: "05478",
          area: { provincia: "Gerona", localidad: "Llivia" },
        },
      },

      {
        full_name: { nom: "Juan", cognom: "Martin" },
        adreca: {
          calle: "Palltel Cases 14-16",
          CP: "05478",
          area: { provincia: "Gerona", localidad: "Palafrugell" },
        },
      },
      {
        full_name: { nom: "Antoni", cognom: "Balleston" },
        adreca: {
          calle: "88C Fabra Pau 234",
          CP: "05515",
          area: { provincia: "Tarragona", localidad: "Tortosa" },
        },
      },
      {
        full_name: { nom: "Reni", cognom: "Sandrea" },
        adreca: {
          calle: "Palltel Cases 14-16",
          CP: "05478",
          area: { provincia: "Tarragona", localidad: "Cambrils" },
        },
      },
    ],
    commandes: [
      {
        order_id: 1,
        orderedAt: "2022-01-19 13:10:25",
        DeliveryType: "recollir",
        deliveryAt: "2022-01-19 13:50:25",
        productIDsOrdered: [1, 3, 4, 7],
      },
      {
        order_id: 2,
        orderedAt: "2022-02-18 17:10:25",
        DeliveryType: "domicili",
        deliveryAt: "2022-02-18 18:10:25",
        productIDsOrdered: [3, 4, 7, 8],
      },
      {
        order_id: 3,
        orderedAt: "2022-03-17 20:20:25",
        DeliveryType: "recollir",
        deliveryAt: "2022-03-17 20:46:25",
        productIDsOrdered: [2, 4, 7],
      },
      {
        order_id: 4,
        orderedAt: "2022-04-14 15:20:25",
        DeliveryType: "domicili",
        deliveryAt: "2022-04-14 16:03:25",
        productIDsOrdered: [1, 3, 5, 6],
      },
      {
        order_id: 5,
        orderedAt: "2022-05-11 22:50:25",
        DeliveryType: "recollir",
        deliveryAt: "2022-05-11 23:17:25",
        productIDsOrdered: [1, 3, 9],
      },
    ],
  },
]);
