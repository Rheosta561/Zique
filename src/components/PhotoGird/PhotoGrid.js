import React from 'react'
import './PhotoGrid.css'
const PhotoGrid = (props) => {
  return (
    <div className='mainframe'>
      <div className='item i1'
      style={{
        backgroundImage: `url(${props.arr[0]})`
      }}></div>
      <div className='item i2'
      style={{
        backgroundImage: `url(${props.arr[1]})`
      }}></div>
      <div className='item i3'
      style={{
        backgroundImage: `url(${props.arr[2]})`
      }}></div>
      <div className='item i4'
      style={{
        backgroundImage: `url(${props.arr[3]})`
      }}></div>
      <div className='item i5'
      style={{
        backgroundImage: `url(${props.arr[4]})`
      }}></div>
      <div className='item i6'
      style={{
        backgroundImage: `url(${props.arr[5]})`
      }}></div>
      <div className='item i7'
      style={{
        backgroundImage: `url(${props.arr[6]})`
      }}></div>
      <div className='item i8'
      style={{
        backgroundImage: `url(${props.arr[7]})`
      }}></div>
      <div className='item i9'
      style={{
        backgroundImage: `url(${props.arr[8]})`
      }}></div>
      <div className='item i10'
      style={{
        backgroundImage: `url(${props.arr[9]})`
      }}></div>
    </div>
  )
}

export default PhotoGrid
