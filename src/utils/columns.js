
const agF = () => {
  let total = 0;
  this.values.forEach(value => total += value);
  console.log(this);
  return total;
}

export const columns = [
  {
    headerName: "GROUP1",
    children: [
      {
        field: "Col1", cellRenderer: "Image",
        resizable: false,
      },
      { field: "Col2", },
      {
        field: "Col3",
        // aggFunc:"sum" 
      },
    ],
  },
  {
    headerName: "GROUP2",
    children: [
      {
        field: "Col4",
        // aggFunc:"avg" 
        filter: 'agNumberColumnFilter',
      },
      { field: "Col5", filter: true },
      {
        field: "Col6", filter: 'agTextColumnFilter',
        // filterParams: { caseSensitive: true, defaultOption: 'startsWith', buttons:["apply","Clear"] }
      }],
  },
]