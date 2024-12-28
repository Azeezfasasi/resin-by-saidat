import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import MyAccountMenu from "../assets/components/account-components/MyAccountMenu";
import AccountHeader from "../assets/components/account-components/AccountHeader";
import { ProductContext } from "../assets/components/context-api/product-context/ProductContext";
import MobileFooter from "../assets/components/home-components/MobileFooter";
import WhatsAppChatRibbon from "../assets/components/home-components/WhatsappChatRibbon";

function AddProduct() {
  const { addProduct } = useContext(ProductContext);

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategories((prevCategories) =>
      prevCategories.includes(value)
        ? prevCategories.filter((category) => category !== value)
        : [...prevCategories, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName || !price || !image) {
      alert("All fields are required!");
      return;
    }

    // Create a new product object
    const newProduct = {
      id: Date.now(), // Generate a unique ID
      name: productName,
      description,
      longDescription,
      price: parseFloat(price),
      image: URL.createObjectURL(image), // For preview purposes
      categories,
    };

    // Add the product using context
    addProduct(newProduct);

    // Reset form fields
    setProductName("");
    setDescription("");
    setLongDescription("");
    setPrice("");
    setImage(null);
    setCategories([]);
    alert("Product added successfully!");
  };

  return (
    <>
      <Helmet>
        <title>Add Product - Resin By Saidat</title>
      </Helmet>
      <div className="w-full flex flex-row justify-start border">
        {/* Menu section */}
        <div className="w-[0%] md:w-[20%]">
          <MyAccountMenu />
        </div>

        {/* Main Account Section */}
        <div className="w-full flex flex-col items-start mt-0">
          <AccountHeader />
          <h2 className="text-2xl font-semibold mb-6 mt-8 ml-2 md:ml-0 md:pl-6">Add Product</h2>
          <form
            onSubmit={handleSubmit}
            className="md:w-full w-[95%] max-w-lg flex flex-col m-auto md:m-0 md:pl-6"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                Product Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="productName"
                type="text"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Short Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Long Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="longdescription"
                placeholder="Enter product description"
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Product Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Category
              </label>
              <div className="flex flex-wrap">
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="checkbox"
                    value="Keychain"
                    checked={categories.includes("Keychain")}
                    onChange={handleCategoryChange}
                  />
                  Keychain
                </label>
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="checkbox"
                    value="Clock"
                    checked={categories.includes("Clock")}
                    onChange={handleCategoryChange}
                  />
                  Clock
                </label>
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="checkbox"
                    value="Coaster"
                    checked={categories.includes("Coaster")}
                    onChange={handleCategoryChange}
                  />
                  Coaster
                </label>
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="checkbox"
                    value="Bookmark"
                    checked={categories.includes("Bookmark")}
                    onChange={handleCategoryChange}
                  />
                  Bookmark
                </label>
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="checkbox"
                    value="Bangles"
                    checked={categories.includes("Bangles")}
                    onChange={handleCategoryChange}
                  />
                  Bangles
                </label>
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="checkbox"
                    value="Frame"
                    checked={categories.includes("Frame")}
                    onChange={handleCategoryChange}
                  />
                  Frame
                </label>
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="checkbox"
                    value="Pen"
                    checked={categories.includes("Pen")}
                    onChange={handleCategoryChange}
                  />
                  Pen
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                Price (₦)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                placeholder="Enter product price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
      <MobileFooter />
      <WhatsAppChatRibbon />
    </>
  );
}

export default AddProduct;
