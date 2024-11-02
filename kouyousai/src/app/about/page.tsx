import Header from "../ui/header";
import Footer from "../ui/footer";
import Overview from "../ui/overview";

export default function About() {

  return (
    <>
      <h1 className="pageTitle">
        こうよう祭について
      </h1>

      <Overview 
        title="Meaning" 
        description={"昔々、ある豊田高専生が考えた。\n秋で木々がこうようするころ、\n文化祭で気分をこうようさせに、\n豊田高専にいこうよう"}
      />
      <div className="h-10"></div>
      <Overview 
        title="MEICAnとは？" 
        description={"こうよう祭マスコットキャラクターの「MEICAn」！\n名前は豊田高専五学科の英語名の頭文字から来ています！\n"}
      />
      <div className="h-10"></div>
      <Overview 
        title="Exhibitions" 
        description={"こうよう祭では各学科やクラスなどによる展示披露を主な目的としています！\n日々高専で学んでいることやそれぞれの活動の成果を発揮した素晴らしい展示をご覧ください！"}
      />
      <div className="h-10"></div>
      <Overview 
        title="Events" 
        description={"入場して右手のステージでは、全日程を通してイベントが行われています！\nゲストによるスペシャルステージも！"}
      />
      <div className="h-10"></div>
      <Overview 
        title="Booths" 
        description={"部活動やクラブなどの模擬店も盛りだくさん！\nドリンクも買えちゃうよ！"}
      />
      <div className="h-10"></div>
      <Overview 
        title="Food trucks" 
        description={"キッチンガーもいっぱい！\nおなかいっぱい楽しもう！"}
      />
      <div className="h-10"></div>
    </>
  );
}
