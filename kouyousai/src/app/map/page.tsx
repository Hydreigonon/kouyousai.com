import Header from "../ui/header";
import Footer from "../ui/footer";

export default function About() {

  return (
    <body className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <h1 className="pageTitle">
          校内マップ
        </h1>

        <h2 className="text-4xl py-8 text-center">
          Meaning
        </h2>
        <p className="text-2xl tracking-wide leading-10 text-center px-20">
          昔々、ある豊田高専生が考えた。<br/>
          秋で木々がこうようするころ、<br/>
          文化祭で気分をこうようさせに、<br/>
          豊田高専にいこうよう！
        </p>
      </main>
      <Footer />
    </body>
  );
}
