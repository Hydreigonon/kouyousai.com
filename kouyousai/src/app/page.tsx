import Logo from "./ui/logo";
import Slideshow from "./ui/slideshow";

import nextConfig from "../../next.config.mjs";

export default function Home() {

  return (
    <>

      <h1 className="pageTitle">
        豊田高専　文化祭<br/>
        こうよう祭2024
      </h1>

      <Logo />

      <Slideshow />

      <p className="text-2xl tracking-wide leading-10 text-center px-20">
        こうよう祭は豊田高専で年に一度
        秋に開催される文化祭です。
        <br/>
        2024年度は11月2日(土)、11月3日(日)に開催いたします。
        <br/>
        今年度もお待ちしております！
      </p>

    </>

  );
}
