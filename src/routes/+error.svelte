<script lang="ts"> 
	import { page } from '$app/state'  
</script>

<svelte:head>
	<title>{page.status}</title>
	<meta name="robots" content="noindex, nofollow" />
	<style>
	</style>
</svelte:head> 
	<div
		class="fixed bottom-0 left-0 right-0 top-0 z-50 h-screen md:py-5"
	>
		<div class="flex justify-center md:mx-4">
			<div class="bg-sharpen-100 h-screen w-full p-2 md:h-auto md:w-96 md:rounded-lg">
				<div class="mt-5"> 
					<h1 class="my-5 text-center text-sm font-semibold tracking-tight md:text-lg">
						{page.status}
					</h1>
					<p class="text-center text-xs font-extralight italic">{page?.error?.message}</p>
					<div class="p-5 text-center text-sm">
						Kamu berhasil sampai di tempat baru, tapi sayang kita tidak menemukan apapun disini,
						silahkan kembali
					</div>
				</div>
				<div class="mx-4 mt-4">
					<div class="mb-5 text-center">
						<a
							href="../"
							rel="external"
							class="button inline-flex h-7 items-center justify-between text-xs font-bold"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<line x1="5" y1="12" x2="19" y2="12" />
								<line x1="5" y1="12" x2="11" y2="18" />
								<line x1="5" y1="12" x2="11" y2="6" />
							</svg> Kembali
						</a>
					</div>
				</div>
			</div>
		</div>
	</div> 
