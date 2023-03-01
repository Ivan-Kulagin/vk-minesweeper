<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <h1>Mines remaining: {{ minesRemaining }}</h1>
    <div style="width: 256px" @mouseleave="fearOff">
      <div style="display: flex; justify-content: space-between">
        <div style="display: flex">
          <div :class="`digit d-${minesRemaining[0]}`" />
          <div :class="`digit d-${minesRemaining[1]}`" />
          <div :class="`digit d-${minesRemaining[2]}`" />
        </div>

        <button @click="restartGame" class="smile happy" :class="{fear: fear}" />

        <div style="display: flex">
          <div :class="`digit d-${timePassed[0]}`" />
          <div :class="`digit d-${timePassed[1]}`" />
          <div :class="`digit d-${timePassed[2]}`" />
        </div>
      </div>
      <div v-for="(row, y) of field" style="display: flex; flex-direction: row" :key="y">
        <Square v-for="(item, x) of row"
                :key="16*y+x"
                :pos="{x,y}"
                :mine="item.mine"
                :nearby="item.nearby"
                :mark="item.mark"
                class="box"
                :class="{close: fieldState === 'field_init'}"
                @check-square="checkSquare"
                @check-mark="checkMark"
                @flags-update="flagsUpdate"
                @smile-fear="smileFear"
        />
      </div>
    </div>



  </div>
</template>

<script>
import {generateField} from "@/scripts/genfield";
import Square from "@/components/Square";

const FIELD_INIT = 'field_init'
const FIELD_INGAME = 'field_ingame'
// const FIELD_OVER = 'field_over'

export default {
  name: 'App',
  components: {Square},
  data() {
    return {
      field: Array(16).fill(Array(16).fill({mine: false})),
      fieldState: FIELD_INIT,
      lastClick: null,
      timerFunction: null,
      mines: 40,
      timer: 990,
      flags: 0,
      fear: false,
    }
  },
  methods: {
    // checkFlag(x, y) {
    //   if (this.fieldState === FIELD_INGAME) {
    //     // eslint-disable-next-line no-prototype-builtins
    //     if (this.field[y][x]['mark'] === 'flag') {
    //       this.field[y][x]['mark'] = 'question'
    //     } else if (this.field[y][x]['mark'] === 'question') {
    //       this.field[y][x]['mark'] = false
    //     } else {
    //       this.field[y][x]['mark'] = 'flag'
    //     }
    //   }
    // },
    startTimer() {
      this.timerFunction = setInterval(() => this.timer++, 1000)
    },

    smileFear(state) {
      this.fear = state
    },
    fearOff() {
      this.fear = false
    },
    restartGame() {
      this.field = Array(16).fill(Array(16).fill({mine: false}))
      this.fieldState = FIELD_INIT
      this.lastClick = null
      clearInterval(this.timerFunction)
      this.timer = 0
      this.mines = 40
      this.flags = 0
    },
    flagsUpdate(delta) {
      this.flags += delta
    },
    checkMark(pos) {
      if (this.fieldState === FIELD_INGAME) {
        this.$forceUpdate();
        let mark = this.field[pos.y][pos.x]['mark']
        if (!mark) {
          this.field[pos.y][pos.x] = {...this.field[pos.y][pos.x], mark: 'flag'}
        } else if (mark === 'flag') {
          this.field[pos.y][pos.x] = {...this.field[pos.y][pos.x], mark: 'question'}
        } else if (mark === 'question') {
          this.field[pos.y][pos.x] = {...this.field[pos.y][pos.x], mark: null}
        }
      }
    },
    checkSquare(pos) {
      this.lastClick = pos
      if (this.fieldState === FIELD_INIT) {
        this.createGameField(this.lastClick)
        this.fieldState = FIELD_INGAME
        this.startTimer()
      }
    },
    createGameField(clickPos) {
      this.field = generateField(16,16,40, clickPos)
    }
  },
  computed: {
    minesRemaining() {
      return String(this.mines > this.flags ? this.mines - this.flags : 0).padStart(3, '0').split('')
    },
    timePassed() {
      return String(this.timer < 1000 ? this.timer : 999).padStart(3, '0').split('')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  border: none;
  width: 16px;
  height: 16px;
}

.digit {
  border: none;
  width: 13px;
  height: 23px;
}

.smile {
  border: none;
  width: 26px;
  height: 26px;
}

.happy {
  background: url("./assets/sprite.png") 0 60px;
}

.happy:active {
  background: url("./assets/sprite.png") -28px 60px;
}

.fear {
  background: url("./assets/sprite.png") -54px 60px;
}

.d-0 {
  background: url("./assets/sprite.png") 13px 84px;
}
.d-1 {
  background: url("./assets/sprite.png") 0 84px;
}
.d-2 {
  background: url("./assets/sprite.png") -14px 84px;
}
.d-3 {
  background: url("./assets/sprite.png") -28px 84px;
}
.d-4 {
  background: url("./assets/sprite.png") -42px 84px;
}
.d-5 {
  background: url("./assets/sprite.png") -56px 84px;
}
.d-6 {
  background: url("./assets/sprite.png") -70px 84px;
}
.d-7 {
  background: url("./assets/sprite.png") -84px 84px;
}
.d-8 {
  background: url("./assets/sprite.png") -98px 84px;
}
.d-9 {
  background: url("./assets/sprite.png") -112px 84px;
}

</style>
