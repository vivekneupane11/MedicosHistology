const categoriesone = [
    {
      id: "plants",
      name: "Introduction",
      tags: ["products", "inspirations"],
      count: 'Start Quiz',
            image: require("../assets/logos/google.png")
    },
  
    {
      id: "flowers",
      name: "Expert Tips",
      tags: ["products", "inspirations"],
      count: 'Start Quiz',
            image: require("../assets/logos/google.png")
    },
    {
      id: "sprayers",
      name: "Todays Speciaal",
      tags: ["products", "shop"],
      count: 'Start Quiz',
            image: require("../assets/logos/google.png")
    }
  ];
  const categories = [
 
    {
      id: "seeds",
      name: "Take a quiz",
      tags: ["products", "shop"],
      count: 'Start Quiz',
            image: require("../assets/logos/google.png")    },
    {
      id: "flowers",
      name: "Expert Tips",
      tags: ["products", "inspirations"],
      count: 'Start Quiz',
            image: require("../assets/logos/google.png")
    },
    {
      id: "sprayers",
      name: "Todays Special",
      tags: ["products", "shop"],
      count: 'Start Quiz',
            image: require("../assets/logos/google.png")
    },
    {
      id: "sprayers",
      name: "Todays Speciggal",
      tags: ["products", "shop"],
      count: 'Start Quiz',
            image: require("../assets/logos/google.png")
    }
  ];
  
  const products = [
    {
      id: 1,
      name: "16 Best Plants That Thrive In Your Bedroom",
      description:
        "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
      tags: ["Interior", "27 m²", "Ideas"],
      images: [
        require("../assets/logos/google.png"),
        require("../assets/logos/google.png"),
        require("../assets/logos/google.png"),
        // showing only 3 images, show +6 for the rest
        require("../assets/logos/google.png"),
        require("../assets/logos/google.png"),
        require("../assets/logos/google.png"),
        require("../assets/logos/google.png"),
        require("../assets/logos/google.png"),
        require("../assets/logos/google.png")
      ]
    }
  ];
  
  const explore = [
    // images
    require("../assets/logos/google.png"),
    require("../assets/logos/google.png"),
    require("../assets/logos/google.png"),
    require("../assets/logos/google.png"),
    require("../assets/logos/google.png"),
    require("../assets/logos/google.png")
  ];
  
  const profile = {
    username: "react-ui-kit",
    location: "Europe",
    email: "contact@react-ui-kit.com",
    avatar: require("../assets/logos/google.png"),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false
  };
  const hotels = [
    {
      id: '1',
      name: 'Muscular Tangent',
      location: 'Muscular bipolar infection',
      price: 120,
      image: require('../assets/logos/test.png'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    },
    {
      id: '2',
      name: 'Druster porlity',
      location: 'Yuki street',
      price: 70,
      image: require('../assets/logos/test.png'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    },
    {
      id: '3',
      name: 'Hungemnt Hitshy',
      location: 'Almond street',
      price: 90,
      image: require('../assets/logos/test.png'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    },
    {
      id: '4',
      name: 'Satursgt hstnieyrt',
      location: 'Main street',
      price: 100,
      image: require('../assets/logos/test.png'),
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
    },
  ];
  

  export { categories, explore, products, profile,hotels };