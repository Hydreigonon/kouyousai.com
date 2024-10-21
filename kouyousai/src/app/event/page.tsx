import { EventModal } from "./EventModal";

export default function Home() {
  const title: string = "男女でニコイチ！";
  const imagePath: string = "/event_images/nicoichi.png"
  const time: string = "一日目　9:30-10:10";
  const description: string = "高専で1番仲良しな男女2人組はどこだ！2人で協力して景品ゲット！！";

  return (
    <>
      <div>
        <h1 className="pageTitle">
          イベント一覧
        </h1>
      </div>
      <EventModal
        title={title}
        imagePath={imagePath}
        time={time}
        description={description}
      />
    </>
  );
}
