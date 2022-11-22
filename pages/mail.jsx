import Meta from '../compornents/meta';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router";

export default function Mail() {

  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    router.push({
      pathname: "/confirm",
      query: { 
        name: name ,
        email: email ,
        subject: subject ,
        content: content
      }
    });
  }

  return (
    <>
      <Meta title='Mail'/>
      <div id='wrapper' className='mail-wrapper'>
      <h3>各種お問い合わせ等は以下のメールフォームをご利用ください。</h3>
        <div className='mail-form'>
          <form onSubmit={submit}>
            <ul>
              <li>お名前</li>
              <li><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></li>
              <li>メールアドレス</li>
              <li><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></li>
              <li>件名</li>
              <li><input type="text" value={subject} onChange={(e) => setSubject(e.target.value)}  /></li>
              <li>内容</li>
              <li>
                <textarea cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)} />
              </li>
            </ul>
            <button id='submit-btn' type="submit" className='btn'>送信</button>
          </form>
          <div className='mail-empty'></div>
        </div>
      </div>
    </>
  )
}
