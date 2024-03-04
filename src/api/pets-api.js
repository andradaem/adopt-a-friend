export const pets = [
  {
    id: "f32463264d372434d32423",
    name: "Doggo1",
    age: 5,
    gender: "Male",
    imageUrl: "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
    selected: false,
    images: [],
    description: null,
  },
  {
    id: "gd263rfd362r723rrf7233",
    name: "Doggo2",
    age: 4,
    gender: "Male",
    imageUrl:
      "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
    selected: false,
    images: [
      "https://purepng.com/public/uploads/large/purepng.com-bmw-x6-blue-carcarbmwvehicletransport-9615246630450hbgr.png",
      "https://pics.clipartpng.com/Metallic_Black_BMW_X6_2013_Car_PNG_Clipart-119.png",
      "https://freepngimg.com/save/22617-bmw-x6-transparent-image/800x510",
    ],
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  },
  {
    id: "ndiu32gd362fd365262273",
    name: "Doggo3",
    age: 3,
    gender: "Male",
    selected: false,
    imageUrl:
      "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",

    images: [
      "https://purepng.com/public/uploads/large/purepng.com-bmw-x6-blue-carcarbmwvehicletransport-9615246630450hbgr.png",
      "https://pics.clipartpng.com/Metallic_Black_BMW_X6_2013_Car_PNG_Clipart-119.png",
      "https://freepngimg.com/save/22617-bmw-x6-transparent-image/800x510",
    ],
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical",
  },
  {
    id: "f324632eere434d324235",
    name: "Doggo4",
    age: 2,
    gender: "Male",
    selected: false,
    imageUrl:
      "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
    images: [],
    description: null,
  },
  {
    id: "f32463264d372443d32423",
    name: "Doggo5",
    age: 1,
    gender: "Male",
    selected: false,
    imageUrl:
      "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
    images: [],
    description: null,
  },
];

export const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: pets,
        isOk: true,
      });
    }, 1500);
  });
};

export const fetchPetById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pet = pets.find((item) => item.id === id);

      if (pet) {
        resolve({
          data: pet,
          isOk: true,
        });
      } else {
        resolve({
          data: null,
          isOk: false,
        });
      }
    }, 1500);
  });
};
