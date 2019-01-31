<template>
  <div class="header">
    <router-link to="/home"
                 class="logo">
      豆瓣
    </router-link>
    <div class="search"></div>
    <div class="navBar">
      <router-link to="movie"
                   class="movie">电影</router-link>
      <router-link to="book"
                   class="book">图书</router-link>
      <router-link to="radio"
                   class="radio">广播</router-link>
      <router-link to="team"
                   class="team">小组</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.header {
  overflow: hidden;
  padding: 0 2rem;
}
.logo {
  float: left;
  height: 5rem;
  color: #05b512;
  font-weight: bold;
  font-size: 24px;
  line-height: 5rem;
}
.search {
  float: right;
  height: 1.8rem;
  margin-top: 1.8rem;
  width: 2.4rem;
  background-image: url("../assets/search.png");
  background-size: 100% 100%;
}
.navBar {
  overflow: hidden;
  height: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  a {
    margin: 0 0.8rem;
  }
  .movie {
    color: rgb(35, 132, 232);
  }
  .book {
    color: rgb(159, 120, 96);
  }
  .radio {
    color: rgb(228, 168, 19);
  }
  .team {
    color: rgb(42, 184, 204);
  }
}
</style>
