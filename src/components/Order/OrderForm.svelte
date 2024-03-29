<script lang="ts">
  import CartItem from "../Cart/CartItem.svelte";
  import { Label } from "flowbite-svelte";
  import PocketBase from "pocketbase";
  import { orderStatus } from "../../globalState";
  import emailjs from "@emailjs/browser";
  import { generateID } from "../../generateId";
  export let items: CartItem[];
  const pb = new PocketBase("https://vanilla-api-skyw.onrender.com");
  export let env: any;
  let alertIsOpen: boolean = false;
  let errorAlertIsOpen: boolean = false;
  let fullOrder: {
    name: String;
    surname: String;
    shipping_progress: String;
    address: String;
    city: String;
    number: String;
    do_adresa: boolean | undefined;
    items: CartItem[];
    order_id: String;
  } = {
    name: "",
    surname: "",
    shipping_progress: "Примена",
    address: "",
    city: "",
    number: "",
    do_adresa: undefined,
    items: items,
    order_id: "",
  };
  let priceCut: number = 150;
  for (let item of fullOrder.items) {
    priceCut += item.price;
  }
  const order = async () => {
    if (fullOrder.do_adresa === undefined || fullOrder.city === "") {
      errorAlertIsOpen = true;
    } else {
      let id: String = generateID();
      fullOrder.order_id = id;
      if (fullOrder.do_adresa) {
        orderStatus.set(JSON.stringify({ id: id, type: "address" }));
      } else {
        orderStatus.set(JSON.stringify({ id: id, type: "base" }));
      }
      await pb.collection("order").create(fullOrder, {
        headers: {
          app_token: env.APP_TOKEN,
        },
      });
       emailjs.send("service_8zmyjs4","template_bqwbdbq", {message: JSON.stringify(priceCut/100*30)}, "9ldzLk2asfzc_rV1t")
       .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
       }, function(error) {
          console.log('FAILED...', error);
       });
      window.location.href = "/porachka/uspesno";
    }
  };
</script>

<div class="w-full">
  <Label class="space-y-2 mb-10">
    <span class="text-white text-2xl">Име </span>
    <input
      type="text"
      bind:value={fullOrder.name}
      id="default-input"
      class="bg-black border text-white border-white text-sm rounded-lg focus:ring-[#f236be] focus:border-[#f236be] block w-full p-2.5"
    />
  </Label>

  <Label class="space-y-2 mb-10">
    <span class="text-white text-2xl">Презиме </span>
    <input
      type="text"
      bind:value={fullOrder.surname}
      id="default-input"
      class="bg-black border text-white border-white text-sm rounded-lg focus:ring-[#f236be] focus:border-[#f236be] block w-full p-2.5"
    />
  </Label>

  <Label class="space-y-2 mb-10">
    <span class="text-white text-2xl">* Град/Село</span>
    <input
      type="text"
      id="default-input"
      bind:value={fullOrder.city}
      class="bg-black border text-white border-white text-sm rounded-lg focus:ring-[#f236be] focus:border-[#f236be] block w-full p-2.5"
    />
  </Label>

  <Label class="space-y-2 mb-10">
    <span class="text-white text-2xl">Адреса </span>
    <input
      type="text"
      id="default-input"
      bind:value={fullOrder.address}
      class="bg-black border text-white border-white text-sm rounded-lg focus:ring-[#f236be] focus:border-[#f236be] block w-full p-2.5"
    />
  </Label>

  <Label class="space-y-2 mb-10">
    <span class="text-white text-2xl">Број</span>
    <input
      type="text"
      id="default-input"
      bind:value={fullOrder.number}
      class="bg-black border text-white border-white text-sm rounded-lg focus:ring-[#f236be] focus:border-[#f236be] block w-full p-2.5"
    />
  </Label>
  <div class="w-full mb-7">
    <p class=" text-xl mb-3">* Пратката сакам да ми стигне:</p>
    <div class="flex mb-2">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        on:change={() => {
          fullOrder.do_adresa = false;
          console.log(fullOrder.do_adresa);
        }}
        name="default-radio"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="default-radio-1" class="ms-2 dark:text-gray-300"
        >Во база</label
      >
    </div>
    <div class="flex">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        on:change={() => {
          fullOrder.do_adresa = true;
          console.log(fullOrder.do_adresa);
        }}
        name="default-radio"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="default-radio-1" class="ms-2 dark:text-gray-300"
        >До адреса</label
      >
    </div>
  </div>
  <p class=" text-xl">Полињата обележени со * се задолжителни</p>

  <button
    id="button"
    type="button"
    class="text-white mt-5 w-1/2 bg-[#f236be] hover:bg-[#aa2687] focus:ring-4 focus:ring-[#fefefe] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
    on:click={() => {
      alertIsOpen = true;
    }}>Порачи</button
  >
  {#if alertIsOpen === true}
    <div
      class=" border mt-5 rounded-xl flex justify-between items-center border-white px-5 h-20"
    >
      <p>Дали сигурно сакате да порачете?</p>
      <div class="flex">
        <button
          on:click={() => {
            order();
          }}
          class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
          >Да</button
        >
        <button
          on:click={() => {
            alertIsOpen = false;
          }}
          class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >Не</button
        >
      </div>
    </div>
  {/if}
  {#if errorAlertIsOpen === true}
    <p class=" text-red-700 mt-5 text-xl">Ве молиме пополнете ги задолжителните полиња</p>
  {/if}
</div>
