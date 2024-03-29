<script lang="ts">
  import PocketBase from "pocketbase";
  import { orderStatus } from "../../../globalState";
  import CartItem from "../../Cart/CartItem.svelte";
  import { onMount } from "svelte";
  const pb = new PocketBase("https://vanilla-api-skyw.onrender.com");
  let order:
    | {
        name: String;
        surname: String;
        shipping_progress: String;
        address: String;
        city: String;
        number: String;
        do_adresa: boolean;
        items: CartItem[] | any;
        order_id: String;
      }
    | undefined = undefined;
  let compareOrder = order;
  export let token: any;
  let status: { id: String; type: String };
  const getDetails = async () => {
    if ($orderStatus != "") {
      status = JSON.parse($orderStatus);
      try {
        order = await pb
          .collection("order")
          .getFirstListItem(`order_id = "${status.id}"`, {
            headers: { app_token: token },
          });
      } catch {
        orderStatus.set("");
      }
    }
  };
  onMount(() => {
    getDetails();
  });
</script>

{#if $orderStatus != ""}
  <div
    class=" w-full justify-between border-b border-white bg-black h-14 flex items-center 2xl:px-64 px-10"
  >
    <p class="text-xl text-center md:text-start">Статус на порачка: {order?.shipping_progress}</p>
    <div class="md:flex hidden items-center">
      <svg
        class="w-10 mr-3 h-10 text-[#f236be]"
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
          d="M6 12c.3 0 .5 0 .8-.2.2 0 .4-.3.6-.5l.4-.7.2-.9c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6 0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7.5 0 1-.3 1.4-.7.4-.4.6-1 .6-1.6a2.5 2.5 0 0 0 .6 1.6l.6.5a1.8 1.8 0 0 0 1.6 0l.6-.5.4-.7.2-.9c0-1-1.1-3.8-1.6-5a1 1 0 0 0-1-.7h-11a1 1 0 0 0-.9.6A29 29 0 0 0 4 9.7c0 .6.2 1.2.6 1.6.4.4.9.7 1.4.7Zm0 0c.3 0 .7 0 1-.3l.7-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7a1.8 1.8 0 0 0 1.8 0c.3-.1.6-.4.8-.7h.6c.2.3.5.6.8.7.2.2.6.3.9.3.4 0 .7-.1 1-.4M6 12a2 2 0 0 1-1.2-.5m.2.5v7c0 .6.4 1 1 1h2v-5h3v5h7c.6 0 1-.4 1-1v-7m-5 3v2h2v-2h-2Z"
        />
      </svg>
      {#if order?.shipping_progress === "Испратена" || order?.shipping_progress === "Во база"}
        <div class=" w-48 mr-3 h-2 rounded-full bg-[#f236be]" />
        <svg
          width="42px"
          height="42px"
          viewBox="0 0 32 32"
          class="text-[#f236be]"
          fill="#f236be"
          x="235"
          y="235"
          role="img"
          style="display:inline-block;vertical-align:middle"
          xmlns="http://www.w3.org/2000/svg"
          ><g fill="#f236be"
            ><path
              fill="currentColor"
              d="m29.92 16.61l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.08-.39ZM23 11h2.34l2.14 5H23ZM9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm10.14-3h-6.28a4 4 0 0 0-7.72 0H4V8h17v12.56A4 4 0 0 0 19.14 23ZM23 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm5-3h-1.14A4 4 0 0 0 23 20v-2h5Z"
            /></g
          ></svg
        >
      {:else}
        <div class=" w-48 mr-3 h-2 rounded-full bg-white" />
        <svg
          width="42px"
          height="42px"
          viewBox="0 0 512 512"
          fill="#f6f5f4"
          x="235"
          y="235"
          role="img"
          style="display:inline-block;vertical-align:middle"
          xmlns="http://www.w3.org/2000/svg"
          ><g fill="#f6f5f4"
            ><path
              fill="currentColor"
              d="M441.885 141.649A32.028 32.028 0 0 0 415.669 128H336V80a32.036 32.036 0 0 0-32-32H48a32.036 32.036 0 0 0-32 32v328h53.082a67.982 67.982 0 0 0 133.836 0h106.164a67.982 67.982 0 0 0 133.836 0H496V226.522a23.882 23.882 0 0 0-4.338-13.763ZM47.98 80H304v176H48ZM136 432a36 36 0 1 1 36-36a36.04 36.04 0 0 1-36 36Zm240 0a36 36 0 1 1 36-36a36.04 36.04 0 0 1-36 36Zm88-56h-23.006a68 68 0 0 0-129.988 0H200.994a68 68 0 0 0-129.988 0H48v-88h416Zm0-120H336v-96h79.669L464 229.044Z"
            /></g
          ></svg
        >
      {/if}
      {#if order?.shipping_progress === "Во база"}
        <div class=" w-48 mx-3 h-2 rounded-full bg-[#f236be]" />
        <svg
          class="w-10 h-10 text-[#f236be]"
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
            d="M11 16v-5.5C11 8.5 9.4 7 7.5 7m3.5 9H4v-5.5C4 8.5 5.6 7 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
          />
        </svg>
      {:else}
        <div class=" w-48 mx-3 h-2 rounded-full bg-white" />
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
            d="M11 16v-5.5C11 8.5 9.4 7 7.5 7m3.5 9H4v-5.5C4 8.5 5.6 7 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
          />
        </svg>
      {/if}
      {#if status && status.type === "address"}
        <div class=" w-48 mx-3 h-2 rounded-full bg-white" />
        <svg
          class="w-10 h-10 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z"
            clip-rule="evenodd"
          />
        </svg>
      {/if}
    </div>
  </div>
{/if}
