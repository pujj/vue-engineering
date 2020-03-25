<template>
  <div>
    this is a cell group component.
    <cell-item v-for="i in 2" :key="i"/>
  </div>
</template>

<script>
import CellItem from '../cell-item'
export default {
  components: {
    CellItem
  }
}
</script>
