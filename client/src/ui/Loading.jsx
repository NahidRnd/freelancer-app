import {  Oval } from 'react-loader-spinner'

function Loading({width ="40", height ="40"}) {
  return (
    <div className='flex justify-center'>
      <Oval
        visible={true}
        height={height}
        width={width}
        color="var(--primary-color)"
        ariaLabel="oval-loading"
    />
    </div>
  )
}

export default Loading
