<template>
  <img :src="imageLink" alt="random picture" />
<<<<<<< HEAD
  <h1>sda</h1>
=======
>>>>>>> 433c3e2
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
