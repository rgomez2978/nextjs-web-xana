import React from 'react'

const Skeleton = ({ type, visible }) => {
  const arrayFake = [1, 2, 3];
  return (
    <>
      {visible && arrayFake.map((item, idx) => (
        <div key={idx} className="p-4 mt-10 mb-4 bg-gray-100 rounded-lg animate-pulse">
          <div className="w-2/5 h-4 bg-gray-300 rounded"></div>
          <div className="w-full h-16 mt-2 bg-gray-200 rounded"></div>
          <div className="w-1/2 h-3 mt-2 bg-gray-200 rounded"></div>
          <div className="w-1/2 h-3 mt-2 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-3 mt-2 mt-5 bg-gray-300 rounded"></div>
        </div>
      ))}
    </>
  )
}

export default Skeleton