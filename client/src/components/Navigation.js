const Navigation = ({ style }) => {
  return (
    <div className="nagivation" style={style}>
      <a href="/">Главная</a>
      <a href="/catalog">Меню</a>
      <a href="/pizzeria/about-us">О нас</a> 
      <a href="/pizzeria/restaurants">Рестораны</a>
    </div>
  );
};

export default Navigation;
