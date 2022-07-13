<script lang="ts">
  import { session } from '$app/stores'
  import Avatar from '$lib/components/Avatar.svelte'
  import SearchEngine from '$lib/components/OnlineBar/SearchEngine.svelte'
  import LinkToUser from '../Links/LinkToUser.svelte'

  let isOpen = false
  let subscriptions = [$session]
</script>


{#if subscriptions.length > 0}
  <div
    class="fixed-sidebar right"
    class:open={isOpen}
    on:mouseleave={() => (isOpen = !isOpen)}
    on:mouseenter={() => (isOpen = !isOpen)}
  >
    <!-- Cerrada -->
    <div class="fixed-sidebar-right sidebar--small" id="sidebar-right">
      <div class="mCustomScrollbar" data-mcs-theme="dark">
        {#each subscriptions as { profilePhoto }}
          <ul class="chat-users">
            <!--  -->
            <li class="inline-items js-chat-open">
              <Avatar src={profilePhoto} />
            </li>
            <!--  -->
          </ul>
        {/each}
      </div>
    </div>

    <!-- Abierta -->
    <div class="fixed-sidebar-right sidebar--large" id="sidebar-right-1">
      <div class="mCustomScrollbar" data-mcs-theme="dark">
        <div class="ui-block-title ui-block-title-small">
          <span class="connecteds">Conectados</span>
        </div>

        {#each subscriptions as user}
          <ul class="chat-users">
            <li class="inline-items js-chat-open">
              <Avatar src={user.profilePhoto} />

              <div class="author-status">
                <LinkToUser id={user.id} class="h6 author-name">
                  {user.firstName}
                  {user.lastName}
                </LinkToUser>
                <span class="status">
                  {user.online ? 'Online' : 'Offline'}
                </span>
              </div>

              <div class="more">
                <svg class="olymp-three-dots-icon"
                  ><use xlink:href="#olymp-three-dots-icon" /></svg
                >

                <ul class="more-icons">
                  <li>
                    <svg
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="START CONVERSATION"
                      class="olymp-comments-post-icon"
                      ><use xlink:href="#olymp-comments-post-icon" /></svg
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        {/each}
      </div>

      <SearchEngine />

      <a href="/messages" class="olympus-chat inline-items">
        <h6 class="olympus-chat-title">MENSAJES</h6>
        <svg class="olymp-chat---messages-icon">
          <use xlink:href="#olymp-chat---messages-icon" />
        </svg>
      </a>
    </div>
  </div>
{/if}
