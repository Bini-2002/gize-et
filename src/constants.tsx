import transportationImg from './images/Transportation2.jpeg';
import customsClearanceImg from './images/Custom_clearance.jpg';
import shippingImg from './images/Shipping_2.jpeg';
import portHandlingImg from './images/Port_handling.jpeg';

export const COLORS = {
  primary: '#EF4444', // Red-500
  secondary: '#1E293B', // Slate-800
  darkBlue: '#0B1238',
};

export const SERVICES = [
  {
    id: 'transportation',
    title: 'Transportation',
    description: 'Reliable and efficient logistics solutions across air, ocean, and overland freight.',
    image: transportationImg,
    link: '#'
  },
  {
    id: 'customs',
    title: 'Customs Clearance',
    description: 'Expert guidance and efficient processing for all your international trade compliance needs.',
    image: customsClearanceImg,
    link: '#'
  },
  {
    id: 'shipping',
    title: 'Shipping',
    description: 'Connecting global markets with tailored sea and air freight strategies.',
    image: shippingImg,
    link: '/services/ocean-shipping'
  },
  {
    id: 'port',
    title: 'Port Handling',
    description: 'Comprehensive yard management and cargo consolidation at strategic hubs.',
    image: portHandlingImg,
    link: '#'
  }
];

export const FAQ_DATA = [
  {
    question: "How can I track a shipment?",
    answer: "Founded in Ethiopia's capital, Addis Ababa, over eighteen years ago, Gize PLC has established itself as a reputed leader in the transportation and logistics sector in the country and region at large. You can track your shipment through our real-time portal using your tracking ID."
  },
  {
    question: "What logistics services does Gize offer?",
    answer: "We offer end-to-end solutions including sea, air, and road freight, customs clearance, warehousing, and hazardous cargo management."
  },
  {
    question: "What areas do you serve?",
    answer: "While headquartered in Addis Ababa, Ethiopia, we connect businesses across global markets including Africa, Europe, Asia, and the Americas."
  },
  {
    question: "How are shipping costs calculated?",
    answer: "Costs are based on weight, volume, distance, and the type of cargo. We provide transparent quotes to help you plan your logistics budget effectively."
  },
  {
    question: "How do you handle customs clearance?",
    answer: "Our expert team manages all documentation and regulatory requirements to ensure your goods move through borders without delays."
  }
];
