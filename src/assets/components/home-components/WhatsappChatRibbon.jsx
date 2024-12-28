import React from "react";

const WhatsAppChatRibbon = () => {
  const whatsappNumber = "2348125925447"; // Replace with your WhatsApp number
  const defaultMessage = "Hello Resin By Saidat! I would like to inquire about your products."; // Default message

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed bottom-[80px] md:bottom-[20px] right-[10px] z-[1000] cursor-pointer">
      <div
        onClick={handleWhatsAppClick}
        className="flex items-center bg-green-500 text-white py-3 px-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp logo
          alt="WhatsApp"
          className="w-6 h-6 mr-2"
        />
        <span className="font-semibold">Chat with us</span>
      </div>
    </div>
  );
};

export default WhatsAppChatRibbon;
