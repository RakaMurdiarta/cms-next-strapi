import React from "react";
import { IProps } from "./Card";
import { Product } from "@/constant/productData";
import { BASE_URL } from "@/lib/fetchData";

const CardDetail = ({ item, owner }: { item: any; owner: any }) => {
  console.log(item.attributes);
  return (
    <React.Fragment>
      <img
        className="w-full h-48 object-cover"
        src={BASE_URL + item.attributes.thumbnail.data.attributes.url}
        alt={item.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900">
          {item.attributes.Title}
        </div>
        <p className="text-gray-700 text-base">{item.attributes.subTitle}</p>
      </div>
      <div className="px-6 py-4">
        {/* {item.labels.map((label: string, index: number) => (
          <span
            key={index}
            className={`inline-block ${
              label === "Promo"
                ? "bg-blue-200 text-blue-800"
                : "bg-green-200 text-green-800"
            } text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mr-2`}
          >
            {label}
          </span>
        ))} */}
      </div>

      <div className="px-6 py-4 flex justify-between gap-1 cursor-pointer">
        <a
          href={`https://wa.me/${owner.data.attributes.Phone}`}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 flex items-center justify-center w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.555 4.128 1.615 5.902L.07 24l6.271-1.573A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.284 17.482c-.268.758-1.488 1.402-2.085 1.497-.557.092-1.26.131-2.025-.146-.46-.153-1.053-.342-1.789-.603-3.2-1.114-5.28-3.936-5.448-4.127-.164-.185-1.303-1.728-1.303-3.293 0-1.564.82-2.338 1.116-2.663.297-.326.65-.407.87-.407.212 0 .419.003.601.011.187.008.447-.071.696.536.268.632.89 2.179.97 2.338.079.158.13.349.026.563-.104.215-.16.346-.316.532-.153.186-.317.419-.451.562-.152.165-.31.34-.133.66.176.319.784 1.297 1.685 2.104 1.158 1.034 2.155 1.351 2.483 1.5.329.148.523.125.717-.076.194-.2.874-1.018 1.108-1.366.234-.348.465-.3.787-.186.32.113 2.027.958 2.373 1.132.346.173.579.266.665.416.085.149.085.778-.184 1.536z" />
          </svg>
          Beli
        </a>
        <a
          href={`/products/${item.id}`} // assuming you have a route set up for product details
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center w-full"
        >
          Detail
        </a>
      </div>
    </React.Fragment>
  );
};

export default CardDetail;
