import { useRouter } from "next/router";
import Meta from '../compornents/meta';

export default function Confirm() {
  return (
    <>
      <Meta title='Confirm'/>
      <div id='wrapper' className='mail-wrapper'>
      <h3>入力内容をご確認ください。</h3>
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
            <button className='btn'>送信</button>
          </form>
          <div className='mail-empty'></div>
        </div>
      </div>
    </>
  )
}
