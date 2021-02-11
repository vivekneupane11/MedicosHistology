let topics = [
    {
        "title": "Epithelial Tissues",
        "sliderimages": ["epi1.webp", "epi3.webp", "epi4.webp"]
    },
    {
        "title": "Simple squamous",
        "sliderimages": ["epi1.webp", "epi3.webp", "epi4.webp"]

    },
    {
        "title": "Simple Cuboidal",
        "sliderimages": ["simple_sq2.webp", "simple_sq2.webp",]

    },
    {
        "title": "Simple Columnar",
        "sliderimages": ["Simple_col1.webp", "Simple_col2.webp", "Simple_col3.webp", "Simple_col4.webp", "Simple_col5.webp"]

    },
    {
        "title": "PseudoStratified Columnar Cilliate",
        "sliderimages": ["pesudo_col1.webp", "pesudo_col2.webp", "pesudo_col3.webp", "pesudo_col4.webp", "pesudo_col5.webp", "pesudo_col6.webp", "pesudo_col7.webp"]

    },
    {
        "title": "Stratified Squamos Epithelium",
        "sliderimages": ["stra_sq1.webp", "ststra_sq2.webp", "stra_sq3.webp", "stra_sq4.webp", "stra_sq5.webp", "stra_sq7.webp", "stra_sq8.webp"]

    },
    {
        "title": "Transitional Epithelium",
        "sliderimages": ["stra_tra1.webp", "stra_tra2.webp", "stra_tra3.webp", "stra_tra4.webp", "stra_sq5.webp", "transtionalepithelium.webp", "transtionalepithelium1.jpg"]

    },
    {
        "title": "Statified Cuboidal Epithellium",
        "sliderimages": ["strate_cub1.webp", "strate_cub2.webp", "strate_cub3.webp", "strate_cub4.webp"]

    },
    {
        "title": "Stratified Columnar",
        "sliderimages": ["stra_col.jpg", "stra_col1.jpg", "stra_col2.jpg", "stra_col2.webp", "stra_col3.webp"]

    },
    {
        "title": "Connective Tissues",
        "sliderimages": ["connective.webp", "connective1.webp", "connective2.webp", "connective3.webp", "connective4.webp", "connective5.webp", "connective6.webp", "connective7.webp", "connective8.webp"]
    },
    {
        "title": "Adipose Tissue",
        "sliderimages": ["adipose_tissue.jpg", "adipose1.jpg", "adipose2.jpg", "adipose4.jpg", "adipose5.jpg", "adipose6.jpg"]
    },
    {
        "title": "Areolar Tissue",
        "sliderimages": ["areolar2.jpg", "areolar3.jpg", "areolar4.jpg"]
    },
    {
        "title": "Compact Bone",
        "sliderimages": ["compact.jpg", "compactbone.jpg", "compact8.webp", "compact9.webp", "compactbone.webp"]
    },
    {
        "title": "Dense Connective Tissue",
        "sliderimages": ["dense1.webp", "dense6.webp", "dense7.webp", "dense8.webp", "dense9.webp", "dense10.webp", "dense11.webp"]
    },
    {
        "title": "Loose Connective Tissue",
        "sliderimages": ["loose1.webp", "loose2.webp", "loose3.webp", "loose4.webp", "loose5.webp"]
    },
    {
        "title": "Spongy Bone",
        "sliderimages": ["spongy1.webp", "spongy3.webp", "spongy4.webp", "spongy5.webp", "spongy6.webp", "spongybone.jpg"]
    },
    {
        "title": "Cartilage",
        "sliderimages": ["cartildge.jpg", "Three-different-types-of-cartilage-Hematoxylin-and-eosin-staining-of-cross-sections-of.jpg", "Types-of-Cartilage.jpg"]
    },
    {
        "title": "Elastic cartilage",
        "sliderimages": ["elasticcart.webp", "elasticcart0.jpg", "elasticcart1.webp", "elasticcart2.webp", "elasticcart3.webp", "elasticcart4.webp","elasticcart5.webp","elasticcart6.webp"]
    },
    {
        "title": "Fibro cartilage",
        "sliderimages": ["fibro0.webp", "fibro1.webp", "fibro2.webp", "fibro3.webp", "fibro4.webp", "fibro5.webp","fibro7.webp"]
    },
    {
        "title": "Hyline cartilage",
        "sliderimages": ["hyaline2.webp", "hyaline3.webp", "hyaline4.webp", "hyaline5.webp", "hyaline6.webp", "hyaline7.webp","hyaline8.webp"]
    },
    {
        "title": "Blood vessel",
        "sliderimages": []
    },
    {
        "title": "Elastic artery",
        "sliderimages": ["elastic1.webp", "elastic2.webp", "elastic3.webp", "elastic4.webp", "elastic5.webp", "elastic6.webp","elastic7.webp","elastic8.webp","elastic9.webp","elasticartery.webp"]
    },
    {
        "title": "Large Vein",
        "sliderimages": ["largevein.webp", "vein1.webp", "vein2.webp", "vein3.webp", "vein4.webp", "vein6.webp"]
    },
    {
        "title": "Muscular Artery",
        "sliderimages": ["muscularart1.webp", "muscularart3.webp", "muscularart4.webp", "muscularart5.webp", "muscularart6.webp", "muscularart7.webp","muscularart8.webp","muscularart9.webp","muscularartey.webp"]
    },
    {
        "title": "Muscular Tissue",
        "sliderimages": ["article-Muscle-Tissue-Af6.jpg", "muscular-tissue-678x381.jpg"]
    },
    {
        "title": "Cardic Muscle",
        "sliderimages": ["cardiac1.jpg","cardiac2.jpg","cardiac3.jpg","cardiac4.jpg","cardiac5.jpg","cardiac6.jpg","cardiac7.jpg","cardiac8.jpg","cardic9.jpg","cardiacmuscle"]
    },
    {
        "title": "Skeletal Muscle",
        "sliderimages": ["skeletal1.jpg","skeletal2.jpg","skeletal3.jpg","skeletal4.jpg","skeletal5.jpg","skeletal6.jpg","skeletal7.jpg","skeletal9.jpg","skeletalmuscle"]
    },
    {
        "title": "Smooth Muscle",
        "sliderimages": [,"smooth1.jpg","smooth2.jpg","smooth3.jpg","smooth4.jpg","smooth5.jpg"]
    },
    {
        "title": "Respiratory System",
        "sliderimages": [,"5bb381ff064cc4af0a1703a3d8412ab6.jpg","Respiratory-System-Diagram.jpg"]
    },
    {
        "title": "Epiglotis",
        "sliderimages": ["epi1.jpg","epi3.jpg","epi4.jpg","epiglottis.jpg","lungs6.jpg"]
    },
    {
        "title": "Lungs",
        "sliderimages": ["lungs.jpg","lungs2.jpg","lungs3.jpg","lungs4.jpg","lungs5.jpg","lungs6.jpg","lungs7.jpg"]
    },
    {
        "title": "Trachea",
        "sliderimages": ["trachea.jpg","trachea1.jpg","trachea3.jpg","trachea4.jpg","trachea5.jpg","trachea6.jpg","trachea7.jpg"]
    },
    {
        "title": "Trachea",
        "sliderimages": ["trachea.jpg","trachea1.jpg","trachea3.jpg","trachea4.jpg","trachea5.jpg","trachea6.jpg","trachea7.jpg"]
    },
    {
        "title": "Gastrolntestinal System",
        "sliderimages": ["gi.jpg","gi1.jpg","gi2.jpg"]
    },
    {
        "title": "Appendix",
        "sliderimages": ["appndix2.webp","appndix3.jpg","appndix4.webp","appndix5.webp","appndix6.webp","appndix8.webp","appndix9.webp","appndix10.webp","appndix11.webp"]
    },
]

