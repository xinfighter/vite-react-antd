import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { decrement, increment } from '@/store/features/counterSlice'

const Home = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          dispatch(increment(2))
        }}
      >
        加2
      </Button>
      <Button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        减1
      </Button>
    </div>
  )
}

export default Home
