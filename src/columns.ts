import {Column} from './types';

export const columns: Column[] = [
  {
    title: 'Brand',
    accessor: 'brand',
    width: 150
  },
  {
    title: 'Model',
    accessor: 'model',
    width: 200
  },
  {
    title: 'Year',
    accessor: 'year',
    width: 150,
    sortable: true
  },
  {
    title: 'Fuel',
    accessor: 'fuel',
    width: 120
  },
  {
    title: 'Body type',
    accessor: 'bodyType',
    width: 150
  },
  {
    title: 'Price, $',
    accessor: 'price',
    width: 150,
    sortable: true
  },
  {
    title: 'Mileage',
    accessor: 'mileage',
    width: 150,
    sortable: true
  }
];

