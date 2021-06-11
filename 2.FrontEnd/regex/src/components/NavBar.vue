<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">

<ul id="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">DFA</a></li>
                <li><a href="#">NFA</a></li>
                <li><a href="#">NFA-ε</a></li>
                <li><a href="#">PDA</a></li>
                <li><a href="#">TURING</a></li>
                <li><a href="#">REGEX</a></li>
                <li><a href="#">GRAMMAR</a></li>
                <li class="esp"><a href="#"></a></li>
                <li class="eng"><a href="#"></a></li>
                <li class="prt"><a href="#"></a></li>
                <li class="sos"><a href="#">help</a></li>
            </ul>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-5">

          <div v-if="isUserLoggedIn">
            <div v-if="getUserType === 'user'">
              <b-nav-item :to="{ name: 'profile' }">
                <img
                  class="avatar"
                  :src="
                    require(`@/assets/avatars/${
                      this.getUserLevelByPoints(
                        this.getProfile.gamification.points
                      ).avatar
                    }.png`)
                  "
                  :title="getProfileName"
                />
              </b-nav-item>
            </div>
            <!-- alterar para aceder modulo admin -->
            <div v-else>
              <b-nav-item :to="{ name: 'admin' }">ADMIN</b-nav-item>
            </div>
          </div>
          <div v-else>
            <b-nav-item :to="{ name: 'login' }">LOGIN</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUserLevelByPoints"]),
    ...mapGetters("auth", [
      "isUserLoggedIn",
      "getProfileName",
      "getUserType",
      "getProfile"
    ])
  }
};
</script>
