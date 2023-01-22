<template>
  <img :src="imageLink" alt="random picture" />
  <h1>sda</h1>
</template>

<script>
import {randomObj} from '../utils/array';

export default {
  name: "Image",

  setup() {
    const imageLink = randomObj().val6;
    return { imageLink };
  },
};
</script>

<style lang="scss" scoped></style>
