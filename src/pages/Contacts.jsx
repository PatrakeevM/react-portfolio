const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Мои контакты</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Место проживания</h2>
            <p>Раменское, Россия</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Номер телефона</h2>
            <a href="tel:+79057944175">+7(905)-794-41-75</a>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Эл. почта</h2>
            <p>
              <a href="mailto:patrakeev.matvej@bk.ru">patrakeev.matvej@bk.ru</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
