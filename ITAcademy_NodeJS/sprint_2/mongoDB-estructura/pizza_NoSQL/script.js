db = connect("mongodb://localhost/cmpizza");
db.botiga.insertOne({
  _id: 1,
  adreca: {
    calle: "88 Rocafell 1-2",
    CP: "05431",
    area: {
      _id: 1,
      localidad: "Palafrugell",
      provincia: "Gerona",
    },
  },
  clients: [
    {
      _id: 1,
      nom: "Julia",
      cognom: "Merced",
      adreca: {
        calle: "123 Rocafell 3B",
        CP: "05514",
        area: {
          _id: 1,
          localidad: "Palafrugell",
          provincia: "Gerona",
        },
      },
      commandes: [
        {
          _id: 1,
          OrderedAt: "2021-12-10 19:02:25",
          DeliveryType: "domicili",
          DeliveredAt: "2021-12-10 20:25:25",
          productIDs: [7, 8],
          empleat: {
            _id: 2,
            fullName: {
              nom: "Michel",
              cognom: "Oreli",
            },
            NIF: "J17891164",
            tel: "155-456-449",
            tasc: "repartidor",
          },
        },
        {
          _id: 2,
          OrderedAt: "2021-12-18 16:25:25",
          DeliveryType: "domicili",
          DeliveredAt: "2021-12-18 17:49:25",
          productIDs: [1, 2, 6, 6],
          empleat: {
            _id: 2,
            fullName: {
              nom: "Michel",
              cognom: "Oreli",
            },
            NIF: "J17891164",
            tel: "155-456-449",
            tasc: "repartidor",
          },
        },
        {
          _id: 3,
          OrderedAt: "2022-01-19 20:10:25",
          DeliveryType: "botiga",
          DeliveredAt: "2022-02-05 18:57:25",
          productIDs: [5, 6, 7],
          empleat: {
            _id: 1,
            fullName: {
              nom: "Lola",
              cognom: "Maritem",
            },
            NIF: "M12345678",
            tel: "123-456-789",
            tasc: "cuiner",
          },
        },
      ],
    },
    {
      _id: 2,
      nom: "Martin",
      cognom: "Gonzalez",
      adreca: {
        calle: "Palltel Cases 14-16",
        CP: "05478",
        area: {
          _id: "1",
          localidad: "Palafrugell",
          provincia: "Gerona",
        },
      },
      commandes: [
        {
          _id: 4,
          OrderedAt: "2022-01-19 20:10:25",
          DeliveryType: "botiga",
          DeliveredAt: "2022-02-05 18:57:25",
          productIDs: [7, 10],
          empleat: {
            _id: 1,
            fullName: {
              nom: "Lola",
              cognom: "Maritem",
            },
            NIF: "M12345678",
            tel: "123-456-789",
            tasc: "cuiner",
          },
        },
      ],
    },
  ],
});
db.productes.insertMany([
  {
    _id: 1,
    nom: "Pizza Grand",
    description: "Grand with 4 cheeses",
    image: "",
    preu: "9.50",
    category: {
      _id: 1,
      nom: "Winter",
    },
  },
  {
    _id: 2,
    nom: "Pizza Petit",
    description: "Petit with spinach",
    image: "",
    preu: "6.50",
    category: {
      _id: 1,
      nom: "Winter",
    },
  },
  {
    _id: 3,
    nom: "Burger Vegan",
    description: "Aubergine and mushroom",
    image: "",
    preu: "8.00",
  },
  {
    _id: 4,
    nom: "Pizza Deep",
    description: "Pizza with salami, cheesy",
    image: "",
    preu: "8.00",
    category: {
      id: 1,
      nom: "Winter",
    },
  },
  {
    _id: 5,
    nom: "Burger Maesto",
    description: "Double burger with bacon",
    image: "",
    preu: "10.00",
  },
  {
    _id: 6,
    nom: "Pep-cola",
    description: "Like Pepsi like cola",
    image: "",
    preu: "2.10",
  },
  {
    _id: 7,
    nom: "Vitagua",
    description: "Natural water",
    image: "",
    preu: "3.70",
  },
  {
    _id: 8,
    nom: "Burger Cheese",
    description: "Double cheese",
    image: "",
    preu: "4.80",
  },
  {
    _id: 9,
    nom: "Pizza Crusty",
    description: "Thin base tomato",
    image: "",
    preu: "7.90",
    category: {
      _id: 2,
      nom: "Winter",
    },
  },
]);
