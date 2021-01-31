<script>
  import { XIcon } from "svelte-feather-icons";

  let Carousel;
  let AutoplayControl;
  let IconButton;
  let MusicPlayer;

  export let open = false;

  let animating = false;
  let autoplaying = true;

  function handleOpen() {
    animating = true;
    open = true;

    if (!Carousel) importCarousel();
    if (!AutoplayControl) importAutoplayControl();
    if (!IconButton) importIconButton();
    if (!MusicPlayer) importMusicPlayer();
  }

  function toggleAutoplaying() {
    autoplaying = !autoplaying;
  }

  function handleClose() {
    open = false;
    animating = true;
  }

  function generateHandleKeyDown(cb) {
    return function (event) {
      if (event.key === "Enter") {
        cb();
      }
    };
  }

  function handleTransitionEnd() {
    if (animating) animating = false;
  }

  function importCarousel() {
    import("./Carousel/Carousel.svelte").then(
      function hanldeImport(module) {
        Carousel = module.default;
      },
      function handleError(err) {
        console.error(`Error while importing Carousel chunk: ${err}`);
      }
    );
  }

  function importAutoplayControl() {
    import("./AutoplayControl.svelte").then(
      function hanldeImport(module) {
        AutoplayControl = module.default;
      },
      function handleError(err) {
        console.error(`Error while importing Carousel chunk: ${err}`);
      }
    );
  }

  function importIconButton() {
    import("./IconButton.svelte").then(
      function hanldeImport(module) {
        IconButton = module.default;
      },
      function handleError(err) {
        console.error(`Error while importing Carousel chunk: ${err}`);
      }
    );
  }

  function importMusicPlayer() {
    import("./MusicPlayer.svelte").then(
      function hanldeImport(module) {
        MusicPlayer = module.default;
      },
      function handleError(err) {
        console.error(`Error while importing Carousel chunk: ${err}`);
      }
    );
  }
</script>

<div
  class:animating
  class:open
  class="button"
  on:click="{handleOpen}"
  on:keydown="{generateHandleKeyDown(handleOpen)}"
  on:transitionend="{handleTransitionEnd}"
  role="button"
  tabindex="0"
>
  <span class="button-text">Click me</span>
</div>

{#if open}
  <div class="carousel-container">
    <div class="carousel">
      <svelte:component this="{Carousel}" autoplaying="{autoplaying}" />
    </div>
  </div>
  <div class="close-button icon">
    <svelte:component this="{IconButton}" handleClick="{handleClose}">
      <XIcon size="1.5x" />
    </svelte:component>
  </div>
  <div class="controls icon">
    <svelte:component
      this="{AutoplayControl}"
      handleClick="{toggleAutoplaying}"
      autoplaying="{autoplaying}"
    />
    <svelte:component this="{MusicPlayer}" />
  </div>
{/if}

<style type="text/scss">
  @keyframes fade-in {
    0% {
      opacity: 0;
      // transform: translateY(50px);
    }
    30% {
      opacity: 0;
      // transform: translateY(50px);
    }
    100% {
      opacity: 1;
      // transform: translateY(0);
    }
  }

  .button {
    --size: 100px;
    --border-radius: 30px;

    // In very small phone screens whe need to shift the button to the bottom of the page.
    @media screen and (max-width: 370px) {
      bottom: 0;
      top: unset;
    }

    cursor: pointer;
    border-radius: var(--border-radius);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size);
    height: var(--size);
    transform: rotate(-10deg);

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      background-color: var(--black);
      transition: transform 0.3s cubic-bezier(0.28, 0.35, 0.25, 1.47);
    }

    .button-text {
      position: relative;
    }

    &:hover,
    &:active,
    &:focus {
      &::before {
        transform: scale(1.3);
      }
    }

    &:focus {
      outline: none;
    }
  }

  .button.open {
    cursor: initial;

    &::before {
      transform: scale(50);
    }

    &:hover {
      &:before {
        transform: scale(50);
      }
    }

    .button-text {
      display: none;
    }
  }

  // Class to apply a different transition to the opening/closing of the button.
  .button.animating {
    &::before {
      // Closing transition. ease-out acelerated at the beginning to see it faster (the bubble reduces from very big).
      transition: transform 1s cubic-bezier(0, 1.16, 0.68, 0.99);
    }

    &.open {
      &::before {
        // Opening transition
        transition: transform 1s ease-in;
      }
    }
  }

  .carousel-container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    .carousel {
      animation: linear 2s fade-in;
      width: 100%;
    }
  }

  .icon {
    color: var(--white);
  }

  .close-button {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  .controls {
    position: absolute;
    top: 2rem;
    right: 2rem;

    display: flex;
  }

  :global(.controls > * + *) {
    margin-left: 1rem;
  }
</style>
