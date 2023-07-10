const Navigation = ({ style }) => {
  return (
    <div className="nagivation" style={style}>
      <a href="/">Главная</a>
      <a href="/catalog">Меню</a>
      <a href="/">О нас</a> {/* добавить ссылку*/}
      <a href="/">Рестораны</a> {/* добавить ссылку*/}
    </div>
  );
};

export default Navigation;
