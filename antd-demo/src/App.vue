<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger" :style="{ height: '100vh'}">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo">
          <img src="./assets/logo.png" />
          <h1>Antd Demo</h1>
        </div>
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" @click="handleClick">
          <a-menu-item key>
            <a-icon type="user" />
            <span>HelloWorld</span>
          </a-menu-item>
          <a-menu-item key="a">
            <a-icon type="video-camera" />
            <span>模块A</span>
          </a-menu-item>
          <a-menu-item key="b">
            <a-icon type="upload" />
            <span>模块B</span>
          </a-menu-item>
          <a-menu-item key="user">
            <a-icon type="upload" />
            <span>用户模块</span>
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
          内容：
          <router-view />
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
  methods: {
    handleClick(e) {
      this.$router.push("/" + e.key);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  font-size: 18px;
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