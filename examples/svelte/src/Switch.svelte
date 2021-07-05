<script>
  export let checked = false;
</script>

<input type="checkbox" bind:checked />

<style>
  input {
    appearance: none;
    -webkit-appearance: none;
    width: 38px;
    height: 20px;
    margin: 0;
    background: #dcdfe6;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    transition: all 0.5s;
    outline: none;
  }

  input::before {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 16px;
    height: 16px;
    content: "";
    border-radius: 100%;
    background: #fff;
    transition: all 0.2s ease-in-out;
  }

  input:checked {
    background: var(--ovo-pm);
  }

  input:checked::before {
    left: calc(100% - 18px);
  }
</style>
