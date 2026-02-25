/*Необходимо написать класс AlarmClock с методами:


5 start — запускает будильник.

 - Создавайте новый интервал, в котором каждую секунду выполняйте действия:
    - Перебирайте все звонки с помощью метода forEach.
    - При переборе каждый звонок проверяйте на возможность его запуска: свойство time совпадает с текущим временем, и звонок может выполняться (в свойстве canCall находится true).
    - При истинном условии (необходимости запуска звонка) в свойство canCall (возможность вызова звонка) присваивайте false и вызывайте коллбек звонка (свойство callback).
 - Результат создания интервала сохраняйте в свойство intervalId.
6 stop — останавливает выполнение интервала будильника.
  - Вызовите функцию clearInterval для удаления интервала.
  - Сбросьте значение из свойства intervalId. Для сброса свойства можно присваивать null.
7 resetAllCalls — сбрасывает возможность запуска всех звонков.
  - С помощью метода forEach присваивайте true в свойство canCall у каждого звонка.
8 clearAlarms — удаляет все звонки.
  - Вызывает метод остановки интервала (метод stop).
  - Удаляет все звонки. Для удаления всех звонков переприсваивайте свойство alarmCollection в пустой массив. */
  class AlarmClock {
    constructor () {
      this.alarmCollection = [];
      this.intervalId = null;
    }

    addClock (time, callback) {
      if (!time || !callback) {
        throw new Error('Отсутствуют обязательные аргументы');
      };
      const exists = this.alarmCollection.some(alarm => alarm.time === time);
      if (exists) {
        console.warn('Уже присутствует звонок на это же время');
        return;
      };
      this.alarmCollection.push({callback, time, canCall: true});
    }

    removeClock (time) {
      this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }

    start () {
      if (this.intervalId !== null) {
      return;
      }
    }
  }