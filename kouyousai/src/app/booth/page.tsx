import { ModalItem } from "@/components/ModalItem";
import foodTruckList from "./boothList.json";
import * as React from 'react';

export type event = {
  title: string,
  image: string,
  time: string,
  description: string,
};

export default function Home() {

  const list: event[] = foodTruckList.booths;

  return (
    <>
      <div>
        <h1 className="pageTitle">
          模擬店一覧
        </h1>
      </div>
      {list.map(event => (
        <>
        <div key={event.title}>
          <ModalItem
            title={event.title}
            imagePath={"/booth_images/" + event.image}
            time={event.time}
            description={event.description}
            />
        </div>
        </>
      ))}
    </>
  );
}
