import { FaEnvira, FaHeartbeat } from "react-icons/fa";
import { MdMood } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { IoIosWater } from "react-icons/io";

const factorsData = [
  {
    id: 1,
    heading: "Environment",
    text: "Our algorithm takes your environment into account, factoring in your exposure to UV light, pollution, humidity, and even blue light from your phone and computer screens.",
    icon: <FaEnvira />,
  },
  {
    id: 2,
    heading: "Lifestyle",
    text: "As our largest organ, the skin is deeply affected by our overall health and wellbeing. That’s why we look at your water intake, diet, sleep, and exercise.",
    icon: <FaHeartbeat />,
  },
  {
    id: 3,
    heading: "Mood And Stress",
    text: "Hormones and stress levels can impact your skin health too. We’ll look at trends on how these factors affect your skin and adapt your formulation accordingly.",
    icon: <MdMood />,
  },
  {
    id: 4,
    heading: "PH",
    text: "Your skin's pH can offer a window into how effective your skin barrier is (susceptibility to bacteria, allergens, and pollution). By tracking your skin's pH, we make sure your skincare routine helps you stay in the optimal range of 4.5 - 6.0.",
    icon: <GoGraph />,
  },
  {
    id: 5,
    heading: "Oil",
    text: "Your skin needs oil to function properly, but in excess, it can lead to other problems. Your oil measurements help us select the best ingredients to keep your skin balanced.",
    icon: <IoIosWater />,
  },
];

export default factorsData;
