import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>未実装ページ【Demo】</title>
        <meta
          name='description'
          content='現在このページは実装されておりません。'
        />
        <meta name='robots' content='noindex' />
        <meta name='keywords' content='demo demo2' />
      </Head>

      <div className='relative h-screen bg-sub'>
        <div className='m-auto w-11/12 pt-10 text-center text-main md:pt-[100px]'>
          <h2 className='mb-10 text-[30px] text-btext md:text-[35px]  2xl:text-[50px]'>
            現在このページは実装されておりません。
          </h2>
          <p className='text-2xl md:text-[25px] 2xl:mb-4 2xl:text-[40px]'>申し訳ございません。</p>
        </div>
      </div>
    </>
  );
}

export default Custom404
