import { useRouter } from "next/router";
import Meta from '../compornents/meta';
import { useState } from 'react';

export default function Confirm() {

  const router = useRouter();
  const [name, setName] = useState(router.query.name);
  const [email, setEmail] = useState(router.query.email);
  const [subject, setSubject] = useState(router.query.subject);
  const [content, setContent] = useState(router.query.content);
  const [isFirst, setIsFirst] = useState(true);

  // フォーム回答後はリダイレクトさせる
  const redirect = () => {
    // 初回表示時はリダイレクトさせない
    if (isFirst) {
      setIsFirst(false);
      return;
    }

    router.push({
      // リダイレクト先のページ
      pathname: `/complete`,
    });
  };
  

  return (
    <>
      <Meta title='Confirm'/>
      <div id='wrapper' className='mail-wrapper'>
      <h3>入力内容をご確認ください。</h3>
        <div className='confirm-form'>
          <form method="post" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfhjilkBxETk3oI4FkSlW9-f6dw2OzqrmgqZXspe5k4bJ8Bkg/formResponse" className="autoConfirm">
            <ul>
              <li>お名前</li>
              <li>
                <span>{name}</span>
              </li>
              <li>メールアドレス</li>
              <li>
                <span>{email}</span>
              </li>
              <li>件名</li>
              <li>
                <span>{subject}</span>
              </li>
              <li>内容</li>
              <li>
                <span>{content}</span>
              </li>
            </ul>
            <input type="hidden" name="entry.2005620554" value={name} />
            <input type="hidden" name="entry.469344052" value={email} />
            <input type="hidden" name="entry.1166974658" value={subject} />
            <input type="hidden" name="entry.839337160" value={content} />
            <div className="confirm-btn-line">
              <button id="confirm-submit" className='btn'>送信</button>
              <button id="confirm-back" className='btn'>戻る</button>
            </div>
          </form>
          <div className='confirm-empty'></div>
        </div>
      </div>
    </>
  )
}
