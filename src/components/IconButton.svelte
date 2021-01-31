<script>
  export let handleClick = () => {};

  export let title;

  function generateHandleKeyDown(cb) {
    return function (event) {
      if (event.key === "Enter") {
        cb();
      }
    };
  }
</script>

<div
  class="icon-button"
  on:click="{handleClick}"
  on:keydown="{generateHandleKeyDown(handleClick)}"
  role="button"
  title="{title}"
  tabindex="{0}"
>
  <slot />
</div>

<style type="text/scss">
  .icon-button {
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.28, 0.35, 0.25, 1.47);

    &:focus {
      outline: none;
    }

    &:focus {
      transform: scale(1.3);
    }
  }
</style>
