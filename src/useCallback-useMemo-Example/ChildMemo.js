import React from 'react'

const ChildMemo = ({sum, addNumbers, removeNumbers, resetNumbers}) => {
    console.log('ChildMemo rendered')
  return (
    <div>
        <button onClick={addNumbers} className='bg-blue-500 px-4 py-1 mr-2 text-white'>Add Numbers</button>
        <button onClick={removeNumbers} className='bg-red-500 text-white px-4 py-1 mr-2'>Remove Numbers</button>
        <button onClick={resetNumbers} className='bg-gray-500 text-white px-4 py-1'>Reset</button>
        <h3>Sum: {sum}</h3>
    </div>
  )
}

export default React.memo(ChildMemo);