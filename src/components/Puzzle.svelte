<script lang="ts">
  export let data;
</script>

<div class="box">
  {#each data.blocks as block, i (i)}
    {#if block.filled}
      <div class="block" style="background: #000" />
    {:else}
      <div class="block" />
    {/if}
  {/each}
</div>

<style>
  .box {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: auto;
    width: 500px;
    border: 1px solid #ccc;
  }
  .block {
    width: 41.66px;
    height: 41.66px;
  }
</style>