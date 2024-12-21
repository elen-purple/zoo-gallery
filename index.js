const gallery = [
  {
    name: "Cat",
    image: `https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg`,
  },
  {
    name: "Dog",
    image: `https://pettownsendvet.com/wp-content/uploads/2023/01/iStock-1052880600.jpg`,
  },
  {
    name: "Lama",
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lama3.jpg/1200px-Lama3.jpg`,
  },
  {
    name: "Bear",
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/640px-2010-kodiak-bear-1.jpg`,
  },
  {
    name: "Horse",
    image: `https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg`,
  },
  {
    name: "Zebra",
    image: `https://upload.wikimedia.org/wikipedia/commons/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg`,
  },
  {
    name: "Koala",
    image: `https://plus.unsplash.com/premium_photo-1721684721653-81aade6c29b8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29hbGF8ZW58MHx8MHx8fDA%3D`,
  },
  {
    name: "Flamingo",
    image: `https://upload.wikimedia.org/wikipedia/commons/b/b2/Lightmatter_flamingo.jpg`,
  },
  {
    name: "Rabbit",
    image: `https://images.ctfassets.net/rt5zmd3ipxai/4HfqFQQdzndgznDjhaO5tn/6007b6beacc89296f4f5f99cf64ac1b6/NVA-Nature-Rabbit-Meadow.jpeg`,
  },
  {
    name: "Leopard",
    image: `https://ichef.bbci.co.uk/ace/standard/1920/cpsprodpb/05c6/live/d0e195b0-4f44-11ef-b2d2-cdb23d5d7c5b.jpg`,
  },
  {
    name: "Tiger",
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Standing_white_tiger.jpg/1200px-Standing_white_tiger.jpg`,
  },
  {
    name: "Lion",
    image: `https://upload.wikimedia.org/wikipedia/commons/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg`,
  },
  {
    name: "Crocodile",
    image: `https://www.worldanimalprotection.ca/siteassets/shutterstock_2344089613.jpg`,
  },
  {
    name: "Boar",
    image: `https://www.woodlandtrust.org.uk/media/3545/wild-boar-male-alamy-fj4x58-blickwinkel.jpg?center=0.327683615819209,0.42222222222222222&mode=crop&heightratio=0.5622047244094488188976377953&width=647&rnd=132078468140000000`,
  },
];

const list = document.createElement("ul");
list.classList.add("gallery-list");

[...gallery]
  .sort((a, b) => a.name.localeCompare(b.name))
  .forEach(({ name, image } = item) => {
    list.insertAdjacentHTML(
      "beforeend",
      `
    <li class="gallery-item">
      <div class="gallery-wrapper">
        <img width="300" class="gallery-image" src="${image}" alt="${name}">
      </div>
      <h2 class="gallery-subtitle">${name}</h2>
    </li>`
    );
  });

document.querySelector("body").append(list);
