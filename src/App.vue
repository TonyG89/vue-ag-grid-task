<template>
  <div class="container">
    <button @click="deselectRows">deselect rows</button>
    <ag-grid-vue
      class="ag-theme-material"
      style="height: 500px"
      :columnDefs="columnDefs"
      :rowData="rowData.value"
      :defaultColDef="defaultColDef"
      rowSelection="multiple"
      animateRows="true"
      @cell-clicked="cellWasClicked"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
    <div>{{ rowData }}</div>
  </div>
</template>

<style>
#app {
}
.container {
  margin: 30px;
  padding: 10px;
  border: 2px solid white;
  background-color: rgb(35, 97, 2);
  width: 800px;
}
</style>

<script>
import { AgGridVue } from "ag-grid-vue3";
import { reactive, onMounted, ref, h } from "vue";
import mainArray, { randomObj } from "./utils/array";
import img from './utils/img';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

const Image = {
  template: `<img :src="https://picsum.photos/500/300?random" />`,
};

console.log(mainArray(5));

const value = mainArray(100).map((obj) => {
  const column = {}
    column.Col1 = `<h1>Display img from ${obj.val6} img path</h1>`,
    column.Col2 = obj.val1,
    column.Col3 = obj.val2 + "кг",
    column.Col4 = obj.val4 + obj.val5,
    column.Col5 = obj.val7,
    column.Col6 = obj.val8;
    return column
});

export default {
  name: "App",
  components: {
    AgGridVue,
    img,
  },
  methods: {
    generatorArr() {},
  },
  setup() {
    const gridApi = ref(null);

    const onGridReady = (params) => {
      gridApi.value = params.api;
    };

    const rowData = reactive({
      value,
    });

    const columnDefs = [
      {
        headerName: "GROUP1",
        children: [
          { field: "Col1", cellRenderer: "Image" },
          { field: "Col2" },
          { field: "Col3" },
        ],
      },
      {
        headerName: "GROUP2",
        children: [
          { field: "Col4" }, 
          { field: "Col5" }, 
          { field: "Col6" }],
      },
    ];

    const defaultColDef = {
      sortable: true,
      filter: false,
    };

    // onMounted(() => {
    //   fetch("https://www.ag-grid.com/example-assets/row-data.json")
    //     .then((res) => res.json())
    //     .then((remoteRowData) => {
    //       console.log(remoteRowData);
    //       return(rowData.value = remoteRowData)});
    // });

    return {
      rowData,
      columnDefs,
      defaultColDef,
      onGridReady,
      cellWasClicked: (e) => {
        console.log("cell was clicked", e);
      },
      deselectRows: (e) => {
        gridApi.value.deselectAll();
      },
    };
  },
};
</script>
