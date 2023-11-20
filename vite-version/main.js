import { DateTimeFormatter, ZonedDateTime, ZoneId } from '@js-joda/core'
import '@js-joda/timezone/dist/js-joda-timezone-10-year-range'
import { Locale } from '@js-joda/locale_en-us'

const zdt = ZonedDateTime.of(2016, 1, 1, 0, 0, 0, 0, ZoneId.of('Europe/Berlin'));
console.log('en_US formatted string:', zdt.format(DateTimeFormatter.ofPattern('eeee MMMM dd yyyy GGGG, hh:mm:ss a zzzz, \'Week \' ww, \'Quarter \' QQQ').withLocale(Locale.US)));

document.querySelector('#app').innerHTML = `
<div>Hello
  <p>
    ${zdt.format(DateTimeFormatter.ofPattern('eeee MMMM dd yyyy GGGG, hh:mm:ss a zzzz, \'Week \' ww, \'Quarter \' QQQ').withLocale(Locale.US))}
  </p>
</div>
`
