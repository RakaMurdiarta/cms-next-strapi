import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Hero = ({ avatar, product }: { avatar: string; product: any }) => {
  console.log({ avatar });
  return (
    <React.Fragment>
      <div className="flex items-center gap-8">
        <React.Fragment>
          <Avatar className="w-28 h-28">
            <AvatarImage src={avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>{" "}
        </React.Fragment>
        <div className="flex flex-col gap-6">
          <strong className="text-2xl m-0">
            {product.data.attributes.Name}
          </strong>
          <p className="text-gray-700">
            {product.data.attributes.Description}
          </p>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Hero;
