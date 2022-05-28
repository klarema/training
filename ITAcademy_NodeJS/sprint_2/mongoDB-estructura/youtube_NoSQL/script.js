db = connect("mongodb://localhost/cmyoutube");
db.usuari.insertMany([
  {
    _id: 1,
    email: "yeti@youtube.com",
    password: "Password1",
    nomUsuari: "yeti-101",
    dataNax: "1989-12-12",
    sexe: "F",
    pais: "España",
    CP: "05826",
    canal: {
      _id: 1,
      nom: "my life on youtube",
      description: "everything I do, I do it on youtube ",
      dataCreatio: ISODate(),
      subscribers: [{ userID: 4 }],
    },
    playlists: [
      {
        _id: 1,
        nom: "makes me laugh",
        dataCreacio: ISODate(),
        vidoeIDs: [1, 5, 6],
        estat: "publica",
      },
      {
        _id: 2,
        nom: "Good news",
        dataCreacio: ISODate(),
        vidoeIDs: [3, 8],
        estat: "publica",
      },
    ],
  },
  {
    _id: 2,
    email: "maya@gmail.com",
    password: "Password2",
    nomUsuari: "maya1985",
    dataNax: "1979-11-11",
    sexe: "O",
    pais: "España",
    CP: "08092",
    playlists: [
      {
        _id: 3,
        nom: "Research",
        dataCreacio: ISODate(),
        vidoeIDs: [4, 7],
        estat: "publica",
      },
    ],
  },
]);

db.videos.insertMany([
  {
    _id: 1,
    titol: "Falling",
    description: "very funny film clip",
    grandària: "2",
    nomarxiu: "comedy",
    durada: 120,
    thumbnail: null,
    estat: "public",
    published: {
      usuari_id: 1,
      date: ISODate(),
    },
    subscribedUsersID: [2, 3],
    reproCount: 1269,
    label: [
      {
        label_id: 1,
        label: "comedy",
      },
      {
        label_id: 3,
        label: "family",
      },
    ],
    commentari: [
      {
        commentariText: "I like this. ",
        dataRealitzat: ISODate(),
        nomUsuari: "rosa_gs",
        responses: [
          {
            _id: 1,
            usuari_ID: 3,
            dataFet: ISODate(),
            response: "Like",
          },
          {
            _id: 2,
            usuari_ID: 3,
            dataFet: ISODate(),
            response: "Dislike",
          },
        ],
      },
    ],
    responses: [
      {
        _id: 6,
        usuari_ID: 4,
        dataFet: ISODate(),
        response: "Like",
      },
    ],
  },
  {
    _id: 2,
    titol: "Red Tiles",
    description: "very modern film clip",
    grandària: "1",
    nomarxiu: "modern",
    durada: 60,
    estat: "public",
    published: {
      usuari_id: 2,
      date: ISODate(),
    },
    reproCount: 103,
    label: {
      label_id: 2,
      label: "modern",
    },
    responses: [
      {
        _id: 7,
        usuari_ID: 3,
        dataFet: ISODate(),
        response: "Like",
      },
    ],
  },
]);
