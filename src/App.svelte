<script lang="ts">
  import CatPuzzle from './components/Puzzle.svelte';
  import test from './__data__/cat.json';

</script>

<main>
	<h1>네모네모 고먐미의 저주</h1>
	<CatPuzzle data={test} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>