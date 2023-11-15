import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Index = () => {
  const { count } = useSelector((state) => state.counter)

  return (
    <div>
      count: {count}
      <Outlet />
    </div>
  )
}

export default Index
