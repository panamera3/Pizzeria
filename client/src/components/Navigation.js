const Navigation = ({ style }) => {
  return (
    <div className="nagivation" style={style}>
      <a href="/">Главная</a>
      <a href="/catalog">Меню</a>
      <a href="/about-us">О нас</a> 
      <a href="/restaurants">Рестораны</a>
    </div>
  );
};

export default Navigation;
