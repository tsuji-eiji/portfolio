import Image from "next/image";



export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="text-center mx-8 my-48 lg:my-96">
        <h2 className="text-2xl lg:text-4xl">About this site</h2>
        <h3 className="text-xl lg:text-2xl mb-8">このサイトについて</h3>
        <p>
          このたびはアクセスいただきありがとうございます。
          こちらは大阪市在住のエンジニア ツジエイジのポートフォリオサイトです。
        </p>
      </div>

      <div className="text-center mx-8 my-48 lg:my-96">
        <h2 className="text-2xl lg:text-4xl">Profile</h2>
        <h3 className="text-xl lg:text-2xl mb-8">プロフィール</h3>
        <div className="lg:flex lg:justify-center">
          <div className="lg:w-1/2">
            <Image
              src="/img/prof.jpg"
              alt="プロフィール画像"
              width={300}
              height={300}
              className="m-auto"
            />
          </div>
          <div className="lg:w-1/2 text-left">
            <p className="text-xl lg:text-2xl my-8 lg:my-0 lg:mb-8 text-center">ツジエイジ</p>
            <p className="mb-4">
              1990年4月24日生まれ。滋賀県出身。
              2016年に業務システムの開発会社に就職しエンジニアとしてのキャリアを開始。
              2021年にweb系自社開発企業に転職。エンジニアとしての活動の場をweb業界に移行。
              現在に至る。
            </p>
            <ul>
              <li>趣味:</li>
              <li>フェス・ライブ参戦</li>
              <li>ギター演奏</li>
              <li>映画鑑賞</li>
              <li>テレビゲーム</li>
              <li>格闘技・プロレス観戦 etc...</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mx-8 my-48 lg:my-96">
        <h2 className="text-2xl lg:text-4xl">Skills</h2>
        <h3 className="text-xl lg:text-2xl mb-8">技術</h3>
        <div className="lg:flex lg:justify-evenly lg:mx-16">
          <Image src="/img/react.svg" alt="React" width={150} height={150} className="mx-auto mb-16" />
          <Image src="/img/nextjs-icon.svg" alt="Next.js" width={150} height={150} className="mx-auto mb-16" />
          <Image src="/img/php.svg" alt="PHP" width={150} height={150} className="mx-auto mb-16" />
          <Image src="/img/laravel.svg" alt="Laravel" width={150} height={150} className="mx-auto mb-16" />
        </div>
      </div>
    </main>
  );
}
