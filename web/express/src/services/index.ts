'use strict';

import AdministrativeDivisionsService from './administration-divisions';
import BanksService from './banks';
import CultureService from './culture';
import EthnicMinoritiesService from './ethnic-minorities';
import FinanceService from './finance';
import GovernmentService from './government';
import InformationService from './information';
import LicensePlatesService from './license-plates';
import MusicService from './music';
import NewsService from './news';
import OpenAPIsService from './open-apis';
import ProxyService from './proxy';
import StatusService from './status';
import TelegramService from './telegram';
import USAService from './usa';
import VisasService from './visas';
import WeatherService from './weather';
import XService from './x';
import YouTubeService from './youtube';

export const administrativeDivisionsService: AdministrativeDivisionsService = new AdministrativeDivisionsService();
export const banksService: BanksService = new BanksService();
export const ethnicMinoritiesService: EthnicMinoritiesService = new EthnicMinoritiesService();
export const financeService: FinanceService = new FinanceService();
export const governmentService: GovernmentService = new GovernmentService();
export const cultureService: CultureService = new CultureService();
export const informationService: InformationService = new InformationService();
export const licensePlatesService: LicensePlatesService = new LicensePlatesService();
export const musicService: MusicService = new MusicService();
export const newsService: NewsService = new NewsService();
export const openAPIsService: OpenAPIsService = new OpenAPIsService();
export const proxyService: ProxyService = new ProxyService();
export const statusService: StatusService = new StatusService();
export const telegramService: TelegramService = new TelegramService();
export const usaService: USAService = new USAService();
export const visasService: VisasService = new VisasService();
export const weatherService: WeatherService = new WeatherService();
export const xService: XService = new XService();
export const youTubeService: YouTubeService = new YouTubeService();