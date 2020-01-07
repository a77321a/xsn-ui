<template>
  <div class="f-tree-node-wrapper">
    <div
      v-for="(node, idx) in data"
      :key="'f_tree_node_' + idx"
      class="f-tree-node"
    >
      <div
        class="f-tree-node-content"
        @click.stop.prevent="_click(node)"
      >
        <!-- icon -->
        <span
          v-if="node.children && node.children.length > 0"
          class="inline-block transition-primary"
          :style="{
            transform: node.expand ? 'rotate(90deg)' : ''
          }"
          @click.stop.prevent="_click(node)"
        >
          <x-icon
            v-if="node.children && node.children.length > 0"
            name="next"
            size="12px"
            color="faded"
          />
        </span>

        <!-- end icon -->
        <!-- if mutiple checkbox -->
        <f-checkbox
          v-if="mutiple"
          :show-icon="!leaf || (leaf && (!node.children || node.children.length === 0))"
          :disabled="leaf && node.children && node.children.length > 0"
          v-model="selection"
          :val="node.value"
          :color="activeColor"
          :label="node.label"
          @input="_emit"
        />
        <!-- end checkbox -->

        <!-- label -->
        <span
          v-if="!mutiple"
          class="inline-block pr-md"
          :class="[leaf && node.children && node.children.length > 0 ? 'disabled' : '', selection === node.value ? 'text-' + activeColor : '']"
          style="font-size: 14px"
          @click.stop.prevent="_select(node)"
        >
          {{node.label}}
        </span>
        <!-- end label -->
      </div>

      <!-- children -->
      <f-tree-node
        v-if="node.expand && node.children && node.children.length > 0"
        class="pl-lg"
        :nodes="node.children"
        :mutiple="mutiple"
        :leaf="leaf"
        :accordion="accordion"
        :selected.sync="selection"
        @select="_handleChildrenSelect"
      />
      <!-- end children -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FTreeNode',
  props: {
    nodes: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    selected: {
      type: Array | String | Number
    },
    mutiple: {
      type: Boolean,
      default () {
        return false
      }
    },
    leaf: {
      type: Boolean,
      default () {
        return true
      }
    },
    accordion: {
      type: Boolean,
      default () {
        return true
      }
    },
    expandAll: {
      type: Boolean,
      default () {
        return false
      }
    },
    activeColor: {
      type: String,
      default () {
        return 'positive'
      }
    }
  },
  data () {
    return {
      data: JSON.parse(JSON.stringify(this.nodes)),
      selection: this.selected
    }
  },
  created () {
    this._processData(this.data)
  },
  watch: {
    nodes: {
      deep: true,
      handler (val, oldVal) {
        this.data = this._processData(val)
      }
    },
    selected: {
      deep: true,
      handler (val, oldVal) {
        this.selection = val
      }
    }
  },
  methods: {
    _processData (data) {
      data.forEach(item => {
        if (this.expandAll) {
          item.expand = true
        } else {
          item.expand = item.expand ? item.expand : false
        }

        if (item.value === undefined) {
          item.value = item.label
        }
        if (item.children) {
          this._processData(item.children)
        }
        console.log(item.expand)
      })
    },
    _click (node) {
      // start process expand
      let flag = node.expand
      if (this.accordion) {
        this._processExpand(this.data)
      }
      node.expand = !flag

      // process children expand as false when node.expand = false
      if (!node.expand && node.children && node.children.length > 0) {
        this._processExpand(node.children)
      }

      this.$forceUpdate()
    },
    _select (node) {
      // start process selected
      if (!this.mutiple) {
        if (!this.leaf || (this.leaf && (!node.children || node.children.length === 0))) {
          this.selection = this.selection !== node.value ? node.value : ''
          this._emit()
        }
      }
    },
    _handleChildrenSelect (value) {
      if (!this.mutiple && value) {
        this.data.forEach(d => {
          d.selected = false
        })
      }

      this._emit()
    },
    _processExpand (data) {
      data.forEach(d => {
        d.expand = false
        if (d.children && d.children.length > 0) {
          this._processExpand(d.children)
        }
      })
    },
    _emit () {
      this.$emit('select', this.selection)
      this.$emit('update:selected', this.selection)
    }
  }
}
</script>

<style>
</style>
