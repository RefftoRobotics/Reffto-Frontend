import {
  DrillIcon as Drone,
  Brain,
  Cpu,
  BotIcon as Wifi,
  Camera,
  MicroscopeIcon as Microchip,
  HeadsetIcon as VrHeadset,
  Shield,
  Zap,
  Search,
} from "lucide-react";

const topCategories = [
  {
    label: "Drones & Robotics",
    icon: Drone,
    subcategories: {
      "CONSUMER DRONES": {
        items: [
          "Camera Drones",
          "Racing Drones",
          "Toy Drones",
          "Professional Drones",
          "Drone Kits",
        ],
        viewAll: true,
      },
      "ROBOTICS KITS": {
        items: [
          "Educational Robots",
          "DIY Robot Kits",
          "Robotic Arms",
          "Humanoid Robots",
          "Robot Sensors",
        ],
        viewAll: true,
      },
      "DRONE ACCESSORIES": {
        items: [
          "Propellers",
          "Batteries",
          "Cases & Bags",
          "FPV Goggles",
          "Controllers",
        ],
        viewAll: true,
      },
      "ROBOT COMPONENTS": {
        items: [
          "Motors & Actuators",
          "Microcontrollers",
          "Sensors",
          "Power Systems",
          "Structural Components",
        ],
        viewAll: true,
      },
    },
  },
  {
    label: "AI & Machine Learning",
    icon: Brain,
    subcategories: {
      "AI DEVELOPMENT KITS": {
        items: [
          "NVIDIA Jetson",
          "Google Coral",
          "Intel Neural Compute Stick",
          "Raspberry Pi AI Kits",
          "Edge AI Devices",
        ],
        viewAll: true,
      },
      "MACHINE LEARNING PLATFORMS": {
        items: [
          "TensorFlow Hardware",
          "PyTorch Ecosystem",
          "ONNX Runtime Devices",
          "AutoML Tools",
          "AI Model Marketplaces",
        ],
        viewAll: true,
      },
      "AI-POWERED DEVICES": {
        items: [
          "Smart Speakers",
          "AI Cameras",
          "Intelligent Robots",
          "AI-Enhanced Wearables",
          "Smart Home Hubs",
        ],
        viewAll: true,
      },
      "AI SOFTWARE & SERVICES": {
        items: [
          "Computer Vision APIs",
          "Natural Language Processing Tools",
          "Speech Recognition Services",
          "AI Development Platforms",
          "AI Model Training Services",
        ],
        viewAll: true,
      },
    },
  },
  {
    label: "IoT & Smart Devices",
    icon: Wifi,
    subcategories: {
      "SMART HOME": {
        items: [
          "Smart Lighting",
          "Smart Thermostats",
          "Smart Locks",
          "Smart Speakers",
          "Home Automation Hubs",
        ],
        viewAll: true,
      },
      "INDUSTRIAL IoT": {
        items: [
          "Sensors & Actuators",
          "IoT Gateways",
          "Industrial Controllers",
          "Asset Tracking Devices",
          "Predictive Maintenance Tools",
        ],
        viewAll: true,
      },
      "WEARABLE TECH": {
        items: [
          "Smartwatches",
          "Fitness Trackers",
          "Smart Glasses",
          "Health Monitoring Devices",
          "IoT-Enabled Clothing",
        ],
        viewAll: true,
      },
      "IoT DEVELOPMENT": {
        items: [
          "IoT Development Boards",
          "Wireless Modules",
          "IoT Sensors",
          "IoT Prototyping Kits",
          "IoT Cloud Platforms",
        ],
        viewAll: true,
      },
    },
  },
  {
    label: "Computer Vision",
    icon: Camera,
    subcategories: {
      "CAMERAS & SENSORS": {
        items: [
          "Depth Cameras",
          "Thermal Cameras",
          "High-Speed Cameras",
          "Multispectral Cameras",
          "LiDAR Sensors",
        ],
        viewAll: true,
      },
      "VISION PROCESSORS": {
        items: [
          "Edge AI Vision Processors",
          "FPGA Vision Accelerators",
          "GPU Vision Computing",
          "Embedded Vision Systems",
          "AI Camera Modules",
        ],
        viewAll: true,
      },
      "CV SOFTWARE": {
        items: [
          "Object Detection Libraries",
          "Image Segmentation Tools",
          "Facial Recognition SDKs",
          "Gesture Recognition Software",
          "Visual SLAM Solutions",
        ],
        viewAll: true,
      },
      APPLICATIONS: {
        items: [
          "Autonomous Vehicle Vision",
          "Industrial Inspection Systems",
          "Retail Analytics Cameras",
          "Security & Surveillance",
          "Augmented Reality Devices",
        ],
        viewAll: true,
      },
    },
  },
  {
    label: "Edge Computing",
    icon: Cpu,
    subcategories: {
      "EDGE DEVICES": {
        items: [
          "Edge Servers",
          "Edge Gateways",
          "Industrial PCs",
          "Rugged Tablets",
          "Edge AI Accelerators",
        ],
        viewAll: true,
      },
      "EDGE SOFTWARE": {
        items: [
          "Edge Operating Systems",
          "Edge Analytics Platforms",
          "Edge AI Frameworks",
          "Edge Security Solutions",
          "Edge Data Management Tools",
        ],
        viewAll: true,
      },
      NETWORKING: {
        items: [
          "5G Modules",
          "Industrial Ethernet",
          "Low-Power WAN",
          "Mesh Network Devices",
          "Edge Network Security",
        ],
        viewAll: true,
      },
      APPLICATIONS: {
        items: [
          "Smart City Infrastructure",
          "Industrial Automation",
          "Autonomous Systems",
          "Remote Monitoring Solutions",
          "Edge-Enabled Robotics",
        ],
        viewAll: true,
      },
    },
  },
];

const moreCategories = [
  {
    label: "Quantum Computing",
    icon: Microchip,
    subcategories: {
      "QUANTUM HARDWARE": {
        items: [
          "Quantum Processors",
          "Quantum Annealing Devices",
          "Superconducting Qubits",
          "Ion Trap Systems",
          "Quantum Optics Equipment",
        ],
        viewAll: true,
      },
      "QUANTUM SOFTWARE": {
        items: [
          "Quantum Programming Frameworks",
          "Quantum Algorithms Libraries",
          "Quantum Simulation Tools",
          "Quantum Machine Learning Platforms",
          "Quantum Cryptography Solutions",
        ],
        viewAll: true,
      },
      "QUANTUM APPLICATIONS": {
        items: [
          "Financial Modeling Tools",
          "Drug Discovery Platforms",
          "Optimization Solvers",
          "Quantum-Inspired Algorithms",
          "Quantum Security Devices",
        ],
        viewAll: true,
      },
    },
  },
  {
    label: "5G & Advanced Networking",
    icon: Wifi,
    subcategories: {
      "5G INFRASTRUCTURE": {
        items: [
          "5G Base Stations",
          "Small Cells",
          "Massive MIMO Systems",
          "Network Slicing Solutions",
          "Edge Computing for 5G",
        ],
        viewAll: true,
      },
      "5G DEVICES": {
        items: [
          "5G Smartphones",
          "5G Routers & Modems",
          "IoT 5G Modules",
          "5G Vehicle Communication Units",
          "Industrial 5G Devices",
        ],
        viewAll: true,
      },
      "NETWORK VIRTUALIZATION": {
        items: [
          "SDN Controllers",
          "NFV Platforms",
          "Virtual Network Functions",
          "Network Orchestration Tools",
          "Cloud-Native Networking Solutions",
        ],
        viewAll: true,
      },
    },
  },
  {
    label: "Augmented & Virtual Reality",
    icon: VrHeadset,
    subcategories: {
      "AR/VR HARDWARE": {
        items: [
          "AR Glasses",
          "VR Headsets",
          "Haptic Feedback Devices",
          "Motion Tracking Systems",
          "AR/VR Controllers",
        ],
        viewAll: true,
      },
      "AR/VR SOFTWARE": {
        items: [
          "AR Development Kits",
          "VR Content Creation Tools",
          "3D Modeling Software",
          "Spatial Computing Platforms",
          "AR/VR Analytics Tools",
        ],
        viewAll: true,
      },
      APPLICATIONS: {
        items: [
          "Industrial AR Solutions",
          "VR Training Platforms",
          "AR for Retail",
          "Medical VR Applications",
          "AR/VR in Education",
        ],
        viewAll: true,
      },
    },
  },
  {
    label: "Blockchain & Cryptocurrency",
    icon: Shield,
    subcategories: {
      "BLOCKCHAIN INFRASTRUCTURE": {
        items: [
          "Blockchain Nodes",
          "Mining Hardware",
          "Blockchain Storage Solutions",
          "Consensus Mechanism Implementations",
          "Blockchain Development Platforms",
        ],
        viewAll: true,
      },
      CRYPTOCURRENCY: {
        items: [
          "Hardware Wallets",
          "Crypto Mining Rigs",
          "Crypto Trading Platforms",
          "Crypto Payment Solutions",
          "Decentralized Finance (DeFi) Tools",
        ],
        viewAll: true,
      },
      "ENTERPRISE BLOCKCHAIN": {
        items: [
          "Supply Chain Blockchain Solutions",
          "Identity Management Systems",
          "Smart Contract Platforms",
          "Tokenization Solutions",
          "Blockchain-as-a-Service (BaaS)",
        ],
        viewAll: true,
      },
    },
  },
  {
    label: "Green Tech & Sustainability",
    icon: Zap,
    subcategories: {
      "RENEWABLE ENERGY": {
        items: [
          "Solar Panels & Inverters",
          "Wind Turbine Components",
          "Energy Storage Systems",
          "Smart Grid Technologies",
          "Hydrogen Fuel Cells",
        ],
        viewAll: true,
      },
      "ENERGY EFFICIENCY": {
        items: [
          "Smart Thermostats",
          "Energy Management Systems",
          "LED Lighting Solutions",
          "Building Automation Systems",
          "Industrial Energy Optimization Tools",
        ],
        viewAll: true,
      },
      "SUSTAINABLE MATERIALS": {
        items: [
          "Biodegradable Electronics",
          "Recycled Tech Components",
          "Eco-friendly Packaging",
          "Sustainable Manufacturing Tools",
          "Circular Economy Technologies",
        ],
        viewAll: true,
      },
    },
  },
];

const trendingSearches = [
  "AI Development Kits",
  "Drone Accessories",
  "Edge Computing Devices",
  "Quantum Software",
  "AR/VR Solutions",
];

export function CategorySidebar() {
  return (
    <div className="relative w-64 border-r bg-white">
      {/* Top Categories */}
      <div className="p-4">
        <h2 className="mb-4 text-sm font-semibold text-gray-900">
          TOP CATEGORIES
        </h2>
        <div className="space-y-1">
          {topCategories.map((category) => (
            <div key={category.label} className="group relative">
              <button className="flex w-full items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-100">
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </button>

              {/* Mega Menu */}
              {Object.keys(category.subcategories).length > 0 && (
                <div className="invisible absolute left-full top-0 z-50 ml-2 grid w-[800px] grid-cols-4 gap-6 rounded-lg border bg-white p-6 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {Object.entries(category.subcategories).map(
                    ([section, { items, viewAll }]) => (
                      <div key={section} className="space-y-3">
                        <h3 className="font-semibold text-gray-900">
                          {section}
                        </h3>
                        <ul className="space-y-2">
                          {items.map((item: string) => (
                            <li key={item}>
                              <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-blue-600"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                        {viewAll && (
                          <a
                            href="#"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            View All {">"}
                          </a>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* More Categories */}
      <div className="p-4">
        <h2 className="mb-4 text-sm font-semibold text-gray-900">
          MORE CATEGORIES
        </h2>
        <div className="space-y-1">
          {moreCategories.map((category) => (
            <div key={category.label} className="group relative">
              <button className="flex w-full items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-100">
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </button>

              {/* Mega Menu for More Categories */}
              {Object.keys(category.subcategories).length > 0 && (
                <div className="invisible absolute left-full top-0 z-50 ml-2 grid w-[800px] grid-cols-3 gap-6 rounded-lg border bg-white p-6 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {Object.entries(category.subcategories).map(
                    ([section, { items, viewAll }]) => (
                      <div key={section} className="space-y-3">
                        <h3 className="font-semibold text-gray-900">
                          {section}
                        </h3>
                        <ul className="space-y-2">
                          {items.map((item: string) => (
                            <li key={item}>
                              <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-blue-600"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                        {viewAll && (
                          <a
                            href="#"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            View All {">"}
                          </a>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Trending Searches */}
      <div className="p-4">
        <h2 className="mb-4 text-sm font-semibold text-gray-900">
          TRENDING SEARCHES
        </h2>
        <div className="space-y-1">
          {trendingSearches.map((search) => (
            <button
              key={search}
              className="flex w-full items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-100"
            >
              <Search className="h-4 w-4" />
              <span>{search}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
