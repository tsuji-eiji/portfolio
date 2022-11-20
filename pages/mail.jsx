import Meta from '../compornents/meta';
import Link from 'next/link';
import { useState } from 'react';

export default function Mail() {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  return (
    <>
      <Meta title='Mail'/>
      <div id='wrapper' className='mail-wrapper'>
      <h3>各種お問い合わせ等は以下のメールフォームをご利用ください。</h3>
        <div className='mail-form'>
          <form action="">
            <ul>
              <li>お名前</li>
              <li><input type="text" /></li>
              <li>メールアドレス</li>
              <li><input type="text" /></li>
              <li>件名</li>
              <li><input type="text" /></li>
              <li>内容</li>
              <li><textarea name="" id="" cols="30" rows="10"></textarea></li>
            </ul>
            <Link href="/confirm">
              <button className='btn'>送信</button>
            </Link>
          </form>
          <div className='mail-empty'></div>
        </div>
      </div>
    </>
  )
}
