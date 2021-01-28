<script lang="ts">
  import Block from './Block.svelte';
  export let data;
</script>

<div class="box">
  {#each data.blocks as row, i (i)}
     {#each row as block}
      <Block color={block.color} size={500 / row.length} filled={block.filled} />
     {/each}
  {/each}
</div>

<style>
  .box {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: auto;
    width: 500px;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
  .block {
    width: 41.66px;
    height: 41.66px;
  }
</style>