<script>
  import { Volume1Icon, VolumeXIcon } from "svelte-feather-icons";

  import IconButton from "./IconButton.svelte";
  import { onMount } from "svelte";

  let muted = false;
  let audioRef;

  onMount(() => {
    audioRef.volume = 1;
    audioRef.play();
  });

  function toggleAudio() {
    if (muted) {
      audioRef.volume = 1;
    } else {
      audioRef.volume = 0;
    }

    muted = !muted;
  }
</script>

<!-- On My Way by Ghostrifter Official | https://soundcloud.com/ghostrifter-official
Music promoted by https://www.free-stock-music.com
Creative Commons Attribution-ShareAlike 3.0 Unported
https://creativecommons.org/licenses/by-sa/3.0/deed.en_US -->

<!-- Sugar Coat by Purrple Cat | https://purrplecat.com
Music promoted by https://www.free-stock-music.com
Creative Commons Attribution-ShareAlike 3.0 Unported
https://creativecommons.org/licenses/by-sa/3.0/deed.en_US -->

<!-- chill. by sakura Hz | https://soundcloud.com/sakurahertz
Music promoted by https://www.free-stock-music.com
Creative Commons Attribution 3.0 Unported License
https://creativecommons.org/licenses/by/3.0/deed.en_US -->
<IconButton handleClick="{toggleAudio}" title="mute-unmute music">
  {#if muted}
    <VolumeXIcon size="1.5x" />
  {:else}
    <Volume1Icon size="1.5x" />
  {/if}
</IconButton>

<audio
  bind:this="{audioRef}"
  loop
  src="/gift-assets/static/audio/soundtrack.mp3"></audio>
