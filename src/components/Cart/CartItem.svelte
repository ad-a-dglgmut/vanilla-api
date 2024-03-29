<script lang="ts">
  import { type CartItem } from "../../types";
  import { itemsInCartNumber } from "../../globalState";
  import { getCookie } from "../../getCookie";
  import { onMount } from "svelte";
  export let products: CartItem[];
  let productView: CartItem[] = products;
  let price = 0;
  const deleteItem = (index: number) => {
    let cookieStr = getCookie("cartitems");
    let cookie: CartItem[] = JSON.parse(cookieStr);
    cookie.splice(index, 1);
    productView.splice(index, 1);
    document.cookie = `cartitems=${JSON.stringify(cookie)};index=/`;
    itemsInCartNumber.set($itemsInCartNumber - 1);
    location.reload();
  };

  const fullPrice = () => {
    price = 0;
    for (let p of productView) {
      price += p.price * p.amount;
    }
  };

  const addAmount = (index: number) => {
    productView[index].amount += 1;
    fullPrice();
  };

  const removeAmount = (index: number) => {
    if (productView[index].amount != 1) {
      productView[index].amount -= 1;
    }
    fullPrice();
  };
  const order = () => {
    document.cookie = `ordereditem=${JSON.stringify(productView)};path=/`;
    document.location.href = "/porachka";
    // console.log(productView)
  };
  onMount(() => {
    fullPrice();
  });
</script>

{#if productView}
  {#each productView as product, index}
    <div
      class="w-full p-2 mb-5 sm:px-10 md:flex md:items-center min-h-40 justify-between border rounded-3xl border-white"
    >
      <div class="flex mb-5 md:mb-0 w-full items-center">
        <img
          src={`https://vanilla-api-skyw.onrender.com/api/files/products/${product.id}/${product.product_image}`}
          class="max-h-[160px] w-32 object-contain"
          alt=""
        />
        <div class=" text-left">
          <p class=" text-2xl">{product.product_name}</p>
          <p class=" text-2xl">цена {product.price} ден.</p>
        </div>
      </div>
      <div class="flex h-full items-center">
        <button
          on:click={() => removeAmount(index)}
          class=" w-5 mr-5 h-full flex items-center"
        >
          <div class="bg-white w-full h-1"></div>
        </button>
        <p class="text-4xl px-8 border border-white rounded-3xl py-1">
          {product.amount}
        </p>
        <button on:click={() => addAmount(index)} class="text-5xl ml-2">
          <svg
            class="w-10 h-10 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
        </button>
        <button on:click={() => deleteItem(index)} class="ml-10">
          <svg
            class="w-10 h-10 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 18 6m0 12L6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  {/each}
{/if}
<div class="mx-20 mt-20 text-2xl flex justify-between">
  <p>Достава: 150 ден.</p>
</div>
<div class=" h-0.5 mt-5 bg-white w-full"></div>
<div class="mx-20 mt-5 text-2xl md:flex md:justify-between">
  <p>Вкупно: {price + 150} ден.</p>
  <button
    id="button"
    type="button"
    on:click={() => order()}
    class="text-white text-lg mt-5 md:mt-0 bg-[#f236be] hover:bg-[#aa2687] focus:ring-4 focus:ring-[#fefefe] font-medium rounded-lg md:text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
    >Продолжи до нарачување</button
  >
</div>
