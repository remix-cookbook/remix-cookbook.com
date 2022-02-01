import PicoSanity from 'picosanity';
import { config } from './config';

export const getClient = () => {
  return new PicoSanity(config);
};
