<template>
  <div class="f-tree">

    <f-tree-node
      :nodes="nodes"
      :selected.sync="selection"
      :mutiple="mutiple"
      :leaf="leaf"
      :accordion="accordion"
      :expand-all="expandAll"
      :active-color="activeColor"
      @select="_select"
    />
  </div>
</template>

<script>
import FTreeNode from './node'
export default {
  name: 'FTree',
  components: {
    FTreeNode
  },
  props: {
    nodes: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    selected: {
      type: Array | String | Number,
      default: ''
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
        return false
      }
    },
    accordion: {
      type: Boolean,
      default () {
        return false
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
      selection: this.selected
    }
  },
  watch: {
    deep: true,
    handler (val, oldVal) {
      this.selection = selected
    }
  },
  methods: {
    _select (value) {
      this.$emit('select', this.selection)
      this.$emit('update:selected', this.selection)
    }
  }
}
</script>

<style>

</style>
