<script>
import { AgGridVue } from "ag-grid-vue3";
import { reactive, onMounted, ref, h } from "vue";
import { values } from "./utils/values";
import { columns } from "./utils/columns";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import Image from "./components/Image.vue";
<<<<<<< HEAD

// import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// import { ModuleRegistry } from '@ag-grid-community/core';

// ModuleRegistry.registerModules([ClientSideRowModelModule]);
=======
>>>>>>> 433c3e2

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
      console.log(columnDefs[0].children[0]);
    };

<<<<<<< HEAD
    const rowData =  reactive(values);

    const columnDefs = reactive(columns);

    const defaultColDef = {
      sortable: true, // 3 значение
=======
    const rowData = reactive(values);

    const columnDefs = reactive(columns);

    const defaultColDef = reactive({
      sortable: true,
>>>>>>> 433c3e2
      filter: false,
      resizable: true,
      suppressColumnVirtualisation: true,
      autoSizeColumn: true,
<<<<<<< HEAD
      flex:1,
      floatingFilter: true
    };
=======
      width: 150,
      floatingFilter: true,
    });
>>>>>>> 433c3e2

    return {
      rowData,
      columnDefs,
      defaultColDef,
      onGridReady,
      cellWasClicked: (e) => {
        console.log(
          "По клику на строку вести сообщение с серилизованными данными всей строки(всех колонок)",
          e
        );
      },
      deselectRows: (e) => {
        console.log(gridApi.value);
        console.log(e.value);
      },
    };
  },
};

</script>

<template>
  <div class="container">
    <button @click="deselectRows">deselect rows</button>
    <ag-grid-vue
<<<<<<< HEAD
      class="ag-theme-alpine"
=======
      class="ag-theme-material"
>>>>>>> 433c3e2
      style="height: 500px"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      rowSelection="multiple"
      animateRows="true"
      @cell-clicked="cellWasClicked"
      @grid-ready="onGridReady"
<<<<<<< HEAD
    >
    </ag-grid-vue>
    <output>sda</output>
=======

      :autoGroupColumnDef="autoGroupColumnDef"
      :groupDisplayType="groupDisplayType"
    >
    </ag-grid-vue>
>>>>>>> 433c3e2
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
<<<<<<< HEAD
=======

.ag-cell-value[col-id=Col5]{
  font-weight: 700;
  text-decoration: underline;
}

>>>>>>> 433c3e2
</style>
