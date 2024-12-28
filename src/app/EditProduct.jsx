import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../assets/components/context-api/product-context/ProductContext";
import AccountHeader from "../assets/components/account-components/AccountHeader";
import MyAccountMenu from "../assets/components/account-components/MyAccountMenu";
import { Helmet } from "react-helmet";
import MobileFooter from "../assets/components/home-components/MobileFooter";
import WhatsAppChatRibbon from "../assets/components/home-components/WhatsappChatRibbon";

function EditProduct() {
  const { products, updateProduct } = useContext(ProductContext);
  const { id } = useParams(); // Assume the ID is passed via the URL
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);

  // Fetch the product by ID on component mount
  useEffect(() => {
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
      setProductName(product.name);
      setDescription(product.description || "");
      setLongDescription(product.longDescription || "");
      setPrice(product.price || "");
      setImage(product.image || null);
      setCategories(product.categories || []);
    } else {
      alert("Product not found");
      navigate("/app/product"); // Redirect if product doesn't exist
    }
  }, [id, products, navigate]);

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

    if (!productName || !description || !price) {
      alert("All fields are required!");
      return;
    }

    // Update product object
    const updatedProduct = {
      id: parseInt(id),
      name: productName,
      description,
      longDescription,
      price: parseFloat(price),
      image: image instanceof File ? URL.createObjectURL(image) : image,
      categories,
    };

    // Update the product using context
    updateProduct(updatedProduct);

    alert("Product updated successfully!");
    navigate("/app/product"); // Redirect to the product list
  };

  return (
    <>
    <Helmet>
      <title>Products - Resin By Saidat</title>
    </Helmet>
    <div className='w-full flex flex-row justify-start'>
      {/* Menu section */}
      <div className='w-[0%] md:w-[20%]'>
        <MyAccountMenu />
      </div>

      {/* Main Account Section */}
      <div className='w-full md:[80%] flex flex-col justify-start'>
        <AccountHeader />
        <div className="w-full flex flex-col items-start">
      <h2 className="text-2xl font-semibold mb-6 mt-8 ml-2 md:ml-0 md:pl-6">Edit Product</h2>
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
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Long Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter product description"
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
            required
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
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Product Category
          </label>
          <div className="flex flex-wrap">
            {["Keychain", "Clock", "Coaster", "Bookmark", "Bangles", "Frame", "Pen", "Journals"].map((option) => (
              <label key={option} className="mr-4">
                <input
                  className="mr-1"
                  type="checkbox"
                  value={option}
                  checked={categories.includes(option)}
                  onChange={handleCategoryChange}
                />
                {option}
              </label>
            ))}
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
            Save Changes
          </button>
        </div>
      </form>
    </div>
    </div>
  </div>
  <MobileFooter />
  <WhatsAppChatRibbon />
  </>
  );
}

export default EditProduct;
