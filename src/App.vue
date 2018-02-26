<template>
  <div id="app">
   {{$router.name}}
    <transition name="fade">
        <router-view></router-view>
    </transition>
    <navBar></navBar>
    <bg></bg> 
  </div>
</template>

<script>
import navBar from '@/components/commons/nav'
import bg from '@/components/commons/bg'
export default {
  name: 'App',
  components: {
    'navBar':navBar,
    'bg':bg
  }
}
</script>

<style lang="scss" type="text/css">
@import 'common/reset.scss';
.fade-enter{
  opacity: 0;
  transform: translateY(50px);
}
.fade-enter-active{
  transition: all 1s ease;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s ease;
}
.fade-leave-to{
  opacity: 0;
  transform: translateY(50px);
}
</style>
