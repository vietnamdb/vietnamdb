'use strict';

import fs from 'fs';

import { vietnamAPI } from '../constant';
import { request } from '../libs';

export const syncMovies = async (): Promise<void> => {
  const url: string = `${vietnamAPI}/culture/movies`;
  const nowShowingURL: string = `${url}?type=now-showing`;
  const movies = await request(nowShowingURL, 'GET');
  if (!movies.length) return;
  const list: string = movies
    .map((movie: any) => {
      const { name, url } = movie;
      return `- [${name}](${url})`;
    })
    .join('\n');
  const md: string = `# Movies

${list}`;
  await fs.writeFileSync('../docs/cst/culture/movies.md', md);
};
