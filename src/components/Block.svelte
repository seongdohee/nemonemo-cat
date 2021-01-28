<script lang="ts">
  export let color;
  export let size;
  export let filled;

  let backgroundColor;
  let wrongSelected = false;

  function handleClick() {
    if (filled) {
      backgroundColor = '#000';
    } else {
      wrongSelected = true;
    }
  }

  function handleRightClick() {
    if (filled) {
      wrongSelected = true;
    } else {
      backgroundColor = '#ccc';
    }
  }
</script>

<div
  on:click={handleClick}
  on:contextmenu|preventDefault={handleRightClick}
  class="block"
  style="background-color: {backgroundColor}; width: {size}px; height: {size}px"
>
{#if wrongSelected} X {/if}
</div>

<style>
  .block {
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
