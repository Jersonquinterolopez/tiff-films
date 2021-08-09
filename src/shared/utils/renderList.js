import { Link } from 'react-router-dom';
import CarouselItem from '../components/CarrouselItem';

export const renderList = (list = []) => {
  return (
    <div>
      {list.map((item) => (
        <Link to={`/movies/${item.id}`}>
          <CarouselItem key={item.id} {...item} />
        </Link>
      ))}
    </div>
  );
};
