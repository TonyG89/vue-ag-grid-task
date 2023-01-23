<template>
  <div class="ag-theme-alpine">
    <div class="ag-status-bar" ref="statusBar">
      <div ref="eStatusBarLeft" class="ag-status-bar-left" role="status"></div>
      <h1>Custom status bar with sum</h1>
      <div
        ref="eStatusBarCenter"
        class="ag-status-bar-center"
        role="status"
      ></div>
      <div ref="eStatusBarRight" class="ag-status-bar-right" role="status">
        <div
          class="ag-status-name-value ag-status-panel ag-status-panel-total-row-count"
        >
          <span ref="eLabel">Sum (Col3)</span>:&nbsp;
          <span ref="eValue" class="ag-status-name-value-value">{{
            totalSumCol3
          }}</span>
        </div>
        <div
          class="ag-status-name-value ag-status-panel ag-status-panel-total-row-count"
        >
          <span ref="eLabel">Sum (Col4)</span>:&nbsp;
          <span ref="eValue" class="ag-status-name-value-value">{{
            totalSumCol4
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { values } from "../utils/values";

export default {
  name: "BarTotal",
  setup() {
    let totalSumCol3 = values.reduce((sum, col) => {
      const num = col.Col3.slice(0, -3);
      return sum + +num;
    }, 0);
    totalSumCol3 = totalSumCol3.toFixed(2) + " кг";

    let totalSumCol4 = values.reduce((sum, col) => {
      const num = col.Col4;
      return sum + +num;
    }, 0);

    return {
      totalSumCol3,
      totalSumCol4,
    };
  },
};
</script>

<style scoped>
* {
  background-color: #fff;
}
h1 {
  text-transform: uppercase;
  color: rgba(128, 128, 128, 0.6);
}
</style>
