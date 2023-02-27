import spinner from './assets/loading.gif';

function Loading() {
  return (
    <div className='w-100 mt-20'>
      <img
        width={180}
        className='text-center mx-auto'
        src={spinner}
        alt='loading...'
      />
    </div>
  );
}

export default Loading;
