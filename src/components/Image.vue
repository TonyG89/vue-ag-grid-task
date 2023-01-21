<template>
  <img :src="imageLink" alt="random picture" />
  <h1>sda</h1>
</template>

<script>
import { makeInt } from "../utils/array";
import {randomObj} from '../utils/array';

export default {
  name: "Image",
  components: {
    makeInt,
  },

  setup() {
    const imageLink = randomObj().val6;
    console.log(imageLink);

    return { imageLink };
  },
};
</script>

<style lang="scss" scoped></style>
