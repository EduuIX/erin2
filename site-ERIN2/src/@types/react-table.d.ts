// src/@types/react-table.d.ts

declare module 'react-table' {
  import * as React from 'react';

  export interface Column<D extends object = {}> {
    Header: React.ReactNode | ((props: { column: ColumnInstance<D> }) => React.ReactNode);
    accessor?: keyof D | ((originalRow: D, index: number) => any);
    id?: string;
    Cell?: React.FC<{ value: any; row: Row<D>; column: ColumnInstance<D>; data: D[] }>;
    columns?: Column<D>[]; // <=== adiciona essa linha para colunas aninhadas
  }

  export interface ColumnInstance<D extends object = {}> extends Column<D> {
    getHeaderProps: () => any;
    getFooterProps: () => any;
    render: (type: 'Header' | 'Cell' | 'Footer') => React.ReactNode;
    id: string;
  }

  export interface Row<D extends object = {}> {
    original: D;
    index: number;
    id: string;
    cells: Cell<D>[];
    getRowProps: () => any;
  }

  export interface Cell<D extends object = {}> {
    value: any;
    row: Row<D>;
    column: ColumnInstance<D>;
    getCellProps: () => any;
    render: (type: 'Cell') => React.ReactNode;
  }

  export interface HeaderGroup<D extends object = {}> {
    headers: ColumnInstance<D>[];
    getHeaderGroupProps: () => any;
    id: string;
  }

  export interface TableOptions<D extends object = {}> {
    columns: Column<D>[];
    data: D[];
  }

  export interface TableInstance<D extends object = {}> {
    getTableProps: () => any;
    getTableBodyProps: () => any;
    headerGroups: HeaderGroup<D>[];
    rows: Row<D>[];
    prepareRow: (row: Row<D>) => void;
  }

  export function useTable<D extends object = {}>(
    options: TableOptions<D>
  ): TableInstance<D>;
}
