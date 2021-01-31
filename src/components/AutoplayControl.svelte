<script>
  import { PauseCircleIcon, PlayCircleIcon } from "svelte-feather-icons";

  import IconButton from "./IconButton.svelte";

  export let autoplaying = false;
  console.log(`Inside button: ${autoplaying}`);
  export let handleClick = () => {};
</script>

<IconButton handleClick="{handleClick}" title="Play/pause carousel">
  {#if autoplaying}
    <PauseCircleIcon size="1.5x" />
  {:else}
    <PlayCircleIcon size="1.5x" />
  {/if}
</IconButton>
