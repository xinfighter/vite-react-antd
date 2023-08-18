import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Index = () => {
  const { count } = useSelector((state) => state.counter);

  return (
    <div>
      count: {count}
      <Outlet />
    </div>
  );
};

export default Index;
