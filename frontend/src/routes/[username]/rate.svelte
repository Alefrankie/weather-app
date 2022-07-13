<script>
  import { session } from "$app/stores";
  import { http } from "$lib/hooks/http";

  let amount = $session?.rate?.amount || 0;

  async function sendRate() {
    await http.Post({
      url: "/api/rates/", 
      body: { user: $session.id, amount },
    });
  }
</script>

<div class="container">
  <div class="row">
    <div class="col col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
      <div class="ui-block">
        <div class="today-events calendar">
          <div class="today-events-thumb">
            <div class="date">
              <div class="day-number">
                {#if amount > 0}
                  ${amount}
                {:else}
                  No Asignado
                {/if}
              </div>
              <div class="day-week">Mensual</div>
            </div>
          </div>
          <div class="list">
            <div
              class="accordion day-event"
              data-day="2"
              data-month="12"
              id="accordionExample"
            >
              <div class="accordion-item">
                <div class="accordion-header" id="headingTwo">
                  <div class="event-time">15 DIAS</div>
                  <button class="accordion-button collapsed" type="button">
                    {#if amount > 0}
                      {amount * 0.5}
                    {:else}
                      No Asignado
                    {/if}

                    <span class="event-status-icon completed">
                      <i class="fa fa-credit-card" style="color: #08ddc1" />
                    </span>
                  </button>
                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-header" id="headingTwo">
                  <div class="event-time">1 MES</div>
                  <button class="accordion-button collapsed" type="button">
                    {#if amount > 0}
                      {amount}
                    {:else}
                      No Asignado
                    {/if}

                    <span class="event-status-icon completed">
                      <i class="fa fa-credit-card" style="color: #08ddc1" />
                    </span>
                  </button>
                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-header" id="headingTwo">
                  <div class="event-time">6 MESES</div>
                  <button class="accordion-button collapsed" type="button">
                    {#if amount > 0}
                      {amount * 6}
                    {:else}
                      No Asignado
                    {/if}
                    <span class="event-status-icon completed">
                      <i class="fa fa-credit-card" style="color: #08ddc1" />
                    </span>
                  </button>
                </div>
              </div>
              <div class="accordion-item">
                <div class="accordion-header" id="headingTwo">
                  <div class="event-time">1 AñO</div>
                  <button class="accordion-button collapsed" type="button">
                    {#if amount > 0}
                      {amount * 12}
                    {:else}
                      No Asignado
                    {/if}
                    <span class="event-status-icon completed">
                      <i class="fa fa-credit-card" style="color: #08ddc1" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="col col-xl-7 order-xl-2 col-lg-12 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12 "
    >
      <div class="ui-block">
        <div class="ui-block-title" style="text-align: center;">
          <h6 class="title">Tarifa a Cobrar en $</h6>
        </div>
        <div class="ui-block-content">
          <form on:submit|preventDefault={sendRate}>
            <div class="m-0 row justify-content-center align-items-center">
              <div class="col col-lg-12 col-md-12 col-sm-12 col-12 mb30">
                <div
                  class="input-group number-spinner justify-content-center align-items-center"
                >
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control text-center"
                      min="1"
                      bind:value={amount}
                      name="precio"
                      autocomplete="off"
                    />
                  </div>
                </div>
              </div>

              <br />
            </div>
            <div class="col col-lg-12 col-md-12 col-sm-12 col-12">
              <button class="btn btn-primary btn-lg full-width" type="submit">
                Asignar Tarifa
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
