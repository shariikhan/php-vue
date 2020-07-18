<template>
  <!-- eslint-disable -->
 <!-- prettier-ignore -->
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 ml-auto mr-auto">
          <div class="card my-4">
            <div class="card-heading">
              <h4 class="h card-title bg-info p-3 text-center">Admin Login</h4>
            </div>
            <div class="card-body">
              <form action="" method="POST">
                <div class="form-row">
                  <div class="form-group col-md-12 ">
                    <label for="User">User Name</label>
                    <input
                      type="text"
                      placeholder="Username"
                      id="User"
                      class="form-control"
                      name="username"
                      v-model="Admin.username"
                    />
                  </div>
                  <div class="form-group col-md-12 ">
                    <label for="User">Password</label>
                    <input
                      type="password"
                      placeholder="*****"
                      class="form-control"
                      name="password"
                      v-model="Admin.password"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <button
                      class="btn btn-success btn-sm float-right"
                      @click.prevent="onLogin()"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",

  data() {
    return {
      Admin: {
        username: null,
        password: null
      }
    };
  },
  methods: {
    onLogin() {
      var data = new FormData();
      data.append("username", this.Admin.username);
      data.append("password", this.Admin.password);
      axios
        .post(
          "http://localhost/youtube/php-vue/src/Api/api.php?action=login",
          data
        )
        .then(res => {
          if (res.data.error) {
            console.log("Error", res.data);
            alert(res.data.message);
          } else {
            console.log("Success", res.data.message);
            alert(res.data.message);
            this.$router.push("/dashboard");
          }
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  }
};
</script>
