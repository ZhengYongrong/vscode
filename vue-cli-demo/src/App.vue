<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">

      <a-layout-sider :style="{height: '100vh'}" :trigger="null" collapsible v-model="collapsed">
        <div class="logo">
            <img src="./assets/logo.png" />
            <h1>Antd Demo</h1>
        </div>
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" @click="handleClick">
          <a-menu-item key="">
            <a-icon type="laptop" />
            <span>首页</span>
          </a-menu-item>
          <a-menu-item key="user">
            <a-icon type="user" />
            <span>用户管理模块</span>
          </a-menu-item>
          <a-menu-item key="order">
            <a-icon type="pic-center" />
            <span>订单管理模块</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
        <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      collapsed: false
    };
  },
  methods:{
    handleClick:function(e){
    //$router.push("path") 路由路径调转
      this.$router.push('/' + e.key)  
    }
  }
};
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:24px;
  color: #2c3e50;
}

.logo img,
.logo svg {
  height: 32px;
  width: 32px;
}
.logo img,
.logo svg,
.logo h1 {
  display: inline-block;
  vertical-align: middle;
}

.logo h1 {
  color: #fff;
  font-size: 20px;
  margin: 0 0 0 12px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  font-weight: 600;
  vertical-align: middle;
}
.logo {
  position: relative;
  height: 32px;
  left: 0px;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

#components-layout-demo-custom-trigger .trigger {
    font-size: 24px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    margin: 16px;
  }
</style>
