import localFont from 'next/font/local';
import { Inter, Montserrat, Raleway, Roboto, Quicksand } from 'next/font/google';

export const muli = localFont({ src: './fonts/muli/Muli.ttf' });

export const inter = Inter({
  subsets: ['latin']
});

export const montserrat = Montserrat({
  subsets: ['latin']
});

export const raleway = Raleway({
  subsets: ['latin']
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: '700'
});

export const quicksand = Quicksand({
  subsets: ['latin'],
});
