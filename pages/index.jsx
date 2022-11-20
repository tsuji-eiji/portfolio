import Image from 'next/image';
import Meta from '../compornents/meta';

export default function Home() {
  return (
    <>
      <Meta title='Home'/>
      <div id='wrapper'>
        <div className='home-headline home-card'>
          <h2>About this site</h2>
          <h3>このサイトについて</h3>
          <p>このたびはアクセスいただきありがとうございます。
            こちらは大阪市在住のエンジニア ツジエイジのポートフォリオサイトです。</p>
        </div>
        <div id="profile" className='home-card'>
          <div className='home-headline'>
            <h2>Profile</h2>
            <h3>プロフィール</h3>
          </div>
          <div id='prof-content'>
            <div id="home-prof-img">
              <Image src="/img/prof.jpg" alt="" width={500} height={500} />
            </div>
            <div className='home-prof-text'>
              <h4>ツジエイジ</h4>
              <p>
                1990年4月24日生まれ。滋賀県出身。<br/>
                2016年に業務システムの開発会社に就職しエンジニアとしてのキャリアを開始。<br/>
                2021年にweb系自社開発企業に転職。エンジニアとしての活動の場をweb業界に移行。<br/>
                現在に至る。
                <br/>
                <br/>
                趣味:<br/>
                フェス・ライブ参戦<br/>
                ギター演奏<br/>
                映画鑑賞<br/>
                テレビゲーム<br/>
                格闘技・プロレス観戦 etc...
              </p>
            </div>
          </div>
        </div>
        <div id="skills" className='home-card'>
          <div className='home-headline'>
            <h2>Skills</h2>
            <h3>技術</h3>
          </div>
          <div id='skill-line'>
            <div className='skill-card'>
              <Image src="/img/react.svg" alt="" width={200} height={200}/>
              <p>React</p>
            </div>
            <div className='skill-card'>
              <Image src="/img/nextjs-icon.svg" alt="" width={200} height={200}/>
              <p>Next.js</p>
            </div>
            <div className='skill-card'>
              <Image src="/img/php.svg" alt="" width={200} height={200}/>
              <p>PHP</p>
            </div>
            <div className='skill-card'>
              <Image src="/img/laravel.svg" alt="" width={200} height={200}/>
              <p>Laravel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
