<template>
  <div class="onepage">
    <div class="profile">
      <div class="profile-in">
        <div class="avatar"><img :src="avatar" alt="avatar" /></div>
        <div class="content">
          <h3 class="poem">蜀天常夜雨，江槛已朝晴。</h3>
          <!-- <span>唐-李白</span> -->
          <div class="social">
            <a href="#">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ"></use>
              </svg>
            </a>
            <a href="#">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-github"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import avatar from '@/assets/images/avatar.jpg'
export default {
  name: 'OnePage',
  data () {
    return {
      avatar
    }

  }

}

</script>

<style lang="less" scoped>
.onepage {
  width: 100%;
  height: 100vh;
  background: center/cover url("~@/assets/images/bg.jpg");

  .profile {
    width: 450px;
    height: 340px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;

    .profile-in {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .avatar img {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        margin-bottom: 10px;
      }
      .content {
        width: 90%;
        border-radius: 20px;
        background-color: #ffffffa6;
        .poem {
          font-size: 20px;
          height: 50px;
          line-height: 50px;
        }
        .social {
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .social a {
          margin: 0 8px;
        }
      }
    }
  }
}
</style>