import React from 'react';
import {Table} from '@consta/uikit/Table';
import {DATA} from '../DATA';
import {columns} from '../columns';
import {filters} from '../filters';

export const CarsList: React.FC = () => {

  return (
    <Table
      columns={columns}
      rows={DATA}
      filters={filters}
      borderBetweenColumns={true}
    />
  )
}
