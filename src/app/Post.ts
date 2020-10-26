export interface Post {
  'id': number;
  'name': string;
  'email': string;
  'phone': number;
  'address': address  ;
}

export interface address {
  "street":string;
  "suite":string;
  "city": string,
  "zipcode": string,
  "geo": geo
}

export interface geo{
  "lat":string;
  "lng":string;
}
