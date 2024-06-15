export const mockDataProduct = [
  {
    id: 1,
    image:
      "https://im3-img.indosatooredoo.com/indosatassets/images/icons/icon-512x512.png",
    title: "Top Up Paket Im3 5GB",
    description:
      "Dapatkan paket data Im3 dengan kuota 5GB. Nikmati koneksi internet yang cepat dan stabil untuk browsing, streaming, dan media sosial tanpa batas.",
    labels: ["Promo", "Best Seller"],
    whatsapp: "https://wa.me/1234567890",
  },
  {
    id: 2,
    image:
      "https://www.harapanrakyat.com/wp-content/uploads/2019/01/Telkomsel.jpg",
    title: "Top Up Paket Telkomsel 10GB",
    description:
      "Nikmati paket data Telkomsel 10GB untuk koneksi internet cepat dan stabil di seluruh Indonesia. Cocok untuk streaming dan game online.",
    labels: ["Promo"],
    whatsapp: "https://wa.me/0987654321",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/33/bd/26/33bd261d576c41f980da0057cd9b1efe.jpg",
    title: "Top Up Paket XL 15GB",
    description:
      "Paket data XL 15GB dengan kecepatan tinggi dan kuota besar. Ideal untuk bekerja dari rumah dan belajar online.",
    labels: ["Best Seller"],
    whatsapp: "https://wa.me/1122334455",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/33/bd/26/33bd261d576c41f980da0057cd9b1efe.jpg",
    title: "Top Up Paket XL 15GB",
    description:
      "Paket data XL 15GB dengan kecepatan tinggi dan kuota besar. Ideal untuk bekerja dari rumah dan belajar online.",
    labels: ["Best Seller"],
    whatsapp: "https://wa.me/1122334455",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/33/bd/26/33bd261d576c41f980da0057cd9b1efe.jpg",
    title: "Top Up Paket XL 15GB",
    description:
      "Paket data XL 15GB dengan kecepatan tinggi dan kuota besar. Ideal untuk bekerja dari rumah dan belajar online.",
    labels: ["Best Seller"],
    whatsapp: "https://wa.me/1122334455",
  },
];

export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  labels: string[];
  whatsapp: string;
}

export const fetchMockData = (time: number) : Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDataProduct);
    }, time); // 2 seconds delay
  });
};
