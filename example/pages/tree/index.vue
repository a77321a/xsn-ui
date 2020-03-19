<template>
  <div>
    <a
      href="https://github.com/a77321a/xsn-ui/blob/master/src/pages/tree/index.vue"
      target="_blank"
      >样例源码</a
    >

    <h6>
      基本用法（只有点击文本或者复选框才会选择，点击图标或者整行只有展开/收起效果）：
    </h6>

    <x-tree :nodes="treeData" :selected.sync="selection" />

    <h6>一次只能展开一个节点</h6>
    <x-tree :nodes="treeData" accordion />

    <h6>只有叶子节点（最后一级）才能被选择</h6>
    <x-tree :nodes="treeData" leaf />

    <h6>多选</h6>
    <x-tree :nodes="treeData" :selected.sync="mutipleSelection" mutiple />

    <h6>多选，并且只有叶子节点（最后一级）才能被选择</h6>
    <x-tree :nodes="treeData" :selected.sync="mutipleSelection" mutiple leaf />

    <h6>全部展开</h6>
    <x-tree :nodes="treeData" expand-all />

    <!--  -->
    <x-table
      class="mt-md"
      title="配置项详解"
      hide-bottom
      :tableData="config.settingConfig.tableData"
      :columns="config.settingConfig.columns"
    />

    <!--  -->
    <x-table
      class="mt-md"
      title="emit"
      hide-bottom
      :tableData="config.emitConfig.tableData"
      :columns="config.emitConfig.columns"
    />
  </div>
</template>

<script>
import config from "./config";
export default {
  name: "pageTree",
  data() {
    return {
      config,
      treeData: [
        {
          label: "level 1",
          children: [
            {
              label: "level 1-1",
              children: [
                {
                  label: "level 1-1-1"
                },
                {
                  label: "level 1-1-2"
                }
              ]
            },
            {
              label: "level 1-2",
              children: [
                {
                  label: "level 1-2-1"
                },
                {
                  label: "level 1-2-2"
                }
              ]
            }
          ]
        },
        {
          label: "level 2",
          children: [
            {
              label: "level 2-1",
              children: [
                {
                  label: "level 2-1-1"
                },
                {
                  label: "level 2-1-2"
                }
              ]
            },
            {
              label: "level 2-2",
              children: [
                {
                  label: "level 2-2-1"
                },
                {
                  label: "level 2-2-2"
                }
              ]
            }
          ]
        }
      ],
      selection: "",
      mutipleSelection: []
    };
  }
};
</script>

<style></style>
