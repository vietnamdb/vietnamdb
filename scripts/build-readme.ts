'use strict';

import fs from 'fs';
import Vietcetera from 'vietcetera';

import { addZero, request } from './libs';

const vietcetera: Vietcetera = new Vietcetera();

const api: string = 'https://vietnamdb.herokuapp.com/api';
const city: string = 'Hanoi';

export const getVietcetera = async () => {
  const type: any = 'latest';
  const basicArticles: Array<Record<string, any>> = await vietcetera.getArticles({ type });
  const articles = basicArticles
    .map((article: Record<string, any> = {}) => {
      const { title = '', slug = '', language = '' } = article;
      const url = language && slug ? `https://vietcetera.com/${language.toLowerCase()}/${slug}` : '';
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

export const buildGoogleTrends = async (): Promise<string> => {
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

export const buildREADME = async () => {
  const csv: string = fs.readFileSync('../markdown/csv.md', 'utf-8');
  const npm: string = fs.readFileSync('../markdown/npm.md', 'utf-8');
  const googleTrends: string = await buildGoogleTrends();
  const airVisual: number = await getAirVisual();
  const { description, temp, feelsLike } = await getWeather();
  const youTubeTrending: string = await getYouTubeTrending();
  const musicTrending: string = await getYouTubeTrending(10);
  const vietceteraArticles: string = await getVietcetera();

  const md: string = `# VIETNAMDB

[Stacks](docs/stacks)

\`\`\`txt
The current weather is ${description}.
Temperature is ${temp}°C (feels like ${feelsLike}°C).
Air Visual is ${airVisual}.
\`\`\`

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

${csv}
</td><td valign="top" width="33%">

${npm}
</td></tr></tbody></table>
`;

  await fs.writeFileSync('../README.md', md);
};
