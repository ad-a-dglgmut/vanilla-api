<script lang="ts">
  export let items: any;
  export let linkItems: any;
  const findProduct = (i: any) => {
    let product = linkItems.find((item: any) => item.param === i.param);
    document.cookie = `item=${JSON.stringify(product.product_name)};path=/`;
    document.location.href = `/produkti/${product.param}`;
  };
</script>

{#each items as item}
  <div class="hidden h-[600px] bg-black duration-700" data-carousel-item>
    <img
      src={`https://vanilla-ap.pockethost.io/api/files/carousel_products/${item.id}/${item.image}`}
      class="relative object-cover bg-black z-30 h-[600px] block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      alt="..."
    />
    <div class="absolute z-40 top-3 right-5 w-full flex justify-center">
      <div class="w-1/2"></div>
      <div class="md:w-1/2">
        <p
          class={` text-5xl md:text-6xl font-extrabold text-end text-[${item.item_text_color_code}]`}
        >
          {item.item_text}
        </p>
      </div>
    </div>
    <img
      src={`https://vanilla-ap.pockethost.io/api/files/carousel_products/${item.id}/${item.product_image}`}
      alt=""
      class="absolute z-40 bottom-20 left-2 object-contain h-64"
    />
    {#if item.has_link}
      <div class="absolute bottom-3 z-40 left-8 text-4xl">
        <button
          id="button"
          type="button"
          on:click={() => findProduct(item)}
          class="text-white bg-[#f236be] hover:bg-[#aa2687] focus:ring-4 focus:ring-[#fefefe] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >Купи сега</button
        >
      </div>{/if}
  </div>
{/each}
