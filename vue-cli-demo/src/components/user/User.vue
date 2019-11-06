<!--

 -->
<template>
  <a-table
    :columns="columns"
    :rowKey="record => record.id"
    :dataSource="data"
    :pagination="pagination"
    :loading="loading"
  >
    <template slot="operation" slot-scope="text, record">
      <a-popconfirm v-if="data.length" title="Sure to delete?" @confirm="() => onDelete(record.id)">
        <a href="javascript:;">Delete</a>
      </a-popconfirm>
    </template>
  </a-table>
  <!--
    <template slot="name" slot-scope="name">
      {{name.first}} {{name.last}}
    </template>
  -->
</template>

<script>
//sortField=name & sortOrder=ascend
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    width: "20%"
    //,scopedSlots: { customRender: 'name' }
  },
  {
    title: "Gender",
    dataIndex: "gender",
    //filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
    width: "20%"
  },
  {
    title: "Email",
    dataIndex: "email"
  },
  {
    title: "operation",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" }
  }
];
const mydata = [
  { id: 1, name: "Peter", gender: "male", email: "123@qq.com" },
  { id: 2, name: "Lucy", gender: "female", email: "2222@qq.com" }
];

export default {
  name: "User",
  data() {
    return {
      data: mydata, //Table结果集合
      pagination: {}, //分页条件
      loading: false, //加载数据动画效果（锁？）
      columns //Table的列配置
    };
  },
  components: {},
  methods: {
    onDelete(id) {
      console.log("id:" + id);
    }
  },
  created: function() {
    console.log("User Model init!!!");
  }
};
</script>

<style>
</style>