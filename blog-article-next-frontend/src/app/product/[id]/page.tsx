"use client";
import Loader from "@/components/Loader";
import { BASE_URL, fetchData } from "@/lib/fetchData";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

interface IProps {
  detail: any;
}

const ProductDetail = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const router = useSearchParams();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const product = fetchData<any>({
      method: "GET",
      url: `/api/product-items/${id}?populate=thumbnail`,
    }).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  const id = params.id;

  return <>{data ? <Content detail={data} /> : <Loader />}</>;
};

export default ProductDetail;

const Content = ({ detail }: { detail: any }) => {
  return (
    <section className="flex flex-col p-10">
      <img
        src={`${BASE_URL}${detail.data.attributes.thumbnail.data.attributes.url}`}
        className="w-full h-[40rem] object-cover"
      />
      <div className="flex flex-col justify-center bg-opacity-50 py-10 gap-y-10">
        <h1 className="text-4xl font-bold mb-4">
          {detail.data.attributes.Title}
        </h1>
        <h2 className="text-2xl mb-2">{detail.data.attributes.subTitle}</h2>
        <p className="text-lg prose">
          <BlocksRenderer content={detail.data.attributes.content} />
        </p>
      </div>
    </section>
  );
};
