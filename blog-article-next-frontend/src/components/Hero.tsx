import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="flex items-center gap-8">
        <React.Fragment>
          <Avatar className="w-28 h-28">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>{" "}
        </React.Fragment>
        <div className="flex flex-col gap-6">
          <strong className="text-2xl m-0">
            Paket Data Semua Operator
          </strong>
          <p className="text-gray-700">
            Nikmati kemudahan pembelian paket data untuk semua operator di
            Indonesia. Dapatkan penawaran terbaik dan kemudahan transaksi dengan
            layanan kami yang cepat dan aman. Pilih paket data sesuai kebutuhan
            Anda dengan harga terjangkau dan berbagai bonus menarik.
          </p>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Hero;
