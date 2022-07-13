<script>
  import { session } from "$app/stores";
  import { http } from "$lib/hooks/http";

  let amount = $session.subscriber.rate.amount
    ? $session.subscriber.rate.amount
    : 0;
  let daysToPay = 10;
  let amountToPay = 10;
  let link = "";
  let prelink = 0

  let PRICE_LIST = {
    15: amount * 0.5 + amount * 0.2,
    30: amount,
    180: amount * 6 - amount * 0.15,
    360: amount * 12 - amount * 0.25,
  };

  async function handleRateSelected(daysSelected) {
    prelink = 1
    daysToPay = daysSelected;
    amountToPay = PRICE_LIST[daysSelected];

    const { url } = await http.Post({
      url: "/api/subscription/link",
      body: {
        creator: $session.subscriber.id,
        subscriber: $session.id,
        days: daysToPay,
        amount: amountToPay,
      },
    });
    if (url) link = url;
    prelink = 0
  }

  async function paySubscription() {
    /* await http.Post({
      url: "/api/subscription/pay",
      body: {
        creator: $session.subscriber.id,
        subscriber: $session.id,
        days: daysToPay,
        // dateFrom: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        // hourFrom: { type: DataTypes.TIME },
        // dateUntil: { type: DataTypes.DATE },
        // hourUntil: { type: DataTypes.TIME },
        // transactionId: ,
        amount: amountToPay,
      },
    }); */
    // window.location.reload();
  }
</script>

{#if amount}
  <div class="tab-content" id="calendar-events-tabs-content">
    <div
      aria-labelledby="events-tab"
      class="tab-pane fade show active"
      id="events"
      role="tabpanel"
    >
      <div class="container">
        <div class="row">
          <div class="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="ui-block">
              <div class="today-events calendar">
                <div class="today-events-thumb">
                  <div class="date">
                    <div class="day-number">${amount}</div>
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
                    <!-- ----------------------------------------------------- -->
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingTwo">
                        <div class="event-time">15 DIAS</div>
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          on:click={() => handleRateSelected(15)}
                        >
                          {amount * 0.5 + amount * 0.2}
                          <span class="event-status-icon completed">
                            <i
                              class="fa fa-credit-card"
                              style="color: #08ddc1"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                    <!-- ----------------------------------------------------- -->
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingTwo">
                        <div class="event-time">1 MES</div>
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          on:click={() => handleRateSelected(30)}
                        >
                          {amount}
                          <span class="event-status-icon completed">
                            <i
                              class="fa fa-credit-card"
                              style="color: #08ddc1"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                    <!-- ----------------------------------------------------- -->
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingTwo">
                        <div class="event-time">6 MESES (DESCUENTO 15%)</div>
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          on:click={() => handleRateSelected(180)}
                        >
                          {amount * 6 - amount * 0.15}
                          <span class="event-status-icon completed">
                            <i
                              class="fa fa-credit-card"
                              style="color: #08ddc1"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                    <!-- ----------------------------------------------------- -->
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingTwo">
                        <div class="event-time">1 AñO (DESCUENTO 25%)</div>
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          on:click={() => handleRateSelected(360)}
                        >
                          {amount * 12 - amount * 0.25 }
                          <span class="event-status-icon completed">
                            <i
                              class="fa fa-credit-card"
                              style="color: #08ddc1"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                    <!-- ----------------------------------------------------- -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          {#if amountToPay && daysToPay}
            <div class="col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div class="ui-block">
                <div class="ui-block-title">
                  <h6 class="title">Procedimiento de Pago</h6>
                </div>
                <div class="ui-block-content">
                  <div class="row">
                    <div
                      class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                    >
                      <fieldset class="form-group label-floating">
                        <label for="amount" class="control-label">
                          Monto a cancelar
                        </label>
                        <input
                          id="amount"
                          bind:value={amountToPay}
                          class="form-input"
                          readonly
                        />
                      </fieldset>
                    </div>

                    <div
                      class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                    >
                      <fieldset class="form-group label-floating">
                        <label for="amount" class="control-label">
                          Días a cancelar
                        </label>
                        <input
                          id="amount"
                          bind:value={daysToPay}
                          class="form-input"
                          readonly
                        />
                      </fieldset>
                    </div>
                  </div>

                  <p class="">
                    Los montos se encuentran ajustados a comisiones.
                  </p>

                  {#if !link && prelink}
                    <center>
                      <img src="/img/loading.gif" alt="loading" style="width: 20%;">
                    </center>
                  {:else if link}
                    <center>
                      <a on:click={paySubscription} href={link}>
                          <img
                            src="/img/boton-paypal.png"
                            alt="asd"
                            style="width: 30%;"
                          />
                        </a>
                    </center>
                  {/if}
                </div>
              </div>
            </div>
          {:else}
            <p>Aun no ha seleccionado la tarifa</p>
          {/if}
        </div>
      </div>
    </div>
  </div>
{:else}
  <center>
    <h3>Aún no posee una tarifa asignada</h3>
  </center>
{/if}
