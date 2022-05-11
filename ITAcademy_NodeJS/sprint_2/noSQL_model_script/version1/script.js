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
]);
db.empleat.insertMany([
  {
    full_name: { nom: "Julia", cognom: "Merced" },
    tasc: "cuiner",
    NIF: "M12345678",
    TEL: "123-456-789",
  },
  {
    full_name: { nom: "Martin", cognom: "Gonzalez" },
    tasc: "repartidor",
    NIF: "J17891164",
    TEL: "155-456-449",
  },
]);
db.productes.insertMany([
  {
    nom: "Pizza Grand",
    description: "Grand with 4 cheeses",
    image: "",
    preu: "9.50",
    categoryID: { id: "1", nom: "Winter" },
  },
  {
    nom: "Pizza Petit",
    description: "Petit with spinach",
    image: "",
    preu: "6.50",
    categoryID: { id: "1", nom: "Winter" },
  },
]);
db.client.insertMany([
  {
    full_name: { nom: "Lola", cognom: "Maritem" },
    adreca: {
      calle: "123 Rocafell 3B",
      CP: "05514",
      area: { provincia: "Tarragona", localidad: "Tortosa" },
    },
  },
  {
    full_name: { nom: "Michel", cognom: "Oreli" },
    adreca: {
      calle: "Palltel Cases 14-16",
      CP: "05478",
      area: { provincia: "Tarragona", localidad: "Tortosa" },
    },
  },
]);
db.botiga.insertMany([
  {
    adreca: {
      calle: "123 Rocafell 3B",
      CP: "05514",
      area: { provincia: "Tarragona", localidad: "Tortosa" },
    },
    empleat: [
      {
        full_name: { nom: "Julia", cognom: "Merced" },
        tasc: "cuiner",
        NIF: "M12345678",
        TEL: "123-456-789",
      },
    ],
  },
  {
    adreca: {
      calle: "Palltel Cases 14-16",
      CP: "05478",
      area: { provincia: "Tarragona", localidad: "Tortosa" },
    },
    empleat: [
      {
        full_name: { nom: "Martin", cognom: "Gonzalez" },
        tasc: "repartidor",
        NIF: "J17891164",
        TEL: "155-456-449",
      },
    ],
  },
]);
db.commandes.insertMany([
  {
    orderedAt: "2022-01-19 20:10:25",
    DeliveryType: "recollir",
    deliveryAt: "2022-02-05 18:57:25",
    botiga: {
      adreca: {
        calle: "Palltel Cases 14-16",
        CP: "05478",
        area: { provincia: "Tarragona", localidad: "Tortosa" },
      },
      empleat: [
        {
          full_name: { nom: "Martin", cognom: "Gonzalez" },
          tasc: "repartidor",
          NIF: "J17891164",
          TEL: "155-456-449",
        },
      ],
    },
    client: {
      full_name: { nom: "Lola", cognom: "Maritem" },
      adreca: {
        calle: "123 Rocafell 3B",
        CP: "05514",
        area: { provincia: "Tarragona", localidad: "Tortosa" },
      },
    },
  },
]);
