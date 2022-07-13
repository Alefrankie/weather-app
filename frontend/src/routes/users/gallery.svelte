<script>
  import { session } from "$app/stores";
  import { HOST_DEFAULT, http } from "$lib/hooks/http";

  async function getPosts() {
    // Checking Profile
    const posts = await http.Post({
      url: "/posts/find-my-posts",
      body: { userId: $session.id },
    });

    posts.forEach((item) => {
      if (item.src) {
        item.extension = item.src.slice(item.src.lastIndexOf("."));
      }

      // Last Like
      if (item.likes.length > 0) {
        item.lastUser = item.likes[item.likes.length - 1].user;
      }
      // Second last Like
      if (item.likes.length > 1) {
        item.secondLastUser = item.likes[item.likes.length - 2].user;
      }
    });

    console.log(posts[0]);
    return posts.filter((item) => item.src);
  }


</script>

<div class="container">
  <div class="row">
    <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <div class="ui-block responsive-flex">
        <div class="ui-block-title">
          <div class="h6 title">Galería</div>
        </div>
      </div>
    </div>
  </div>
</div>
{#await getPosts() }
  <!-- promise is pending -->
{:then posts}
  <!-- My perfil -->
  {#if !$session.subscriber}
    <div class="container">
      <div class="row">
        {#each posts as item}
          <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="ui-block">
              <div class="friend-item">
                <div class="friend-header-thumb">
                  <!-- POST -->
                  {#if [".mp4"].includes(item.extension)}
                    <div class="post-video">
                      <div class="video-thumb">
                        <img
                          loading="lazy"
                          src="{HOST_DEFAULT}/files/{item.src}"
                          alt=""
                          style="height: 10rem"
                        />
                        <a
                          href="https://youtube.com/watch?v=excVFQ2TWig"
                          class="play-video"
                        >
                          <svg class="olymp-play-icon"
                            ><use xlink:href="#olymp-play-icon" /></svg
                          >
                        </a>
                      </div>

                      <div class="video-content">
                        <a  href="#/" class="h4 title"
                          >Iron Maid - ChillGroves</a
                        >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur ipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua...
                        </p>
                        <a  href="#/" class="link-site"
                          >YOUTUBE.COM</a
                        >
                      </div>
                    </div>
                  {/if}

                  {#if [".jpg", ".png"].includes(item.extension)}
                    <img
                      loading="lazy"
                      src="{HOST_DEFAULT}/files/{item.src}"
                      alt=""
                      style="width: 100%; height: 100%; border-radius: 1rem;"
                    />
                  {/if}
                  <!-- END POST -->
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <!-- Perfil del suscriptor pagado -->
  {:else if $session.subscriber.subscriptionPayed}
    <div class="container">
      <div class="row">
        {#each ["1", "1", "1", "1"] as item}
          <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="ui-block">
              <div class="friend-item">
                <div class="friend-header-thumb">
                  <img
                    src="/img/voyer/encabezado.jpg"
                    style="height: 10rem"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {:else}
    <div class="container">
      <div class="row">
        <div
          class="col col-xl-12 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12"
        >
          <div id="newsfeed-items-grid">
            <div id="postsWrap" />
            <div class="ui-block">
              <center>
                <article class="hentry post">
                  <h3>¡Tiempo de suscripción agotado!</h3>
                  <div class="post__author author vcard inline-items">
                    <div class="author-date">
                      <img
                        src="/img/voyer/emoji.png"
                        alt=""
                        style="width: 70%"
                      />
                    </div>
                  </div>
                </article>
              </center>
            </div>
          </div>
        </div>
        <div class="col col-xl-2" />
      </div>
    </div>
  {/if}
{:catch error}
  <p>{error}</p>
{/await}
