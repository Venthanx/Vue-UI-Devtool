<template>
  <div id="basement">
    <phoneModule>
      <template v-slot:mainscreen>
        <div class="main-screen">234</div>
      </template>
    </phoneModule>
  </div>
</template>

<script>
import phoneModule from '@/components/phone'
export default {
  components: {
    phoneModule,
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

// html,
// body {
//   height: 100%;
//   overflow-x: hidden;
//   overflow-y: scroll;
// }

#basement {
  // width: 1600px;
  height: 1000px;
  background: #aaffa9; /* fallback for old browsers */
  background: -webkit-linear-gradient( to left, #7bc296, #b3e0bf); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient( to left, #7bc296, #b3e0bf ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  position: relative;
}

.main-screen {
  width: 100%;
  // height: 100%;
  height: 1000px;
  padding-top: 20px;
  // background: saddlebrown;
}
</style>
