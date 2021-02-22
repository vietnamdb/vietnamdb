'use strict';

import fs from 'fs';
import Vietcetera from 'vietcetera';

import { api } from './constant';
import { addZero, request, getTime } from './libs';

const vietcetera: Vietcetera = new Vietcetera();
const city: string = 'Hanoi';

export const getLunarDate = async (): Promise<Record<string, any>> => {
  const url: string = `${api}/culture/calendar/solar2lunar`;
  const { year: solarYear, month: solarMonth, date: solarDate } = getTime();
  const { year: lunarYear, month: lunarMonth, date: lunarDate } = await request(url, 'POST', {
    year: solarYear,
    month: solarMonth,
    date: solarDate
  });
  const canChiURL: string = `${api}/culture/calendar/lunar/can-chi`;
  const { canChi } = await await request(canChiURL, 'POST', {
    year: lunarYear,
    month: lunarMonth,
    date: lunarDate
  });
  const tietKhiURL: string = `${api}/culture/calendar/lunar/tiet-khi`;
  const { tietKhi } = await await request(tietKhiURL, 'POST', {
    year: lunarYear,
    month: lunarMonth,
    date: lunarDate
  });
  return { solarYear, solarMonth, solarDate, lunarYear, lunarMonth, lunarDate, canChi, tietKhi };
};

export const getVietcetera = async () => {
  const type: any = 'latest';
  const basicArticles: Array<Record<string, any>> = await vietcetera.getArticles({ type });
  const articles = basicArticles
    .map((article: Record<string, any> = {}) => {
      const { title = '', slug = '', language = '' } = article;
      const url =
        language && slug ? `https://vietcetera.com/${language.toLowerCase()}/${slug}` : '';
      return `- [${title}](${url})`;
    })
    .join('\n');
  return articles;
};

export const getYouTubeTrending = async (categoryId: number = 0): Promise<string> => {
  const link: string = `${api}/youtube/trending`;
  const url: string = categoryId ? `${link}?categoryId=${categoryId}` : link;
  const videos = await request(url);
  const top10 = videos.slice(0, 10);
  return top10
    .map((video: Record<string, any>, index: number) => {
      const { title, url, channelId, channelTitle } = video;
      const channelUrl: string = `https://www.youtube.com/channel/${channelId}`;
      return `${addZero(index + 1)}. [${title}](${url}) - [${channelTitle}](${channelUrl})`;
    })
    .join('\n');
};

export const getWeather = async (): Promise<Record<string, any>> => {
  const url: string = `${api}/weather?city=${city}`;
  const { main = {}, weather = [] } = await request(url);
  const [first = {}] = weather;
  const { description = 'undefined' } = first;
  const { temp = 0, feels_like: feelsLike = 0 } = main;
  return { description, temp, feelsLike };
};

export const getAirVisual = async (): Promise<number> => {
  const url: string = `${api}/weather/air-visual?city=${city}`;
  const { current = [] } = await request(url);
  const { pollution = {} } = current;
  const { aqius = 0 } = pollution;
  return aqius;
};

export const getGoogleTrends = async (): Promise<string> => {
  const url: string = `${api}/news/trends`;
  const { trends = [] } = await request(url);
  const md: string = trends
    .map((trend: string) => {
      const url: string = `https://www.google.com/search?q=${encodeURI(trend)}`;
      return `- [${trend}](${url})`;
    })
    .join('\n');
  return md;
};

export const buildNPM = (): string => {
  const packages: Array<string> = [
    'giaohangnhanh',
    'onepay',
    'vietcetera',
    'vietnambanks',
    'vietnamgovernment',
    'vietnamnews',
    'vnapis',
    'vnpay',
    'vtcpay',
    'zalopay'
  ].sort();
  return packages
    .map((_package: string) => {
      return `[![download](https://img.shields.io/npm/dm/${_package}.svg?style=flat&label=${_package}+%28download%29)](https://www.npmjs.com/package/${_package})`;
    })
    .join('\n\n');
};

export const buildREADME = async () => {
  const csv: string = fs.readFileSync('../markdown/csv.md', 'utf-8');
  const googleTrends: string = await getGoogleTrends();
  const airVisual: number = await getAirVisual();
  const { description, temp, feelsLike } = await getWeather();
  const youTubeTrending: string = await getYouTubeTrending();
  const musicTrending: string = await getYouTubeTrending(10);
  const vietceteraArticles: string = await getVietcetera();
  const npm: string = buildNPM();
  const {
    solarYear,
    solarMonth,
    solarDate,
    lunarYear,
    lunarMonth,
    lunarDate,
    canChi,
    tietKhi
  } = await getLunarDate();

  const twoColumesStyle: string = '-webkit-column-count: 2; -moz-column-count: 2; column-count: 2;';

  const md: string = `# VIETNAMDB ([Stacks](docs/stacks))

## Today

<div style="${twoColumesStyle}"><div style="width: 50%; display: inline-block;">
<ul>
<li>Current weather is ${description}.</li>
<li>Temperature is ${temp}°C.</li>
<li>Feels Like ${feelsLike}°C.</li>
<li>Air Visual is ${airVisual}.</li>
</ul>
</div><div style="width: 50%; display: inline-block;">
<ul>
<li>Date: ${solarYear}/${addZero(solarMonth)}/${addZero(solarDate)}</li>
<li>Lunar: ${lunarYear}/${addZero(lunarMonth)}/${addZero(lunarDate)}</li>
<li>Can Chi: ${canChi}</li>
<li>Tiet Khi: ${tietKhi}</li>
</ul>
</div></div>

## Feed

<table style="width:100%"><tbody style="width:100%"><tr><td valign="top" width="33%">

**GOOGLE TRENDS**

${googleTrends}

</td><td valign="top" width="33%">

**MUSIC TRENDS**

${musicTrending}

</td><td valign="top" width="33%">

**YOUTUBE TRENDS**

${youTubeTrending}

</td></tr><tr><td valign="top" width="33%">

**VIETCETERA**

${vietceteraArticles}

</td><td valign="top" width="33%">

**NPM**

${npm}

</td><td valign="top" width="33%">

${csv}
</td></tr></tbody></table>
`;

  await fs.writeFileSync('../README.md', md);
};
