<template>
  <div class="container">
    <ag-grid-vue
      class="ag-theme-alpine"
      style="height: 500px"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      :statusBar="statusBar"
      :enableRangeSelection="true"
      rowSelection="multiple"
      animateRows="true"
      @cell-clicked="collectColumn"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
    <div></div>
    <BarTotal />
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import { reactive, ref } from "vue";
import { values } from "./utils/values";
import { columns } from "./utils/columns";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import Image from "./components/Image.vue";
import BarTotal from "./components/BarTotal.vue";

export default {
  name: "App",
  components: {
    AgGridVue,
    Image,
    BarTotal,
  },
  setup() {
    const gridApi = ref(null);

    const onGridReady = (params) => {
      gridApi.value = params.api;
    };

    const collectColumn = (e) => {
      const data = e.data;
      let info = "\nІнформація по рядку:\n(назва колонки та значення)\n";
      for (let col in data) {
        info += `\n\t ${col} - ${data[col]}`;
      }
      alert(info);
    };

    const rowData = reactive(values);
    const columnDefs = reactive(columns);
    const defaultColDef = reactive({
      sortable: true,
      filter: false,
      resizable: true,
      autoSizeColumn: true,
      width: 150,
      floatingFilter: true,
    });

    const statusBar = {
      statusPanels: [
        { statusPanel: "agTotalRowCountComponent", align: "left" },
        // { statusPanel: totalSumCol3 , align: "right"},
        { statusPanel: "agTotalAndFilteredRowCountComponent", align: "left" },
        { statusPanel: "agAggregationComponent" },
      ],
    };

    return {
      rowData,
      columnDefs,
      defaultColDef,
      onGridReady,
      collectColumn,
      statusBar,
    };
  },
};
</script>

<style>
.container {
  margin: 30px;
  padding: 10px;
  border: 2px solid white;
  background-color: rgb(35, 97, 2);
  min-width: 920px;
}

.ag-cell-value[col-id="Col5"] {
  font-weight: 700;
  text-decoration: underline;
}
</style>
