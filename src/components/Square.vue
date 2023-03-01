<template>
  <button
    :class="[`nb-${nearby}`, {
      mine: mine,
      flag: mark === 'flag',
      question: mark === 'question'
    }]"
    @click="checkSquare(pos)"
    @click.prevent.right="checkMark(pos)"
    @mousedown="$emit('smile-fear', true)"
    @mouseup="$emit('smile-fear', false)"
  />
</template>

<script>
export default {
  name: "Square",
  data() {
    return {
      id: this.pos.y * 16 + this.pos.x
    }
  },
  props: {
    mine: {
      type: Boolean
    },
    nearby: {
      type: Number
    },
    mark: {
      type: [String, null],
      default: null,
      validator(mark) {
        return ['flag', 'question', null].includes(mark)
      }
    },
    pos: {
      type: Object
    }
  },
  watch: {
    mark(newVal) {
      if (!newVal) return
      if (newVal === 'flag') {this.$emit('flags-update', 1)}
      else if (newVal === 'question') {this.$emit('flags-update', -1)}
    }
  },
  methods: {
    checkSquare(pos) {
      this.$emit('check-square', pos)
    },
    checkMark(pos) {
      this.$emit('check-mark', pos)
    }
  },
}
</script>

<style scoped>
.mine {
  background: url("../assets/sprite.png") 54px 33px;
}

.mine-x {
  background: url("../assets/sprite.png") 20px 33px;
}

.mine-a {
  background: url("../assets/sprite.png") 37px 33px;
}

.flag {
  background: url("../assets/sprite.png") 105px 33px;
}

.question {
  background: url("../assets/sprite.png") 88px 33px;
}

.nb-0 {
  background: url("../assets/sprite.png") 122px 33px;
}

.close:active {
  background: url("../assets/sprite.png") 122px 33px;
}

.close {
  background: url("../assets/sprite.png") 139px 33px;
}

.nb-1 {
  background: url("../assets/sprite.png") 139px 16px;
}

.nb-2 {
  background: url("../assets/sprite.png") 122px 16px;
}

.nb-3 {
  background: url("../assets/sprite.png") 105px 16px;
}

.nb-4 {
  background: url("../assets/sprite.png") 88px 16px;
}

.nb-5 {
  background: url("../assets/sprite.png") 71px 16px;
}

.nb-6 {
  background: url("../assets/sprite.png") 54px 16px;
}

.nb-7 {
  background: url("../assets/sprite.png") 37px 16px;
}

.nb-8 {
  background: url("../assets/sprite.png") 20px 16px;
}
</style>