import React from 'react'

const Checkout = () => {
const onCheckout = async () =>{
    console.log('CHECKOUT')
}

  return (
    <form action={onCheckout} method="post"> </form>
  )
}

export default Checkout