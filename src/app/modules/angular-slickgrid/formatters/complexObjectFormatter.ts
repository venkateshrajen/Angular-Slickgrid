import { Column } from './../models/column.interface';
import { Formatter } from './../models/formatter.interface';

export const complexObjectFormatter: Formatter = (row: number, cell: number, value: any, columnDef: Column, dataContext: any) => {
  if (!columnDef) {
    return '';
  }

  if (columnDef.labelKey) {
    return dataContext[columnDef.field] && dataContext[columnDef.field][columnDef.labelKey];
  }

  const complexField = columnDef.field || '';
  return complexField.split('.').reduce((obj, i) => (obj ? obj[i] : ''), dataContext);
};
