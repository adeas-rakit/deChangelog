<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">Changelog</h1>
  
  <div class="space-y-8">
    {#each data.changelogs as changelog}
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex justify-between items-start">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
            <a href="/changelog/{changelog.id}" class="hover:text-blue-600 dark:hover:text-blue-400">
              {changelog.title}
            </a>
          </h2>
          <span class="text-sm text-gray-500 dark:text-gray-400">{changelog.date}</span>
        </div>
        <div class="mt-2 flex gap-2">
          {#each changelog.categories as category}
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {category}
            </span>
          {/each} 
        </div>
      </div>
    {/each} 
  </div>
  
  <div class="mt-8 flex justify-center gap-4">
    {#if data.pagination.page > 1}
      <a href="?page={data.pagination.page - 1}&limit={data.pagination.limit}" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Previous
      </a>
    {/if} 
    {#if data.pagination.page * data.pagination.limit < data.pagination.total}
      <a href="?page={data.pagination.page + 1}&limit={data.pagination.limit}" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Next
      </a>
    {/if} 
  </div>
</div>