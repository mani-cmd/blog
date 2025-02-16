<script>
    let {children} = $props();

  import 'prismjs';
  import 'prismjs/themes/prism-dark.css'; // Change to your preferred theme
</script>



<a href="/">Home</a>
<a href="/archive/">Archive</a>
<a href="/poem/">Poems</a>

{@render children()}

<footer>
    whatever
</footer>
