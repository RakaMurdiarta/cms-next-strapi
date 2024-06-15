import React from "react";
import CardDetail from "./CardDetail";
import { Product } from "@/constant/productData";

export interface IProps {
  item: Product;
}

const Card = (props: IProps) => {
  return (
    <React.Fragment>
      <div className="max-w-xs w-full rounded overflow-hidden shadow-lg my-2 bg-white flex flex-col justify-between min-h-full">
        <CardDetail item={props.item} />
      </div>
    </React.Fragment>
  );
};

export default Card;
