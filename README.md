# ***Frontend Portfolio*** :large_orange_diamond:
## Используемые технологии: :scroll:
+ Vite
+ React
  + react-router
+ SCSS
___
```JavaScript
const timerPromise = () =>
    new Promise((resolve, reject) => setTimeOut(() => resolve(), 5000));

const getResult = async () => {
    console.log('Start');
    const startTime = perfomance.now();
    await timerPromise();
    const endTime = perfomance.now();
    console.log('Finish', endTime - startTime);
};

getResult();
```