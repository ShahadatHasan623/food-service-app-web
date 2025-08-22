import Image from "next/image";
import Products from "./products/page";
import Banner from "@/components/Banner";



export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <Products></Products>
   </div>
  );
}
