db = connect("mongodb://localhost/spotify");
db.usuaris.insertMany([
  {
    id: 1,
    email: "jo@hmail.com",
    password: "passowrd1",
    nom: "JoFreeway",
    dataNax: "1999-01-01",
    sexe: "M",
    pais: "New Zealand",
    CP: "N4567",
    favourites: [{ cancoID: 1 }, { albumID: 1 }],
    followsArtistesID: [1, 3, 4],
  },
  {
    id: 2,
    email: "Hou@gmail.com",
    password: "passowrd2",
    nom: "Ben Dunne",
    dataNax: "1999-01-01",
    sexe: "M",
    pais: "France",
    CP: "N4567",
    subscription: {
      dataInici: "2020-01-20 00:00:00",
      dataRenovacio: "2023-01-01 00:00:00",
      pagamentTargeta: {
        numero: "123456789",
        mes: "1",
        any: "25",
        codiSeguritat: "456",
      },
    },
    pagaments: [
      {
        id: 1,
        dataPagament: "2021-01-01 00:00:00",
        orderNumber: "00001",
        totalPagament: "120.50",
      },
      {
        id: 2,
        dataPagament: "2022-03-01 00:00:00",
        orderNumber: "00002",
        total: "105.50",
      },
    ],
    followsArtistesID: [4],
  },
  {
    id: 3,
    email: "K88@gmail.com",
    password: "passowrd3",
    nom: "Lola Harris",
    dataNax: "1999-01-01",
    sexe: "F",
    pais: "France",
    CP: "N4567",
    subscription: {
      dataInici: "2020-01-20 00:00:00",
      dataRenovacio: "2023-01-01 00:00:00",
      pagamentPaypal: {
        nom: "Ben Dunne",
      },
    },
    pagaments: [
      {
        id: 3,
        dataPagament: "2022-03-02 00:00:00",
        orderNumber: "00003",
        totalPagament: "90.50",
      },
    ],
    favourites: [{ cancoID: 3 }, { albumID: 1 }],
  },
]);
db.playlists.insertMany([
  {
    id: 1,
    titol: "My A Playlist",
    canconsList: [
      { id: 1, name: "one song" },
      { id: 3, name: "three song" },
    ],
    createDate: "2021-01-01 00:00:00",
    eliminada: false,
    playlistCompartida: [
      {
        canco_id: 1,
        addedByUserID: "2",
        dateAdded: "2021-02-19 15:00:00",
      },
    ],
    usuari_id: 1,
  },
  {
    id: 2,
    titol: "My B Playlist",
    canconsList: [{ id: 4, name: "four song" }],
    createDate: "2021-02-15 00:00:00",
    usuariID: "2",
    eliminada: true,
    dataEliminada: "2021-04-25 00:00:00",
    usuari_id: 1,
  },
  {
    id: 3,
    titol: "Playlist one",
    canconsList: [
      { id: 5, name: "five song" },
      { id: 1, name: "one song" },
      { id: 3, name: "three song" },
    ],
    createDate: "2021-01-01 00:00:00",
    eliminada: false,
    usuariID: "2",
  },
]);
db.cancons.insertMany([
  {
    id: 1,
    titol: "one song",
    durada: 2,
    vegadesRepro: 5,
    album: {
      album_id: 1,
      anyPublicació: "1986",
      albumImage: null,
    },
  },
  {
    id: 2,
    titol: "two song",
    durada: 3.5,
    vegadesRepro: 0,
    album: {
      album_id: 1,
      anyPublicació: "1986",
      albumImage: null,
    },
    artist_id: 3,
  },
  {
    id: 3,
    titol: "three song",
    durada: 3,
    vegadesRepro: 0,
    album: {
      album_id: 2,
      anyPublicació: "1997",
      albumImage: null,
    },
    artist_id: 1,
  },
  {
    id: 4,
    titol: "four song",
    durada: 1.5,
    vegadesRepro: 0,
    album: {
      album_id: 3,
      anyPublicació: "2018",
      albumImage: null,
    },
    artist_id: 2,
  },
]);
db.artistes.insertMany([
  {
    artiste_id: 1,
    nom: "comedy",
    imatge: null,
    musicGenre: ["rock", "blues"],
  },
  {
    artiste_id: 2,
    nom: "Meet Leaf",
    imatge: null,
    musicGenre: ["dance"],
  },
  {
    artiste_id: 3,
    nom: "Lead Zip",
    imatge: null,
    musicGenre: ["rock", "bluegrass"],
  },
  {
    artiste_id: 4,
    nom: "Snootie",
    imatge: null,
    musicGenre: ["country", "blues"],
  },
]);
