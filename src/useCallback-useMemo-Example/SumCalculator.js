import  {useState, useCallback, useMemo} from 'react';
import ChildMemo from './ChildMemo';

const SumCalculator = () => {
  const [sum, setSum] = useState([1,2,3]);
  const [randomNumber, setRandomNumber] = useState(0);

  const calculateSum = () => {
    console.log('calculateSum called');
    return sum.reduce((acc, curr) => acc + curr, 0);
  }
  const memoizedSum = useMemo(calculateSum, [sum]);
  
  const addNumbers = useCallback(() => {
    return setSum([...sum,sum.length + 1]);
  }, [sum]);

  const removeNumbers = useCallback(() => {
    return setSum(sum.slice(0, -1));
  }, [sum]);

  const resetNumbers = () => {
    return setSum([1,2,3]);
  }

  return (
    <div>
        <h2>UseMemo & UseCallback</h2>
        <h3>Numbers : {sum.join(', ')}</h3>
        <ChildMemo sum={memoizedSum} addNumbers={addNumbers} removeNumbers={removeNumbers} resetNumbers={resetNumbers} />
        <h3>Random Number: {randomNumber}</h3>
        <div style ={{ display: 'flex', flexDirection: 'column', width: '250px', gap: '10px'}}>
            <button className='bg-blue-500 px-4 py-1 mr-2 text-white'onClick={() => setRandomNumber(Math.random())}>Generate Random Number</button>
        </div>
    </div>
  )
}

export default SumCalculator