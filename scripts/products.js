const products = [
  {
    id: 1,
    name: "Shopping Bag",
    size: "Medium",
    description: "bisa kamu gunakan untuk berbelanja",
    stock: 2,
    price: 75000,
    stars: 3,
    image:
      "https://www.ikea.com/us/en/images/products/spikrak-shopping-bag-cotton-natural__0968684_pe810513_s5.jpg?f=s",
  },
  {
    id: 2,
    name: "Bowling Bag",
    size: "Small",
    description:
      "Lorem ipsum2 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 4,
    price: 600000,
    stars: 5,
    image:
      "https://media.dior.com/couture/ecommerce/media/catalog/product/4/4/1641577516_M6202OOBR_M928_E01_ZH.jpg",
  },
  {
    id: 3,
    name: "Paper Bag",
    size: "Medium",
    description:
      "Lorem ipsum3 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 3,
    price: 15000,
    stars: 4,
    image: "https://sc04.alicdn.com/kf/Hcd26f29a356149179933e3105bc28f26h.jpg",
  },
  {
    id: 4,
    name: "School Bag",
    size: "Medium",
    description:
      "Lorem ipsum4 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 2,
    price: 375000,
    stars: 3,
    image:
      "https://5.imimg.com/data5/RK/LT/MY-2379745/rexine-school-bag-500x500.png",
  },
  {
    id: 5,
    name: "Engineer Bag",
    size: "Medium",
    description:
      "Lorem ipsum5 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 1,
    price: 400000,
    stars: 2,
    image:
      "https://img.misterworker.com/en/7851-thickbox_default/18-fatmax-tool-bag.jpg",
  },
  {
    id: 6,
    name: "Pet Bag",
    size: "Medium",
    description:
      "Lorem ipsum6 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 2,
    price: 650000,
    stars: 4,
    image:
      "https://www.ubuy.co.id/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjEyS2tjNVUrbkwuX0FDX1NMMTAwMF8uanBn.jpg",
  },
  {
    id: 7,
    name: "Golf Bag",
    size: "Large",
    description:
      "Lorem ipsum7 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 2,
    price: 1200000,
    stars: 3,
    image:
      "https://contents.mediadecathlon.com/p1647682/k$47b7be89230328532341924879eb3c53/stand-bag-golf-light-white.jpg?&f=452x452",
  },
  {
    id: 8,
    name: "Trash Bag",
    size: "Medium",
    description:
      "Lorem ipsum8 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 0,
    price: 1000,
    stars: 5,
    image:
      "https://images.tokopedia.net/img/cache/500-square/attachment/2019/7/14/156312341354381/156312341354381_52f9ca98-cb7e-4c71-8f6a-2249de1ec37f.png",
  },
  {
    id: 9,
    name: "Hand Bag",
    size: "Small",
    description:
      "Lorem ipsum9 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 0,
    price: 320000,
    stars: 1,
    image:
      "https://en.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-troca-pm-bag-h27-handbags--M59115_PM2_Front%20view.jpg",
  },
  {
    id: 10,
    name: "Sport Bag",
    size: "Medium",
    description:
      "Lorem ipsum10 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 3,
    price: 560000,
    stars: 3,
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a5cb3894a7394ba1b620ab0500d11c69_9366/4ATHLTS_Duffel_Bag_Medium_Black_FJ9352.jpg",
  },
  {
    id: 11,
    name: "Notebook Bag",
    size: "Medium",
    description:
      "Lorem ipsum11 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 4,
    price: 800000,
    stars: 2,
    image: "https://m.media-amazon.com/images/I/41EwHpb2qyS._UX569_.jpg",
  },
  {
    id: 12,
    name: "Travel Bag",
    size: "Large",
    description:
      "Lorem ipsum12 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 1,
    price: 980000,
    stars: 5,
    image: "https://static.tripzilla.com/thumb/9/5/166805_800x.jpg",
  },
  {
    id: 13,
    name: "Travel Backpack",
    size: "Large",
    description:
      "Lorem ipsum13 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 8,
    price: 1000000,
    stars: 2,
    image: "https://m.media-amazon.com/images/I/71GxZAYa6UL._UL1500_.jpg",
  },
  {
    id: 14,
    name: "Rattan Bag",
    size: "Small",
    description:
      "Lorem ipsum14 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 1,
    price: 635000,
    stars: 1,
    image:
      "https://image.made-in-china.com/2f0j00ScIfmrntrykV/T128-Handwoven-Wicker-Pearl-Handle-Sling-Bag-Fashion-Vintage-Rattan-Bags-Bali.jpg",
  },
  {
    id: 15,
    name: "Leather Bag",
    size: "Medium",
    description:
      "Lorem ipsum15 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 2,
    price: 2000000,
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 16,
    name: "Party Bag",
    size: "Small",
    description:
      "Lorem ipsum16 dolor sit amet consectetur adipisicing elit. Fugit, voluptates temporibus rem fuga dolore, debitis quasi nostrum repellendus ipsum a, aspernatur adipisci sunt hic cupiditate ipsam quas eos! Nulla iusto voluptatum eaque architecto odio unde? Voluptatibus doloremque dolor ab suscipit ducimus. Dolor deleniti natus beatae dolorem fugiat architecto atque! Aperiam nihil, maxime maiores corrupti eius soluta hic illo mollitia enim dolor temporibus odit voluptatum quo. Inventore deserunt maxime debitis nemo, sunt labore ut molestiae odio nisi accusantium. Dolorem, excepturi eius! Incidunt autem quidem quibusdam velit consequuntur delectus laudantium facilis nesciunt illum, impedit ad aut iste, eos sed itaque provident. Hic dolores maiores illo quos praesentium nulla ut inventore dolor velit quod. Assumenda iure ut, aliquid nisi sapiente magnam aspernatur non?",
    stock: 5,
    price: 4000000,
    stars: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsU3Q20MDrErBVmBliNWZNthF_qmmyBGSGg&usqp=CAU",
  },
];
