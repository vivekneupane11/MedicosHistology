const introductionImages = [
  {
    image: require('../assets/logos/introduction/1.jpg'),
  },
  {
    image: require('../assets/logos/introduction/2.jpg'),
  },
  {
    image: require('../assets/logos/introduction/3.jpg'),
  },
  {
    image: require('../assets/logos/introduction/4.jpg'),
  },
  {
    image: require('../assets/logos/introduction/5.jpg'),
  },
  {
    image: require('../assets/logos/introduction/6.jpg'),
  },
  {
    image: require('../assets/logos/introduction/7.jpg'),
  },
  {
    image: require('../assets/logos/introduction/8.jpg'),
  },
  {
    image: require('../assets/logos/introduction/9.jpg'),
  },
  {
    image: require('../assets/logos/introduction/10.jpg'),
  },
  {
    image: require('../assets/logos/introduction/11.jpg'),
  },
  {
    image: require('../assets/logos/introduction/12.jpg'),
  },
  {
    image: require('../assets/logos/introduction/13.jpg'),
  },
  {
    image: require('../assets/logos/introduction/14.jpg'),
  },
  {
    image: require('../assets/logos/introduction/15.jpg'),
  },
  {
    image: require('../assets/logos/introduction/16.jpg'),
  },
  {
    image: require('../assets/logos/introduction/17.jpg'),
  },
  {
    image: require('../assets/logos/introduction/18.jpg'),
  },
  {
    image: require('../assets/logos/introduction/19.jpg'),
  },
]

const categoriesone = [
  {
    id: 'plants',
    name: 'Introduction',
    tags: ['products', 'inspirations'],
    count: 'Start Quiz',
    image: require('../assets/logos/google.png'),
  },

  {
    id: 'flowers',
    name: 'Expert Tips',
    tags: ['products', 'inspirations'],
    count: 'Start Quiz',
    image: require('../assets/logos/google.png'),
  },
  {
    id: 'sprayers',
    name: 'Todays Speciaal',
    tags: ['products', 'shop'],
    count: 'Start Quiz',
    image: require('../assets/logos/google.png'),
  },
];

const collections = [
  {
    id: 'seeds',
    name: 'Introduction',
    routeName: 'Introduction',
    tags: ['products', 'shop'],
    count: 'Start Quiz',
    image: require('../assets/logos/ospe.png'),
  },
  {
    id: 'flowers',
    name: 'A+ Tips',
    routeName: 'ATips',
    tags: ['products', 'inspirations'],
    count: 'Start Quiz',
    image: require('../assets/logos/atips.png'),
  },
  {
    id: 'sprayers',
    name: 'Staining',
    routeName: 'Staining',
    tags: ['products', 'shop'],
    count: 'Start Quiz',
    image: require('../assets/logos/staining.png'),
  },
  {
    id: 'sprayers',
    routeName: 'BasicHistology',
    name: 'Basic Histology',
    tags: ['products', 'shop'],
    count: 'Start Quiz',
    image: require('../assets/logos/basic_histology.png'),
  },
];

const categories = [
  {
    id: 'seeds',
    name: 'Histology OSPE',
    tags: ['products', 'shop'],
    count: 'Start Quiz',
    image: require('../assets/logos/ospe.png'),
  },
  {
    id: 'flowers',
    name: 'Histology MCQ',
    tags: ['products', 'inspirations'],
    count: 'Start Quiz',
    image: require('../assets/logos/mcq.png'),
  },
  {
    id: 'sprayers',
    name: 'Collections',
    tags: ['products', 'shop'],
    count: 'Start Quiz',
    image: require('../assets/logos/collection.png'),
  },
  {
    id: 'sprayers',
    name: 'Coming Soon....',
    tags: ['products', 'shop'],
    count: 'Start Quiz',
    image: require('../assets/logos/coming-soon.png'),
  },
];


const products = [
  {
    id: 1,
    name: '16 Best Plants That Thrive In Your Bedroom',
    description:
      'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior', '27 m²', 'Ideas'],
    images: [
      require('../assets/logos/google.png'),
      require('../assets/logos/google.png'),
      require('../assets/logos/google.png'),
      // showing only 3 images, show +6 for the rest
      require('../assets/logos/google.png'),
      require('../assets/logos/google.png'),
      require('../assets/logos/google.png'),
      require('../assets/logos/google.png'),
      require('../assets/logos/google.png'),
      require('../assets/logos/google.png'),
    ],
  },
];

const explore = [
  // images
  require('../assets/logos/google.png'),
  require('../assets/logos/google.png'),
  require('../assets/logos/google.png'),
  require('../assets/logos/google.png'),
  require('../assets/logos/google.png'),
  require('../assets/logos/google.png'),
];

const profile = {
  username: 'react-ui-kit',
  location: 'Europe',
  email: 'contact@react-ui-kit.com',
  avatar: require('../assets/logos/google.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};
let topicImages = {
  simplesquamous: require('../assets/logos/topics/simplesquamos.png'),
};
let topics = [
  {
    id: 1,
    title: 'Connective Tissue',

    subtopics: [
      {
        id: 1,
        title: 'Aerolar Tissue',
        imgPath: require('../assets/logos/topics/areolartissue.png'),
      },
      {
        id: 4,
        title: 'Compact Bone',
        imgPath: require('../assets/logos/topics/compactbone.png'),
      },
      {
        id: 2,
        title: 'Loose Connective Tissue',
        imgPath: require('../assets/logos/topics/looseconnectivetissue.png'),
      },

      {
        id: 3,
        title: 'Dense Connective Tissue',
        imgPath: require('../assets/logos/topics/denseconnectivetissue.png'),
      },

      {
        id: 0,
        title: 'Adipose Tissue',
        imgPath: require('../assets/logos/topics/adiposetissue.png'),
      },
    ],
  },

  {
    id: 2,
    title: 'Epithelial Tissue',
    subtopics: [
      {
        id: 1,
        title: 'Simple Cuboidal',
        imgPath: require('../assets/logos/topics/simplecuboidal.png'),
      },
      {
        id: 2,
        title: 'Simple Columnar',
        imgPath: require('../assets/logos/topics/simplecolumnar.png'),
      },
      {
        id: 0,
        title: 'Simple Squamous',
        imgPath: require('../assets/logos/topics/simplesquamos.png'),
      },
      {
        id: 3,
        title: 'PseudoStratified Columnar Cilliated',
        imgPath: require('../assets/logos/topics/pseudodtratifiedcolumnarcilliate.png'),
      },
      {
        id: 4,
        title: 'Stratified Cuboidal Epithellium',
        imgPath: require('../assets/logos/topics/stratifiedcuboidalepithellium.png'),
      },
      {
        id: 5,
        title: 'Transitional Epithelium',
        imgPath: require('../assets/logos/topics/transitionalepithelium.png'),
      },
      {
        id: 6,
        title: 'Stratified Columnar',
        imgPath: require('../assets/logos/topics/stratifiedcolumnar.png'),
      },
    ],
  },

  {
    id: 3,
    title: 'Cartilage',
    subtopics: [
      {
        id: 0,
        title: 'Elastic Cartilage',
        imgPath: require('../assets/logos/topics/elasticcartilage.png'),
      },
      {
        id: 2,
        title: 'Hyline Cartilage',
        imgPath: require('../assets/logos/topics/hylinecartilage.png'),
      },
      {
        id: 1,
        title: 'Fibro Cartilage',
        //***************** */ imgPath: require('../assets/logos/topics/fibrocartilage.png'),
      },
    ],
  },

  {
    id: 4,
    title: 'Blood Vessels',
    subtopics: [
      {
        id: 0,
        title: 'Elastic Artery',
        imgPath: require('../assets/logos/topics/elasticcartilage.png'),
      },
      {
        id: 2,
        title: 'Large Vein',
        imgPath: require('../assets/logos/topics/largevein.png'),
      },
      {
        id: 1,
        title: 'Muscular Artery',
        imgPath: require('../assets/logos/topics/muscularartery.png'),
      },
    ],
  },

  {
    id: 5,
    title: 'Integumentary system',
    subtopics: [
      {
        id: 0,
        title: 'Skin',
        imgPath: require('../assets/logos/topics/skin.png'),
      },
    ],
  },

  {
    id: 6,
    title: 'Muscular Tissue',
    subtopics: [
      {
        id: 0,
        title: 'Cardic Muscle',
        imgPath: require('../assets/logos/topics/cardicmuscle.png'),
      },
      {
        id: 1,
        title: 'Skeletal Muscle',
        imgPath: require('../assets/logos/topics/skeletalmuscle.png'),
      },
      {
        id: 2,
        title: 'Smooth Muscle',
        // imgPath: require('../assets/logos/topics/smoothmuscle.png'),
      },
    ],
  },
  {
    id: 7,
    title: 'Respiratory System',
    subtopics: [
      {
        id: 0,
        title: 'Epiglottis',
        imgPath: require('../assets/logos/topics/epiglottis.png'),
      },
      {
        id: 1,
        title: 'Trachea',
        imgPath: require('../assets/logos/topics/trachea.png'),
      },
      {
        id: 2,
        title: 'Lungs',
        imgPath: require('../assets/logos/topics/lungs.png'),
      },
    ],
  },
  {
    id: 8,
    title: 'Gastrointestinal System',
    subtopics: [
      {
        id: 0,
        title: 'Tounge',
        imgPath: require('../assets/logos/topics/tongue.png'),
      },
      {
        id: 1,
        title: 'Esophagous',
        imgPath: require('../assets/logos/topics/esophagous.png'),
      },
      {
        id: 2,
        title: 'Stomach Fundus & Body',
        imgPath: require('../assets/logos/topics/stomachfundus_body.png'),
      },
      {
        id: 3,
        title: 'Stomach Pylorus',
        imgPath: require('../assets/logos/topics/stomachpylorus.png'),
      },
      {
        id: 4,
        title: 'Dudodenum',
        imgPath: require('../assets/logos/topics/duodenum.png'),
      },
      {
        id: 5,
        title: 'Appendix',
        imgPath: require('../assets/logos/topics/appendix.png'),
      },
      {
        id: 6,
        title: 'Ileum',
        imgPath: require('../assets/logos/topics/ileum.png'),
      },
      {
        id: 7,
        title: 'Jejunum',
        imgPath: require('../assets/logos/topics/jejunum.png'),
      },
      {
        id: 8,
        title: 'Colon & Large Intestine',
        imgPath: require('../assets/logos/topics/colon_largeintestine.png'),
      },
      {
        id: 9,
        title: 'Rectum & Ano-rectal Junction',
        imgPath: require('../assets/logos/topics/rectum_ano-rectaljunction.png'),
      },
    ],
  },

  {
    id: 9,
    title: 'Salivary Glands',
    subtopics: [
      {
        id: 1,
        title: 'Sublingual Gland',
        imgPath: require('../assets/logos/topics/sublingualgland.png'),
      },
      {
        id: 2,
        title: 'Submandibul Gland',
        imgPath: require('../assets/logos/topics/submandibulgland.png'),
      },
      {
        id: 0,
        title: 'Parotid Gland',
        imgPath: require('../assets/logos/topics/parotidgland.png'),
      },
    ],
  },
  {
    id: 10,
    title: 'HepatoBilliary Tissues',
    subtopics: [
      {
        id: 0,
        title: 'Gallbladder',
        imgPath: require('../assets/logos/topics/gallbladder.png'),
      },
      {
        id: 1,
        title: 'Liver',
        imgPath: require('../assets/logos/topics/liver.png'),
      },
      {
        id: 2,
        title: 'Pancreas',
        imgPath: require('../assets/logos/topics/pancreas.png'),
      },
    ],
  },
  {
    id: 11,
    title: 'Lymphatic System',
    subtopics: [
      {
        id: 0,
        title: 'Palantine Tounsil',
        imgPath: require('../assets/logos/topics/palatinetonsil.png'),
      },
      {
        id: 1,
        title: 'Lymph Node',
        imgPath: require('../assets/logos/topics/lymphnode.png'),
      },
      {
        id: 2,
        title: 'Spleen',
        imgPath: require('../assets/logos/topics/spleen.png'),
      },
      {
        id: 3,
        title: 'Thymus',
        imgPath: require('../assets/logos/topics/thymus.png'),
      },
    ],
  },
  {
    id: 12,
    title: 'Endocrine System',
    subtopics: [
      {
        id: 0,
        title: 'Parathyroid Gland',
        imgPath: require('../assets/logos/topics/parathyroidgland.png'),
      },
      {
        id: 1,
        title: 'Thyroid Gland',
        imgPath: require('../assets/logos/topics/thyroidgland.png'),
      },
      {
        id: 2,
        title: 'Pituitary Gland',
        imgPath: require('../assets/logos/topics/pituitarygland.png'),
      },
      {
        id: 3,
        title: 'Aderenal Gland',
        imgPath: require('../assets/logos/topics/adrenalgland.png'),
      },
    ],
  },

  {
    id: 13,
    title: 'Renal System',
    subtopics: [
      {
        id: 0,
        title: 'Kidney',
        imgPath: require('../assets/logos/topics/kidney.png'),
      },
      {
        id: 1,
        title: 'Ureter',
        imgPath: require('../assets/logos/topics/ureter.png'),
      },
      {
        id: 2,
        title: 'Urethra',
        imgPath: require('../assets/logos/topics/urethra.png'),
      },
      {
        id: 3,
        title: 'Urinary Bladder',
        imgPath: require('../assets/logos/topics/urinarybladder.png'),
      },
    ],
  },
  {
    id: 14,
    title: 'Male Reproductive System',
    subtopics: [
      {
        id: 3,
        title: 'Seminal Vesicle',
        imgPath: require('../assets/logos/topics/seminalvescile.png'),
      },
      {
        id: 4,
        title: 'Testis',
        imgPath: require('../assets/logos/topics/testis.png'),
      },
      {
        id: 5,
        title: 'Ductus Deferens',
        imgPath: require('../assets/logos/topics/ductusdeferens.png'),
      },
      {
        id: 0,
        title: 'Epididymis',
        // imgPath: require('../assets/logos/topics/epididymis.png'),
      },
      {
        id: 1,
        title: 'Penis',
        imgPath: require('../assets/logos/topics/penis.png'),
      },
      {
        id: 2,
        title: 'Prostate Gland',
        imgPath: require('../assets/logos/topics/prostategland.png'),
      },
    ],
  },
  {
    id: 15,
    title: 'Female Reproductive System',
    subtopics: [
      {
        id: 0,
        title: 'Mammary Gland',
        imgPath: require('../assets/logos/topics/seminalvescile.png'),
      },
      {
        id: 1,
        title: 'Cervix',
        imgPath: require('../assets/logos/topics/cervix.png'),
      },
      {
        id: 2,
        title: 'Ovary',
        imgPath: require('../assets/logos/topics/ovary.png'),
      },
      {
        id: 3,
        title: 'Uterine Tube',
        imgPath: require('../assets/logos/topics/uterinetube.png'),
      },
      {
        id: 4,
        title: 'Uterus',
        imgPath: require('../assets/logos/topics/ureter.png'),
      },
    ],
  },

  {
    id: 16,
    title: 'Central Nervous System',
    subtopics: [
      {
        id: 1,
        title: 'Cerebrum',
        imgPath: require('../assets/logos/topics/cerebrum.png'),
      },
      {
        id: 2,
        title: 'Ganglia',
        imgPath: require('../assets/logos/topics/ganglia.png'),
      },
      {
        id: 3,
        title: 'Sympathetic Ganglion',
        imgPath: require('../assets/logos/topics/sympatheticganglion.png'),
      },
      {
        id: 0,
        title: 'Cerebellum',
        imgPath: require('../assets/logos/topics/cerebellum.png'),
      },
      {
        id: 4,
        title: 'Nerve Fiber(Myelinated)',
        imgPath: require('../assets/logos/topics/nervefibermylinated.png'),
      },
      {
        id: 4,
        title: 'Spinal Cord',
        imgPath: require('../assets/logos/topics/spinalcord.png'),
      },
    ],
  },
  {
    id: 17,
    title: 'Special Senses-Eye',

    subtopics: [
      {
        id: 0,
        title: 'Cornea',
        imgPath: require('../assets/logos/topics/Corena.png'),
      },
      {
        id: 1,
        title: 'Eyelid',
        // imgPath: require('../assets/logos/topics/eyelid.png'),
      },
      {
        id: 2,
        title: 'Optic Nerve',
        imgPath: require('../assets/logos/topics/opticnerve.png'),
      },
      {
        id: 3,
        title: 'Retina',
        imgPath: require('../assets/logos/topics/retina.png'),
      },
    ],
  },
];

export { categories, explore, products, profile, topics, collections ,introductionImages};
