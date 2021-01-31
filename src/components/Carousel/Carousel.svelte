<script>
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";

  import photos from "../../photo-config";
  // Code brought in from https://github.com/beyonk-adventures/svelte-carousel
  import Carousel from "./svelte-carousel/SvelteCarousel.svelte";
  import Slide from "./Slide.svelte";

  export let autoplaying = true;

  $: {
    if (carouselRef) {
      if (autoplaying) {
        carouselRef.resume();
      } else {
        carouselRef.pause();
      }
    }
  }

  let carouselRef;
  let visibleIdx = 0;

  function handleChangeIdx({ detail: { currentSlide } }) {
    visibleIdx = currentSlide;
  }

  function handleMouseEnter() {
    carouselRef.pause();
  }

  function handleMouseLeave() {
    if (autoplaying) {
      carouselRef.resume();
    }
  }
</script>

<Carousel
  autoplay="{6000}"
  bind:this="{carouselRef}"
  dots="{false}"
  duration="{2000}"
  easing="ease-in-out"
  loop="{true}"
  on:change="{handleChangeIdx}"
  perPage="{1}"
>
  {#each photos as photo, idx}
    <Slide
      photoName="{photo.name}"
      idx="{idx}"
      isLast="{idx === photos.length - 1}"
      legend="{photo.text}"
      visibleIdx="{visibleIdx}"
    />
  {/each}
  <span
    class="control"
    slot="left-control"
    on:mouseenter="{handleMouseEnter}"
    on:mouseleave="{handleMouseLeave}"
  >
    <ChevronLeftIcon class="svg" size="2x" />
  </span>
  <span
    class="control"
    slot="right-control"
    on:mouseenter="{handleMouseEnter}"
    on:mouseleave="{handleMouseLeave}"
  >
    <ChevronRightIcon class="svg" size="2x" />
  </span>
</Carousel>

<style type="text/scss">
  .control {
    // See size prop passed to icons down in the markup.
    $svg-size: 32px;
    position: relative;

    color: var(--white);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: $svg-size;
    height: $svg-size;

    &::before {
      content: "";
      position: absolute;

      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.4);
    }

    :global(.svg) {
      position: relative;
    }
  }

  // Small hack to align photos of differen height verically inside the carousel.
  :global(.carousel .slides > div) {
    height: 100vh;
  }

  :global(.carousel .slides > div > div) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  // End of small hack
</style>
