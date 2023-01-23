
import 'ag-grid-enterprise';

const aggCol3 = params => {
  let suma = params.values.reduce((sum, str) => {
    const num = str.slice(0, -3)
    return sum + +num
  }, 0)
  return suma.toFixed(2) + " кг"
}

export const columns = [
  {
    headerName: "GROUP1",
    children: [
      { field: "Col1", cellRenderer: "Image", rowGroup: true, hide: true },
      { field: "Col2" },
      {
        field: "Col3", aggFunc: aggCol3
      },
    ],
  },
  {
    headerName: "GROUP2",
    children: [
      { field: "Col4", aggFunc: 'avg' },
      {
        field: "Col5",
        color: "red",
      },
      {
        field: "Col6",
        filter: "agTextColumnFilter",
        // filterParams: {
        //   buttons: ['reset', 'apply']
        // }
      }],
  },
]