<script lang="ts">
  import ScheduleBlock from './components/ScheduleBlock.svelte';
  import AllMatsLink from './components/AllMatsLink.svelte';
  import type { Schedule } from './index';
  import { allData } from './data/SIC';

  const data: Schedule = allData;
</script>

<ul class="collapsible">
  {#if data.length > 0}
    {#each data as day}
      <li>
        <div
          id={`SIC-day-${day.daynum}-header`}
          class="collapsible-header title"
          data-state="closed"
        >
          <span>Day {day.daynum} -</span>
          <span class="dayofWeek"
            >&nbsp;
            {#if day.daynum === '1'}
              Mon,
            {:else if day.daynum === '2'}
              Tues,
            {:else if day.daynum === '3'}
              Weds,
            {:else if day.daynum === '4'}
              Thurs,
            {:else if day.daynum === '5'}
              Fri,
            {/if}
          </span>
          <span class="titleFix">&nbsp;{day.title}</span>
        </div>
        <div class="collapsible-body">
          {#each day.activities as activity}
            <ScheduleBlock
              name={activity.name}
              time={activity.time}
              duration={activity.duration}
              actType={activity.actType}
              links={activity.links}
              daynum={day.daynum}
            />
          {/each}
        </div>
      </li>
    {/each}
  {/if}
  <li class="sic-all-links all-links">
    <div class="collapsible-header">
      <div class="title">All PD Materials</div>
    </div>
    <div class="collapsible-body">
      <ul class="collection">
        {#each data as day}
          {#each day.activities as activity}
            {#if activity.links.length > 0}
              <AllMatsLink
                classes={`day${day.daynum}-all-links`}
                actname={activity.name}
                links={activity.links}
              />
            {/if}
          {/each}
        {/each}
      </ul>
    </div>
  </li>
</ul>
