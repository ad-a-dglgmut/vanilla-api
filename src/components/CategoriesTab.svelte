<script lang="ts">
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

  let dropdownIsOpen: boolean = false;
  const openDropdown = () => {
    if (dropdownIsOpen) {
      dropdownIsOpen = false;
    } else {
      dropdownIsOpen = true;
    }
  };
</script>
<div class="h-full hidden 2xl:block w-1/6"></div>
<div class="bg-[#140012] hidden 2xl:block fixed w-64 h-full z-40">
  <div class=" mt-14">
    {#each categories as g}
      {#if g.param !== "kozmetika-i-preparati"}
        <a href={`sexshopvanilla.com/kategorii/${g.param}`}>
          <div
            class="w-full pl-5 pr-5 flex h-20 text-xl hover:bg-[#360030] items-center"
          >
            {g.name}
          </div>
        </a>
      {:else if g.param === "popust"}
        <a href={`sexshopvanilla.com/kategorii/popust`}>
          <div
            class="w-full pl-5 pr-5 flex h-20 text-xl hover:bg-[#360030] items-center"
          >
            {g.name}
          </div>
        </a>
      {:else}
        <button on:click={() => openDropdown()} class="">
          <div
            class={`w-full pl-5 pr-5 flex h-20 text-xl text-start  ${dropdownIsOpen === true ? "bg-[#360030]" : "hover:bg-[#360030]"} items-center`}
          >
            {g.name}
          </div>
        </button>
        {#if dropdownIsOpen === true}
          <div>
            {#each subcategories as s}
              <a
                href={`sexshopvanilla.com/kategorii/kozmetika-i-preparati/${s.param}`}
              >
                <div
                  class="w-full pl-5 pr-5 flex min-h-20 text-xl hover:bg-[#5a0051] bg-[#360030] items-center"
                >
                  {s.name}
                </div>
              </a>
            {/each}
          </div>
        {/if}
      {/if}
    {/each}
  </div>
</div>
