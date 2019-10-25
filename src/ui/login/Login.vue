<template>
  <form @submit.prevent="submit">
    <input type="text" name="email" value="email" v-model="email" placeholder="email"/>
    <input type="password" name="password" value="password" v-model="password" placeholder="">
    <input type="submit" name="login" value="login">
  </form>

</template>

<script lang="ts">
  import { HttpClient, HttpUserRepository } from '@/app/users/adapters/http.user.repository'
  import { UsersUsecase } from '@/app/users/use-cases/users.usecase'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {}
  })
  export default class Login extends Vue {
    private userUseCase: UsersUsecase
    email: string = ''
    password: string = ''

    mounted() {
      const httpClient: HttpClient = new HttpClient()
      const httpUserRepository: HttpUserRepository = new HttpUserRepository(httpClient)
      this.userUseCase = new UsersUsecase(httpUserRepository)
    }

    submit(): void {
      const login = { email: this.email, password: this.password }
      this.userUseCase.login(login).then(result => {

      }).catch(e => {
        alert(e.message)
      })
    }
  }
</script>

<style lang="scss">
</style>