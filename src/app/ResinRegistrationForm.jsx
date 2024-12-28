import React, { useState } from "react";
import { Helmet } from "react-helmet";
import MainHeader from "../assets/components/home-components/MainHeader";
import Footer from "../assets/components/home-components/Footer";
import TopHeader from "../assets/components/home-components/TopHeader";
import WhatsAppChatRibbon from "../assets/components/home-components/WhatsappChatRibbon";

const ResinRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    whatsapp: "",
    age: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message, whatsapp, age, address } = formData;

    // Replace with your WhatsApp number
    const whatsappNumber = "2348184128107";

    // Construct the WhatsApp message
    const whatsappMessage = `Hello Resin By Saidat! I want to register for the \"Learn to Make Resin\" workshop. Here are my details:\n\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- WhatsApp: ${whatsapp}\n- Age: ${age}\n- Address: ${address}\n- Message: ${message || "No additional message"}\n\n This form was submited on Resin By Saidat website (www.resinbysaidat.com.ng)`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Learn How to Make Resin</title>
      </Helmet>
      <TopHeader />
      <MainHeader />
      <div className="max-w-[95%] md:max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-[40px] mb-[60px]">
        <h2 className="text-2xl font-bold text-center mb-6">Register for "Learn to Make Resin" Workshop</h2>
        {submitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold">Thank you for registering!</h3>
            <p className="mt-2">We will contact you with more details soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                autoCapitalize="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your email"
                autoComplete="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your personal phone number"
                autoComplete="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp:</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                placeholder="Your WhatsApp number"
                autoComplete="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                placeholder="You can use age range"
                autoComplete="age"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                autoComplete="address"
                placeholder="Your address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter an additional message or information"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        )}
      </div>
      <Footer />
      <WhatsAppChatRibbon />
    </>
  );
};

export default ResinRegistrationForm;
