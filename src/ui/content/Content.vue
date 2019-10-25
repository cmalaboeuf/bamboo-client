<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <md-content>
          <md-card v-for="product of productList" :key="product.id">
            <md-card-header>{{product.name}}</md-card-header>
            <md-card-media>
              <img width="100px" src="https://www.placecage.com/100/80" />
            </md-card-media>
          </md-card>
        </md-content>
      </md-app-content>
    </md-app>
  </div>
</template>

<script lang="ts">
import { HttpClient } from '@/app/users/adapters/http.user.repository'
import { Component, Vue, Prop } from "vue-property-decorator";
import { ProductUsecase } from "../../app/products/use-cases/products.usecase";
import { Product } from "../../app/products/domain/product";
import { HttpProductRepository } from "../../app/products/adapters/http.product.repository";

@Component({
  components: {}
})
export default class Content extends Vue {
  private productList: Product[] = [];
  private productUseCase: ProductUsecase = undefined;

  mounted() {
    const httpClient:HttpClient = new HttpClient()
    const httpProductRepository = new HttpProductRepository(httpClient);
    this.productUseCase = new ProductUsecase(httpProductRepository);

    this.productUseCase.getAllProduct().then(data => {
      this.productList = data;
    });
  }
}
</script>

<style lang="scss">
</style>
