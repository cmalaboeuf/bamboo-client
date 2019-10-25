import { ProductUsecase } from './app/products/use-cases/products.usecase';
import { HttpProductRepository } from './app/products/adapters/http.product.repository';
import { ProductsRepository } from './app/products/domain/ports/products.repository';
import Vue from 'vue';
import App from './ui/App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
// import 'vue-material/dist/theme/default-dark.css'

Vue.config.productionTip = false;

Vue.use(VueMaterial);
new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   template: `<app
//   :product-use-case="productUseCase"
// />`,
//   components: { App },
//   data() {
//     return { productUsecase: new ProductUsecase(httpProductRepository) };
//   },
// });
