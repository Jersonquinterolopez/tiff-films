export const renderList = (list = []) => {
  return (
    <div>
      {list.map((item) => (
        <CarouselItem key={item.id} {...item} />
      ))}
    </div>
  );
};
