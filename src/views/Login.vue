<template>
  <div class="login-container">
    <div>
      <img alt="login logo" src="../assets/logo.png" />
    </div>
    <div class="login__button">
      <div
        id="g_id_onload"
        data-client_id="274437993487-a34vjrp7pj00uch9le0j68ru6cdhg21n.apps.googleusercontent.com"
        data-login_uri="http://localhost:8080/"
        data-auto_prompt="false"
      ></div>
      <div
        class="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login__button {
  align-self: center;
}
</style>
