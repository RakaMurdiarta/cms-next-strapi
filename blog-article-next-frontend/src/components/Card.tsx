import React from "react";
import CardDetail from "./CardDetail";
import { Product } from "@/constant/productData";

export interface IProps {
  item: any;
  owner: any
}

const Card = (props: IProps) => {
  return (
    <React.Fragment>
      <div className="max-w-xs w-full rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between min-h-full">
        <CardDetail item={props.item} owner={props.owner} />
      </div>
    </React.Fragment>
  );
};

export default Card;
