export interface Product {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string[];
  price?: {
    mrp: number;
    discount: number;
    percentage: number;
  };
  specifications?: Specification[];
  productrating?: Reviews;
  customerreviews?: CustomerReview[];
}

interface Specification {
  label: string;
  value: string;
}

interface Reviews {
  star: number;
  rating: number;
  reviews: number;
  selfies: number;
}
interface CustomerReview {
  name: string;
  rating: number;
  comment: string;
}

export const productCategories: Product[] = [
  {
    id: 1,
    title: "Development-boards",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Development-boards-5.jpg",
    ],
    price: {
      mrp: 500,
      discount: 450,
      percentage: 10,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    id: 2,
    title: "Batteries & Chargers",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/Lithium-Ion-Battery-1-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Lithium-Ion-Battery-1-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Lithium-Ion-Battery-1-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Lithium-Ion-Battery-1-2.jpg",
    ],
    price: {
      mrp: 500,
      discount: 400,
      percentage: 20,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    id: 3,
    title: "Drone Parts",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Drone-kits.jpg",
    ],
    price: {
      mrp: 500,
      discount: 10,
      percentage: 10,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    id: 4,
    title: "Sensors Modules",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/Sensors.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Sensors.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Sensors.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Sensors.jpg",
    ],
    price: {
      mrp: 500,
      discount: 10,
      percentage: 10,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    id: 5,
    title: "Motors & ESCs",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/Motors.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Motors.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Motors.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Motors.jpg",
    ],
    price: {
      mrp: 500,
      discount: 10,
      percentage: 10,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    id: 6,
    title: "IoT & Wireless",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/IoT-Wireless-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/IoT-Wireless-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/IoT-Wireless-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/IoT-Wireless-2.jpg",
    ],
    price: {
      mrp: 500,
      discount: 10,
      percentage: 10,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    id: 7,
    title: "Electronic Components",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/Electronic-Components-3.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Electronic-Components-3.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Electronic-Components-3.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Electronic-Components-3.jpg",
    ],
    price: {
      mrp: 500,
      discount: 10,
      percentage: 10,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    id: 8,
    title: "Electronic Modules",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/Electronic-Components-2-1.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Electronic-Components-2-1.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Electronic-Components-2-1.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Electronic-Components-2-1.jpg",
    ],
    price: {
      mrp: 500,
      discount: 10,
      percentage: 10,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    id: 9,
    title: "3D Printer Parts",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/3D-Printer-Parts-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/3D-Printer-Parts-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/3D-Printer-Parts-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/3D-Printer-Parts-2.jpg",
    ],
    price: {
      mrp: 500,
      discount: 10,
      percentage: 10,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    id: 10,
    title: "Mechanical Components",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/Mechanical-Components-3.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Mechanical-Components-3.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Mechanical-Components-3.jpg",
      "https://robu.in/wp-content/uploads/2022/11/Mechanical-Components-3.jpg",
    ],
    price: {
      mrp: 500,
      discount: 10,
      percentage: 10,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    id: 11,
    title: "E-Bikes Parts",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/E-Bikes-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/E-Bikes-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/E-Bikes-2.jpg",
      "https://robu.in/wp-content/uploads/2022/11/E-Bikes-2.jpg",
    ],
    price: {
      mrp: 500,
      discount: 10,
      percentage: 10,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
  {
    id: 12,
    title: "DIY Kits",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://robu.in/wp-content/uploads/2022/11/DIY-kits-2-1.jpg",
      "https://robu.in/wp-content/uploads/2022/11/DIY-kits-2-1.jpg",
      "https://robu.in/wp-content/uploads/2022/11/DIY-kits-2-1.jpg",
      "https://robu.in/wp-content/uploads/2022/11/DIY-kits-2-1.jpg",
    ],
    price: {
      mrp: 500,
      discount: 10,
      percentage: 10,
    },
    specifications: [
      { label: "Product ID", value: "12345" },
      { label: "With Chain", value: "No" },
      { label: "Color", value: "Tan" },
      { label: "No. of Main Pockets", value: "2" },
    ],
    productrating: {
      star: 4,
      rating: 4.7,
      reviews: 6548,
      selfies: 15,
    },
    customerreviews: [
      {
        name: "John Doe",
        rating: 4,
        comment: "Great product! Highly recommend.",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality and fast delivery.",
      },
    ],
  },
];

export const droneParts: Product[] = [
  {
    id: 1,
    title: "Quadcopter Frame A",
    subtitle: "Beginner Friendly",
    imageUrl: [
    ],
    customerreviews: [],
  },
  {
    id: 2,
    title: "Quadcopter Frame B",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
  {
    id: 3,
    title: "Quadcopter Frame C",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
  {
    id: 4,
    title: "Quadcopter Frame D",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
  {
    id: 5,
    title: "Quadcopter Frame E",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
  {
    id: 6,
    title: "Quadcopter Frame F",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
  {
    id: 7,
    title: "Quadcopter Frame G",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
  {
    id: 8,
    title: "Quadcopter Frame H",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
];

export const sensorModules: Product[] = [
  {
    id: 1,
    title: "Temperature Sensor",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
  {
    id: 2,
    title: "Humidity Sensor",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
  {
    id: 3,
    title: "Pressure Sensor",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
  {
    id: 4,
    title: "Proximity Sensor",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
  {
    id: 5,
    title: "Light Sensor",
    subtitle: "Beginner Friendly",
    imageUrl: [
      "https://support.dronelink.com/hc/article_attachments/26113037783955",
    ],
    customerreviews: [],
  },
];
