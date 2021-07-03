<script>
  import OvO from '@ovojs/ovo';
</script>

<div>
	<h1>OvO</h1>
	<h2>A Svelte Web Component for Comments</h2>
	<p>
		Inspired by <a href="https://github.com/DIYgod/OwO">OωO</a>. 
		Available on <a href="https://github.com/Mivinci/OvO">GitHub</a>.
		Docs in <a href="https://github.com/ovojs/OvO/blob/main/README.md">README</a>
	</p>
  <OvO />
</div>


<style>
	div {
		width: 600px;
		margin: auto;
		box-sizing: border-box;
	}

	@media (max-width: 600px) {
		div {
			width: 100vw;
			margin: 0;
			padding: 0 10px;
		}
	}

	h1 {
		font-size: 54px;
		font-weight: bolder;
		margin-bottom: 0;
	}

	h2 {
		color: #555;
	}

	a {
		color: #08c;
		text-decoration: none;
	}

	p {
		font-weight: 500;
	}
</style>