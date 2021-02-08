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
const categories = [
  {
    id: 'seeds',
    name: 'Take a quiz',
    tags: ['products', 'shop'],
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
    name: 'Todays Special',
    tags: ['products', 'shop'],
    count: 'Start Quiz',
    image: require('../assets/logos/google.png'),
  },
  {
    id: 'sprayers',
    name: 'Todays Speciggal',
    tags: ['products', 'shop'],
    count: 'Start Quiz',
    image: require('../assets/logos/google.png'),
  },
];

let topicImages = {
  simplesquamous: require('../assets/logos/topics/simplesquamos.png'),
};
let topics = [

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
    id: 1,
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
    id: 2,
    title: 'Connective Tissue',

    subtopics: [
    
      {
        id: 0,
        title: 'Aerolar Tissue',
        imgPath: require('../assets/logos/topics/areolartissue.png'),
      },
      {
        id: 1,
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
        id: 4,
        title: 'Adipose Tissue',
        imgPath: require('../assets/logos/topics/adiposetissue.png'),
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
        imgPath: require('../assets/logos/topics/pseudodtratifiedcolumnarcilliate.png'),
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

let AllHistologyContent = [
  {
    id: 1,
    title: 'Epithelial Tissue',
    isIntroduction: false,
    content: {
      subTopic: [
        {
          title: 'Location of Epithelium',
          content:
            'Epithelum is found throughout the body. Epithelium covers body surfaces, lines body cavities, and lines hollow organs.',
        },
        {
          title: 'Functions of Epithelium',
          content:
            'Protection, absorption, secretion, excretion, filtration, and diffusion are all functions of epithelium.',
        },
        {
          title: 'Histology of Epithelium',
          content: [
            'When looking at the histology of epithelium, it can be seen that the cells in epithelial tissue are tightly packed.  There is very little intercellular space between the cells in epithelial tissue.',
            'Since epithelium forms surface coverings and linings, there is one free surface that is not in contact with other cells. On the other side of the free surface, there is a basement membrane.  The basement membrane is non-cellular.  It is composed of carbohydrates and proteins which are secreted by the epithelial cells and connective tissue cells.',
            "Histology hint from Sarah Bellham: The 'free surface' on epithelum can be used as an aid in idenfying epithelium on a histology slide.",
          ],
        },
      ],
    },
    subTopics: [
      {
        id: 0,
        title: 'Simple Squamos',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'Structure',
              orderedList: false,
              unOrderedList: true,
              content: [
                'In profile nuclei produces bulging of cell surfaces',
                'Single layer of flattened cells, tightly packed and all rests on the basement membrane',
              ],
            },
            {
              title: 'Functions',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Absorption and filtration',
                'Non effective protection ( single layer of cell)',
              ],
            },
            {
              title: 'Examples',
              content: [
                'walls of capillaries , alveoli of lungs, parietal layer of Bowman&#39;s capsule, loop of henle, endothelium, mesothelium and blood vessels',
                'form serous membrane in body cavity',
              ],
            },
          ],
        },
      },
      {
        id: 1,
        title: 'Simple Columnar',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'Structure',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Cells are rectangular in shape i.e. height is greater(three times) than the width.',
                'All rest on the basement membrane.',
                'Nucleus is ovoid and situated towards the basal position.',
                'At their apical surface some possess cillia, some bear microvilli (seen as striated / brush border with light microscope).',
              ],
            },
            {
              title: 'Functions',
              content: [
                'Cells can be secretory, absorptive, or excretory.',
                'Examples: lining of stomach, small and large intestine, gallbladder and large duct of glands',
              ],
            },
            {
              title: 'Modifications',
              isIntroduction: true,
              introductionContent: [
                'Simple columnar with cilia:',
                'Simple columnar epithelial cells with cilia on their apical surfaces.',
                'Found in the lining of the fallopian tubes, uterus,central canal of spinal cord and parts of the respiratory system, where the beating of the cilia helps remove particulate matter.',
              ],
              content: {
                subTopic: [
                  {
                    title: 'Simple columnar with brush /straited border:',
                    content: [
                      'Microvilli with glycocalyx -covered surface of simple columnar epithelium found in different parts of the body.',
                      'Straited border-When the microvilli are arranged regularly',
                      'Eg:Small intestine',
                      'Brush border-When the microvilli are arranged irregularly',
                      'Eg:Gall bladder',
                      'The fuzzy appearance gave rise to the term brush border, as early anatomists noted that this structure appeared very much like the bristles of a paintbrush, found mainly in intestine and small intestine.',
                    ],
                  },
                  {
                    title: 'Pseudostratified ciliated columnar',
                    content: [
                      'Ciliated pseudostratified columnar epithelia is the type of respiratory epithelium found in the linings of the trachea as well as the upper respiratory tract. Pseudostratified columnar epithelia are found forming the straight, tubular glands of the endometrium in females.',
                      'These cells contain cilia on their apical surface. Cilia are motile, beating in a synchronous rhythm to move fluid in a constant direction.',
                      'Pseudostratified ciliated columnar epithelial cells help trap and transport particles brought in through the nasal passages and lungs.',
                    ],
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: 2,
        title: 'Simple Cuboidal',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'Structure',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Cells have equal height, width and rests on the basement membrane',
                'Nucleus is central in position',
              ],
            },
            {
              title: 'Functions',
              content:
                'These cells may have secretory, absorptive, or excretory functions',
            },
            {
              title: 'Location',
              content: [
                'Small collecting ducts of the kidney, pancreas, and salivary gland.',
                'Present in the germinal epithelium of ovary, follicles of thyroid gland, pigmanted layer of retina',
              ],
            },
          ],
        },
      },

      {
        id: 3,
        title: 'PSEUDOSTRATIFIED COLUMNAR CILIATED EPITHELIUM',
        isIntroduction: true,
        introductionContent: [
          'Pseudostratified ciliated columnar epithelia is the type of respiratory epithelium found in the linings of the trachea as well as the upper respiratory tract. Pseudostratified columnar epithelia are found forming the straight, tubular glands of the endometrium in females.',
        ],
        content: {
          subTopic: [
            {
              title: 'Structure',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Cells are of different size- some are tall, others are short, but all rest on the basement membrane and all reaches the apical surface. Tall cells possess cilia .',
                'Formed by a single layer of cells .But due to the presence of nuclei at different level it appears to be stratified, especially when seen in cross section.',
              ],
            },
            {
              title: 'Function',
              content:
                'Cilia and mucous secretions help collect foreign materials so you can cough or sneeze them out.',
            },
            {
              title: 'Example',
              content:
                'Trachea, bronchi and larger bronchioles, epididymis, vas deferens.',
            },
          ],
        },
      },
      {
        id: 4,
        title: 'Stratified Cuboidal Epithelium',
        isIntroduction: true,
        introductionContent: [
          'Stratified cuboidal epithelium is a type of epithelial tissue composed of multiple layers of cube-shaped cells.Only the most superficial layer is made up of cuboidal cells, and the other layers can be cells of other types.',
          'Shape: Many layers of cuboid cells',
          'If the cuboidal epithelium is arranged in many layers it forms the stratified cuboidal epithelium',
        ],
        content: {
          subTopic: [
            {
              title: 'Functions',
              content: 'absorption, secretion, and excretion',
            },
            {
              title: 'Example',
              content: 'salivary glands, kidney tubules, sweat glands, etc.',
            },
          ],
        },
      },
      {
        id: 5,
        title: 'Stratified Squamous Epithelial',
        isIntroduction: true,
        introductionContent:
          'Stratified epithelium differs from simple epithelium in that it is multilayered. It is therefore found where body linings have to withstand mechanical or chemical insult such that layers can be abraded and lost without exposing subepithelial layers. Cells flatten as the layers become more apical, though in their most basal layers, the cells can be squamous, cuboidal, or columnar.',
        content: {
          subTopic: [
            {
              title: 'STRATFIED squamous keratnized',
              isIntroduction: false,
              content: {
                subTopic: [
                  {
                    title: 'Structure',
                    orderedList: false,
                    unOrderedList: true,
                    content: [
                      '5-6 layers of cells; cells of the deepest layer rest on the basement membrane.',
                      'Cells of deepest layer- columnar / cuboidal.',
                      'Cells of intermediate layers - polyhedral.',
                      'flattended, dead and contain eosinophilic fibrillar',
                      'Cells of superficial layers - flattened, dead and contain eosinophilic fibrillar strands (Keratin)',
                    ],
                  },
                  {
                    title: 'Function',
                    content:
                      'Keratinized tissues are important where there is physical abrasion as well as the possibility of desiccation and water loss. Keratinized cells are specially structured to be waterproof and reduce evaporation from underlying tissues and are therefore an important part of the epidermis or external skin.',
                  },
                  {
                    title: 'Example',
                    content: 'epidermis of skin.',
                  },
                ],
              },
            },
            {
              title: 'STRATFIED squamous NON-keratnized',
              isIntroduction: false,
              content: {
                subTopic: [
                  {
                    title: 'Structure',
                    orderedList: false,
                    unOrderedList: true,
                    content: [
                      'Non-keratinized stratified squamous epithelium is the epithelium in which the cells do not have a lot of keratin deposits within them, but rather are moisturized by mucus from the salivary or the mucus glands',
                      'In this case, the flattened cells of the surface layer retain their nuclei and most metabolic functions.',
                      'Because non-keratinized stratified squamous epithelium doesn’t have as much keratin deposits, this epithelium is usually found in areas that need to be kept hydrated or are affected by dryness.',
                      'This epithelium does have some amount of keratin which, in turn, depends on the age of the layer of the tissue and the mechanical wear and tear it has been subjected to.',
                      'Some cells of this epithelium might even produce trace amounts of mucus and other lubricating agents to keep the surface from drying out.',
                    ],
                  },
                  {
                    title: 'Function',
                    content:
                      'Non-keratinized epithelia usually secrete mucus as an additional protective and lubricating layer and are seen in the esophagus and in parts of the female reproductive system. Some organs, such as the anus,contain both keratinized and non-keratinized stratified squamous epithelia.',
                  },
                  {
                    title: 'Example',
                    content:
                      'lining of mouthcavity, tounge, tonsil, pharynx, oesophagus, epiglottis,vagina,cervix, cornea and anal canal.',
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: 6,
        title: 'TRANSITIONAL EPITHELIUM',
        isIntroduction: true,
        introductionContent: [
          'Transitional epithelium is a type of stratified epithelium. This tissue consists of multiple layers of epithelial cells which can contract and expand in order to adapt to the degree of distension needed. Transitional epithelium lines the organs of the urinary system and is known here as urothelium.',
        ],
        content: {
          subTopic: [
            {
              title: 'Structure',
              orderedList: false,
              unOrderedList: true,
              content: {
                subTopic: [
                  {
                    title: 'In empty bladder: relaxed',
                    orderedList: false,
                    unOrderedList: true,
                    content: [
                      '5-6 layers of cells; cells of the deepest layers rest on the basement membrane.',
                      'Cells of basal layer - columnar / cuboidal.',
                      'Cells of intermediate layers - polyhedral/ pear-shaped.',
                      'Cells of superficial layers - Umbrella shaped/Dome shaped',
                    ],
                  },
                  {
                    title: 'In full bladder: becomes stretched.',
                    orderedList: false,
                    unOrderedList: true,
                    content: [
                      'Consists of two or three layers of cells.',
                      'Surface epithelium flatten, and they appear to be squamous and irregular.',
                    ],
                  },
                ],
              },
            },
            {
              title: 'Function',
              content:
                'It stretch readily in order to accommodate fluctuation of volume of the liquid in an organ (the distal part of the urethra becomes non-keratinized stratified squamous epithelium in females; the part that lines the bottom of the tissue is called the basement membrane).',
            },
            {
              title: 'Example',
              content:
                'Major and minor calyces, pelvis of ureter, ureter, urinary bladder and proximal part of urethra.',
            },
          ],
        },
      },
      {
        id: 7,
        title: 'STRATIFIED COLUMNAR EPITHELIUM',
        isIntroduction: true,
        introductionContent:
          'Stratified columnar epithelium is a rare type of epithelial tissue composed of column shaped cells arranged in multiple layers.',
        content: {
          subTopic: [
            {
              title: 'Functions',
              content: 'The cells function in secretion and protection.',
            },
            {
              title: 'Example',
              content:
                'conjunctiva of the eye, in parts of the pharynx, anus, the uterus, and the male urethra and vas deferens.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Epithellium',
    isIntroduction: true,
    introductionContent: [
      'tissue that connects, supports, binds, or separates other tissues or organs, typically having relatively few cells embedded in an amorphous matrix, often with collagen or other fibres, and including cartilaginous,fatty, and elastic tissues.',
      'It develops from the mesoderm. Connective tissue is found in between other tissues everywhere in the body, including the nervous system. In the central nervous system, the three outer membranes (the meninges) that envelop the brain and spinal cord are composed of connective tissue. They support and protect the body. All connective tissue consists of three main components: fibers (elastic and collagenous fibers), ground substance and cells. Not all authorities include blood or lymph as connective tissue because they lack the fiber component. All are immersed in the body water.',
    ],
    content: {
      subTopic: [
        {
          title: 'CELLS OF CONNECTIVE TISSUE',
          content: {
            unOrderedList: false,
            orderedList: true,
            subTopic: [
              {
                title: 'Mesenchymal cells:',
                content: [
                  'Precursors of most connective tissue cells.',
                  'Comprise a loose network of stellate cells and abundant intercellular fluid.',
                  'Some mesenchymal cells remain undifferentiated, a reserve property of stem cells known as adventitial cells, which look like fibroblasts',
                ],
              },
              {
                title: 'Fibroblasts',
                content: [
                  'Pre dominant cells in connective tissue proper.',
                  'Synthesize, secrete and maintain all the major components of extracellular matrix.',
                ],
              },
              {
                title: 'Fat cells:',
                content: [
                  'Synthesise &amp; store fat',
                  'Spherical in shape, Nucleus flattened &amp; displaced on one Side.',
                  'Lipid occupy almost whole of cell SIGNET RING',
                  'May occur singly (Loose areolar tissue) or in arouds (adidose tissue)',
                ],
              },
              {
                title: 'Pigment Cells',
                content: [
                  'Synthesize pigment melanin.',
                  'Star shaped with branching processes.',
                  'Found in skin, choroids processes.',
                ],
              },
              {
                title: 'Macrophages',
                content: [
                  'Develop from monocyte of blood.',
                  'Irregular shape with branching processes.',
                  'Capable of eating bacteria &amp; cellular debries by phagocytosis.',
                  {
                    orderedList: true,
                    unOrderedList: false,
                    content: 'Two types',
                    subContent: ['Fixed &amp;', 'Wandering.'],
                  },
                ],
              },
              {
                title: 'Mast Cells',
                content: [
                  'Found mostly close to blood vessels in connective tissue.',
                  'Small &amp; round in shape. Nucleus central &amp; cytoplasm contains many granules.',
                ],
              },
              {
                title: 'Plasma Cells:',
                content: [
                  'Origin from B lymphocyte.',
                  'Ovoid in shape. Nucleus round &amp; eccentrical',
                  'Chromatin gives CART WHEEL appearance',
                  'Produces antibody against antigen',
                ],
              },
            ],
          },
        },
      ],
    },
    subTopics: [
        {
            id: 0,
            title: 'AREOLAR CONNECTIVE TISSUE',
            isIntroduction: false,
            content: {
              subTopic: [
                {
                  title: 'STRUCTURE',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'The fibers in the matrix have a loose and irregular arrangement, and they consist of collagenous, elastic, or reticular fibers.',
                    'Fibroblasts and macrophages are the most common cells in loose connective tissue, but mast cells, plasma cells, neutrophils and fat cells may also be found.',
                  ],
                },
                {
                  title: 'LOCATION',
                  orderedList: false,
                  unOrderedList: true,
                  content:
                    'The areolar tissue located in the skin binds the outer layers of the skin to the muscles beneath. Areolar tissue is also found in or around mucous membranes, and around blood vessels, nerves, and the organs of the body.',
                },
                {
                  title: 'FUNCTION',
                  orderedList: false,
                  unOrderedList: true,
                  content:
                    'Areolar connective tissue holds organs in place and attaches epithelial tissue to other underlying tissues. It also serves as a reservoir of water and salts for surrounding tissues. Almost all cells obtain their nutrients from and release their wastes into areolar connective tissue.',
                },
              ],
            },
          },
      
          {
            id: 1,
            title: 'COMPACT BONE',
            isIntroduction: false,
            content: {
              subTopic: [
                {
                  title: 'STUDY OF BONE',
                  content: [
                    'A bone is a rigid organ that constitutes part of the vertebrate skeleton in animals. Bones protect the various organs of the body, produce red and white blood cells, store minerals, provide structure and support for the body, and enable mobility.',
                    'Bone is a modified form of connective tissue which is made of extracellular matrix, cells and fibers.Whereas compact bone tissue forms the outer layer of all bones, spongy bone or cancellous bone forms the inner layer of all bones. Spongy bone tissue does not contain osteons that constitute compact bone tissue. Instead, it consists of trabeculae, which are lamellae that are arranged as rods or plates.',
                  ],
                },
                {
                  title: 'COMPACT BONE:',
                  content: [
                    
                      
                        {
                          title: 'LOCATION',
                          orderedList: true,
                          unOrderedList: false,
                          content: [
                            'In diaphysis of long bones.',
                            'As a thin layer on the external surface of all other bones where the spongy bone is found as a core.',
                          ],
                        },
                        {
                          title: 'STRUCTURE',
                          orderedList: false,
                          unOrderedList: true,
                          content: [
                            'In diaphysis of long bones.',
                            'As a thin layer on the external surface of all other bones where the spongy bone is found as a core.',
                            {
                              orderedList: false,
                              unOrderedList: true,
                              content: 'Lamellae are of three different patterns.',
                              subContent: [
                                'Haversian system of lamellae',
                                'Interstitial lamellae',
                                'Circumferential lamellae',
                              ],
                            },
                          ],
                        },
                        {
                          title: 'HAVERSIAN SYSTEM:',
                          orderedList: false,
                          unOrderedList: true,
                          content: [
                            'Also known as osteon. Multiple concentric lamellae around 5-15 are arranged around a central canal',
                            'The central canal is called as Haversian canal.',
                            'Canal contains loose connective tissue and neurovascular bundle.',
                            'Between the lamella there are lacunae containing osteocytes.',
                            'Through Volkman&#39;s canal blood vessels and nerves enter in compact bone and also communicate with Haversian canal.',
                            'Volkman&#39;s canals are horizontally or obliquely oriented in relation to the long axis of bone and they are not surrounded by lamellae.',
                            'Cement line is present surrounding each osteon.',
                            'It is thin layer of mineralized bone matrix.',
                          ],
                        },
                        {
                          title: 'INTERSTITIAL LAMELLAE:',
                          orderedList: false,
                          unOrderedList: false,
                          content: [
                            'Fragments of older osteons are seen between newly formed osteons as the older bone is constantly replaced by new bone tissue.',
                            'Such lamellae are termed as interstitial lamellae.',
                          ],
                        },
                        {
                          title: 'CIRCUMFERENTIAL LAMELLAE:',
                          orderedList: false,
                          unOrderedList: true,
                          content: 'Are of two types:',
                          subContent: [
                            'Outer ones are found just underneath periosteum',
                            'Inner ones are found encircling bone marrow cavity.',
                          ],
                        },
                        {
                          title: 'PERIOSTEUM:',
                          orderedList: false,
                          unOrderedList: true,
                          content: [
                            'In young bone the cells in cellular layer are osteogenic.',
                            'Whereas in adult bone, cellular layer has a few cells termed as periosteal cells which can convert in to osteoblasts as and when needed.',
                            'Periosteal blood vessels enter into compact bone through Volkman&#39;s canal to supply outer layer of bone.',
                            'The collagenous fibers of a tendon while attaching to a bone pass though the periosteum to continue into outer layer of bone.',
                            'Such fibers are termed as Sharpey&#39;s fibers.',
                            {
                              orderedList: true,
                              unOrderedList: false,
                              content:
                                'External surface of bone is covered with a membrane called periosteum. Having two layers:',
                              subContent: [
                                'Outer fibrous layer',
                                'Inner cellular layer',
                              ],
                            },
                          ],
                        },
                        {
                          title: 'ENDOSTEUM:',
                          orderedList: false,
                          unOrderedList: true,
                          content: [
                            'A thin lining of surrounding the marrow cavity and spongy bone.',
                            'One cell thick layer',
                            'Cells are in resting stage or concerned with bone formation or resorption.',
                          ],
                        },
                        {
                          title: 'FUNCTION',
                          orderedList: false,
                          unOrderedList: false,
                          content:
                            'Compact bone (or cortical bone) forms the hard external layer of all bones and surrounds the medullary cavity, or bone marrow. It provides protection and strength to bones. Compact bone tissue consists of units called osteons or Haversian systems.',
                        },
                      
                  
                  ],
                },
              ],
            },
          },
      
      
          {
            id: 2,
            title: 'LOOSE CONNECTIVE TISSUE',
            isIntroduction: false,
            content: {
              subTopic: [
                {
                  title: 'STRUCTURE',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Most widely spread connective tissues.',
                    'Loosely woven network of fibers, collagen, elastic and reticular.',
                    'Connective tissue cells, fibroblasts, macrophages, plasma cells, fat cells, white blood cells and mast cells are present which along with fibers are embedded in ground substance.',
                    'Ground substance consists of hyaluronic acid and chondroitin sulphate.',
                  ],
                },
                {
                  title: 'LOCATION',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Present in superficial fascia along with the adipose tissue, around blood vessels, visceras, nerves and muscles.',
                    'Also found beneath the epithelium as  lamina propria.',
                  ],
                },
                {
                  title: 'FUNCTION',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Supports serous membranes (mesothelium) of the pleura, peritoneum and pericardium.',
                    'Provides elasticity and support to various structures.',
                  ],
                },
              ],
            },
          },
          {
            id: 3,
            title: 'DENSE  CONNECTIVE TISSUE',
            isIntroduction: true,
            introductionContent:
              'Dense connective tissue, also called dense fibrous tissue, is a type of connective tissue with fibers as its main matrix element. The fibers are mainly composed of type I collagen. Crowded between the collagen fibers are rows of fibroblasts, fiber-forming cells, that generate the fibers.',
            content: {
              subTopic: [
                {
                  title: 'DENSE IRREGULAR CONNECTIVE TISSUE',
                  isIntroduction: false,
                  content: {
                    subTopic: [
                      {
                        title: 'Structure',
                        orderedList: false,
                        unOrderedList: false,
                        content:
                          'Dense irregular connective tissue has fibers that are not arranged in parallel bundles as in dense regular connective tissue. Dense irregular connective tissue consists of mostly collagen fibers. It has less ground substance than loose connective tissue.',
                      },
                      {
                        title: 'Location',
                        orderedList: false,
                        unOrderedList: false,
                        content:
                          'This type of connective tissue is found mostly in the reticular layer (or deep layer) of the dermis. It is also in the sclera and in the deeper skin layers.',
                      },
                      {
                        title: 'Function',
                        orderedList: false,
                        unOrderedList: false,
                        content:
                          'Due to high portions of collagenous fibers, dense irregular connective tissue provides strength,making the skin resistant to tearing by stretching forces from different directions.',
                      },
                    ],
                  },
                },
                {
                  title: 'DENSE REGULAR CONNECTIVE TISSUE',
                  isIntroduction: false,
                  content: {
                    subTopic: [
                      {
                        title: 'Structure',
                        orderedList: false,
                        unOrderedList: false,
                        content:
                          'In this type of tissue, the collagen fibres are densely packed, and arranged in parallel. This type of tissue is found in ligaments (which link bone to bone at joints) and tendons (connections between bones or cartilage and muscle).',
                      },
                      {
                        title: 'Location',
                        orderedList: false,
                        unOrderedList: false,
                        content:
                          'Dense regular connective tissue is mainly made up of type I collagen fibers. It is found in areas of the body where large amounts of tensile strength are required, like in ligaments, tendons and aponeurosis. The collagen fibers are densely packed together and arranged in parallel to each other.',
                      },
                      {
                        title: 'Function',
                        orderedList: false,
                        unOrderedList: false,
                        content:
                          'This arrangement allows the fibers to have a good resistance to forces pulling along a single axis, but also gives some ability to stretch. Tendons and ligaments attach to bones, and the role of dense regular connective tissue is to transfer forces to bones.',
                      },
                    ],
                  },
                },
              ],
            },
          },
      
          {
        id: 4,
        title: 'ADIPOSE CONNECTIVE TISSUE',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'STRUCTURE AND FUNCTION',
              orderedList: false,
              unOrderedList: true,
              introductionContent: [
                'Cells which accumulate fat are often present in loose connective tissue, either singly or in small groups. When they are present in large numbers we call such tissue adipose (fatty) tissue. Adipose tissue in the adult human appears white or yellowish in colour.',
                'Connective tissue specialized to store fat.',
                'Cytoplasm of fat cells contains large amount of triglyceride deposits in the form of one or more lipid droplets with no limiting membrane.',
                'Clusters of adipocytes are divided into lobes and lobules by septa of collagen tissue.',
              ],
              content: {
                subTopic: {
                  orderedList: false,
                  unOrderedList: true,
                  title: 'Fat cells:',
                  content: [
                    'Synthesize &amp; store fat.',
                    'Spherical in shape, nucleus flattened and displaced on one side',
                    'Lipid occupy almost whole of cell –SIGNET RING LIKE APPEARENCE',
                    'May occur singly (loose areolar tissue) or in groups (adipose tissue).',
                  ],
                },
              },
            },
            {
              title: 'Locations',
              orderedList: false,
              unOrderedList: true,
              content:
                'adipose tissue is located: beneath the skin (subcutaneous fat), around internal organs (visceral fat), in bone marrow (yellow bone marrow), intermuscular (Muscular system) and in the breast (breast tissue). Adipose tissue is found in specific locations, which are referred to as adipose depots.',
            },
          ],
        },
      },
     
    
      
      {
        id: 5,
        title: 'Spongy Bone',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'STRUCTURE',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Made up of meshwork of trabeculae or spicules.',
                'Trabeculae are made up of interconnected, thin, curved plates and rods.',
                'Between bone tissues there are numerous spaces.',
                'These spaces are filled with bone marrow.',
              ],
            },
            {
              title: 'Osteocytes',
              orderedList: false,
              unOrderedList: false,
              content: [
                'Osteocytes are flat, almond-shaped in the structure; they have a depth of about 7 micrometers and length of about 15 micrometers..',
                'The potential functions of osteocytes include: to respond to mechanical strain and to send signals of bone formation or bone resorption to the bone surface, to modify their microenvironment, and to regulate both    local and systemic mineral homeostasis.',
              ],
            },
            {
              title: 'Osteoblasts',
              orderedList: false,
              unOrderedList: false,
              content: [
                'Osteoblasts, lining the surface of bone, secrete collagen and the organic matrix of bone (osteoid), which becomes calcified soon after it has been deposited.',
                'Osteoblasts are specialized mesenchymal-derived cells that produce and deposit the collagenous bone matrix and regulate the mineralization of that matrix by their production of additional non- collagenous proteins.',
              ],
            },
            {
              title: 'Osteoclasts',
              orderedList: false,
              unOrderedList: false,
              content: [
                'Osteoclasts are specialized multinucleated giant cells that resorb bone',
                'Osteoclasts are multinucleated cells that are responsible for resorption of bone, and increased activity of these cells is associated with several common bone diseases, including postmenopausal osteoporosis.',
              ],
            },
            {
              title: 'LOCATION',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Epiphysis of long bones',
                'All short, flat and irregular bones',
                'a thin rim around marrow cavity of the diaphyses of long bones',
              ],
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: true,
              content:
                'The densely packed concentric rings of matrix in compact bone are ideal for resisting compressive forces, which is the function of compact bone. The open spaces of the trabeculated network of spongy bone allow spongy bone to support shifts in weight distribution, which is the function of spongy bone.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    title: 'GI System',
    isIntroduction: true,
    introductionContent: [
      'The gastrointestinal tract is a continuous long tube.  It is is about nine meters long. The basic histology of the wall is similar throughout the entire gastrointestinal tract. However, there are distinguishing characteristics in each region. For example, brunner&#39;s glands are found in the duodenum.',
      [
        {
          orderedList: false,
          unOrderedList: true,
          content:
            'When looking at the histology it can be seen that tThe wall of the gastrointestinal tract has four tunics or layers:',
          subContent: [
            'Mucosa',
            'Submucosa',
            'Muscular externa',
            'Serosa or adventitia',
          ],
        },
      ],
    ],
    content: {
      subTopic: [
        {
          title: 'Mucosa',
          unOrderedList: false,
          orderedList: false,
          content: [
            'The mucosa is the innermost layer of the GI tract.  The mucosa, or mucous membrane layer, lines the lumen of the digestive tract.',
            'In certain regions, the mucosa develops folds that increase the surface area. Certain cells in the mucosa secrete mucus, digestive enzymes, and hormones. Ducts from other glands pass through the mucosa to the lumen.',
            'Gut associated lymphatic tissue (GALT) is found in the mucosa and sometimes extends into the submucosa.',
            {
              title: 'Epithelium',
              content:
                'The mucosa consists of a lining epithelium, lamina propria and muscularis mucosa. The epithelium is usually simple columar epithelium.  In the anus, where thickness for protection against abrasion is needed, the epithelium is stratified squamous epithelium. The stomach and intestines have a thin simple columnar epithelium for secretion and absorption.',
            },
            {
              title: 'Lamina Propria',
              content:
                'Lying beneath the epithelium is the lamina propria.  This is loose connective tissue.  The lamina propria is part of the mucosa.',
            },
            {
              title: 'Muscularis Mucosa',
              content:
                'When looking at the histology it can be seen that bBeneath the lamina propria is a thin layer of smooth muscle called the muscularis mucosa. Muscularis mucosa is part of the lamina propria.',
            },
          ],
        },
        {
          title: 'Submucosa',
          unOrderedList: false,
          orderedList: false,
          content:
            'The submucosa is a thick layer of loose connective tissue deep to the mucosa. The submucosa is comprised of dense irregular connective tissue. Within the submucosa are blood vessels, lymphatic vessels and nerve plexuses. Meissner&#39;s plexus is located in the submucosa.  Glands may also be found in the submucosa.',
        },
        {
          title: 'Muscularis Externa',
          unOrderedList: false,
          orderedList: false,
          content:
            'The muscularis externa consists of thick layers of smooth muscle. The smooth muscle responsible for movements of the digestive tract.  The muscle is arranged in two layers, an inner circular layer and an outer longitudinal layer. The myenteric plexus of Auerbach is located in the muscularis externa.The myenteric plexus is between the two muscle layers.',
        },
        {
          title: 'Serosa/Adventitia',
          unOrderedList: false,
          orderedList: false,
          content:
            'The outer layer of the GI tract is either an adventitia or serosa. The serosa consists of only a single layer of epithelial cells (mesothelium) and underlying connective tissue. The adventitia is the outer layer of the GI tract when it is abutting another organ the posterior abdominal wall.',
        },
      ],
    },
    subTopics: [
      {
        id: 0,
        title: 'TONGUE',
        isIntroduction: true,
        orderedList: false,
        unOrderedList: true,
        introductionContent: [
          'The tongue is a mass of interlacing skeletal muscle , connective tissue with some mucous and serous glands, and pockets of adipose tissue, covered in oral mucosa. A V-shaped line (shallow groove)- the sulcus terminalis, divides the tongue into an anterior 2/3 and a posterior 1/3.',
          'Accessory digestive organ composed of skeletal muscle covered by mucosa.',
          'Mucosa binds tightly to the underlying muscles by the lamina propria, which actually penetrates the muscles.',
          'Little or no submucosa.',
        ],
        content: {
          subTopic: [
            {
              title: 'MUSCLE:',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Arranged in bundles of many sizes that are separated by connective tissue and cross ach other in three planes which gives the tongue flexibility required for speech, positioning food, chewing and swallowing.',
                'Mucosa is different on the dorsal (upper)nd ventral (lower) surfaces.',
                'Ventral surface has a thin non keratinized stratified squamous epithelium with underlying lamina propria.',
                'Dorsal surface in posterior one third contains many rounded elevations called lingual tonsils having many lymphatic nodules.',
                'Anterior two thirds of the dorsal surface has many papillae, which are projections of the mucosal surface.',
                {
                  title: '1.FILIFORM PAPILLAE :',
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Most numerous covering anterior 2/3 of tongue',
                    'Conical projections that lack taste buds.',
                    'Tips are keratinized.',
                    'Increase the friction between food and tongue.',
                  ],
                },
                {
                  title: '2. FUNGIFORM PAPILLAE:',
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Resemble mushrooms with narrow base and globular upper end.',
                    'Occur singly and distributed amongst filiform papillae.',
                    'Contain connective tissue core and tastebuds on its expanded upper surface.',
                  ],
                },
                {
                  title: '3. FOLIATE PAPILLAE :',
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Occurs in rows separated by furrows in to which serous glands in the lamina propria drain.',
                    'Vestigeal in human.',
                    'The sides of the papillae harbor many taste buds.',
                  ],
                },
                {
                  title: '4. CIRCUMVALLATE PAPILLAE:',
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Largest and least numerous with only 7-12 occurring near the v-shaped groove at the back of the tongue.',
                    'Each is surrounded by a ring like ridge of mucosa from which it is separated by a circular furrow.',
                    'The epithelium covering the walls of sulcus contains many taste buds.',
                    'At the bottom of the trench there are openings of the ducts of serous glands of Von Ebner.',
                    'Core contains connective tissue, vessels, lymphatics and nerves.',
                  ],
                },
              ],
            },
            {
              title: 'LOCATION AND DEVELOPMENT',
              orderedList: false,
              unOrderedList: true,
              content: [
                'In the oral cavity',
                'Begins to develop in the fourth week of embryonic development from a median swelling (tuberculum impar) and two lateral swelling of the first pharyngeal arch; which give the anterior two third of tongue.',
                'The hypopharyngeal eminence develops mainly by the growth of endoderm from the third pharyngeal arch which forms the posterior one third of tongue.',
              ],
            },
            {
              title: 'FUNCTION',
              content:
                'The tongue is vital for chewing and swallowing food, as well as for speech.',
            },
          ],
        },
      },
      {
        id: 1,
        title: 'ESOPHAGUS',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'STRUCTURE',
              content: [
                'The human esophagus has a mucous membrane consisting of a tough stratified squamous epithelium without keratin, a smooth lamina propria, and a muscularis mucosae. The epithelium of the esophagus has a relatively rapid turnover, and serves a protective function against the abrasive effects of food.',
                {
                  title: 'Mucosa:',
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Epithelium: non - keratinized stratified squamous epithelium.',
                    'Lamina propria: thin layer of loose connective tissue.',
                    'Muscularis mucosa: thicker compared to other parts of digestive tract.',
                  ],
                },
                {
                  title: 'Submucosa:',
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Dense, irregular connective tissue with collagen and elastic fibers.',
                    'Because of presence of elastic fibers the submucosa is thrown into fold which makes the lumen of esophagus irregular.',
                    'Contains branched tubuloalveolar mucous glands, a characteristic feature of esophagus.',
                  ],
                },
                {
                  title: 'Muscle Layer:',
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'In upper third - skeletal muscle.',
                    'In middle third - both skeletal and smooth muscle.',
                    'In lower third – purely smooth muscle.',
                    'Arranged in two layers outer longitudinal and inner circular.',
                  ],
                },
                {
                  title: 'Adventita:',
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Consists of loose areolar tissue and the terminal one inch is covered by serosa.',
                  ],
                },
              ],
            },
            {
              title: 'LOCATION AND DEVELOPMENT',
              orderedList: false,
              unOrderedList: true,
              content: [
                'The esophagus runs behind the windpipe (trachea) and heart, and in front of the spine.',
                'In early embryogenesis, the esophagus develops from the endodermal primitive gut tube. The ventral part of the embryo abuts the yolk sac.Sections of this gut begin to differentiate into the organs of the gastrointestinal tract, such as the esophagus, stomach, and intestines.(FOREGUT).',
              ],
            },
            {
              title: 'FUNCTION',
              content:
                'The esophagus is a tube that connects the throat and the stomach. If the mouth is the gateway to the body, then the esophagus is a highway for food and drink to travel along to make it to the stomach.',
            },
          ],
        },
      },
      {
        id: 2,
        title: 'STOMACH FUNDUS & BODY',
        isIntroduction: false,
        content: [
          {
            subTopic: [
              {
                title: 'IDENTIFICATION POINTS',
                unOrderedList: true,
                orderedList: false,
                content: [
                  'MUCOSA LINED BY SIMPLE COLUMNAR EPITHELIUM',
                  'NUMEROUS CHIEF AND PARIETAL CELLS IN LAMINA PROPRIA',
                  'SHALLOW GASTRIC PITS',
                  'MUSCULARIS EXTERNA CONTAINING INNER OBLIQUE,MIDDLE CIRCULAR AND OUTER LONGITUDINAL MUSCLE LAYERS',
                ],
              },
              {
                title: 'INTRODUCTION',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'STOMACH IS A MUSCULAR BAG LIKE STRUCTURE,STORES FOOD TEMPORARYLY  FOR FEW HOURS.',
                  'DIVIDED INTO 3 PARTS i.e FUNDUS,BODY AND PYLORUS.',
                ],
              },
              {
                title: 'STRUCTURE',
                content: [
                  {
                    subTopic: [
                      {
                        title: 'MUCOSA:',
                        content:
                          'FOLDED INTO MANY RUGAE WHICH DISSAPPEAR ON EXPANSION LINED BY SIMPLE COLUMNAR EPITHELIUM.MOST OF IT PROJECTS INTO LAMINA PROPRIA FORMING GASTRIC PITS.GASTRIC PITS ARE SHALLOW.',
                      },
                      {
                        title: 'LAMINA PROPRIA:',
                        content: [
                          'RICH IN FUNDIC GLANDS, WHICH CONTAINS',
                          '1.STEM CELLS:',
                          'ACTIVE,UNDIFFERENTATED CELLS FOUND AT THE BASE OF LAMINA PROPRIA.',
                          '2. ENTERO ENDOCRINE CELLS:',
                          'PRESENT ABOVE THE STEM CELLS.ALSO CALLED AS ‘ARGENTAFFIN CELLS’ SINCE THEY ARE STAINED BY SILVER SALTS.BELONG TO APUD (AMINE PRECURSOR UPTAKE DECARBOXYLASE) SYSTEM.',
                          '3. CHIEF CELLS/ZYMOGENIC CELLS:',
                          'SMALL CUBOIDAL CELLS PRESENT ABOVE ENTEROENDOCRINE CELLS.LARGE IN NUMBER WITH BASOPHILIC CYTOPLASM AND FEW ZYMOGEN GRANULES.',
                          '4. OXYNTIC CELLS:',
                          'LARGE PYRAMIDAL OR POLYHEDRAL CELLS WITH CENTRAL NUCLEUS.PRESENT IN UPPER HALF OF LAMINA PROPRIA. EASILY IDENTIFIED BY BRIGHT EOSINOPHILIC CYTOPLASM, HENCE THESE ARE CALLED ‘OXYNTIC CELLS’.ALSO CALLED AS ‘PARIETAL CELLS’.SECRETE HCL AND INTRINSIC FACTOR.',
                          '5. MUCOUS NECK CELLS:',
                          'THESE OPEN INTO GASTRIC PITS AND SECRETE ACID MUCOUS.',
                        ],
                      },
                      {
                        title: 'MUSCULARIS MUCOSA/INTERNA:',
                        content:
                          'CONSISTS OF INNER CIRCULAR AND OUTER LONGITUDINAL MUSCLE LAYERS.',
                      },
                      {
                        title: 'SUBMUCOSA:',
                        content:
                          'MADE UP OF LOOSE AREOLAR CONNECTIVE TISSUE.MEISSENER’S PLEXUS OF NERVE FIBRES ARE PRESENT.',
                      },
                      {
                        title: 'MUSCULARIS EXTERNA:',
                        content: [
                          'CONSISTS OF INNER OBLIQUE,MIDDLE CIRCULAR AND OUTER LONGITUDINAL MUSCLE LAYERS. IN BETWEEN CIRCULAR AND LONGITUDINAL MUSCLE LAYERS, FEW MYENTERIC OR AUERBACH’S PLEXUS OF NERVE FIBRES ARE SEEN.',
                          'SEROSA:',
                          'OUTER MOST LAYER MADE UP OF FEW CONNECTIVE TISSUE CELLS AND FIBRES, COVERED BY MESOTHELIUM OF VISCERAL PERITONEUM.',
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                title: 'FUNCTIONS:',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'SIMPLE COLUMNAR EPITHELIUM PERFORMS SECRETORY AND ABSORPTIVE FUNCTION.',
                  'SUBMUCOSA IS DEFENSIVE AND NUTRITIVE IN FUCTION.',
                  'MUSCULARIS EXTERNA HELPS IN CHURNING FOOD PARTICLES i.e PERISTALSIS.',
                  'SEROSA IS SUPPORTIVE AND PROTECTIVE IN FUNCTION.',
                ],
              },
              {
                title: 'CLINICAL',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'INFLAMMATION OF GASTRIC MUSCOSA BY ‘HELICOBACTER PYLORI’ CAUSING GASTRITIS.',
                  'HYPERSECRETION OF HCL AND PEPSIN ENZYMES CAUSING PEPTIC ULCERS.',
                  'UNCONTROLLED ABNORMAL PROLIFERATION OF SURFACE EPITHELIUM OF STOMACH LEADS TO GASTRIC CARCINOMA.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'STOMACH PYLORUS',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'Identification points',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Deep gastric pits',
                'Lamina propria containing pyloric glands',
                'Thickened middle circular muscle layer',
              ],
            },
            {
              title: 'Introduction',
              orderedList: false,
              unOrderedList: true,
              content: [
                'stomach is a muscular bag like structure,stores food temporaryly  for few hours.',
                'divided into 3 parts i.e fundus,body and pylorus.',
              ],
            },
            {
              title: 'Structure',
              content: [
                {
                  title: 'Mucosa:',
                  content:
                    'Folded into many rugae which dissappear on expansion lined by simple columnar epithelium.most of it projects into lamina propria forming gastric pits.gastric pits are deep.',
                },
                {
                  title: 'Lamina propria:',
                  content: 'Rich in mucous secreting pyloric glands.',
                },
                {
                  title: 'Muscularis mucosa/interna:',
                  content:
                    'Consists of inner circular and outer longitudinal muscle layers.',
                },
                {
                  title: 'Submucosa:',
                  content:
                    'Made up of loose areolar connective tissue.meissener’s plexus of nerve fibres are present.',
                },
                {
                  title: 'Muscularis externa:',
                  content:
                    'Consists of inner oblique,middle circular and outer longitudinal muscle layers. In between circular and longitudinal muscle layers, few myenteric or auerbach’s plexus of nerve fibres are seen.middle circular muscle layer is thicker.',
                },
                {
                  title: 'Serosa:',
                  content:
                    'Outer most layer made up of few connective tissue cells and fibres, covered by mesothelium of visceral peritoneum.',
                },
              ],
            },
            {
              title: 'Functions:',
              unOrderedList: true,
              orderedList: false,
              content: [
                'Simple columnar epithelium performs secretory and absorptive function.',
                'Submucosa is defensive and nutritive in fuction.',
                'Muscularis externa helps in churning food particles i.e peristalsis.',
                'Serosa is supportive and protective in function.',
              ],
            },
            {
              title: 'Clinical',
              unOrderedList: true,
              orderedList: false,
              content: [
                'Inflammation of gastric muscosa by ‘helicobacter pylori’ causing gastritis.',
                'Hypersecretion of hcl and pepsin enzymes causing peptic ulcers.',
                'Uncontrolled abnormal proliferation of surface epithelium of stomach leads to gastric carcinoma.',
              ],
            },
          ],
        },
      },
      {
        id: 4,
        title: 'DUODENUM:',
        isIntroduction: false,
        content: [
          {
            subTopic: [
              {
                title: 'STRUCTURE',
                content: [
                  'Histologically the duodenum is similar to all the other hollow organs of the gastrointestinal tract: mucosa, submucosa and muscularis externa and serosa/adventitia.',
                  'Mucosa consists of simple columnar epithelium (lamina epithelialis), a connective tissue layer (lamina propria) and a smooth muscle layer (lamina muscularis).',
                  'Sriated border has the microvilli along with glycocalyx covering the apical surface of surface of simple cuboidal and simple columnar epithelium found in different parts of the body. Microvilli are approximately 100 nanometers in diameter and their length varies from approximately 100 to 2,000 nanometers in length.',
                  {
                    title: 'Mucosa:',
                    orderedList: false,
                    unOrderedList: true,
                    content: [
                      'Has permanent circular folds called Plica circularis.',
                      'These folds do not disappear on distension.',
                      'Mucosa also contains villi.',
                      'Core of villi contains loose connective tissue and fold contains layers of submucosa.',
                      'Epithelium: Simple columnar cells with striated border.Goblet cells are also present.',
                      'Lamina propria: In between the bases of villl epithelium is invaginated .Intestinal glands which are also called as crypts of Liberkuhn',
                      'These glands are short tubular glands which open into the intrvillous space.',
                    ],
                  },
                  {
                    title: 'Submucosa:',
                    orderedList: false,
                    unOrderedList: true,
                    content: [
                      'Contains branched tubuloacinar duodenal glands called as Brunner&#39;s glands.',
                      'The ducts of these glands open into the lumen of duodenum.',
                      'These are mucous secreting glands hence stained lightly.',
                    ],
                  },
                  {
                    title: 'Muscular Layer:',
                    orderedList: false,
                    unOrderedList: true,
                    content: [
                      'Outer longitudinal and inner circular layer of smooth muscle.',
                      'Myenteric (Auerbach’s)nerve plexus',
                    ],
                  },
                  {
                    title: 'Adventitia:',
                    orderedList: false,
                    unOrderedList: true,
                    content:
                      'As it is a retroperitoneal organ only some part is covered by serosa and rest of it is covered by adventitia.',
                  },
                ],
              },
              {
                title: 'FUNCTIONS:',
                orderedList: false,
                unOrderedList: false,
                content:
                  'It receives partially digested food (known as chyme) from the stomach and plays a vital role in the chemical digestion of chyme in preparation for absorption in the small intestine',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'APPENDIX',
        isIntroduction: false,
        content: [
          {
            subTopic: [
              {
                title: 'Identification points',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'Villi are absent.',
                  'Lamina propria containing lymphoid aggregations.',
                  'Thick muscularis externa.',
                ],
              },
              {
                title: 'Introduction',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'vermiform appendix is a worm like diverticulum arising from postero-medial wall of caecum.',
                  'length of 20cm, average length is 9cm.',
                ],
              },
              {
                title: 'Structure',
                content: [
                  {
                    subTopic: [
                      {
                        title: 'Mucosa:',
                        content:
                          'Lined by simple columnar epithelium with fine microvilli,mucous secreting goblet cells are more in number. Villi are absent.',
                      },
                      {
                        title: 'Lamina propria:',
                        content:
                          'Contain few tubular intestinal glands or crypts of liberkunn and numerous aggregations of lymphatic nodules which extend into sub mucosa.',
                      },
                      {
                        title: 'Muscularis mucosa/interna:',
                        content:
                          'This layer consists of disrupted circular muscle layers.',
                      },
                      {
                        title: 'Submucosa:',
                        content:
                          'Made up of loose areolar connective tissue with more blodd vessels. Contains some lymphoid tissue which is migrated from lamina propria.',
                      },
                      {
                        title: 'Muscularis externa:',
                        content:
                          'Consists of outer longitudinal and inner circular muscle fibres with myenteric nerve plexus in between.',
                      },
                      {
                        title: 'Serosa:',
                        content: [
                          'Outer most layer with few adipocytes.',
                          '**vermiform apendix is rudimentary in nature , hence it does not perform any fucntion.',
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                title: 'Clinical:',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'Inflammation of vermiform appendix is called as ‘appendicitis‘. It is caused either by obstruction or infections.',
                  'Surgical removal of vermiform appendix is termed as ‘appendicectomy',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        title: 'ILEUN',
        isIntroduction: false,
        content: [
          {
            subTopic: [
              {
                title: 'Identification points',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'Finger like villi lined by simple columnar epithelium.',
                  'Villi rich in goblet cells.',
                  'Crypts of liberkunn present.',
                  'Mucosa containing payer’s patches.',
                ],
              },
              {
                title: 'Introduction',
                orderedList: false,
                unOrderedList: false,
                content: '3rd part of small intestine.',
              },
              {
                title: 'Structure',
                content: [
                  {
                    subTopic: [
                      {
                        title: 'Mucosa:',
                        content:
                          'Lined by simple columnar epithelium with fine microvilli,mucous secreting goblet cells are more in number.  Formed into large folds or finger like projections called villi.',
                      },
                      {
                        title: 'Lamina propria:',
                        content: [
                          'Contain tubular intestinal glands or crypts of liberkunn and numerous aggregations of lymphatic nodules called ‘payer’s patches’.',
                          'Crypts of liberkunn consists of following cells,',
                          {
                            title: '1. Stem cells:',
                            content:
                              'Active,undifferentated cells found at the base of lamina propria.',
                          },
                          {
                            title: '2. Goblet cells:',
                            content: 'Secrete mucous.',
                          },
                          {
                            title: '3. Entero endocrinecells:',
                            content:
                              'Present above the stem cells.also called as ‘argentaffin cells’ since they are stained by silver salts.belong to apud (amine precursor uptake decarboxylase) system.',
                          },
                          {
                            title: '4. Paneth cells:',
                            content: [
                              'Zymogenic cells, producing digestive enzymes and lysozymes.',
                              'Muscularis mucosa/interna:',
                              'This layer consists of disrupted circular muscle layers.',
                            ],
                          },
                        ],
                      },
                      {
                        title: 'Submucosa:',
                        content:
                          'Made up of loose areolar connective tissue with more blodd vessels. Contains some lymphoid tissue which is migrated from lamina propria.',
                      },
                      {
                        title: 'Muscularis externa:',
                        content:
                          'Consists of outer longitudinal and inner circular muscle fibres. In between two layers parasympathetic ganglion cells of myenteric plexus can be seen.',
                      },
                      {
                        title: 'Serosa:',
                        content:
                          'Outer most layer made up of few connective tissue cells and fibres, covered by mesothelium of visceral peritoneum.',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'Functions:',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'Villi has absorptive function.',
                  'Microvilli increase the surface area of absorption.',
                  'Brunner’s glands secrete alkaline fluid rich in hco3‾.',
                  'Muscularis externa helps in churning food particles i.e peristalsis.',
                  'Serosa is supportive and protective in function.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        title: 'JEJUNUM',
        isIntroduction: false,
        content: [
          {
            subTopic: [
              {
                title: 'Identification points',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'Tongue shaped villi lined by simple columnar epithelium.',
                  'Absence of brunner’s glands in submucosa.',
                  'Crypts of liberkunn present',
                ],
              },
              {
                title: 'Introduction',
                orderedList: false,
                unOrderedList: false,
                content: '2nd part of small intestine.',
              },
              {
                title: 'Structure',
                content: [
                  {
                    subTopic: [
                      {
                        title: 'Mucosa:',
                        content:
                          'Lined by simple columnar epithelium with fine microvilli,mucous secreting goblet cells are more in number. Formed into large folds or finger like projections called villi.’plyca circularis’ is a mucosal fold with a core of submucosa.',
                      },
                      {
                        title: 'Lamina propria:',
                        content: [
                          'Contain tubular intestinal glands or crypts of liberkunn.',
                          'Crypts of liberkunn consists of following cells,',
                          {
                            title: '1. Stem cells:',
                            content:
                              'Active,undifferentated cells found at the base of lamina propria.',
                          },
                          {
                            title: '2. Goblet cells:',
                            content: 'Secrete mucous.',
                          },
                          {
                            title: '3. Entero endocrinecells:',
                            content:
                              'Present above the stem cells.also called as ‘argentaffin cells’ since they are stained by silver salts.belong to apud (amine precursor uptake decarboxylase) system.',
                          },
                          {
                            title: '4. Paneth cells:',
                            content:
                              'Zymogenic cells, producing digestive enzymes and lysozymes.',
                          },
                        ],
                      },
                      {
                        title: 'Muscularis mucosa/interna:',
                        content: 'Consists of  circular muscle layers.',
                      },
                      {
                        title: 'Submucosa:',
                        content:
                          'Made up of loose areolar connective tissue.absence of brunner’s glands.',
                      },
                      {
                        title: 'Muscularis externa:',
                        content:
                          'Consists of outer longitudinal and inner circular muscle fibres. In between two layers parasympathetic ganglion cells of myenteric plexus can be seen.',
                      },
                      {
                        title: 'Serosa:',
                        content:
                          'Outer most layer made up of few connective tissue cells and fibres, covered by mesothelium of visceral peritoneum.',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'Functions:',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'Villi has absorptive function.',
                  'Microvilli increase the surface area of absorption.',
                  'Brunner’s glands secrete alkaline fluid rich in hco3‾.',
                  'Muscularis externa helps in churning food particles i.e peristalsis.',
                  'Serosa is supportive and protective in function.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 8,
        title: 'COLON & LARGE INTESTINE',
        isIntroduction: false,
        content: [
          {
            subTopic: [
              {
                title: 'Identification points',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'Folds of mucosa without villi.',
                  'Numerous goblet cells.',
                  'Adipocytes in submucosa',
                  'Muscularis externa with outer longitudinal and inner circular muscle fibres.',
                ],
              },
              {
                title: 'Introduction',
                orderedList: false,
                unOrderedList: true,
                content: [
                  '6 feet in length',
                  'divided into caecum,ascending colon, descending colon,transverse colon and sigmoid colon.',
                ],
              },
              {
                title: 'Structure',
                content: [
                  {
                    subTopic: [
                      {
                        title: 'Mucosa:',
                        content:
                          'Lined by simple columnar epithelium rich in goblet cells. Villi are absent.',
                      },
                      {
                        title: 'Lamina propria:',
                        content: [
                          'Contain tubular intestinal glands or crypts of liberkunn. But here crypts of liberkunn are devoid of paneth cells.',
                          'Crypts of liberkunn consists of following cells,',
                          {
                            title: '1. Stem cells:',
                            content:
                              'Active,undifferentated cells found at the base of lamina propria.',
                          },
                          {
                            title: '2. Goblet cells:',
                            content: 'Secrete mucous.',
                          },
                          {
                            title: '3. Entero endocrinecells:',
                            content:
                              'Present above the stem cells.also called as ‘argentaffin cells’ since they are stained by silver salts.belong to apud (amine precursor uptake decarboxylase) system.',
                          },
                        ],
                      },
                      {
                        title: 'Muscularis mucosa/interna:',
                        content: 'Consists of  circular muscle layers.',
                      },
                      {
                        title: 'Submucosa:',
                        content:
                          'Made up of loose areolar connective tissue. Presence of numerous adipocytes.',
                      },
                      {
                        title: 'Muscularis externa:',
                        content:
                          'Consists of outer longitudinal and inner circular muscle fibres. In certain regions of colon longitudinal muscle layers become very thick resulting in formation of three band like structures called’taenia coli’.',
                      },
                      {
                        title: 'Serosa:',
                        content:
                          'It is said to be incomplete in posterior aspect of ascending and descending colon. Here it shows many peritoneal pockets filled with adipose tissue and is termed as ‘appendices epiploicae’.',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'Functions:',
                orderedList: false,
                unOrderedList: false,
                content:
                  'Function is to reabsorb fluids and process waste products from the body and prepare for its elimination. The colon consists of four parts: descending colon, ascending colon, transverse colon, and sigmoid colon.',
              },
            ],
          },
        ],
      },
      {
        id: 9,
        title: 'Rectum & Ano-rectal junction',
        isIntroduction: false,
        content: [
          {
            subTopic: [
              {
                title: 'Rectum',
                orderedList: false,
                unOrderedList: true,
                content: [
                  'This specimen is from the rectum as it narrows approaching the anal canal. Vertical folds project from the mucosa into the lumen to form the anal columns. (Transverse folds also occur in the rectum but are not present in this specimen.)',
                  'The rectum is composed of the four layers characteristic of the gastrointestinal tract.',
                  {
                    title: 'Mucosa (or mucous membrane)',
                    content: [
                      {
                        subTopic: [
                          {
                            title: 'Villi - ',
                            content: [
                              'cover the surface of the mucosa.',
                              {
                                unOrderedList: true,
                                orderdList: false,
                                content: [
                                  'Absorptive Cells (or Enterocytes) - simple columnar cells with microvilli (or brush border).',
                                  'Goblet Cells - secrete mucus for lubrication.',
                                ],
                              },
                            ],
                          },
                          {
                            title: 'Crypts',
                          },
                          {
                            title: 'Lamina Propria',
                            content:
                              'loose connective tissue that supports the epithelium and forms the core of villi.',
                          },
                          {
                            title: 'Muscularis Mucosa ',
                            content: 'layer of smooth muscle.',
                          },
                          {
                            title: 'Submucosa',
                            unOrderedList: true,
                            orderdList: false,
                            content: [
                              'dense irregular connective tissue.',
                              'Anal Columns - vertical folds of the mucosa and submucosa that project into the lumen.',
                            ],
                          },
                          {
                            title: 'Muscularis Externa ',
                            content:
                              'two orthogonal layers of smooth muscle (inner circular and outer longitudinal).',
                          },
                          {
                            title: 'Serosa',
                            content: 'absent in this specimen.',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                title: 'Ano-Rectal Junction',
                orderedList: false,
                unOrderedList: false,
                content: [
                  'The recto-anal junction features an important change in epithelial structure. The rectum is characterized by the columnar epithelium that lines the majority of the gastrointestinal tract&#39;s secretory and absorptive areas. The anus, on the other hand, has a stratified squamous epithelium that provides a greater deal of protection to the underlying tissue.',
                  'The anal canal is the site where there is a transition from the simple columnar epithelium of the colon to the stratified squamous epithelium of skin (the pectinate line).',
                  {
                    title: 'Colorectal Zone - left side of the specimen.',
                    content: [
                      '1.Anal Glands - secrete mucus into the anal canal.',
                      {
                        orderedList: false,
                        unOrderedList: true,
                        content: [
                          'Absorptive Cells (or Enterocytes) - simple columnar cells with microvilli (or brush border).',
                          'Goblet Cells - very abundant and secrete mucus.',
                        ],
                      },
                      '2.Internal Anal Sphincter - is an expansion of the inner circular layer of the muscularis externa.',
                    ],
                  },
                  {
                    title: 'Pectinate Line (Anal Transition Zone) –',
                    content:
                      'junction between the simple columnar epithelium of the colon and the stratified squamous epithelium of then skin (higher magnification). At first it is not keratinized, but within a few millimeters it becomes keratinized.',
                  },
                  {
                    title:
                      'Squamous Zone of the Anal Canal - right side of the specimen.',
                    orderedList: false,
                    unOrderedList: true,
                    content: [
                      'Stratified Squamous Epithelium - initially is non-keratinized but becomes keratinized within a few millimeters.',
                      'External Sphincter - skeletal muscle that is part of the pelvic floor.',
                      'Circumanal Glands - are apocrine glands.',
                      'Sebaceous Glands',
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'MALE REPRODUCTIVE SYSTEM',
    isIntroduction: true,
    introductionContent:
      'The male reproductive system consists of the testes, conducting tubules and ducts (epididymis, vas deferens, ejaculatory ducts), accessory sex glands (seminal vesicles, prostate, and bulbourethral glands), and the penis. These organs work to together to produce male gametes(sperm) and the other components of semen.',
    subTopics: [
      {
        id: 0,
        title: 'EPIDIDYMIS',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'STRUCTURE',
              content: [
                'The epididymis is covered by a two layered pseudostratified epithelium. The epithelium is separated by a basement membrane from the connective tissue wall which has smooth muscle cells.  In the caput (head) region these cells have long stereocilia that are tuft like extensions that project into the lumen.',
                {
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Efferent ductules connecting rete restis fuse to form long and highly coiled tube.',
                    'Surrounded by vascular connective tissue.',
                    'Lined by pseudostratified columnar epithelium resting on a basal lamina.',
                    'Cells have abundant apical stereocilia.',
                    'Cells secrete glycophosphocholine - possibly a capacitation inhibitor Epithelial cells phagocytose and digest residual bodies which are sloughed during spermatogenesis.',
                    'Sheath of circular smooth muscle underlies the basal lamina which contracts rhythmically during ejaculation for movement of spermatozoa',
                  ],
                },
              ],
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: true,
              content:
                'It transports and stores sperm cells that are produced in the testes. It also is the job of the epididymis to bring the sperm to maturity, since the sperm that emerge from the testes are immature and incapable of    fertilization. During sexual arousal, contractions force the sperm into the vas deferens.',
            },
            {
              title: 'LOCATION ',
              content:
                'narrow, tightly-coiled tube connecting rear of the testicles to the deferent duct (ductus deferens or vas deferens). The epididymis consists of three parts: head, body, and tail. The head of the epididymis is located on superior pole of testis. It stores sperm for maturation.',
            },
          ],
        },
      },
      {
        id: 1,
        title: 'PENIS',
        isIntroduction: true,
        introdcutionContent: [
          {
            unOrderedList: true,
            orderedList: false,
            content: [
              'Comprises of three cylinders of spongy erectile tissue.',
              'Surrounded by common connective tissue sheath.',
              'Covered by hairless thin skin.',
            ],
          },
        ],
        content: [
          {
            subTopic: [
              {
                title: 'A. ERECTILE TISSUE:',
                content: [
                  'Sponge like masses of endothelial lined vascular spaces. Irregular network of fibrous connective tissue called trabeculae containing smooth muscle fibers.',
                  {
                    unOrderedList: true,
                    orderedList: false,
                    content:
                      'The trabeculae form supporting framework between the numerous endothelium lined lacunae (vascular sinuses).',
                  },
                  {
                    title: '1. Corpora Cavernosa :',
                    unOrderedList: true,
                    orderedList: false,
                    content: [
                      'Two dorsal erectile cylinders.',
                      'Penetrated by deep artery of penis.',
                      'Having a sheath of thick tunica albuginea.',
                    ],
                  },
                  {
                    title: '2. Corpus Spongiosum :',
                    unOrderedList: true,
                    orderedList: false,
                    content: [
                      'Single, smaller, ventral cylinder.',
                      'Surrounded by tunica albuginea.',
                      'Its expanded dorsal tip is called as glans penis.',
                      'Penetrated along its length by penile urethra.',
                      'The urethra is lined by stratified columnar or pseudostratified columnar epithelium except at its tip it is lined by stratified squamous non-keratinized epithelium.',
                    ],
                  },
                ],
              },
              {
                title: 'B. THIN SKIN:',
                orderedList: false,
                unOrderedList: false,
                content: 'Devoid of any hair.',
              },
              {
                title: 'C. LOOSE CONNECTIVE TISSUE',
                content: [
                  'Devoid of fat.',
                  'Also known as Buck&#39;s fascia.',
                  'Binds tunica albuginea of all three erective tissues together.',
                ],
              },
            ],
          },
          {
            title: 'FUNCTION',
            content:
              'In addition to its sexual function, the penis acts as a conduit for urine to leave the body.',
          },
        ],
      },
      {
        id: 2,
        title: 'PROSTATE GLAND',
        isIntroduction: false,
        content: [
          {
            subTopic: [
              {
                title: 'STRUCTURE',
                content: [
                  'The prostate gland contains three major glandular regions--the peripheral zone, the central zone,and the transition zone--which differ histologically and biologically. The central zone is relatively resistant to carcinoma and other disease; the transition zone is the main site of origin of prostate hyperplasia.',
                  {
                    unOrderedList: true,
                    orderedList: false,
                    content: [
                      'A fibromuscular glandular organ. Comprised of 20-50 tubulo-alveolar glands.',
                      'The glands open by 15-25 ducts in to the prostatic urethra.',
                      'The stroma consists of fibro-muscular tissue in which glandular tissue is embedded.',
                      'There is a thick capsule surrounding the gland.',
                      'Stroma consists of smooth muscle, collagenous and elastic fibers, contains blood vessels, lymphnodes and nerves.',
                      'Alveoli are surrounded by fibro-muscular stroma. Epithelium lining the alveoli is secretory in nature having either simple columnar or pseudostratified columnar or at some places it is low cuboidal. The variation in epithelium is due to its functional state of the gland.',
                      'Lumen of some of the alveoli in old age show presence of prostatic concretions also termed as corpora amylacea.',
                      'These are oval dense bodies of glycoprotein resulting due to the condensation of secretory products.',
                      'They may undergo calcification but their significance is unknown.',
                    ],
                  },
                ],
              },
              {
                title: 'LOCATION',
                unOrderedList: false,
                orderedList: false,
                content:
                  'The prostate is a walnut-sized gland located between the bladder and the penis. The prostate is just in front of the rectum. The urethra runs through the center of the prostate, from the bladder to the penis, letting urine flow out of the body.',
              },
              {
                title: 'FUNCTION',
                unOrderedList: false,
                orderedList: false,
                content:
                  'main function is to secrete prostate fluid, one of the components of semen. The muscles of the prostate gland also help propel this seminal fluid into the urethra during ejaculation .',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'SEMINAL VESICLE',
        isIntroduction: true,
        introdcutionContent: [
          'Under microscopy, the seminal vesicles can be seen to have a mucosa, consisting of a lining of interspersed columnar cells and a lamina propria; and a thick muscular wall. The lumen of the glands is highly irregular and stores secretions from the glands of the vesicles.',
          'Elongated sac like structure',
          'Highly convoluted irregular lumen.',
          {
            unOrderedList: true,
            orderedList: false,
            content: [
              'Consists of single tube with 3-4 mm in diameter and 10-15 cm length.',
              'Coiled upon itself to measure about 5 cm in length.',
              'Joins with ductus deferens to form ejaculatory duct.',
            ],
          },
        ],
        content: [
          {
            subTopic: [
              {
                title: 'STRUCTURE',
                content: [
                  {
                    subTopic: [
                      {
                        title: 'MUCOSA:',
                        unOrderedList: true,
                        orderedList: false,
                        content: [
                          'Complex folds.',
                          'Folds join with each other to form many crypts and cavities. Epithelium is pseudostratified low columnar or cuboidal. Epithelium varies in height and appearance according to the activity and age of the individual.',
                        ],
                      },
                      {
                        title: 'MUSCLE LAYER:',
                        unOrderedList: true,
                        orderedList: false,
                        content: [
                          'Made up of smooth muscle.',
                          'Thinner than that of ductus deferens.',
                          'Arranged in inner circular and outer longitudinal layer.',
                        ],
                      },
                      {
                        title: 'ADVENTITIA:',
                        unOrderedList: true,
                        orderedList: false,
                        content: 'A thin layer of loose connective tissue.',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'LOCATION',
                unOrderedList: false,
                orderedList: false,
                content: [
                  'posteroinferior to the urinary bladder',
                  'Seminal vesicles are located within the pelvis.',
                ],
              },
              {
                title: 'FUNCTION',
                unOrderedList: false,
                orderedList: false,
                content:
                  'store and produce the majority of the fluid that makes up semen. During ejaculation, the fluid from the seminal vesicles is expelled into the ejaculatory duct where it can then move on to mix with sperm and other reproductive fluids.',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'TESTIS',
        isIntroduction: true,
        introdcutionContent: [
          'Each testis is composed of an exocrine part (seminiferous tubules) and an endocrine part (interstitial or Leydig cells). The testis is divided into lobules by septa consisting of loose areolar connective tissue.',
          'layers of the scrotum is: @Some Damn Englishman Called It The Testes',
          {
            unOrderedList: true,
            orderedList: false,
            content: [
              'S: skin',
              'D: dartos fascia and muscle',
              'E: external spermatic fascia',
              'C: cremasteric fascia',
              'I: internal spermatic fascia',
              'T: tunica vaginalis',
              'T: tunica albuginea',
            ],
          },
        ],
        content: [
          {
            subTopic: [
              {
                title: '1. EXTERNAL COVERINGS:',
                unOrderedList: true,
                orderedList: false,
                content: [
                  'TUNICA VAGINALIS: Double layered mesothelial sac.',
                  'TUNICA ALBUGINEA: Dense fibrous connective tissue. Capsule that forms mediastinum testis along the posterior border.',
                ],
              },
              {
                title: '2. INTERNAL STRUCTURES:',
                unOrderedList: true,
                orderedList: false,
                content: [
                  'Septa extending from tunica albuginea penetrate each testis and divide it into approximately 250 compartments.',
                  'Each lobule includes 1 to 4 seminiferous tubules (exocrine part) and loose vascular connective tissue between the tubules that contain interstitial cells of Leydig (endocrine part).',
                ],
              },
              {
                title: 'A. SEMINIFEROUS TUBULES:',
                unOrderedList: true,
                orderedList: false,
                content: [
                  'Long and highly convoluted and packed in a small space.',
                  'Wall of the tubule consists of:',
                ],
              },
              {
                title: '2. INTERNAL STRUCTURES:',
                unOrderedList: true,
                orderedList: false,
                content: [
                  'Septa extending from tunica albuginea penetrate each testis and divide it into approximately 250 compartments.',
                  'Each lobule includes 1 to 4 seminiferous tubules (exocrine part) and loose vascular connective tissue between the tubules that contain interstitial cells of Leydig (endocrine part).',
                  {
                    unOrderedList: false,
                    orderedList: true,
                    content: [
                      'A layer of connective tissue.',
                      'Stratified seminiferous epithelium consists of spermatogenic and supportive ( Sertoli ) cells.',
                    ],
                  },
                ],
              },
              {
                title: '1. SPERMATOGENIC CELLS:',
                unOrderedList: true,
                orderedList: false,
                content: [
                  'Cells undergo spermatogenesis which are:SPERMATOGONIA :Round cells near the basal lamina. Least differentiated and only spermatogenic cell type present before puberty.',
                  'Having rounded nucleus with patches of heterochromatin. Diploid for both chromosome number (46, 2n) and for DNA (2n).',
                  {
                    title: 'PRIMARY SPERMATOCYTES :',
                    unOrderedList: true,
                    orderedList: false,
                    content: [
                      'Situated closer to the lumen. They are largest germ cells present in tubules.',
                      'Rounded nucleus having dark strands of heterochromatin.',
                      'Seen in prophase of meiosis - I.',
                    ],
                  },
                  {
                    title: 'SECONDARY SPERMATOCYTES :',
                    unOrderedList: true,
                    orderedList: false,
                    content: [
                      'Nearer to the lumen.',
                      'Product of first meiotic division and are about half of the size of primary spermatocyte. Haploid for chromosome number (23, n) but diploid for DNA (2n).',
                      'SPERMATIDS : They are products of second meiotic division of secondary spermatocytes.',
                      'Small cells having dark heterochromatic nuclei. Haploid for both chromosome number (23, n) and DNA (n).',
                    ],
                  },
                ],
              },
              {
                title: '2. SUPPORTING CELLS (SERTOLI CELLS) :',
                unOrderedList: true,
                orderedList: false,
                content: [
                  'Tall columnar cells extending from basal lamina to surface of Epithelium. Having irregular outlines.',
                  'Ovoid euchromatic nuclei with prominent nucleoli.',
                ],
              },
              {
                title: 'FUNCTION',
                unOrderedList: true,
                orderedList: false,
                content: [
                  'Provide mechanical support and nutrition to the spermatogenic cells.',
                  'Form blood-testis barrier.',
                  'Phagocytosis of degenerating spermatogenic cells.',
                  'Remove excess cytoplasm from differentiating spermatids.',
                  'Under influence of FSH and Testosterone they produce androgen binding protein to promote spermatogenesis.',
                ],
              },
              {
                title: 'B. INTERSTITIAL CELLS OF LEYDIG:',
                unOrderedList: true,
                orderedList: false,
                content: [
                  'Located in the loose connective tissue between seminiferous tubules. Acidophilic, polyhedral in shape.',
                  'Found in clusters. They secrete testosterone.',
                ],
              },
              {
                title: 'LOCATION',
                unOrderedList: false,
                orderedList: false,
                content:
                  'just behind the penis and right in front of the anus on male humans.',
              },
              {
                title: 'DEVELOPMENT',
                unOrderedList: false,
                orderedList: false,
                content:
                  'The development of the gonads is part of the prenatal development of the reproductive system and ultimately forms the testes in males and the ovaries in females. The gonads initially develop from the  mesothelial layer of the peritoneum.',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'DUCTUS DEFERENS',
        isIntroduction: true,
        introdcutionContent: [
          'Also known as Vas deferens.',
          'The vas (ductus) deferens consists of an inner epithelial lining with supportive lamina propria. The epithelium lining the vas (ductus) deferens is pseudostratified columnar epithelium and is very similar to the epithelium seen in the epididymis.',
        ],
        content: [
          {
            subTopic: [
              {
                title: 'MICROSCOPIC STRUCTURE:',
                content: [
                  {
                    subTopic: [
                      {
                        title: 'MUCOSA:',
                        unOrderedList: true,
                        orderedList: false,
                        content: [
                          'Lumen is irregular or round.',
                          'Pseudostratified columnar with stereocilia.',
                          'Lamina propria contains collagenous and elastic fibers.',
                        ],
                      },
                      {
                        title: 'MUSCLE LAYER:',
                        unOrderedList: true,
                        orderedList: false,
                        content: [
                          'Three layers of smooth muscle.',
                          'Outer and inner thin layers of longitudinal and a thick middle circular layer.',
                          'Muscle layer is much thicker as compared to the thickness of mucosa.',
                        ],
                      },
                      {
                        title: 'ADVENTITIA:',
                        unOrderedList: true,
                        orderedList: false,
                        content:
                          'Contains loose areolar tissue with blood vessels and nerves.',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'LOCATION',
                unOrderedList: false,
                orderedList: false,
                content:
                  'The vas deferens is a long, muscular tube that travels from the epididymis into the pelvic cavity, to just behind the bladder.',
              },
              {
                title: 'FUNCTION',
                unOrderedList: false,
                orderedList: false,
                content:
                  'The vas deferens is a long, muscular tube that travels from the epididymis into the pelvic cavity, to just behind the bladder. The vas deferens transports mature sperm to the urethra, the tube that carries urine or sperm to outside of the body, in preparation for ejaculation.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'FEMALE REPRODUCTIVE SYSTEM',
    isIntroduction: true,
    introductionContent:
      'The organs of the female reproductive system are the ovaries, oviducts, uterus, vagina, placenta, and mammary glands. They work together for the production of female gametes (oocytes), fertilization, support of the developing fetus, delivering it to the outside world, and nutrition of the newborn.',
    subTopics: [
      {
        id: 0,
        title: 'Mammary Gland',
        isIntroduction: true,
        introdcutionContent:
          'Each breast is made up of 15-25 secretory lobes, embedded in adipose tissue. The mammary gland is like a modified sweat gland. Each of theses lobes is a compound tubular acinar gland. The acini empty into ducts, that are lined by cuboidal, or low columnar epithelial cells, and surrounded by myoepithelial cells.',
        content: {
          subTopic: [
            {
              title: 'NON-LACTATING (INACTIVE) STAGE:',
              unOrderedList: true,
              orderedList: false,
              content: [
                'Consists mainly of ducts and their branches embedded in connective tissue stroma and fat cells.',
                'Lobules are poorly defined.',
                'Each lobule consists of intralobular ducts and inactive alveoli which appear as solid epithelial spherical masses or cords.  ',
                '**vermiform apendix is rudimentary in nature , hence it does not perform any fucntion.',
                'These solid masses of cells do not have lumen but under the influence of hormones may develop into the functional acini.',
              ],
            },
            {
              title: 'LACTATING (ACTIVE) STAGE:',
              unOrderedList: true,
              orderedList: false,
              content: [
                'During pregnancy the increased level of estrogen and progesterone influences the rapid growth and branching of duct system.',
                'Formation of new acini (alveoli) at the terminal tip of ducts.',
                'Lobule is full of acini with minimal amount of connective tissue.',
                'Marked reduction in adipose tissue.',
                'Alveoli are lined with tall columnar cells with narrow lumen. Myoepithelial cells are seen between basement membrane and secretory cells.',
                'Intralobular ducts are fewer in number.',
                'Ducts take dark stain compared to alveoli.',
              ],
            },
            {
              title: 'DEVELOPMENT',
              orderedList: false,
              unOrderedList: false,
              content:
                'The development of the mammary gland occurs mainly after birth. During puberty, tubule formation is coupled with branching morphogenesis which establishes the basic arboreal network of ducts emanating from the nipple.',
            },
            {
              title: 'LOCATION AND FUNCTION ',
              orderedList: false,
              unOrderedList: true,
              content: [
                'located in the breast overlying the pectoralis major muscles, are present in both sexes, but usually are functional only in the female.',
                'responsible for lactation, or the production of milk. Both males and females have glandular tissue within the breasts; however, in females the glandular tissue begins to develop after puberty in response to estrogen release',
              ],
            },
          ],
        },
      },
      {
        id: 1,
        title: 'CERVIX',
        isIntroduction: false,
        content: [
          {
            subTopic: [
              {
                title: 'STRUCTURE',
                content: [
                  'The squamocolumnar junction of the cervix: The ectocervix, with its stratified squamous epithelium, is visible on the left. Simple columnar epithelium, typical of the endocervix, is visible on the right. A layer of connective tissue is visible under both types of epithelium.',
                  {
                    title:
                      'Histologically different from fundus and body of uterus.',
                    unOrderedList: true,
                    orderedList: false,
                    content: [
                      'Not lined by endometrium so does not show cyclic changes.',
                      'Lined by tall columnar, mucous secreting epithelium.',
                      'Cervical glands in lamina propria are branched tubular and lined by same epithelium; secrete mucous which is rich in enzyme lysozyme.',
                      'Lamina propria is made up of loose connective tissue.',
                      'Muscle layer consists of smooth muscle.',
                      'At the external os the epithelium changes from columnar to stratified squamous.',
                    ],
                  },
                ],
              },
              {
                title: 'DEVELOPMENT',
                unOrderedList: false,
                orderedList: false,
                content:
                  'As a component of the female reproductive system, the cervix is derived from the two paramesonephric ducts (also called Müllerian ducts), which develop around the sixth week of embryogenesis.',
              },
              {
                title: 'LOCATION AND FUNCTION',
                unOrderedList: true,
                orderedList: false,
                content: [
                  'The cervix is the lower part of the uterus situated between the external os (external orifice) and internal os (internal orifice). The cervical canal connects the interior of the vagina and the cavity of the body of uterus.',
                  'The function of the cervix is to allow flow of menstrual blood from the uterus into the vagina, and direct the sperms into the uterus during intercourse.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'OVARY',
        isIntroduction: true,
        introdcutionContent: [
          'The ovaries are small almond shaped structures, covered by a thick connective tissue capsule - the tunica albuginea. This is covered by a simple squamous mesothelium called the germinal epithelium.',
          'The ovary contains many primordial follicles, which are mostly found around the edges of the cortex.',
        ],
        content: [
          {
            subTopic: [
              {
                title: 'GENERAL ORGNISATION:',
                content: [
                  {
                    title: 'GERMINAL EPITHELIUM :',
                    content:
                      'Surface of ovary is covered with a single layer of low cuboidal or squamous epithelium which is called as germinal epithelium.',
                  },
                  {
                    title: 'TUNICA ALBUGINEA :',
                    content: [
                      'A connective tissue layer lying beneath the germinal epithelium.',
                      {
                        title: 'CORTEX :',
                        orderedList: false,
                        unOrderedList: true,
                        content: [
                          'A. Outer part of ovary is cortex.',
                          'Lies beneath tunica albuginea.',
                          'Contains germ cells (oocytes) in follicles.',
                        ],
                      },
                      {
                        title: 'MEDULLA :',
                        orderedList: false,
                        unOrderedList: true,
                        content:
                          'Found deep to cortex which consists of loose fibro elastic connective tissue, lymphocytes, blood vessels and nerves.',
                      },
                      {
                        title: 'OVARIAN FOLLICLES:',
                        orderedList: false,
                        unOrderedList: true,
                        content: [
                          'Ovarian follicles consist of centrally placed oocyte and peripherally placed follicular (granulosa) cells.',
                          'When an oocyte is surrounded with a single layer of cells they are called follicular cells.',
                          'When these cells multiply and form several layers they are called granulosa cells.',
                        ],
                      },
                      {
                        title: 'PRIMORDIAL FOLLICLE:',
                        orderedList: false,
                        unOrderedList: true,
                        content: [
                          'Earliest stage of follicle development.',
                          'These inactive follicles are the only ones present prior to puberty and constitute the majority thereafter.',
                          'Each consist of a primary oocyte (most in the diplotene stage of meiosis-l prophase) surrounded by one layer of squamous follicle cells. Large numbers of such follicles are found in the cortex just beneath the tunica albuginea.',
                          '25-30 um in size.',
                        ],
                      },
                      {
                        title: 'PRIMARY FOLLICLE:',
                        content: [
                          'Primary oocyte surrounded by single or multiple layers of cuboidal follicular cells.',
                          {
                            unOrderedList: true,
                            orderedList: false,
                            content: [
                              'No antrum. Oocyte and follicle cells now secrete a gel like glycoprotein layer called zona pellucida.',
                              'Single layered cuboidal follicular cells divide and form six to seven layers of cuboidal cells called granulosa cells.',
                              'The surrounding stroma now differentiates into two layers.',
                              'Theca interna, a vascular layer of secretory cells and,',
                              'Theca externa, a layer of connective tissue cells.',
                            ],
                          },
                        ],
                      },
                      {
                        title: 'SECONDARY FOLLICLE:',
                        unOrderedList: true,
                        orderedList: false,
                        content: [
                          'Granulosa cells begin to secrete follicular fluid and a few small fluid (liquor folliculi) filled spaces appear between follicular cells.',
                          'Diameter of follicle measures about 0.2 mm and oocyte measure 125 um.',
                          'Fluid filled spaces now coalesce into a single large space (antrum) surrounded by follicular cells. Antrum is filled with a fluid.',
                          'The follicle is now called secondary follicle.',
                        ],
                      },
                      {
                        title: 'GRAFFIAN (MATURE) FOLLICLE:',
                        unOrderedList: true,
                        orderedList: false,
                        content:
                          'Follicle increases in size and its antrum also enlarges, measures about 1-2 cm in diameter.',
                      },
                    ],
                  },
                  {
                    title: 'CORPUS LUTEUM',
                    orderedList: false,
                    unOrderedList: true,
                    content: [
                      'After ovulation the wall of the follicle collapses and becomes infolded.',
                      'The granulosa cells and theca interna cells enlarge, accumulate lipid and become pale staining luteal cells then the structure is called as corpus luteum.',
                      'If fertilization takes place, corpus luteum survives for next few months else it lasts for only 9 days.',
                      'When corpus luteum degenerates, the luteal cells become swollen, thin and a scar of connective tissue replaces the dead lutein cells. This white scar is called corpus albicans which persists in the cortex for several months.',
                    ],
                  },
                ],
              },
              {
                title: 'DEVELOPMENT',
                unOrderedList: false,
                orderedList: false,
                content:
                  'The gonads initially develop from the mesothelial layer of the peritoneum. The ovary is differentiated into a central part, the medulla, covered by a surface layer, the germinal epithelium. The immature ova originate from cells from the dorsal endoderm of the yolk sac.',
              },
              {
                title: 'LOCATION AND FUNCTION',
                unOrderedList: false,
                orderedList: false,
                content: [
                  'They are paired organs located on either side of the uterus within the broad ligament below the uterine (fallopian) tubes.',
                  'The ovaries have two main reproductive functions in the body. They produce oocytes (eggs) for fertilisation and they produce the reproductive hormones, oestrogen and progesterone.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'UTERINE TUBE',
        isIntroduction: true,
        introdcutionContent:
          'Light micrographs of uterine tubes. The lamina epithelialis of the tunica mucosa of the uterine tubes is an intermittently ciliated columnar epithelium that contains two types of cells: a ciliated cell and a non- ciliated, secretory cell. This secretion probably also protects and nourishes the ovum.',
        content: [
          {
            subTopic: [
              {
                title: 'STRUCTURE',
                content: [
                  'Consists of following Layers:',
                  {
                    subTopic: [
                      {
                        title: '1. MUCOSA:',
                        unOrderedList: true,
                        orderedList: false,
                        content: [
                          'Lined by simple ciliated columnar epithelium and peg shaped non ciliated secretory cells.',
                          'Mucosal folds are largest and most numerous in the ampulla, decrease in size and number towards the uterus.',
                          'The cilia on the surface of ciliated columnar cells beat in waves, mostly towards uterus and thus aid in transport.',
                          'Shorter mucous secreting peg cells are interposed among the ciliated cells.',
                          'The size and activity of these two types of cells vary depending on level of estrogen and progesterone.',
                          'Lamina propria contains highly vascularized loose connective tissue.',
                          'Lumen is highly irregular because of presence of branching mucosal',
                        ],
                      },
                      {
                        title: '2. MUSCULAR LAYER :',
                        unOrderedList: true,
                        orderedList: false,
                        content: [
                          'Two distinct layers, inner circular and outer longitudinal.',
                          'The thickness of muscle layer increases from lateral to medial end of the tube.',
                        ],
                      },
                      {
                        title: '3. SEROSA :',
                        unOrderedList: true,
                        orderedList: false,
                        content: 'A peritoneal covering.',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'DEVELOPMENT',
                unOrderedList: false,
                orderedList: false,
                content:
                  'The fallopian tubes develop from the paramesonephric or Müllerian ducts. These ducts are derived from the mesoderm, the middle layer of one of the three primary germ layers in the embryo. The other two layers are the ectoderm and the endoderm.',
              },
              {
                title: 'LOCATION AND FUNCTION',
                unOrderedList: false,
                orderedList: false,
                content: [
                  'They lie in the upper border of the broad ligament, extending laterally from the uterus, opening into the abdominal cavity, near the ovaries.',
                  'The primary function of the uterine tubes is to transport sperm toward the egg, which is released by the ovary, and to then allow passage of the fertilized egg back to the uterus for implantation.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'UTERUS',
        isIntroduction: true,
        introdcutionContent:
          'The uterus has three layers: mucosa (endometrium), muscularis (myometrium) and serosa/adventitia (perimetrium). The endometrium (uterine mucous membrane) is lined with simple columnar epithelium (lamina epithelialis) and contains numerous tubular glands.',
        content: [
          {
            subTopic: [
              {
                title: 'STRUCTURE',
                unOrderedList: false,
                orderedList: false,
                content: [
                  'The wall consists of three layers:',
                  {
                    title: '1. ENDOMETRIUM :',
                    unOrderedList: true,
                    orderedList: false,
                    content: [
                      'Uterine mucosa consists of simple columnar epithelium supported by a lamina propria.',
                      'Endometrium is divisible into two regions :',
                      {
                        title: 'Stratum Functionale :',
                        unOrderedList: true,
                        orderedList: false,
                        content: [
                          'Temporary layer at the luminal surface.',
                          'Narrow 1/3 rd deep layer.',
                          'Responds to ovarian hormones by undergoing cyclic thickening and shedding.',
                        ],
                      },
                      {
                        title: 'Stratum Basale :',
                        unOrderedList: true,
                        orderedList: false,
                        content: [
                          'Wide 2/3 rd, thinner, deeper and permanent layer. Contains basal portions of the endometrial glands and is retained during menstruation.',
                          'Arcuate arteries(branches of uterine artery in myometrium) give rise to two sets of arteries: straight arteries to the stratum basale and Coiled arteries to the stratum functionale.',
                        ],
                      },
                    ],
                  },
                  {
                    title: '2. MYOMETRIUM :',
                    unOrderedList: true,
                    orderedList: false,
                    content: [
                      'Thickest layer, consisting of three poorly defined, compactly arranged muscle layers.',
                      'Middle layer contains the arcuate arteries.',
                      'Inner and outer layers of muscle fibers are arranged longitudinally.',
                      'Middle layer is thick layer of circularly or spirally arranged muscle fibers.',
                      'Myometrium undergoes considerable enlargement during pregnancy.',
                    ],
                  },
                  {
                    title: '3. perimetrium:',
                    unOrderedList: true,
                    orderedList: false,
                    content: [
                      'Consists of two layers.',
                      'Mesothelial lining and a connective tissue layer.',
                      'ENDOMETRIUM IN DIFFERENT PHASES:',
                    ],
                  },
                ],
              },
              {
                title: 'DEVELOPMENT',
                unOrderedList: false,
                orderedList: false,
                content:
                  'uterus develops from the paramesonephric ducts which fuse into the single organ known as a simplex uterus.',
              },
              {
                title: 'LOCATION AND FUNCTION',
                unOrderedList: true,
                orderedList: false,
                content: [
                  'The uterus is located within the pelvic region immediately behind and almost overlying the bladder, and in front of the sigmoid colon. The human uterus is pear-shaped and about 7.6 cm (3.0 in) long, 4.5 cm (1.8 in) broad (side to side), and 3.0 cm (1.2 in) thick.',
                  'Functions of the uterus include nurturing the fertilized ovum that develops into the fetus and holding it till the baby is mature enough for birth.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'DUCTUS DEFERENS',
        isIntroduction: true,
        introdcutionContent: [
          'Also known as Vas deferens.',
          'The vas (ductus) deferens consists of an inner epithelial lining with supportive lamina propria. The epithelium lining the vas (ductus) deferens is pseudostratified columnar epithelium and is very similar to the epithelium seen in the epididymis.',
        ],
        content: [
          {
            subTopic: [
              {
                title: 'MICROSCOPIC STRUCTURE:',
                content: [
                  {
                    subTopic: [
                      {
                        title: 'MUCOSA:',
                        unOrderedList: true,
                        orderedList: false,
                        content: [
                          'Lumen is irregular or round.',
                          'Pseudostratified columnar with stereocilia.',
                          'Lamina propria contains collagenous and elastic fibers.',
                        ],
                      },
                      {
                        title: 'MUSCLE LAYER:',
                        unOrderedList: true,
                        orderedList: false,
                        content: [
                          'Three layers of smooth muscle.',
                          'Outer and inner thin layers of longitudinal and a thick middle circular layer.',
                          'Muscle layer is much thicker as compared to the thickness of mucosa.',
                        ],
                      },
                      {
                        title: 'ADVENTITIA:',
                        unOrderedList: true,
                        orderedList: false,
                        content:
                          'Contains loose areolar tissue with blood vessels and nerves.',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'LOCATION',
                unOrderedList: false,
                orderedList: false,
                content:
                  'The vas deferens is a long, muscular tube that travels from the epididymis into the pelvic cavity, to just behind the bladder.',
              },
              {
                title: 'FUNCTION',
                unOrderedList: false,
                orderedList: false,
                content:
                  'The vas deferens is a long, muscular tube that travels from the epididymis into the pelvic cavity, to just behind the bladder. The vas deferens transports mature sperm to the urethra, the tube that carries urine or sperm to outside of the body, in preparation for ejaculation.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'CENTRAL NERVOUS SYSTEM',
    isIntroduction: true,
    introductionContent: [
      'The CNS has three main components: the brain, the spinal cord, and the neurons (or nerve cells).',
      {
        title: 'The Brain',
        content: [
          "The brain controls many of the body's functions including sensation, thought, movement, awareness, and memory. The surface of the brain is known as the cerebral cortex. The surface of the cortex appears bumpy thanks to the grooves and folds of the tissue. Each groove is known as a sulcus, while each bump is known as a gyrus.",
          'The largest part of the brain is known as the cerebrum and is responsible for things such as memory, speech, voluntary behaviors, and thought.',
          "The cerebrum is divided into two hemispheres, a right hemisphere, and a left hemisphere. The brain's right hemisphere controls movements on the body's left side, while the left hemisphere controls movements on the body's right side.",
          'Each hemisphere of the brain is then divided into four interconnected lobes:',
          {
            orderedList: false,
            unOrderedList: true,
            content: [
              'Frontal lobes are associated with higher cognition, voluntary movements, and language.',
              'Occipital lobes are associated with visual processes.',
              'Parietal lobes are associated with processing sensory information.',
              'Temporal lobes are associated with hearing and interpreting sounds as well as the formation of memories.',
            ],
          },
        ],
      },
      {
        title: 'Spinal Cord',
        content:
          'The spinal cord connects to the brain via the brain stem and then runs down through the spinal canal, located inside the vertebra. The spinal cord carries information from various parts of the body to and from the brain. In the case of some reflex movements, responses are controlled by spinal pathways without involvement from the brain.',
      },
      {
        title: 'Neurons',
        content:
          'Neurons are the building blocks of the central nervous system. Billions of these nerve cells can be found throughout the body and communicate with one another to produces physical responses and actions.',
      },
    ],
    subTopics: [
      {
        id: 0,
        title: 'CEREBELLUM',
        isIntroduction: true,
        introdcutionContent: [
          'nine lobules of the cerebellar vermis is:',
          '@Like Cats Catching Dogs For The Party Up North',
          {
            unOrderedList: true,
            orderedList: false,
            content: [
              'L: lingula',
              'C: central lobule',
              'C: culmen',
              'D: declive',
              'F: folium ',
              'T: tuber',
              'P: pyramid',
              'U: uvula',
              'N: nodulus',
            ],
          },
        ],
        content: {
          subTopic: [
            {
              title: 'STRUCTURE',
              unOrderedList: true,
              orderedList: false,
              content: [
                'Consists of outer grey matter, inner white matter and inside to the white matter, there are masses of grey matter known as cerebellar nuclei.',
                'Cortex shows three layers.',
                {
                  title: '1. Outer Molecular Layer:',
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Contains small pyramidal cells in superficial stratum and large Basket cells in the deep stratum.',
                    "Axons of both types of cells synapse with dendrites of Purkinje's cells.",
                    "One basket cell comes in relation to 6-7 Purkinje's cells.",
                  ],
                },
                {
                  title: "2. Middle layer of Purkinje's cells :",
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'These Purkinje cells are large, flat and flask shaped and is peculiar to cerebellum.',
                    'Their dendrites arborise in superficial layer whereas their axons pass through granular layer and end in nuclei of cerebellum.',
                    'This layer also contains Golgi cells, axons of which are short and synapse with dendrites of granular Cell',
                  ],
                },
                {
                  title: '3. Inner Granular Layer',
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Contains numerous small round granular cells having relatively large nuclei & nerve fibres.',
                    "Axons go to molecular layer & divide at right angle & arborise with dendrites of purkinje's cells.",
                    'Fibres enter the granular layer from white matter',
                    'Some pass through it and reach molecular layer – known as Climbing fibers.',
                    'Others synapse in granular layer - known as Mossy fibres.',
                    'White matter contains myelinated nerve fibres.',
                  ],
                },
              ],
            },
            {
              title: 'DEVELOPMENT',
              unOrderedList: false,
              orderedList: false,
              content:
                'During the early stages of embryonic development, the brain starts to form in three distinct segments: the prosencephalon, mesencephalon, and rhombencephalon. The cerebellum arises from two rhombomeres located in the alar plate of the neural tube, a structure that eventually forms the brain and spinal cord.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content:
                'The cerebellum receives information from the sensory systems, the spinal cord, and other parts of the brain and then regulates motor movements.',
            },
            {
              title: 'LOCATION ',
              orderedList: false,
              unOrderedList: false,
              content:
                'The cerebellum is located behind the top part of the brain stem (where the spinal cord meets the brain) and is made of two hemispheres (halves).',
            },
          ],
        },
      },
      {
        id: 1,
        title: 'CEREBRUM/CEREBRAL CORTEX',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'STRUCTURE',
              unOrderedList: true,
              orderedList: false,
              content: [
                'The Cortex consists of outer grey matter and inner white matter.',
                'Inner most grey masses are known as basal ganglia.',
                'Grey matter is known as cortex and is 1.5 - 4.5 mm in thickness; convoluted in man, smooth in lower animals.',
                'Cortex exhibits six layers :',
                {
                  title: '1. Outermost molecular layer -',
                  unOrderedList: true,
                  orderedList: false,
                  content:
                    'contains few cells, more fibres which run in all directions, but mainly parallel to the surface.',
                },
                {
                  title: '2. External granular layer',
                  unOrderedList: true,
                  orderedList: false,
                  content: 'contains small pyramidal and granular cells.',
                },
                {
                  title: '3. External pyramidal cell layer',
                  unOrderedList: true,
                  orderedList: false,
                  content:
                    'Contains small and medium sized, pyramidal shaped neurons.',
                },
                {
                  title: '4. Inner granular layer:',
                  unOrderedList: true,
                  orderedList: false,
                  content: 'Contains mainly stellate or granule cells.',
                },
                {
                  title: '5. Ganglionic or Internal pyramidal cell layer',
                  unOrderedList: true,
                  orderedList: false,
                  content:
                    "contains big cells. In motor cortex they are the largest and known as 'Betz cells'.",
                },
                {
                  title: '6. Polymorphous cell layer',
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'because the cells in this laver have different shapes.',
                    'Neuroglial cells are disposed in all layers.',
                    'White matter contains bundles of myelinated nerve fibres without neurilemma sheath.',
                  ],
                },
              ],
            },
            {
              title: 'DEVELOPMENT',
              unOrderedList: false,
              orderedList: false,
              content:
                'The cortex is the outer layer of the brain and is composed of up to six layers. Neurons formed in the ventricular zone migrate to their final locations in one of the six layers of the cortex. The process occurs from embryonic day 10 to 17 in mice and between gestational weeks seven to 18 in humans.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content:
                'The cerebral cortex is the largest site of neural integration in the central nervous system. It plays a key role in attention, perception, awareness, thought, memory, language, and consciousness.',
            },
            {
              title: 'LOCATION ',
              orderedList: false,
              unOrderedList: false,
              content:
                'The cerebral cortex (plural cortices), also known as the cerebral mantle, is the outer layer of neural tissue of the cerebrum of the brain in humans and other mammals. It is separated into two cortices, by the longitudinal fissure that divides the cerebrum into the left and right cerebral hemispheres.',
            },
          ],
        },
      },
      {
        id: 2,
        title: 'GANGLIA',
        isIntroduction: true,
        introdcutionContent: [
          'They are aggregation of nerve cells.',
          {
            unOrderedList: true,
            orderedList: false,
            content: [
              'Found on some cranial nerves and on spinal nerves (dorsal root) and with autonomic nervous system.',
              'Each is covered by a smooth and firm membranous layer consisting of fibro- areolar tissue.',
              'This covering is continuous with the epineurium of nerves..',
            ],
          },
        ],
        content: {
          subTopic: [
            {
              title: 'Dorsal root ganglion (spinal ganglion):',
              unOrderedList: true,
              orderedList: false,
              content:
                'A dorsal root ganglion (or spinal ganglion; also known as a posterior root ganglion) is a cluster of neurons (a ganglion) in a dorsal root of a spinal nerve.',
            },
            {
              title: 'STRUCTURE',
              unOrderedList: true,
              orderedList: false,
              content: [
                'Consists of large spherical nerve cells.',
                'Neurons are sensory and pseudo-unipolar.',
                'The cell bodies are spherical in shape.',
                'Nucleus is centrally placed.',
                'Each neuron is surrounded by large satellite cells and these cells form a complete capsule around it.',
                'Neurons are present in groups which are separated by bundles of nerve fibers.',
              ],
            },
            {
              title: 'LOCATION',
              unOrderedList: false,
              orderedList: false,
              content:
                'As the name indicates, the dorsal root ganglion is associated with the posterior or dorsal root of the spinal nerve. It is located in close proximity to the spinal cord. As the dorsal root of spinal nerve emerges from the intervertebral neural foramen, it expands to form the ganglion.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content:
                'a cluster of cell bodies in the dorsal root of a spinal nerve. The dorsal root ganglia contain cell bodies for sensory nerves that carry sensory information to the spinal cord.',
            },
          ],
        },
      },
      {
        id: 3,
        title: 'Sympathetic ganglion',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'GANGLIA:',
              content: [
                'They are aggregation of nerve cells.',
                {
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Found on some cranial nerves and on spinal nerves (dorsal root) and with autonomic nervous system.',
                    'Each is covered by a smooth and firm membranous layer consisting of fibro- areolar tissue.',
                    'This covering is continuous with the epineurium of nerves..',
                  ],
                },
              ],
            },
            {
              title: 'Sympathetic ganglion:',
              unOrderedList: false,
              orderedList: false,
              content:
                'The sympathetic ganglia, or autonomic ganglia, are the ganglia of the sympathetic nervous system. Ganglia are 20,000 to 30,000 afferent and efferent nerve cell bodies that run along on either side of the spinal cord.',
            },
            {
              title: 'STRUCTURE',
              unOrderedList: true,
              orderedList: false,
              content: [
                'Study the sympathetic ganglia with respect to the distribution of cells and fibers, position of nucleus, shape of the nerve cell body and continuity of the cellular capsule enclosing the nerve cell bodies.',
                'Consists of small irregular cells.',
                'Neurons are multipolar having many processes hence the cell bodies are irregular in shape.',
                'Neurons are post synaptic sympathetic motor neurons(post ganglionic).',
                'Nucleus is eccentric in position. Capsule is formed by the satellite cells, does not form a complete covering around it.',
                'Neurons are not present in groups but dispersed between nerve fibers.',
              ],
            },
            {
              title: 'LOCATION',
              unOrderedList: false,
              orderedList: false,
              content:
                'The bilaterally symmetric sympathetic chain ganglia, also called the paravertebral ganglia, are located just ventral and lateral to the spinal cord. The chain extends from the upper neck down to the coccyx, forming the unpaired coccygeal ganglion.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content:
                'Sympathetic ganglia deliver information to the body about stress and impending danger, and are responsible for the familiar fight-or-flight response. They contain approximately 20,000–30,000 nerve cell bodies and are located close to and on either side of the spinal cord in long chains.',
            },
          ],
        },
      },
      {
        id: 4,
        title: 'NERVE FIBER (MYELINATED)',
        isIntroduction: true,
        introdcutionContent: [
          'Myelinated nerve fiber layer (mNFL) is a benign clinical entity that results from an embryologic developmental anomaly whereby focal areas of the retinal nerve fiber layer fail to lose their myelinsheath. Clinically, mNFL appears as distinct white patches on the inner retinal surface.',
          "Within the nerve bundle itself, the individual nerve fibres have a characteristic 'wavy' appearance. There are also a number of nuclei visible within the image and these are nuclei belonging to Schwann cells or to cells found within the endoneurium.",
          'presence of myelin sheath around the central axon',
          'presence of nodes of Ranvier on myelin sheath',
        ],
        content: {
          subTopic: [
            {
              title: 'LOCATION',
              unOrderedList: false,
              orderedList: false,
              content:
                'Myelin is formed in the central nervous system (CNS; brain, spinal cord and optic nerve) by glial cells called oligodendrocytes and in the peripheral nervous system (PNS) by glial cells called Schwann cells. In the CNS, axons carry electrical signals from one nerve cell body to another.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content:
                "The main purpose of myelin is to increase the speed at which electrical impulses propagate along the myelinated fiber. In unmyelinated fibers, electrical impulses (action potentials) travel as continuous waves, but, in myelinated fibers, they 'hop' or propagate by saltatory conduction.",
            },
          ],
        },
      },
      {
        id: 5,
        title: 'SPINAL CORD',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'STRUCTURE',
              unOrderedList: false,
              orderedList: false,
              content: [
                'The spinal cord is composed of two discrete parts; the white matter, which is the outer part of the cord and the grey matter, which is the inner portion of the cord. The grey matter is also named after its unfixed histological appearance and contains the cell bodies of neurons as well as nerve fibres.',
                {
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Ovoid in transverse section. Contains inner grey matter and outer white matter.',
                    "Grey matter is in the form of right and left columns connected with each other in the middle - giving the appearance of letter 'H' in transverse section.",
                    'Anterior horns are broader and shorter and do not reach the surface of the spinal cord.',
                    'Posterior horns are thinner, longer and reach surface of the spinal cord.',
                    'Lateral horns are present in thoracic and upper two lumbar segments and their cells are connected with sympathetic fibres. Grey matter contains nerve cells, nerve fibres, neuroglia and blood vessels.',
                    'Neuroglia are arranged in a sponge like network.',
                    'Nerve cells are multipolar and vary in size.',
                    'Golgi type pass to the white matter.',
                    'Golgi type - I cells have long axons which',
                    'Golgi type - Il cells have short and they do not leave the grey matter.',
                    'Cell bodies of multipolar neurons are distributed in groups known as nuclei.',
                    'Cell bodies in anterior horns are the largest and in posterior horn smallest whereas in lateral horns, intermediate in size.',
                    'White matter consists of myelinated nerve fibers (in the form of ascending and descending tracts), neuroglia and blood vessels.',
                    'Neurilemma sheath is absent.',
                  ],
                },
              ],
            },
            {
              title: 'DEVELOPMENT',
              orderedList: false,
              unOrderedList: false,
              content:
                'The spinal cord, and with it the Central Nervous System (CNS) , begin its development in the 3rd week of the embryonic period. At approximal 21 days after fertilization, the ectodermal germ layer is pear shaped, and broder in the cephalic (head) than in the caudal region.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content:
                'The spinal cord functions primarily in the transmission of nerve signals from the motor cortex to the body, and from the afferent fibers of the sensory neurons to the sensory cortex. It is also a center for coordinating many reflexes and contains reflex arcs that can independently control reflexes.',
            },
            {
              title: 'LOCATION',
              orderedList: false,
              unOrderedList: false,
              content:
                'The spinal cord is located in the vertebral foramen and is made up of 31 segments: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral and 1 coccygeal.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 7,
    title: 'LYMPHATIC SYSTEM',
    isIntroduction: true,
    introductionContent:
      'The lymphatic system is a network of tissues and organs that help rid the body of toxins, waste and other unwanted materials. The primary function of the lymphatic system is to transport lymph, a fluid containing infection-fighting white blood cells, throughout the body.',
    subTopics: [
      {
        id: 0,
        title: 'PALATINE TONSIL',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'STRUCTURE',
              unOrderedList: true,
              orderedList: false,
              content: [
                'The tonsils (palatine tonsils) are a pair of soft tissue masses located at the rear of the throat (pharynx). Each tonsil is composed of tissue similar to lymph nodes, covered by pink mucosa (like on the adjacent mouth lining).',
                {
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Collection of lymphoid tissue found in themucosa of oropharyngeal isthmus between palatoglossal and palatopharyngeal arches.',
                    'The tissue shows aggregation of lymphatic nodules.',
                    'The stratified squamous epithelium of the oropharynx covers it.',
                    'The epithelium invaginates the substance of tonsil to form crypts.',
                    'The Palatine tonsil possesses only efferent lymphatic vessels.',
                  ],
                },
              ],
            },
            {
              title: 'LOCATION ',
              orderedList: false,
              unOrderedList: false,
              content: 'located at the rear of the throat (pharynx).',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content:
                'The tonsils play a role in protecting the body against respiratory and gastrointestinal infections. Each tonsil consists of a network of crypts (pits) that store cells used to fight infection. The tonsils contain B cells, a type of white blood cell that fights infections.',
            },
          ],
        },
      },
      {
        id: 1,
        title: 'LYMPH NODE',
        isIntroduction: true,
        introdcutionContent: [
          'A lymph node, or lymph gland is an ovoid or kidney-shaped organ of the lymphatic system and the adaptive immune system. Lymph nodes are widely present throughout the body and are linked by the lymphatic vessels. They are major sites of B and T cells and other white blood cells.',
          {
            orderedList: false,
            unOrderedList: true,
            content: [
              'Bean shaped.',
              'Placed in the pathways of lymphatic vessels.',
              'Several lymphatic vessels enter the lymph node as afferent vessels at its convex surface and a single lymph vessel leaves through the hilum as efferent vessel.',
            ],
          },
          {
            title: 'Microscopic Structure:',
            orderedList: false,
            unOrderedList: true,
            content: [
              'Outer darkly stained cortex and inner light medulla.',
              'Cortex has densely packed Ilymphocytes hence darkly stained while medulla containing fewer lymphocytes stains light.',
              'Cortex has several lymph nodules showing germinal center.',
              'The outer most structure called Capsule which is made up of dense connective tissue.',
              'Several trabeculae extend from the capsule to deep inside.',
              'The reticular fibers form a meshwork.',
              'Germinal center stains lightly as there are few dark stained small lymphocytes, but there are light stained large lymphocytes and young plasma cells.Deep to the capsule there is subcapsular sinus which receives lymph from afferent vessels.',
              'From subcapsular sinus it traverses cortex to medullary sinuses and finally enters in to efferent vessel at hilum.',
            ],
          },
        ],
        content: {
          subTopic: [
            {
              title: 'LOCATION ',
              orderedList: false,
              unOrderedList: false,
              content:
                'Lymph nodes are located throughout your body, including your neck, armpits, groin, around your gut, and between your lungs.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content:
                'They are major sites of B and T cells and other white blood cells. Lymph nodes are important for the proper functioning of the immune system, acting as filters for foreign particles and cancer cells, but they do not have a detoxification function. In the lymphatic system a lymph node is a secondary lymphoid organ.',
            },
          ],
        },
      },
      {
        id: 2,
        title: 'SPLEEN',
        isIntroduction: true,
        introdcutionContent: [
          '@ 1,3,5,7,9,11',
          'Spleen dimensions are 1 inch x 3 inches x 5 inches. Weight is 7 ounces. It underlies ribs 9 through 11.',
        ],
        content: {
          subTopic: [
            {
              title: 'STRUCTURE: ',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Encapsulated lymphatic organ.',
                'Capsule contains elastic fibers.',
                'Trabeculae extend in the substance of the spleen.',
                'The reticular cells and reticular fibers occupy the spaces within the trabeculae and form a delicate meshwork.',
                'Lymphocytes, macrophages and other blood cells fill spaces of meshwork.',
                {
                  title: 'Red and White pulp: ',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'In unstained spleen, the white pulp is seen as circular gray area which is found scattered though out the substance of spleen.',
                    'Red pulp surrounds the white pulp.',
                    'White pulp is the sheath of lymphatic tissue which surrounds the central artery.',
                    'It contains lymphocytes and macrophages in a meshwork of reticular connective tissue. The T lymphocytes predominate in white pulp.',
                    'The white pulp may contain lymphatic nodules with germinal center which are called Splenic nodules or Malpighian corpuscles. These nodules mainly contain B lymphocytes.',
                    'Red pulp is made up of a network of anastomosing splenic cords. These cords are inturn made up of reticular cells and reticular fibers. It contains B and T lymphocytes, macrophages, plasma cells, etc.',
                    "These splenic cords are known as 'cords of Billroth' where the lymphocytes and macrophages initiate immune response when they come in contact with the antigens present in circulating blood.",
                  ],
                },
              ],
            },
            {
              title: 'LOCATION',
              orderedList: false,
              unOrderedList: false,
              content:
                'The spleen is located on the left side of the abdomen, under the ribs. The spleen is the largest organ in the lymphatic system.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Clearance of microorganisms and particulate antigens from the blood stream.',
                'Synthesis of immunoglobulin G (IgG), properdin (an essential component of the alternate pathway of complement activation), and tuftsin (an immunostimulatory tetrapeptide)',
                'Removal of abnormal red blood cells (RBCs)',
              ],
            },
          ],
        },
      },
      {
        id: 3,
        title: 'THYMUS',
        isIntroduction: true,
        introdcutionContent: [
          'The thymus is a specialized primary lymphoid organ of the immune system. Within the thymus, T cells mature. T cells are critical to the adaptive immune system, where the body adapts specifically to foreign invaders.',
          {
            orderedList: false,
            unOrderedList: true,
            content: 'Only lymphatic organ which is fully developed at birth.',
          },
          {
            title: 'Microscopic Structure:',
            orderedList: false,
            unOrderedList: true,
            content: [
              'Lobes of thymus are completely covered by a thin layer of connective tissue capsule.',
              'The trabeculae extend on to the substance of the organ from capsule.',
              'These trabeculae partially subdivide the lobes into lobules.',
              'Each lobule contains cortex and medulla.',
              'Cortex is darkly stained as it contains higher concentration of lymphocytes than medulla.',
              'The peripheral part of cortex receives stem cells from bone marrow.',
              'The stem cells divide repeatedly and differentiate in to small lymphocytes which move towards medulla.',
              "Medulla is made up of masses of concentrically arranged type IV epithelioreticular cells around a degenerated, pink stained, homogenous mass known as Hassall's corpuscle.",
              'These corpuscles increase in their number with advancing age.',
            ],
          },
          {
            title: 'Epithelioreticular Cells:',
            orderedList: false,
            unOrderedList: true,
            content: [
              'Similar to reticular cells.',
              'They provide skeletal framework in thymus.',
              'There are six different varieties of such cells in thymus( type I to VI) serving differently.',
            ],
          },
          {
            title: "Hassall's (Thymic) Corpuscles:",
            orderedList: false,
            unOrderedList: true,
            content: [
              'Show keratohyalin granules, intermediate filaments and lipid droplets in their cytoplasm.',
              'Center of corpuscles show keratinization of epithelioreticular cells(type VI).',
              'These corpuscles are believed to be an active multi-cellular components found in medulla which is capable of producing various hormones like thymosin and thymopoietin.',
            ],
          },
        ],
        content: {
          subTopic: [
            {
              title: 'LOCATION ',
              orderedList: false,
              unOrderedList: false,
              content:
                'The thymus is located in the upper anterior (front) part of your chest directly behind your sternum and between your lungs.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content:
                "The thymus gland is a small organ behind the breastbone that plays an important function both in the immune system and endocrine system. Though the thymus begins to atrophy (decay) during puberty, its effect in 'training' T lymphocytes to fight infections and even cancer lasts for a lifetime.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 8,
    title: 'ENDOCRINE SYSTEM',
    isIntroduction: true,
    introductionContent:
      'The endocrine system is composed of glands that synthesize and secrete products, called hormones, directly into the blood rather than through a duct. Hormones are transported throughout the body where they influence only those cells that have receptors for that hormone.',
    subTopics: [
      {
        id: 0,
        title: 'PARATHYROID GLAND',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'STRUCTURE',
              unOrderedList: true,
              orderedList: false,
              content: [
                'The parathyroid gland is embedded in the capsule of the thyroid gland. It contains two types of cells - chief or principle cells and oxyphil cells. ... PTH acts on osteoclasts, and the epithelial cells of the renal tubule, to increase plasma calcium by promoting bone resorption and increasing renal calcium resorption.',
                {
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Four small glands, located on the posterior surface of the thyroid gland.',
                    'Composed of two major parenchymal cells.',
                  ],
                },
                {
                  title: '1. Chief Cells : ',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Most numerous cells.',
                    'Small, polygonal in shape and contain many small granules.',
                    'Have round, centrally located nucleus and slightly eosinophilic cytoplasm.',
                    'Secrete parathyroid hormone (PTH) in response to low blood calcium.',
                  ],
                },
                {
                  title: '2. Oxyphil Cells:',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Less in numbers than chief cells.',
                    'Larger than chief cells',
                    'Have abundant acidophilic cytoplasm.',
                    'Their function is unknown.',
                  ],
                },
              ],
            },
            {
              title: 'DEVELOPMENT ',
              orderedList: false,
              unOrderedList: false,
              content:
                'The parathyroid glands originate from the interaction of the endoderm of the third and fourth pouch and neural crest mesenchyme.',
            },
            {
              title: 'LOCATION ',
              orderedList: false,
              unOrderedList: false,
              content:
                'located in the neck behind the thyroid where they continuously monitor and regulate blood calcium levels.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content:
                "The parathyroids produce a hormone called parathyroid hormone (PTH). PTH raises the blood calcium level by: breaking down the bone (where most of the body's calcium is stored) and causing calcium release. increasing the body's ability to absorb calcium from food.",
            },
          ],
        },
      },
      {
        id: 1,
        title: 'THYROID GLAND',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'STRUCTURE',
              unOrderedList: true,
              orderedList: false,
              content: [
                'Histologically, the thyroid gland is organized as epithelial cells surrounding colloid-containing pools, called follicles. The colloid is rich in thyroglobulin, a protein possessing many tyrosine residues to which iodine molecules attach to form the thyroid hormones.',
                {
                  unOrderedList: true,
                  orderedList: false,
                  content: [
                    'Thin connective tissue capsule surrounds the gland.',
                    'Parenchyma is arranged in the form of spherical masses called thyroid follicles. Thyroid follicles are sac like structures containing gel like material - Colloid.',
                    'Follicles are lined by single layer of epithelial cells.',
                    'The epithelial cells vary in height from squamous to low columnar depending on the activity of cells.',
                    'The squamous cells are inactive but under the influence of TSH they become cuboidal or short columnar and become active.',
                    'These cells have large and rounded nuclei and their cytoplasm take light eosinophilic stain.',
                    'Para follicular cells are generally embedded within the follicle or lying between the follicles and found in single or in small groups. They are pale or light staining cells and secret calcitonin in response to high blood calcium.',
                  ],
                },
              ],
            },
            {
              title: 'DEVELOPMENT ',
              orderedList: false,
              unOrderedList: false,
              content:
                "The thyroid gland is the first of the body's endocrine glands to develop, on approximately the 24th day of gestation. The thyroid gland forms as a proliferation of endodermal epithelial cells on the median surface of the developing pharyngeal floor.",
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content:
                'The thyroid gland is a vital hormone gland: It plays a major role in the metabolism, growth and development of the human body. It helps to regulate many body functions by constantly releasing a   steady amount of thyroid hormones into the bloodstream.',
            },
          ],
        },
      },
      {
        id: 2,
        title: 'SPLEEN',
        isIntroduction: true,
        introdcutionContent: [
          '@ 1,3,5,7,9,11',
          'Spleen dimensions are 1 inch x 3 inches x 5 inches. Weight is 7 ounces. It underlies ribs 9 through 11.',
        ],
        content: {
          subTopic: [
            {
              title: 'STRUCTURE: ',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Encapsulated lymphatic organ.',
                'Capsule contains elastic fibers.',
                'Trabeculae extend in the substance of the spleen.',
                'The reticular cells and reticular fibers occupy the spaces within the trabeculae and form a delicate meshwork.',
                'Lymphocytes, macrophages and other blood cells fill spaces of meshwork.',
                {
                  title: 'Red and White pulp: ',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'In unstained spleen, the white pulp is seen as circular gray area which is found scattered though out the substance of spleen.',
                    'Red pulp surrounds the white pulp.',
                    'White pulp is the sheath of lymphatic tissue which surrounds the central artery.',
                    'It contains lymphocytes and macrophages in a meshwork of reticular connective tissue. The T lymphocytes predominate in white pulp.',
                    'The white pulp may contain lymphatic nodules with germinal center which are called Splenic nodules or Malpighian corpuscles. These nodules mainly contain B lymphocytes.',
                    'Red pulp is made up of a network of anastomosing splenic cords. These cords are inturn made up of reticular cells and reticular fibers. It contains B and T lymphocytes, macrophages, plasma cells, etc.',
                    "These splenic cords are known as 'cords of Billroth' where the lymphocytes and macrophages initiate immune response when they come in contact with the antigens present in circulating blood.",
                  ],
                },
              ],
            },
            {
              title: 'LOCATION',
              orderedList: false,
              unOrderedList: false,
              content:
                'The spleen is located on the left side of the abdomen, under the ribs. The spleen is the largest organ in the lymphatic system.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Clearance of microorganisms and particulate antigens from the blood stream.',
                'Synthesis of immunoglobulin G (IgG), properdin (an essential component of the alternate pathway of complement activation), and tuftsin (an immunostimulatory tetrapeptide)',
                'Removal of abnormal red blood cells (RBCs)',
              ],
            },
          ],
        },
      },
      {
        id: 3,
        title: 'PITUITARY GLAND',
        isIntroduction: true,
        introdcutionContent: [
          'The pituitary gland or hypophysis is derived from two embryologically-distinct tissues. As such, it is composed of both neural and glandular tissue. ... It composed of bundles of axons from hypothalamic neurosecretory neurons intermixed with glial cells.',
          {
            orderedList: false,
            unOrderedList: true,
            content: [
              'Known as master endocrine gland.',
              'Two parts distinct in structure and',
            ],
          },
          "Anterior Hormones@'Go Look For The Adenoma Please' = GH, LH, FSH, TSH, ACTH, PRL.",
        ],
        content: {
          subTopic: [
            {
              title: 'FUNCTION: ',
              orderedList: true,
              unOrderedList: false,
              content: ['Adenohypophysis', 'Neurohypophysis'],
            },
            {
              title: 'A. ADENOHYPOHYSIS:',
              orderedList: true,
              unOrderedList: false,
              content: [
                {
                  title: '1. Pars Distalis : ',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Major division of Adenohypophysis.',
                    'Cells are arranged in irregular cords / clusters in between thin walled fenestrated sinusoids.',
                    {
                      title: 'CELLS: ',
                      orderedList: true,
                      unOrderedList: false,
                      content: [
                        '1. Chromophobe: Lightly stained, having few granules.',
                        '2. Chromophil :',
                        {
                          orderedList: false,
                          unOrderedList: true,
                          content: [
                            'Stain intensely showing abundant cytoplasmic secretory granules in which hormones are stored.',
                            'Large in size.',
                            'Two Types of Chromophil cells:',
                          ],
                        },
                        {
                          title: 'A.Acidophils : ',
                          orderedList: true,
                          unOrderedList: false,
                          content: [
                            'Stain pink (acidophilic) hence called Acidophils or Alpha cells.',
                            'More abundant in peripheral part.',
                            'Smaller than basophils with large and more numerous granules.',
                            'Include two major cell type:',
                          ],
                        },
                        {
                          title: 'B. Basophils :',
                          orderedList: true,
                          unOrderedList: false,
                          content: [
                            'Stain blue with hematoxylin and other basic dyes hence called Basophils or Beta cells.',
                            'Considered as resting chromophils.',
                            'They are more abundant in the core of the gland.',
                            'Cells are larger than acidophils.',
                            'Include different cell type.',
                          ],
                        },
                      ],
                    },
                    '1. Gonadotropes - Produce Follicle Stimulating Hormones (FSH). Leutinizing Hormone (LH) or ICSH.',
                    '2. Corticotropes – Produce Adrenocorticotropin (ACTH).',
                    '3. Thyrotropes - Produce Thyrotropin (Thyroid Stimulating Hormone).',
                  ],
                },
                {
                  title: '2. Pars Intermedia :',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Located between pars distalis and pars nervosa.',
                    'It consists of mainly Basophils.',
                    'The exact function of these cells in humans is not clear but they secrete Melanocyte Secreting Hormone (MSH) in lower animals.',
                    'Remains rudimentary in human and probably produce MSH, ACTH and Lipotropic Hormone (LPH).',
                  ],
                },
                {
                  title: '3. Pars Tuberalis',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Consists of cords or clusters of cells.',
                    'Highly vascular and includes veins of hypophyseal portal system.',
                    'The function of it is poorly understood.',
                    'Funnel shaped superior extension of the pars distalis which surrounds the infundibular stem.',
                  ],
                },
              ],
            },
            {
              title: 'B. NEUROHYPOPHYSIS:',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Consists of median eminence, infundibular stalk & pars nervosa (posterior lobe of Нурophysis).',
                'Stains poorly.',
                'Does not synthesize any hormone.',
                'Contains many unmyelinated axons whose cell bodies are located mainly in the supraoptic and paraventricular nuclei of the hypothalamus.',
                'Axons passing from these nuclei to the pars nervosa are together termed as hypothalamohypophysial tract.',
                'Axons contain neurosecretory granules and exhibit large granules filled dilatations called Herring Bodies.',
                'Two Hormones are released:',
                {
                  unOrderedLisr: false,
                  orderedList: true,
                  content: ['Oxytocin.', 'Vasopressin (ADH)'],
                },
              ],
            },
            {
              title: 'DEVELOPMENT',
              orderedList: false,
              unOrderedList: false,
              content:
                "Early in gestation a finger of ectoderm grows upward from the roof of the mouth. This protrusion is called Rathke's pouch and will develop into the anterior pituitary or adenohypophysis.This extension of the ventral brain will become the posterior pituitary or neurohypophysis.",
            },
          ],
        },
      },
      {
        id: 4,
        title: 'ADRENAL GLAND',
        isIntroduction: true,
        unOrderedList: true,
        orderedList: false,
        introdcutionContent: [
          'Supra renal glands are a pair of endocrine glands situated in the posterior abdominal wall above the upper pole of both kidneys.',
          'As these are located above the kidney, hence called supra renal gland.',
          'In many animals they are found adjacent to the kidneys hence they are also called adrenal gland.',
        ],
        content: {
          subTopic: [
            {
              title: 'Identification points',
              orderedList: true,
              unOrderedList: false,
              content: [
                'Outer most capsule with trabaculae.',
                'Cortex showing zona glomerulosa,zona fasiculata and zona reticularis.',
                'Medulla showing sinusoids and sympathetic ganglion cells.',
              ],
            },
            {
              title: 'Structure',
              orderedList: true,
              unOrderedList: false,
              content: [
                {
                  title: 'Cortex:',
                  orderedList: false,
                  unOrderedList: false,
                  content: [
                    'Superficial outer part which is 10 times wider than medulla. It consists of three different layers:-',
                    {
                      title: '1.zona glomerulosa:',
                      orderedList: false,
                      unOrderedList: true,
                      content: [
                        'Outer most layer of cortex which constitutes about 1/5th of total cortex.',
                        'Cell shape: polyhedral or columnar.',
                        'Arrangement: acinus like groups or inverted u-form or horse-shoe shaped.',
                        'Cytoplasmic nature: basophilic.',
                        'These cells contain prominent small nuclei with rich smooth endoplasmic reticulum and golgi complex. Mitochondria are elongated in nature.',
                      ],
                    },
                    {
                      title: '2.zona fasiculata:',
                      orderedList: false,
                      unOrderedList: true,
                      content: [
                        'Intermediate layer of cortex, constitutes about 3/5th of total cortex.',
                        'Cell shape: polyhedral or columnar.',
                        'Arrangement: cord like in two rows.',
                        'Cytoplasmic nature: basophilic.',
                        'These cells are also called spongiocytes, contain large prominent nuclei with rich smooth endoplasmic reticulum. Golgi complex are best developed in the cells of zona fasiculata with spherical mitochondria.',
                        'Extensively vacuolated cytoplasm with storage of cholestrol and vit-c.',
                      ],
                    },
                    {
                      title: '3.zona reticularis:',
                      orderedList: false,
                      unOrderedList: true,
                      content: [
                        'Innermost layer of cortex, constitutes about 1/5th of total cortex.',
                        'Cell shape: polyhedral or columnar.',
                        'Arrangement: network like.',
                        'Cytoplasmic nature: often acidophilic.',
                        'As cells form network , it is called zona reticulosa.',
                        'Cells are rich in smooth endoplasmic reticulum,golgi apparatus and contains small amount of fat in it.mitochondria with tubular cisternae.',
                      ],
                    },
                  ],
                },
                {
                  title: 'Medulla:',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Innermost part of supra renal gland, constitutes about 1/10th of total gland.',
                    'Cell shape: polyhedral or columnar.',
                    'Arrangement: clumps and irregular cords with sinusoids.',
                    'Cytoplasmic nature: basophilic.',
                    'The cells of medulla are considered as the modified post ganglionic sympathetic neurons.',
                    'These cells are rich in secretory granules with abundant rough endoplasmic reticulum and golgi complex',
                  ],
                },
              ],
            },
            {
              title: 'Functions:',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Zona glomerulosa- secrete mineralocorticoids. Eg: aldosterone and 11-deoxy-corticosterone.',
                'Zona fasiculata- secrete glucocorticoids. Eg: corticosterone and cortisol(hydrocortisone).',
                'Zona reticularis- secrete sex hormones(androgens and estrogens) and small amount of glucocorticoids.',
                'Cells of adrenal medulla- secrete catecholamines(adrenaline,noradrinaline and dopamine).',
                'They act as neurotransmitters and also play an important role in cardiac function and maintenance of normal blood pressure.',
              ],
            },
            {
              title: 'Clinical:',
              orderedList: false,
              unOrderedList: true,
              content: [
                'Hypersecretion of glucocorticoids causes cushing’s syndrome.',
                'Hyposecretion of glucocorticoids causes addison’s disease.',
                'Pheochromocytoma is a condition resulting due to excess secretion of catecholamines from medulla.',
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 9,
    title: 'Integumentary System',
    isIntroduction: true,
    introductionContent: [
      'The integumentary system is the body system which surrounds you, both literally and metaphorically speaking. If you look in the mirror you see it, if you look anywhere on your body you see and if you look around you in the outside world, you see it. It is the system that can instantly tell us whether someone is young or old, someone’s ethnicity or race or if he/she has been on holidays recently.',
      'It also protects us a great deal from harm and allows us to sense our surrounding environment. Broadly speaking, the integumentary system is composed of skin and its appendages, subcutaneous tissue, deep fascia, mucocutaneous junctions, and breasts. This article will discuss all of these components in detail together with some clinical notes about them and the integumentary system as a whole.',
      {
        title: 'Components',
        content: [
          'The integumentary system is composed of the following parts:',
          {
            orderedList: true,
            unOrderedList: false,
            content: [
              'Skin',
              'Skin appendages',
              {
                orderedList: false,
                unOrderedList: true,
                content: ['Hairs', 'Nails', 'Sweat glands', 'Sebaceous glands'],
              },
              'Subcutaneous tissue and deep fascia',
              'Mucocutaneous junctions',
              'Breasts',
            ],
          },
        ],
      },
    ],
    subTopics: [
      {
        id: 0,
        title: 'Skin',
        isIntroduction: false,
        content: {
          subTopic: [
            {
              title: 'MICROSCOPIC STRUCTURE',
              content: [
                {
                  title: 'TWO TYPES:',
                  orderedList: true,
                  unOrderedList: false,
                  content: [
                    'THICK SKIN: restricted to the palm of the hand, sole of foot, lacks hair and has abundant sweat glands.',
                    'THIN SKIN: has hair, covers rest of the body.',
                  ],
                },
                {
                  title: 'TWO DISTINCT LAYERS:',
                  orderedList: true,
                  unOrderedList: false,
                  content: ['EPIDERMMIS', 'DERMIS'],
                },
                {
                  title: '1.EPIDERMIS:',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Outermost layer of the skin.',
                    'Lined by keratinized stratified squamous epithelium.',
                    'Derived from surface ectoderm.',
                    'Avascular, receives nourishment from vessels in the underlying dermis.',
                    'Consists of five layers.',
                    'From deep to superficial they are :',
                  ],
                },
                '@Boys Says Girls Look Cute',
                {
                  title: 'A. STRATUM BASALE : (STRATUM GERMINATIVUM) :',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Single layer of columnar basophilic keratinocytes which are resting on the basal lamina.',
                    'The basal lamina separates epidermis from dermis.',
                    'Cells divide continuously and give rise to the keratinocytes of all other superficial layers.',
                    'The cells are attached to their neighboring cells by desmosomes and to the basal lamina by hemidesmosomes.Cytokeratine intermediate filaments which are also called as tonofilaments are important components of both these junctions.',
                  ],
                },
                {
                  title: 'B. STRATUM SPINOSUM :',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Several layers of large keratinocytes overlying the stratum basale.',
                    'The cells are cuboidal or polygonal in the deeper layers and slightly flattened towards the upper layers.',
                    'Tonofibrils which are also called as tonofilament bundles fill the cytoplasm, extend to the cell processes that give these cells their spiny appearance and insert into the desmosomes that attach the tips of these processes to those of adjacent cells. Hence, termed as stratum spinosum.',
                    'Mitosis occurs in the Malpighian layer (stratum basale and stratum spinosum).',
                  ],
                },
                {
                  title: 'C. STRATUM GRANULOSUM:',
                  orderedList: false,
                  unOrderedList: true,
                  content:
                    'Lies above the stratum spinosum and in thick skin, consists of 3 to 5 layers of flattened polygonal cells containing keratohyalin granules.',
                },
                {
                  title: 'D. STRATUM LUCIDUM :',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Apparent only in the thick skin.',
                    'Having acidophilic and translucent narrow band of flattened keratinocytes.',
                    'Cytoplasm contains dense cytokeratine aggregates which are embedded in an amorphous matrix derived from the keratohylin granules.',
                    'The intracellular mixture of intermediate filaments and matrix constitute the immature keratine called eleidin.',
                  ],
                },
                {
                  title: 'E. STRATUM CORNEUM:',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Superficial surface layer',
                    'Contains many layers of dead, plate like enucleated keratinocytes with thickened plasma membranes.',
                    'Cells represent the final stage of keratinization and are filled with mature keratin.',
                    'Stratum corneum is much more thicker as compared to that in thin skin.',
                    'It is continuously sloughed off and replaced by cells from the stratum lucidum.',
                  ],
                },
                {
                  title: '2. DERMIS:',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Mainly made up of collagen bundles.',
                    'Also contains elastic fibers, connective tissue cells, lymphocytes and blood vessels.',
                  ],
                },
                'TWO LAYERS:',
                {
                  title: '1. PAPILLARY LAYER:',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Narrow band of loose connective tissue.',
                    'Has finger-like processes projecting into undersurface of epidermis called dermal papillae.',
                  ],
                },
                {
                  title: '2. RETICULAR LAYER :',
                  orderedList: false,
                  unOrderedList: true,
                  content: [
                    'Dense irregular connective tissue.',
                    'Contains bundles of collagen, blood vessels and nerves.',
                  ],
                },
              ],
            },
            {
              title: 'DEVELOPMENT ',
              orderedList: false,
              unOrderedList: false,
              content:
                'Ectoderm forms the surface epidermis and the associated glands. Mesoderm, from the somites, forms the underlying connective tissue of dermis and hypodermis. Neural crest cells also migrate into the forming epidermis and the skin is also populated by specialized sensory endings.',
            },
            {
              title: 'FUNCTION',
              orderedList: false,
              unOrderedList: false,
              content: [
                'The skin has three main functions:',
                '**vermiform apendix is rudimentary in nature , hence it does not perform any fucntion.',
                {
                  orderedList: false,
                  unOrderedList: true,
                  content: ['protection,', 'regulation and', 'sensation..'],
                },
              ],
            },
          ],
        },
      },
    ],
  },
];
export {categories, topics, AllHistologyContent};
