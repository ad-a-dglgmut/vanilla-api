<script lang="ts">
  import { getCookie } from "../../../getCookie";

  import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownDivider,
  } from "flowbite-svelte";
  import { ChevronDownSolid, ChevronRightSolid } from "flowbite-svelte-icons";

  import { itemsInCartNumber } from "../../../globalState.ts";
  export let page: String;

  let categories: { name: String; param: String }[] = [
    { name: "Производи на попуст", param: "popust" },
    { name: "Вибратори и дилда", param: "vibratori-i-dilda" },
    { name: "Анал", param: "anal" },
    { name: "Козметика и Препарати", param: "kozmetika-i-preparati" },
    { name: "Фетиши", param: "fetisi" },
    { name: "Секси долна облека", param: "seksi-dolna-obleka" },
  ];

  let subcategories: { name: String; param: String }[] = [
    {
      name: "Природни средства за продолжен однос",
      param: "prirodni-sredstva-za-prodolzen-odnos",
    },
    {
      name: "Средства за зголемување на пенисот",
      param: "sredstva-za-zgolemuvanje-na-penisot",
    },
    { name: "Лубриканти", param: "lubrikanti" },
    { name: "Креми за пенис и вагина", param: "kremi-za-penis-i-vagina" },
    {
      name: "Средства за засилување на ерекцијата и оргазмот",
      param: "sredstva-za-zasiluvanje-na-erekcijata-i-orgazmot",
    },
    { name: "Афродизијаци", param: "afrodizijaci" },
  ];
</script>

<ul
  class="font-medium flex md:h-full md:items-center flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
>
  <li>
    {#if page === "home"}
      <a
        href="https://sexshopvanilla.com/"
        class="block text-xl font-semibold py-2 px-3 text-[#f236be] rounded hover:bg-transparent md:border-0 md:p-0"
        aria-current="page">Дома</a
      >
    {:else}
      <a
        href="https://sexshopvanilla.com/"
        class="block text-xl font-semibold py-2 px-3 text-[#fefefe] rounded hover:bg-transparent md:border-0 hover:text-[#f236be] md:p-0"
        aria-current="page">Дома</a
      >
    {/if}
  </li>
  <li class=" 2xl:hidden block">
    {#if page === "kategorii"}
      <Button
        class=" text-xl font-semibold py-2 px-3 text-[#f236be] rounded  md:hover:bg-transparent md:border-0 md:p-0"
        >Категории<ChevronDownSolid
          class="w-5 h-5 ms-2 text-white dark:text-white"
        /></Button
      >
      <Dropdown class="bg-[#360030]">
        {#each categories as category}
          {#if category.param === "kozmetika-i-preparati"}
            <DropdownItem
              class="flex hover:bg-[#5a0051] items-center justify-between"
            >
              {category.name}<ChevronRightSolid
                class="w-5 h-5 ms-2 text-primary-700 dark:text-white"
              />
            </DropdownItem>
            <Dropdown class="bg-[#360030]" placement="right-start">
              {#each subcategories as subcategory}
                <DropdownItem class="hover:bg-[#5a0051]">
                  <a
                    href={`https://sexshopvanilla.com/kategorii/kozmetika-i-preparati/${subcategory.param}`}
                  >
                    <div class="w-full h-full">
                      {subcategory.name}
                    </div>
                  </a>
                </DropdownItem>
              {/each}
            </Dropdown>
          {:else}
            <DropdownItem class=" hover:bg-[#5a0051]">
              <a href={`https://sexshopvanilla.com/kategorii/${category.param}`}>
                <div class="w-full h-full">
                  {category.name}
                </div>
              </a>
            </DropdownItem>
          {/if}
        {/each}
      </Dropdown>
    {:else}
      <Button
        class=" text-xl font-semibold py-2 px-3 text-[#fefefe] rounded md:hover:bg-transparent md:border-0 hover:text-[#f236be] md:p-0"
        >Категории<ChevronDownSolid
          class="w-5 h-5 ms-2 text-white dark:text-white"
        /></Button
      >
      <Dropdown class="bg-[#360030]">
        {#each categories as category}
          {#if category.param === "kozmetika-i-preparati"}
            <DropdownItem
              class="flex hover:bg-[#5a0051] items-center justify-between"
            >
              {category.name}<ChevronRightSolid
                class="w-5 h-5 ms-2 text-primary-700 dark:text-white"
              />
            </DropdownItem>
            <Dropdown class="bg-[#360030]" placement="right-start">
              {#each subcategories as subcategory}
                <DropdownItem class="hover:bg-[#5a0051]">
                  <a
                    href={`https://sexshopvanilla.com/kategorii/kozmetika-i-preparati/${subcategory.param}`}
                  >
                    <div class="w-full h-full">
                      {subcategory.name}
                    </div>
                  </a>
                </DropdownItem>
              {/each}
            </Dropdown>
          {:else}
            <DropdownItem class=" hover:bg-[#5a0051]">
              <a href={`https://sexshopvanilla.com/kategorii/${category.param}`}>
                <div class="w-full h-full">
                  {category.name}
                </div>
              </a>
            </DropdownItem>
          {/if}
        {/each}
      </Dropdown>
    {/if}
  </li>
  <li>
    {#if page === "prikazni"}
      <a
        href="https://sexshopvanilla.com/prikazni"
        class="block text-xl font-semibold py-2 px-3 text-[#f236be] rounded hover:bg-transparent md:border-0 md:p-0"
        aria-current="page">Приказни</a
      >
    {:else}
      <a
        href="https://sexshopvanilla.com/prikazni"
        class="block text-xl font-semibold py-2 px-3 text-[#fefefe] rounded hover:bg-transparent md:border-0 hover:text-[#f236be] md:p-0"
        aria-current="page">Приказни</a
      >
    {/if}
  </li>
  <li>
    {#if page === "zanas"}
      <a
        href="https://sexshopvanilla.com/za-nas"
        class="block text-xl font-semibold py-2 px-3 text-[#f236be] rounded hover:bg-transparent md:border-0 md:p-0"
        aria-current="page">За нас</a
      >
    {:else}
      <a
        href="https://sexshopvanilla.com/za-nas"
        class="block text-xl font-semibold py-2 px-3 text-[#fefefe] rounded hover:bg-transparent md:border-0 hover:text-[#f236be] md:p-0"
        aria-current="page">За нас</a
      >
    {/if}
  </li>
  <li>
    {#if page === "cart"}
      <a href="https://sexshopvanilla.com/korpa">
        <div>
          <svg
            class=" w-14 h-14 text-[#f236be] hover:text-[#f236be] hover:bg-transparent"
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
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"
            />
          </svg>
        </div>
      </a>
    {:else}
      <a href="https://sexshopvanilla.com/korpa">
        <div class="relative w-fit">
          <svg
            class=" w-14 h-14 text-[#fefefe] hover:text-[#f236be] hover:bg-transparent"
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
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"
            />
          </svg>
          {#if $itemsInCartNumber || $itemsInCartNumber != 0}
            <div
              class=" rounded-full -bottom-1.5 -right-1.5 flex justify-center items-center z-20 absolute h-6 w-6 bg-[#f236be]"
            >
              {$itemsInCartNumber}
            </div>
          {/if}
        </div>
      </a>
    {/if}
  </li>
</ul>
