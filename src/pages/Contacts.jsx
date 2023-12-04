const Contacts = () => {
  return (
    <main class="section">
      <div class="container">
        <h1 class="title-1">Contacts</h1>

        <ul class="content-list">
          <li class="content-list__item">
            <h2 class="title-2">Location</h2>
            <p>Ramenskoe, Russia</p>
          </li>
          <li class="content-list__item">
            <h2 class="title-2">Telegram</h2>
            <p>@Mpatrakeev</p>
          </li>
          <li class="content-list__item">
            <h2 class="title-2">Email</h2>
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
