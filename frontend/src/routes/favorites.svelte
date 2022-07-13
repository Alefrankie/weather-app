<script>
  import ChatList from "$lib/components/Chat/ChatList.svelte";
  import MessagesList from "$lib/components/Chat/MessagesList.svelte";

  let userSelected = null;
</script>

<div class="container">
  <div class="row">
    <div
      class="col col-xl-12 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12"
    >
      <div class="ui-block">
        <div class="ui-block-title">
          <h6 class="title">Chat / Messages</h6>
        </div>

        <div class="row">
          <ChatList bind:userSelected />

          <div class="col col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
            <!-- Chat Field -->
            {#if userSelected}
              <MessagesList bind:userSelected />
            {/if}
            <!-- ... end Chat Field -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
