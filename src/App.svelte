<script>
  import ExpandingButton from "./components/ExpandingButton.svelte";
  // TEXTOS EN LAS IMAGENES
</script>

<!-- Prefetching of first carousel photo and soundtrack. -->
<svelte:head>
  <link rel="preload" href="/static/audio/soundtrack.mp3" type="audio/mp3" />
</svelte:head>

<div class="container">
  <div class="content-wrapper">
    <div class="text-n-button">
      <h1 class="headline">
        <!-- Don't let format onSave wrap this span into the next line -->
        Happy birthday<span class="big-screen-text">, my best wishes</span>
      </h1>
      <p>
        This was originally a greeting text in Spanish for my brother. Also the
        big logo accompanying this text was a photo of him with the same
        gradient effect.
      </p>
      <div class="button-wrapper">
        <ExpandingButton />
      </div>
    </div>
    <img
      sizes="(max-width: 600px) 140px, (max-width: 800px) 280px, (max-width: 1000px) 420px, 560px"
      srcset="
      /static/Background_logo_200.png 200w,
      /static/Background_logo_304.png 304w,
      /static/Background_logo_363.png 363w,
      /static/Background_logo_560.png 560w"
      alt="gradient logo"
    />
  </div>
</div>

<style type="text/scss">
  .container {
    width: 100%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content-wrapper {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 1000px;
      padding: 2rem;

      @media screen and (max-width: 800px) and (orientation: portrait) {
        flex-direction: column-reverse;
      }

      .text-n-button {
        display: flex;
        flex-direction: column;
        align-items: center;

        .button-wrapper {
          margin-top: 1rem;
        }
      }
    }

    .headline {
      text-align: center;

      .big-screen-text {
        // Hide second part of the headline in mobile screens.
        @media screen and(max-width: 600px) {
          display: none;
        }
      }
    }
  }

  // We need a global rule for the margin to be applied to the children component in a different file.
  :global(.container > * + *) {
    margin-top: 1rem;
  }
</style>
