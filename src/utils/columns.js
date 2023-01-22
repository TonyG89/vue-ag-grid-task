
export const columns = [
  {
    headerName: "GROUP1",
    children: [
      { field: "Col1", cellRenderer: "Image" },
      { field: "Col2", },
      { field: "Col3" },
    ],
  },
  {
    headerName: "GROUP2",
    children: [
      { field: "Col4"},
      { field: "Col5", 
      color:"red", },
      {
        field: "Col6",
        filter: "agTextColumnFilter",
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200
        }
      }],
  },
]