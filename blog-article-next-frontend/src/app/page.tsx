import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { Product, fetchMockData } from "@/constant/productData";
import { fetchData } from "@/lib/fetchData";
import Image from "next/image";
import { Suspense, lazy, useEffect, useState } from "react";
const Card = lazy(() => import("@/components/Card"));

export default async function Home() {
  const ownerData = await fetchData({
    method: "GET",
    url: "/api/owners/1?populate=*",
  });

  const product = await fetchData<any>({
    method: "GET",
    url: "/api/products/1?populate[product_categories][populate]=*&populate[product_items][populate]=*",
  });

  
  const [owner, productData] = await Promise.all([ownerData, product]);
  console.log(owner)

  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-10">
      <Navbar data={owner} product={productData} />
      <div className="py-20">
        <div className="lg:grid-cols-3 grid gap-8  max-w-5xl">
          {productData.data.attributes.product_items.data.length != 0 ? (
            productData.data.attributes.product_items.data.map((item : any) => {
              return <Card item={item} key={item.id} owner={owner} />;
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </main>
  );
}
