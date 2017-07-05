# Weeks

## 怎么安装？

直接复制 `src/weeks.js` 文件，需要 ES6 支持。

## 什么功能？

计算某天是第几周，从 1970 年 1 月 1 日算起。

```js
import { weekOfDate } from 'weeks';

// 计算某天是第几周
const theDate = new Date('Tue Jul 04 2017 23:59:59 GMT+0800');
const theWeek = weekOfDate(thu);
```

反过来，计算某周的第一天和最后一天是哪天。默认以星期天为起始日，通过 `weeks.setStartOfWeek(1);` 设置以星期一为起始日。

```js
import { setStartOfWeek, firstDayOfWeek, lastDayOfWeek } from 'weeks';

// 以星期一为起始日
setStartOfWeek(1);

// 计算第 2048 周的星期一和星期日
const firstDay = firstDayOfWeek(2048);
const lastDay = lastDayOfWeek(2048);
```

## 时区因素

**weeks** 默认使用当地时间计算第几周、第几天。也可通过 `weeks.setTimezoneOffsetMS()` 更改，具体请参考源码。
