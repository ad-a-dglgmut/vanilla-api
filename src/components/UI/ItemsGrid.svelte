<script lang="ts">
  import { onMount } from "svelte";
  import { type Product } from "../../types";
  import Button from "./Button.svelte";
  import {itemsInCartNumber} from "../../globalState"
  import { getCookie } from "../../getCookie";
  export let products: Product[];

  onMount(()=>{
    if(($itemsInCartNumber != "0" || !$itemsInCartNumber) && getCookie('cartitems')==="" )
    {
      itemsInCartNumber.set("0")
    }
  })
</script>

<div class="w-full  gap-8 grid md:grid-cols-3">
  {#each products as product}
    <div class="w-full flex-col border border-white">
      <img
        class=" h-72 mx-auto object-cover"
        src={`http://3.86.197.232:8080/api/files/products/${product.id}/${product.product_image}`}
        alt=""
      />
      <div class="w-full border-t border-white my-3">
        <p class=" ml-5 mt-3 text-2xl">{product.product_name}</p>
        <p class=" ml-5 text-2xl">{product.price} ден.</p>
        <div class="ml-5 mt-3">
          <Button buttonText="Купи сега" {product} isHomePage={true} />
        </div>
      </div>
    </div>
  {/each}
</div>
