<script>
import { AgGridVue } from "ag-grid-vue3";
import { reactive, onMounted, ref, h } from "vue";
import { values } from "./utils/values";
import { columns } from "./utils/columns";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

import Image from './components/Image.vue';
import img from "./utils/img";



export default {
  name: "App",
  components: {
    AgGridVue,
    Image,
  },
  setup() {
    const gridApi = ref(null);

    const onGridReady = (params) => {
      gridApi.value = params.api;
    };

    const rowData = values;

    const columnDefs = columns;

    const defaultColDef = {
      sortable: true,
      filter: false,
      resizable: true,
      suppressColumnVirtualisation: true,
      autoSizeColumn: true,
      width: 150,
    };

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

<template>
  <div class="container">
    <button @click="deselectRows">deselect rows</button>
    <ag-grid-vue
      class="ag-theme-material"
      style="height: 500px"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      rowSelection="multiple"
      animateRows="true"
      @cell-clicked="cellWasClicked"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
    <div></div>
  </div>
</template>

<style>
#app {
  max-width: 100vw;
}
.container {
  margin: 30px;
  padding: 10px;
  border: 2px solid white;
  background-color: rgb(35, 97, 2);
  min-width: 950px;
  
}
</style>
