<template>
  <div class="phone">
    <div class="phone-screen">
      <span class="date-time" v-text="dateTimeMsg"></span>
      <div class="phone-notch">
        <div class="notch-handset"></div>
        <div class="notch-lightsensor"></div>
      </div>
      <div class="states">
        <ul class="ul_xinhao">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div class="wifi1">
          <div class="wifi2">
            <div class="wifi3">
              <div class="wifi4">
                <div class="wifi5"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="dianliang"></div>
      </div>
      <div class="homekey-bar"></div>
      <slot name="mainscreen"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateTimeMsg: "15:30",
    };
  },
  // setup() {
  //   function getDate() {
  //     let today = new Date();
  //     let time = twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes());
  //     let refs = '';
  //     const datetime = el => {
  //       refs = el;
  //     }
  //     console.log(time);
  //     // console.log(datetime);
  //     // this.dateTimeMsg = time;
  //     // $(".date-time").html(time);
  //     return {
  //       datetime
  //     };
  //     // console.log(datetime);

  //   }

  //   function twoDigits(val) {
  //     if (val < 10) return "0" + val;
  //     return val;
  //   }

  //   getDate();
  // },
  methods: {
    getDate() {
      let today = new Date();
      let hour = today.getHours();
      let minute =
        today.getMinutes() >= 10
          ? today.getMinutes()
          : "0" + today.getMinutes();
      let time = hour + ":" + minute;
      this.dateTimeMsg = time;
    },
  },
  created() {
    this.getDate();
  },
};
</script>

<style lang="less">
.phone {
  margin: 0px auto;
  position: relative;
  top: 8%;
  // position: absolute;
  // top: 160px;
  // right: 300px;

  width: 400px;
  height: 800px;
  // background: #68686b;
  background: #0b0d0c;
  // background: #fff;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: inset 14px 0px 10px -15px #fff, inset -14px 0px 10px -15px #fff;

  // border-radius: 12px;

  .phone-screen {
    // margin: 0 auto;
    // width: 375px;
    // height: 736px;
    width: 100%;
    height: 100%;
    background: #f8f8f8;
    border-radius: 26px;
    box-sizing: border-box;
    overflow: hidden;

    position: relative;

    .date-time {
      width: 25%;
      position: absolute;
      top: 5px;
      left: 0px;
      // z-index: 111;
      font-size: 13px;
      font-weight: 600;
      text-align: center;
    }
    .phone-notch {
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      top: 0;
      width: 50%;
      height: 20px;
      background: #0b0d0c;
      border-radius: 0px 0px 14px 14px;

      display: flex;
      align-items: center;
      justify-content: center;

      .notch-handset {
        width: 25%;
        height: 3px;
        border-radius: 5em;
        background: #2d2d2d;
        margin-bottom: 5px;
      }
      .notch-lightsensor {
        width: 5px;
        height: 5px;
        border-radius: 5em;
        background: #212554;
        margin-left: 8px;
        margin-bottom: 5px;
      }
    }

    .homekey-bar {
      width: 32%;
      height: 0.6%;
      border-radius: 8em;
      position: absolute;
      bottom: 2%;
      left: 50%;
      margin-left: -16%;
      background: #0b0d0c;
    }
  }
}

.states {
	width:25%;
	right:1.5px;
	position:absolute;
	top:4px;
	z-index:111;
	display:flex;
	align-items:center;
	justify-content:center;
}
.states .ul_xinhao {
	display:flex;
	align-items:flex-end;
	list-style:none;
}
.states .ul_xinhao li {
	width:3px;
	height:3px;
	background:#0d0b0c;
	margin-left:1px;
	list-style:none;
}
.states .ul_xinhao li:nth-of-type(2) {
	height:4px;
}
.states .ul_xinhao li:nth-of-type(3) {
	height:6.5px;
}
.states .ul_xinhao li:nth-of-type(4) {
	height:8.5px;
}
.states .dianliang {
	width:18px;
	height:10px;
	border:1px solid #b6b6b6;
	box-sizing:border-box;
	border-radius:2px;
	margin-left:0.5px;
	position:relative;
}
.states .dianliang:after {
	content:"";
	position:absolute;
	width:94%;
	height:88%;
	top:6%;
	left:3%;
	box-sizing:border-box;
	background:#0d0b0c;
	border-radius:2px;
}
.states .dianliang:before {
	content:"";
	position:absolute;
	width:1px;
	height:4px;
	box-sizing:border-box;
	background:#b6b6b6;
	border-radius:2px;
	right:-2.5px;
	top:50%;
	margin-top:-2px;
}
.states .wifi1 {
	border-radius:5em;
	margin-left:0.5px;
	border:solid transparent;
	border-top-color:#0d0b0c;
	border-width:2.2px 2.2px;
	display:flex;
	align-items:center;
	justify-content:center;
	transform:translateY(4.5px);
}
.states .wifi2 {
	border-radius:5em;
	border:solid transparent;
	border-top-color:#fff;
	border-width:2.15px 2.15px;
	display:flex;
	align-items:center;
	justify-content:center;
}
.states .wifi3 {
	border-radius:5em;
	border:solid transparent;
	border-top-color:#0d0b0c;
	border-width:2.1px 2.1px;
	display:flex;
	align-items:center;
	justify-content:center;
}
.states .wifi4 {
	border-radius:5em;
	border:solid transparent;
	border-top-color:#fff;
	border-width:2.05px 2.05px;
	display:flex;
	align-items:center;
	justify-content:center;
}
.states .wifi5 {
	border-radius:5em;
	border:solid transparent;
	border-top-color:#0d0b0c;
	border-width:2px 2px;
}
</style>