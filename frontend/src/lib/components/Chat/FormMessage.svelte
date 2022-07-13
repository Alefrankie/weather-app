<script lang="ts">
  import { session } from '$app/stores'
  import { Chats } from '$lib/stores/Chats'
  import { Messages } from '$lib/stores/Messages'

  let message: string = ''
  export let userSelected

  function sendMessage() {
    Messages.sendMessage({
      from: $session.id, //YO
      to: userSelected.id, //EL OTRO TIPO
      text: message
    })

    Messages.notify({ from: $session.username, to: userSelected.username })

    Chats.getChats($session.id)

    message = ''
  }
</script>

<form on:submit|preventDefault={sendMessage}>
  <div class="form-group is-empty">
    <textarea
      class="form-control"
      placeholder="Write your reply here..."
      bind:value={message}
      on:keypress={(e) => {
        if (e.key === 'Enter') sendMessage()
      }}
    />
    <span class="material-input" />
  </div>

  <div class="add-options-message">
    <button class="btn btn-primary btn-sm" type="submit">
      <i class="fa fa-paper-plane" />
    </button>
  </div>
</form>
