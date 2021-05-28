import {TableTextFilter, TableNumberFilter, TableChoiceGroupFilter} from '@consta/uikit/Table';
import {Filter} from './types';

export const filters: Filter[] = [
  {
    id: 'brandFilter',
    name: 'Brand',
    field: 'brand',
    filterer: (cellValue: string, filterValues: Array<{ value: string; name: string }>) => {
      return filterValues.some((filterValue) => filterValue && filterValue.value === cellValue);
    },
    component: {
      name: TableTextFilter,
      props: {
        withSearch: true,
        items: [
          {name: 'BMW', value: 'BMW'},
          {name: 'Mercedes', value: 'Mercedes'},
          {name: 'Nissan', value: 'Nissan'},
          {name: 'Toyota', value: 'Toyota'},
          {name: 'Tesla', value: 'Tesla'},
          {name: 'Chevrolet', value: 'Chevrolet'},
          {name: 'MINI', value: 'MINI'},
        ]
      }
    }
  },
  {
    id: 'modelFilter',
    name: 'Model',
    field: 'model',
    filterer: (cellValue: string, filterValues: Array<{ value: string; name: string }>) => {
      return filterValues.some((filterValue) => filterValue && filterValue.value === cellValue);
    },
    component: {
      name: TableTextFilter,
      props: {
        withSearch: true,
        items: [
          {name: 'X6', value: 'X6'},
          {name: 'i8', value: 'i8'},
          {name: 'M8', value: 'M8'},
          {name: 'GLA 200', value: 'GLA 200'},
          {name: 'Benz S 500', value: 'Benz S 500'},
          {name: 'Skyline GTR', value: 'Skyline GTR'},
          {name: 'Micra K14', value: 'Micra K14'},
          {name: 'Camry 3.5', value: 'Camry 3.5'},
          {name: 'Prius Prime', value: 'Prius Prime'},
          {name: 'Roadster', value: 'Roadster'},
          {name: 'S', value: 'S'},
          {name: 'Corvette', value: 'Corvette'},
          {name: 'Cooper Classic', value: 'Cooper Classic'},
        ]
      }
    }
  },
  {
    id: 'yearFilter',
    name: 'Year',
    field: 'year',
    filterer: (cellValue, filterValues: {min: string, max: string}) => {
      if (filterValues.min && filterValues.max) {
        return cellValue >= Number(filterValues.min) && cellValue <= Number(filterValues.max);
      } else if (filterValues.min) {
        return cellValue >= Number(filterValues.min)
      } else if (filterValues.max) {
        return cellValue <= Number(filterValues.max)
      }
      return cellValue;
    },
    component: {
      name: TableNumberFilter
    }
  },
  {
    id: 'fuelFilter',
    name: 'Fuel',
    field: 'fuel',
    filterer: (cellValue: string, filterValues: Array<{ value: string; name: string }>) => {
      return filterValues.some((filterValue) => filterValue && filterValue.value === cellValue);
    },
    component: {
      name: TableTextFilter,
      props: {
        items: [
          {name: 'petrol', value: 'petrol'},
          {name: 'diesel', value: 'diesel'},
          {name: 'hybrid', value: 'hybrid'},
          {name: 'electric', value: 'electric'},
        ]
      }
    }
  },
  {
    id: 'bodyTypeFilter',
    name: 'Body type',
    field: 'bodyType',
    filterer: (cellValue: string, filterValues: Array<{ value: string; name: string }>) => {
      return filterValues.some((filterValue) => filterValue && filterValue.value === cellValue);
    },
    component: {
      name: TableTextFilter,
      props: {
        items: [
          {name: 'Sedan', value: 'Sedan'},
          {name: 'Hatchback', value: 'Hatchback'},
          {name: 'SUV', value: 'SUV'},
          {name: 'Estate', value: 'Estate'},
          {name: 'MPV', value: 'MPV'},
          {name: 'Pickup', value: 'Pickup'},
          {name: 'Cabrio', value: 'Cabrio'},
        ]
      }
    }
  },
  {
    id: 'priceFilter',
    name: 'Price, $',
    field: 'price',
    filterer: (cellValue, filterValue: {name: string, value: number}) => {
      if (!filterValue.value) return true;

      return cellValue > filterValue.value;
    },
    component: {
      name: TableChoiceGroupFilter,
      props: {
        items: [
          {name: '> 50000$', value: 50000},
          {name: '> 100000$', value: 100000},
        ]
      }
    }
  },
  {
    id: 'mileageFilter',
    name: 'Mileage',
    field: 'mileage',
    filterer: (cellValue, filterValue: {name: string, value: number}) => {
      if (!filterValue.value) return true;

      return cellValue > filterValue.value;
    },
    component: {
      name: TableChoiceGroupFilter,
      props: {
        items: [
          {name: '> 10000', value: 50000},
          {name: '> 100000', value: 100000},
        ]
      }
    }
  }
]