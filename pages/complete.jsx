import Image from 'next/image';
import Meta from '../compornents/meta';

export default function Complete() {
  return (
    <>
      <Meta title='Complete'/>
      <div id='wrapper'>
        <h4 className='complete-msg'>
          お問い合わせ内容が送信されました。<br />
          ありがとうございました。
        </h4>
      </div>
    </>
  )
}
