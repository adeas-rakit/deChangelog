<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<div class="container mx-auto px-4 py-8">
  <a href="/" class="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
    ← Back to Changelog
  </a>
  
  <article class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mt-4">
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">{data.title}</h1>
      <div class="flex items-center justify-between">
        <div class="flex gap-2">
          {#each data.categories as category}
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {category}
            </span>
          {/each} 
        </div>
        <time class="text-gray-500 dark:text-gray-400">{data.date}</time>
      </div>
    </header>
    
    <div class="prose dark:prose-invert max-w-none">
      {@html data.content}
    </div>
  </article>
</div>