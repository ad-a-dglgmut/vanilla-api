<script>
  import { onMount } from "svelte";
  import {itemsInCartNumber} from "../globalState"

    onMount(()=>{
        itemsInCartNumber.set('0')
        document.cookie = "cartitems=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
</script>

<a href="/" class=" text-xl text-[#f236be]">
        Врати се на почетна страна
</a>
