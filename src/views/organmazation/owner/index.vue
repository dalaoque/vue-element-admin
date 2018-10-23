<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="组织结构" name="first">
        <el-tree :data="datatree"/>
      </el-tab-pane>
      <el-tab-pane
        label="自定义字段"
        name="second">
        自定义
      </el-tab-pane>
    </el-tabs>

    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
			<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
			<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
			<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
		</el-tabs> -->
  </div>
</template>

<script>
export default {
  name: 'Organmazation',
  data() {
    return {
      activeName: 'first',
      datatree: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

