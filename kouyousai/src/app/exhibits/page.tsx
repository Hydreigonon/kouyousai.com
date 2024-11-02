import { ModalItem } from "@/components/ModalItem";
import foodTruckList from "./exhibitList.json";
import * as React from 'react';

export type event = {
  title: string,
  image: string,
  time: string,
  description: string,
};

export default function Exhibits() {

  const list: event[] = foodTruckList.exhibits;

  return (
    <>
      <div>
        <h1 className="pageTitle">
          展示一覧
        </h1>
      </div>
      {list.map(event => (
        <>
        <div key={event.title}>
          <ModalItem
            title={event.title}
            imagePath={"/exhibits_images/" + event.image}
            time={event.time}
            description={event.description}
            />
        </div>
        </>
      ))}
    </>
  );
}
