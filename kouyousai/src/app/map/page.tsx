import Image from "next/image";

import Header from "../ui/header";
import Footer from "../ui/footer";
import floor1Image from "@/img/floor1.png";
import floor2Image from "@/img/floor2.png";
import floor3Image from "@/img/floor3.png";
import outdoorImage from "@/img/outdoor.png";

export default function About() {

  return (
    <body className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <h1 className="pageTitle">
          校内マップ
        </h1>

        <div className="inset-0 flex flex-col items-center justify-center bg-orange-200">
          <Image 
            src={floor1Image} 
            alt="floor1"
            width={500}
            className="my-5"
          />
          <Image 
            src={floor2Image} 
            alt="floor1"
            width={500}
          />
          <Image 
            src={floor3Image} 
            alt="floor1"
            width={500}
            className="my-5"
          />
          <Image 
            src={outdoorImage} 
            alt="floor1"
            width={500}
            className="my-5"
          />
        </div>
      </main>
      <Footer />
    </body>
  );
}
