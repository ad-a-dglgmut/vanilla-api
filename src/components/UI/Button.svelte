<script lang="ts">
  import { type Product } from "../../types";
  import { getCookie } from "../../getCookie";
  import { type CartItem } from "../../types";
  import { itemsInCartNumber } from "../../globalState.ts";
  export let buttonText: String;
  export let product: Product;
  export let isHomePage: boolean;
  let cartAlert: boolean = false;

  const openProduct = () => {
    if (isHomePage === true) {
      document.cookie = `item=${JSON.stringify(product.product_name)};path=/`;
      document.location.href = `/produkti/${product.param}`;
    } else {
      let cookieLength:number =JSON.parse($itemsInCartNumber)
      let cookie: string = getCookie("cartitems");
      console.log(cookie);
      if (cookie === "") {
        let c: CartItem[] = [];
        let p = product as CartItem;
        p.amount = 1;
        p.description ="";
        c.push(p);
        cookie = JSON.stringify(c);
        cookieLength = JSON.parse($itemsInCartNumber) + 1;
      } else {
        let c: CartItem[] = JSON.parse(cookie) as CartItem[];
        if (!c.find((prod) => prod.product_name === product.product_name)) {
          let p = product as CartItem;
          p.amount = 1;
          p.description ="";  
          c.push(p);
          cookie = JSON.stringify(c);
          cookieLength = JSON.parse($itemsInCartNumber) + 1;
        }else {
          cartAlert = true
        }
      }
      document.cookie = `cartitems=${cookie};path=/`;
      itemsInCartNumber.set(JSON.stringify(cookieLength));
    }
  };
</script>

<div class="flex mt-5 h-full items-center">
  <button
    id="button"
    type="button"
    on:click={openProduct}
    class="text-white bg-[#f236be] hover:bg-[#aa2687] focus:ring-4 focus:ring-[#fefefe] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
    >{buttonText}</button
  >
  {#if cartAlert}
    <div class=" ml-20 text-xl text-[#f236be]">Продуктот е веќе во корпа</div>
  {/if}
</div>
