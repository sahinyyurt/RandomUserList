import { io } from 'socket.io-client';
let socket: any;

export const initiateSocket = () => {
  socket = io('https://cors-anywhere.herokuapp.com/https://wunder-provider.herokuapp.com/');
  console.log(`Connecting socket...`);
}
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
}
export const subscribeToStream = (cb: any) => {
  if (!socket) return (true);
  socket.on('userList', (msg: any) => {
    console.log('Websocket event received!');
    return cb(null, msg.results[0]);
  });
}

export const USER_DATA = [
  {
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Eva",
      "last": "Brar"
    },
    "location": {
      "street": {
        "number": 2037,
        "name": "22nd Ave"
      },
      "city": "Field",
      "state": "British Columbia",
      "country": "Canada",
      "postcode": "Z5P 8A4",
      "coordinates": {
        "latitude": "-66.4252",
        "longitude": "108.8497"
      },
      "timezone": {
        "offset": "-9:00",
        "description": "Alaska"
      }
    },
    "email": "eva.brar@example.com",
    "login": {
      "uuid": "61823052-db69-4a9c-80f6-c1c3be269246",
      "username": "happyrabbit171",
      "password": "wassup",
      "salt": "UxIPMVIa",
      "md5": "22dd62b6a47481897f78b3e7f3aefdd5",
      "sha1": "d7c97b09b8a0291b83e4436fadf88cf7bf5770b5",
      "sha256": "335820e9734b5b7db094088b7ed8292b96ae933e009b112a244a00995b61dd3d"
    },
    "dob": {
      "date": "1988-05-06T02:35:14.477Z",
      "age": 33
    },
    "registered": {
      "date": "2006-02-16T04:12:26.766Z",
      "age": 15
    },
    "phone": "913-612-3652",
    "cell": "090-976-9724",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/71.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/71.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/71.jpg"
    },
    "nat": "CA"
  },
  {
    "gender": "female",
    "name": {
      "title": "Mr",
      "first": "John",
      "last": "Doe"
    },
    "location": {
      "street": {
        "number": 2037,
        "name": "22nd Ave"
      },
      "city": "Field",
      "state": "British Columbia",
      "country": "Canada",
      "postcode": "Z5P 8A4",
      "coordinates": {
        "latitude": "-66.4252",
        "longitude": "108.8497"
      },
      "timezone": {
        "offset": "-9:00",
        "description": "Alaska"
      }
    },
    "email": "eva.brar@example.com",
    "login": {
      "uuid": "61823052-db69-4a9c-43re-c1c3be269246",
      "username": "happyrabbit171",
      "password": "wassup",
      "salt": "UxIPMVIa",
      "md5": "22dd62b6a47481897f78b3e7f3aefdd5",
      "sha1": "d7c97b09b8a0291b83e4436fadf88cf7bf5770b5",
      "sha256": "335820e9734b5b7db094088b7ed8292b96ae933e009b112a244a00995b61dd3d"
    },
    "dob": {
      "date": "1988-05-06T02:35:14.477Z",
      "age": 23
    },
    "registered": {
      "date": "2006-02-16T04:12:26.766Z",
      "age": 15
    },
    "phone": "913-612-3652",
    "cell": "090-976-9724",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/71.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/71.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/71.jpg"
    },
    "nat": "CA"
  },
  {
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Anne",
      "last": "Doe"
    },
    "location": {
      "street": {
        "number": 2037,
        "name": "22nd Ave"
      },
      "city": "Field",
      "state": "British Columbia",
      "country": "Canada",
      "postcode": "Z5P 8A4",
      "coordinates": {
        "latitude": "-66.4252",
        "longitude": "108.8497"
      },
      "timezone": {
        "offset": "-9:00",
        "description": "Alaska"
      }
    },
    "email": "eva.brar@example.com",
    "login": {
      "uuid": "61823052-db69-4a9c-34rf-c1c3be269246",
      "username": "happyrabbit171",
      "password": "wassup",
      "salt": "UxIPMVIa",
      "md5": "22dd62b6a47481897f78b3e7f3aefdd5",
      "sha1": "d7c97b09b8a0291b83e4436fadf88cf7bf5770b5",
      "sha256": "335820e9734b5b7db094088b7ed8292b96ae933e009b112a244a00995b61dd3d"
    },
    "dob": {
      "date": "1988-05-06T02:35:14.477Z",
      "age": 23
    },
    "registered": {
      "date": "2006-02-16T04:12:26.766Z",
      "age": 15
    },
    "phone": "913-612-3652",
    "cell": "090-976-9724",
    "id": {
      "name": "",
      "value": null
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/7.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
    },
    "nat": "CA"
  },
]


