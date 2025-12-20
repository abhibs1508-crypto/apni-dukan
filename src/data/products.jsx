import phone from "../assets/phone.jpeg";
import laptop from "../assets/laptop.jpeg";
import watch from "../assets/watch.jpeg";
import shoes from "../assets/shoes.jpeg";

const products = [
  {
    id: 1,
    title: "Smart Phone",
    category: "electronics",
    price: 15999,
    image: phone,
    description: "AMOLED display with powerful performance",
  },
  {
    id: 2,
    title: "Laptop Pro",
    category: "electronics",
    price: 58999,
    image: laptop,
    description: "High performance laptop for professionals",
  },
  {
    id: 3,
    title: "Smart Watch",
    category: "fashion",
    price: 4999,
    image: watch,
    description: "Track fitness with modern design",
  },
  {
    id: 4,
    title: "Running Shoes",
    category: "fashion",
    price: 2999,
    image: shoes,
    description: "Comfortable and lightweight shoes",
  },
];

export default products;
