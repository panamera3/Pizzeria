const Navigation = ({ style }) => {
  return (
    <div className="nagivation" style={style}>
      <a href={`${process.env.PUBLIC_URL}/#/`}>Главная</a>
      <a href={`${process.env.PUBLIC_URL}/#/catalog`}>Меню</a>
      <a href={`${process.env.PUBLIC_URL}/#/about-us`}>О нас</a>
      <a href={`${process.env.PUBLIC_URL}/#/restaurants`}>Рестораны</a>
    </div>
  );
};

export default Navigation;
