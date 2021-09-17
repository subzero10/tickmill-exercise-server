interface User {
  firstName: string;
  lastName: string;
  role?: 'USER' | 'ADMIN';
  email: string;
  password?: string;
  phone?: number;
  avatar?: string;
}

export const data: User[] = [
  {
    firstName: 'Judah',
    lastName: 'Dodson',
    email: 'judah_dodson@gmail.com',
    phone: 500400300,
  },
  {
    firstName: 'Dawson',
    lastName: 'Shields',
    email: 'ds@gmail.com',
    phone: 81209534,
  },
  {
    firstName: 'Penelope',
    lastName: 'Blankenship',
    email: 'peneloope@gmail.com',
    phone: 404330440,
  },
  {
    firstName: 'Londyn',
    lastName: 'Warren',
    email: 'londyn_warren@gmail.com',
    phone: 12230000,
  },
  {
    firstName: 'Marques',
    lastName: 'Mcpherson',
    email: 'cpheron@gmail.com',
    phone: 98890044,
  },
  {
    firstName: 'Randall',
    lastName: 'York',
    email: 'york@gmail.com',
    phone: 442200444,
  },
  {
    firstName: 'Cash',
    lastName: 'Merritt',
    email: 'merritt_cash@gmail.com',
    phone: 9900500400,
  },
  {
    firstName: 'Bruce',
    lastName: 'Durham',
    email: 'bruce@gmail.com',
    phone: 6542200440,
  },
  {
    firstName: 'Anabella',
    lastName: 'French',
    email: 'anabell@gmail.com',
    phone: 230044500,
    role: 'ADMIN',
  },
  {
    firstName: 'Alondra',
    lastName: 'Lambert',
    email: 'lambert@gmail.com',
    phone: 4400500,
  },
  {
    firstName: 'Erik',
    lastName: 'Petty',
    email: 'petty_e9122@gmail.com',
    phone: 656424053,
  },
  {
    firstName: 'Clarence',
    lastName: 'Henry',
    email: 'clarence_h19@gmail.com',
    phone: 900554012,
  },
  {
    firstName: 'Gretchen',
    lastName: 'Wilkinson',
    email: 'wilkson_gretchen@gmail.com',
    phone: 6666666666,
  },
  {
    firstName: 'Lena',
    lastName: 'Gordon',
    email: 'lena_gordon@gmail.com',
    phone: 111222333,
  },
  {
    firstName: 'Melissa',
    lastName: 'Dickson',
    email: 'dickson_melissa@gmail.com',
    phone: 122444142,
  },
  {
    firstName: 'Taniya',
    lastName: 'Ferrell',
    email: 'taniya_f@gmail.com',
    phone: 999888777,
    role: 'ADMIN',
  },
  {
    firstName: 'Katie',
    lastName: 'Griffin',
    email: 'griffin@gmail.com',
    phone: 48500400300,
  },
  {
    firstName: 'German',
    lastName: 'Crawford',
    email: 'germanc@gmail.com',
    phone: 560041234,
  },
  {
    firstName: 'Graham',
    lastName: 'Arias',
    email: 'ariasg9@gmail.com',
    phone: 1123041,
  },
  {
    firstName: 'Tobias',
    lastName: 'Arellano',
    email: 'tobias@gmail.com',
    phone: 99800343,
  },
];
