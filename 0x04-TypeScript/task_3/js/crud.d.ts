import { RowID, RowElement } from './interface';

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowId): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;

