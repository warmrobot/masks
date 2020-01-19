<script>
	import { fade } from 'svelte/transition';

	let a0 = 0;
	let a1 = 1;
	let a2 = 2;
	let a3 = 3;
	let a4 = 4;
	let a5 = 5;
	let a6 = 6;
	let a7 = 7;
	let a8 = 8;
	let a9 = 9;
	let a10 = 10;
	let a11 = 11;
	let a12 = 12;
	let a13 = 13;
	let a14 = 14;
	let a15 = 15;
	let a16 = 16;
	let a17 = 17;
	let a18 = 18;
	let a19 = 19;
	let a20 = 20;
	let a21 = 21;
	let a22 = 22;
	let a23 = 23;
	let a24 = 24;
	let a25 = 25;
	let a26 = 26;
	let a27 = 27;
	let a28 = 28;
	let a29 = 29;
	//  Comment out a30 make it work!
	let a30 = 30;

	function functionNeverExecutedActually() {
		a1 = 1;
	}
</script>

<span>{[].indexOf(a1) && a1 === 1}</span>
{#if [].indexOf(a1) && a1 === 1}
	<p>foo</p>
{:else}
	<p in:fade>bar</p>
{/if}
