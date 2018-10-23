<template>
  <div class="dashboard-container">
    <myOrganization/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import myOrganization from './owner'
export default {
  name: 'Organmazation',
  components: { myOrganization },
  data() {
    return {
      currentRole: 'myOrganization'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'myOrganization'
    }
  }
}
</script>
