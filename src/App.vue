<template>
  <div id="app">
    <div id="nav">
      <b-navbar class="navbar navbar-expand-sm bg-dark navbar-dark" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">JONNY-LOGISTICS</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item  href="#"><router-link id="link" to="/">WHAT WE DO</router-link></b-nav-item>
            <b-nav-item  href="#"><router-link id="link" to="/about">WHO WE ARE</router-link></b-nav-item>
            <b-nav-item href="#" disabled>Experienced. Efficient. Dependable.</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">option 1</b-dropdown-item>
              <b-dropdown-item href="#">option 2</b-dropdown-item>
              <b-dropdown-item href="#">option 3</b-dropdown-item>
              <b-dropdown-item href="#">option 4</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      
      
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1e2a36;
}
</style>
