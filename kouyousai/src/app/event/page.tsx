import { EventItem } from "./EventModal";
import eventList from "./eventList.json";

export default function Home() {

  const list = eventList.events;

  return (
    <>
      <div>
        <h1 className="pageTitle">
          イベント一覧
        </h1>
      </div>
      {list.map(event => (
        <>
        <div key={event.title}>
          <EventItem
            title={event.title}
            imagePath={"/event_images/" + event.image}
            time={event.time}
            description={event.description}
            />
        </div>
        </>
      ))}
    </>
  );
}
