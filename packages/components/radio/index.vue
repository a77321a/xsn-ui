<template>
  <div
    class="inline-block cursor-pointer"
    @click="_select"
    @mousemove="unCheckedColor = color"
    @mouseleave="unCheckedColor = 'faded'"
  >
    <x-icon
      :name="value === val ? checkedIcon : unCheckedIcon"
      :color="value === val ? color : unCheckedColor"
      :size="size"
      class="cursor-pointer text-bold"
    />
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "XRadio",
  props: {
    value: {
      required: true,
      type: String | Boolean
    },
    checkedIcon: {
      type: String,
      default() {
        return "tick";
      }
    },
    unCheckedIcon: {
      type: String,
      default() {
        return "radio";
      }
    },
    color: {
      type: String,
      default() {
        return "blue";
      }
    },
    label: {
      type: String,
      default() {
        return "";
      }
    },
    size: {
      type: String,
      default() {
        return "12px";
      }
    },
    val: {
      required: true,
      type: String | Boolean
    }
  },
  data() {
    return {
      unCheckedColor: "faded"
    };
  },
  methods: {
    _select() {
      this.$emit("input", this.val);
      this.$emit("click");
    }
  }
};
</script>

<style></style>
