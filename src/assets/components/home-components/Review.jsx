import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import azeez from '../../images/azeez.jpg';
import userprofile from '../../images/userprofile.png';

const Review = () => {
  const testimonials = [
    {
      id: 1,
      name: "Azeez Fasasi",
      role: "Software Engineer",
      text: "As an artist, I’ve tried many resins, but this one stands out.",
      image: azeez,
    },
    {
      id: 2,
      name: "Wale Sanni",
      role: "Graphic Designer",
      text: "I’m new to resin crafting but this resin made it so easy!",
      image: userprofile,
    },
    {
      id: 3,
      name: "Michael Chike",
      role: "Entrepreneur",
      text: "The resin quality is fantastic, and it shipped super fast. ",
      image: userprofile,
    },
    {
      id: 4,
      name: "Oluwaseun Adio",
      role: "Entrepreneur",
      text: "Resin By Saidat is a great choice, this is a greta choice",
      image: userprofile,
    },
    {
      id: 5,
      name: "Bisola Ade",
      role: "Entrepreneur",
      text: "Highly recommend to anyone looking for reliability and innovation.",
      image: userprofile,
    },
  ];

  return (
    <section className="testimonial-section py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 italic">{testimonial.role}</p>
                <p className="mt-4 text-gray-700">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;

