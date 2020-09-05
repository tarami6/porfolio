import React from 'react'
import Logo from '../assets/images/logo.png'
import Loader from '../assets/images/loading.gif'

const SuspenseComp = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={Logo} alt='Logo' style={{ width: '12vh' }} />
        <img
          src={Loader}
          alt='Logo'
          style={{ width: '20vh', marginTop: '40px' }}
        />
      </div>
    </div>
  )
}

export default SuspenseComp
