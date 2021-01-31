<script>
  export let photoName;
  export let legend = "";
  export let idx;
  // Because of the way looping is implemented in the carousel to avoid a bug
  // when moving from last slide to first.
  export let isLast = false;
  export let visibleIdx;
  export let alt = "carousel picture";

  // Lazy-loading: we don't set src attribute until the photo is about to appear
  // in the carousel.
  let src = null;
  $: {
    if ((!src && Math.abs(idx - visibleIdx) < 2) || isLast) {
      src = `/static/carousel-images/${photoName}`;
    }
  }
</script>

<div class="slide-content">
  <img class="image" src="{src}" alt="{alt}" />
  {#if legend}
    <div class="overlay">
      <span>
        {@html legend}
      </span>
    </div>
  {/if}
</div>

<style type="text/scss">
  .slide-content {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;

    .image {
      max-height: 600px;
      max-width: 100vw;
    }

    .overlay {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      bottom: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 1rem;
      font-size: 1.5rem;
      color: var(--white);
      background: linear-gradient(
        180deg,
        rgba(2, 0, 36, 0) 0%,
        rgba(1, 4, 5, 0.8) 100%
      );

      :global(a) {
        color: #e76969;
      }
    }
  }
</style>
