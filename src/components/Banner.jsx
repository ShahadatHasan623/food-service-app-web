"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const banners = [
    {
      id: 1,
      title: "Fresh Fruits Delivered",
      subtitle: "Healthy, Organic & Delicious",
      bgImage: "https://i.ibb.co.com/VWqMr1d6/pexels-quang-nguyen-vinh-222549-6346782.jpg",
    },
    {
      id: 2,
      title: "Crisp Vegetables",
      subtitle: "Farm Fresh Every Day",
      bgImage: "https://i.ibb.co.com/rRZk8721/pexels-michael-burrows-7129133.jpg",
    },
    {
      id: 3,
      title: "Fast & Tasty Meals",
      subtitle: "Quick Bites for Busy Lives",
      bgImage: "https://i.ibb.co.com/4wpwkxXZ/pexels-farhad-5713770.jpg",
    },
    {
      id: 4,
      title: "Stay Hydrated",
      subtitle: "Fresh Juices & Water Options",
      bgImage: "https://i.ibb.co.com/wN9QLzBh/pexels-mikhail-nilov-6933132.jpg",
    },
    {
      id: 5,
      title: "Balanced Diet Plans",
      subtitle: "Nutritious & Tasty",
      bgImage: "https://i.ibb.co.com/0ym7NNSp/pexels-ella-olsson-572949-1640768.jpg",
    },
  ];

  return (
    <div>
      <div className="w-full mx-auto h-[500px] relative overflow-hidden">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className="relative w-full h-[500px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.bgImage})` }}
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{banner.title}</h1>
                <p className="text-lg md:text-2xl text-white">{banner.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
