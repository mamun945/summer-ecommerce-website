import Banner from "@/component/Banner";
import HotProduct from "@/component/HotProduct";
import SummerScreenCare from "@/component/SummerScreenCare";
import TopBrandCard from "@/component/TopBrandCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
    <HotProduct></HotProduct>
    <SummerScreenCare></SummerScreenCare>
    <TopBrandCard></TopBrandCard>
    </div>
  );
}
