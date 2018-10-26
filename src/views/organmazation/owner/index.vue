<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>组织结构</span>
      </div>
    </el-card>

    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="组织结构" name="first">
        <el-row>
          <el-col :span="6" style="border-left: 1px solid #ddd; border-right: 1px solid #ddd">
            <el-tree :data="datatree" :default-expanded-keys="[1]" node-key="id" class="datatree"/>
          </el-col>
          <el-col :span="15">
            <el-form label-width="80px" style="width: 50%; margin-left: auto; margin-right: auto; margin-top: 50px; ">
              <el-form-item label="名称*">
                <el-input v-model="companyName"/>
                <el-button style="margin-top: 20px;">保存</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="自定义字段" name="second">
        <el-tabs v-model="custom" tpye="card">
          <el-tab-pane label="全部字段" name="customAll">
            <el-button icon="el-icon-plus" style="margin-bottom: 10px;">添加字段</el-button>
            <el-row>
              <el-col :span="4"><span class="grid-content bg-purple">字段名称</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">字段描述</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple">字段类型</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">显示顺序</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple">必填</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">常用</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">可见</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">状态</span></el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="分布字段" name="customDistribution">
            <el-row>
              <el-col :span="4"><span class="grid-content bg-purple">字段名称</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">字段描述</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple">字段类型</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">显示顺序</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple">必填</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">常用</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">可见</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">状态</span></el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="部分字段" name="customPart">
            <el-row>
              <el-col :span="4"><span class="grid-content bg-purple">字段名称</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">字段描述</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple">字段类型</span></el-col>
              <el-col :span="4"><span class="grid-content bg-purple-light">显示顺序</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple">必填</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">常用</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">可见</span></el-col>
              <el-col :span="2"><span class="grid-content bg-purple-light">状态</span></el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
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
import axios from 'axios'
export default {
  name: 'Organmazation',
  data() {
    return {
      companyName: '鸿合科技2',
      activeName: 'first',
      custom: 'customAll',
      datatree: [{
        id: 1,
        label: '鸿合科技2',
        children: [{
          label: '北北大区'
        }, {
          label: '鸿合科技-信息部',
          children: [{
            label: '鸿合科技信息部',
            children: [{
              label: 'flag'
            }]
          }, {
            label: '123'
          }]
        }, {
          label: '鸿合科技-财务部',
          children: [{
            label: '鸿合科技财务部',
            children: [{
              label: '123'
            }, {
              label: '123'
            }]
          }]
        }, {
          label: '鸿合创新-营销中心',
          children: [{
            label: '鸿合创新教育平板事业部'
          }, {
            label: '鸿合创新商用平板事业部'
          }, {
            label: '鸿合创新投影平板事业部'
          }, {
            label: '鸿合创新综合管理部'
          }]
        }, {
          label: '鸿合嘉华-营销中心',
          children: [{
            label: '鸿合嘉华商用显示事业部'
          }, {
            label: '鸿合嘉华工程投影事业部'
          }]
        }, {
          label: '鸿合智能-营销中心',
          children: [{
            label: '鸿合智能综合管理部'
          }, {
            label: '鸿合智能录播事业部'
          }, {
            label: '鸿合智能工程产品事业部'
          }, {
            label: '鸿合智能展台事业部'
          }]
        }, {
          label: '东北大区',
          children: [{
            label: '哈尔滨分支'
          }, {
            label: '沈阳分支'
          }, {
            label: '大连分支'
          }, {
            label: '长春分支'
          }]
        }, {
          label: '西北大区',
          children: [{
            label: '西安分支'
          }, {
            label: '乌鲁木齐分支'
          }, {
            label: '兰州分支'
          }, {
            label: '银川分支'
          }, {
            label: '太原分支'
          }]
        }, {
          label: '西南大区',
          children: [{
            label: '成都分支'
          }, {
            label: '重庆分支'
          }, {
            label: '昆明分支'
          }, {
            label: '贵阳分支'
          }]
        }, {
          label: '鲁豫大区',
          children: [{
            label: '郑州分支'
          }, {
            label: '济南分支'
          }, {
            label: '青岛分支'
          }]
        }, {
          label: '华北大区',
          children: [{
            label: '北京分支'
          }, {
            label: '天津分支'
          }, {
            label: '石家庄分支'
          }, {
            label: '呼和浩特分支'
          }]
        }, {
          label: '华中大区',
          children: [{
            label: '武汉分支'
          }, {
            label: '长沙分支'
          }]
        }, {
          label: '浙沪赣大区',
          children: [{
            label: '上海分支'
          }, {
            label: '南昌分支'
          }, {
            label: '杭州分支'
          }]
        }, {
          label: '华南大区',
          children: [{
            label: '福州分支'
          }, {
            label: '南宁分支'
          }, {
            label: '广州分支'
          }, {
            label: '深圳分支'
          }]
        }, {
          label: '苏皖大区',
          children: [{
            label: '南京分支'
          }, {
            label: '苏州分支'
          }, {
            label: '合肥分支'
          }]
        }, {
          label: '合作物流',
          children: [{
            label: '合作物流'
          }]
        }]
      }]
    }
  },
  created() {
    console.log(axios)
    axios.get('http://api.haomo-studio.com/org/swagger-ui.html#/department-type-controller')
      .then(function(data) {
        console.log('data: ', data)
      })
      .catch(function(err) {
        console.log('err: ', err)
      })
  }
}
</script>

<style scoped>
.grid-content{
  font-size: 12px;
  padding: 8px;
  color: #666;
  font-family: "微软雅黑";
}
.datatree{
  width: 60%;
  margin: 0 auto;
}
</style>
