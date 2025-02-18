<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<nav>
	<a href="/">Home</a>
	<a href="/projects">Projects</a>
	<a href="/about">About</a>
	<a href="/contact">Contact</a>
</nav>

{@render children()}
