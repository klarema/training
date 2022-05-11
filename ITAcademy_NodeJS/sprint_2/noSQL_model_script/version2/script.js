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

  {
    orderedAt: "2022-01-19 20:10:25",
    DeliveryType: "domicili",
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
