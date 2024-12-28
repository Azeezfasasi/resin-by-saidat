// import React, { createContext, useState, useEffect } from "react";
// import necklace from '../../../images/necklace.jpeg';
// import bookmark from '../../../images/bookmark.jpeg';
// import loveframe from '../../../images/loveframe.jpeg';
// import bookstand from '../../../images/bookstand.jpeg';
// import mirror from '../../../images/mirror.jpeg';
// import penjournal from '../../../images/penjournal.jpeg';
// import keychain from '../../../images/keychain.jpeg';
// import haircomb from '../../../images/haircomb.jpeg';
// import banglesearring from '../../../images/banglesearring.jpeg';
// import wallclock from '../../../images/wallclock.jpeg';


// export const ProductContext = createContext();

// const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   // Load products from localStorage when the app loads
//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem("products"));
//     if (storedProducts) {
//       setProducts(storedProducts);
//     } else {
//       // Default products
//       const defaultProducts = [
//         { id: 1, name: "Necklace", price: 2500, image: necklace },
//         { id: 2, name: "Bookmark", price: 4500, image: bookmark },
//         { id: 3, name: "Love Frame", price: 25000, image: loveframe },
//         { id: 4, name: "Book Stand", price: 35000, image: bookstand },
//         { id: 5, name: "Mirror", price: 5000, image: mirror },
//         { id: 6, name: "Pen & Journal", price: 15000, image: penjournal },
//         { id: 7, name: "Key Chain", price: 1500, image: keychain },
//         { id: 8, name: "Hair Comb", price: 4500, image: haircomb },
//         { id: 9, name: "Bangles and Ear Ring", price: 5500, image: banglesearring },
//         { id: 10, name: "Wall Clock", price: 35000, image: wallclock },
//       ];
//       setProducts(defaultProducts);
//       localStorage.setItem("products", JSON.stringify(defaultProducts));
//     }
//   }, []);

//   // Update localStorage whenever the products change
//   useEffect(() => {
//     localStorage.setItem("products", JSON.stringify(products));
//   }, [products]);

//   const addProduct = (newProduct) => {
//     setProducts((prevProducts) => [...prevProducts, newProduct]);
//   };

//   const deleteProduct = (id) => {
//     setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
//   };

//   const updateProduct = (updatedProduct) => {
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.id === updatedProduct.id ? updatedProduct : product
//       )
//     );
//   };

//   return (
//     <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProduct }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductProvider;


import React, { createContext, useState, useEffect } from "react";
import necklace from '../../../images/necklace.jpeg';
import bookmark from '../../../images/bookmark.jpeg';
import loveframe from '../../../images/loveframe.jpeg';
import bookstand from '../../../images/bookstand.jpeg';
import mirror from '../../../images/mirror.jpeg';
import penjournal from '../../../images/penjournal.jpeg';
import keychain from '../../../images/keychain.jpeg';
import haircomb from '../../../images/haircomb.jpeg';
import banglesearring from '../../../images/banglesearring.jpeg';
import wallclock from '../../../images/wallclock.jpeg';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Load products from localStorage when the app loads
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      // Default products
      const defaultProducts = [
        {
          id: 1,
          name: "Necklace",
          category: "Jewelry",
          shortDescription: "Elegant handmade necklace.",
          longDescription: "An elegant handmade necklace crafted with premium materials, perfect for any occasion. You will love it",
          price: 2500,
          image: necklace,
        },
        {
          id: 2,
          name: "Bookmark",
          category: "Stationery",
          shortDescription: "Handcrafted bookmark.",
          longDescription: "A unique handcrafted bookmark designed to add charm to your reading experience.",
          price: 4500,
          image: bookmark,
        },
        {
          id: 3,
          name: "Love Frame",
          category: "Decor",
          shortDescription: "Beautiful love-themed photo frame.",
          longDescription: "A beautiful love-themed photo frame ideal for preserving precious memories.",
          price: 25000,
          image: loveframe,
        },
        {
          id: 4,
          name: "Book Stand",
          category: "Stationery",
          shortDescription: "Adjustable resin book stand.",
          longDescription: "An adjustable resin book stand, perfect for comfortable reading or display.",
          price: 35000,
          image: bookstand,
        },
        {
          id: 5,
          name: "Mirror",
          category: "Decor",
          shortDescription: "Stylish decorative mirror.",
          longDescription: "A stylish decorative mirror that enhances the aesthetics of any room.",
          price: 5000,
          image: mirror,
        },
        {
          id: 6,
          name: "Pen & Journal",
          category: "Stationery",
          shortDescription: "Premium pen and journal set.",
          longDescription: "A premium pen and journal set, ideal for note-taking or gifting.",
          price: 15000,
          image: penjournal,
        },
        {
          id: 7,
          name: "Key Chain",
          category: "Accessories",
          shortDescription: "Durable key chain.",
          longDescription: "A durable and stylish key chain suitable for organizing your keys.",
          price: 1500,
          image: keychain,
        },
        {
          id: 8,
          name: "Hair Comb",
          category: "Personal Care",
          shortDescription: "Elegant handmade hair comb.",
          longDescription: "An elegant handmade hair comb crafted for both style and functionality.",
          price: 4500,
          image: haircomb,
        },
        {
          id: 9,
          name: "Bangles and Ear Ring",
          category: "Jewelry",
          shortDescription: "Matching bangles and earrings set.",
          longDescription: "A matching set of bangles and earrings that adds elegance to your attire.",
          price: 5500,
          image: banglesearring,
        },
        {
          id: 10,
          name: "Wall Clock",
          category: "Decor",
          shortDescription: "Modern wall clock.",
          longDescription: "A modern wall clock designed to elevate the ambiance of your living space.",
          price: 35000,
          image: wallclock,
        },
      ];
      setProducts(defaultProducts);
      localStorage.setItem("products", JSON.stringify(defaultProducts));
    }
  }, []);

  // Update localStorage whenever the products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
