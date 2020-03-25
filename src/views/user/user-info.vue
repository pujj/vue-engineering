<template>
  <div>
    This is user info page.
    <div style="color: #2d8cf0;">
      <cell-group/>
    </div>
  </div>
</template>

<script>
import CellGroup from '@/components/cell-group'
import apiUser from '@/api/user'
export default {
  components: {
    CellGroup
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      apiUser.getUserInfo().then(res => {
        if (res.success) {
          console.log(res)
        }
      })
    }
  }
}
</script>
