<div class="content">
  <div class="row">
    <div class="col-lg-4 col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="stat-widget-five">
            <div class="stat-icon dib flat-color-4">
              <i class="pe-7s-users" />
            </div>
            <div class="stat-content">
              <div class="text-left dib">
                <div class="stat-text">Usuarios</div>
                <div class="stat-heading" style="color: #455a64">
                  Total:<span class="count">11</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="stat-widget-five">
            <div class="stat-icon dib flat-color-1">
              <i class="pe-7s-cash" />
            </div>
            <div class="stat-content">
              <div class="text-left dib">
                <div class="stat-text">Perfiles</div>
                <div class="stat-heading" style="color: #455a64">
                  $<span class="count">600</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="stat-widget-five">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/usuarios"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                  autocomplete="off"
                  value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                />
              </div>
              <div style="display: flex">
                <input
                  type="text"
                  name="usuario"
                  placeholder="Escribir usuario..."
                  class="form-control"
                  autocomplete="OFF"
                />
                <button class="btn btn-info"> Buscar </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <strong class="card-title"> Lista de Usuarios registrados </strong>
          </div>
          <div class="table-stats order-table ov-h">
            <table class="table ">
              <thead>
                <tr>
                  <th style="text-align: center;"> Avatar </th>
                  <th> ID </th>
                  <th> Nombre </th>
                  <th> @Usuario </th>
                  <th style="text-align: center;"> Precio del perfil </th>
                  <th style="text-align: center;"> Suscriptores </th>
                  <th style="text-align: center;"> Opciones </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align: center;">
                    <div class="round-img">
                      <a href="#/">
                        <img
                          src="/img/voyer/perfil.png"
                          class="rounded-circle"
                          alt=""
                        />
                      </a>
                    </div>
                  </td>
                  <td> #15 </td>
                  <td>
                    <span class="name"> admin1 </span>
                  </td>
                  <td> @ADMIN1 </td>
                  <td style="text-align: center;">
                    <p>Sin definir</p>
                  </td>
                  <td style="text-align: center;">
                    <span class="count">0</span>
                  </td>
                  <td style="text-align: center;">
                    <a
                      data-toggle="modal"
                      id="15"
                      class="btn btn-info"
                      style="color: white; border-radius: 100%;"
                    >
                      <i class="fa fa-edit" />
                    </a>
                    <form
                      name="post_61b10f7ab567d168544993"
                      style="display:none;"
                      method="post"
                      action="/admin/bloquear/15"
                    >
                      <input type="hidden" name="_method" value="POST" /><input
                        type="hidden"
                        name="_csrfToken"
                        autocomplete="off"
                        value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                      />
                    </form>
                    <a
                      href="#/"
                      class="btn btn-success"
                      style="border-radius: 100%;"
                      tabindex="-1"><i class="fa fa-check" /></a
                    >
                    <form
                      name="post_61b10f7ab573b080617875"
                      style="display:none;"
                      method="post"
                      action="/admin/eliminar/15"
                    >
                      <input type="hidden" name="_method" value="POST" /><input
                        type="hidden"
                        name="_csrfToken"
                        autocomplete="off"
                        value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                      />
                    </form>
                    <a
                      href="#/"
                      class="btn btn-danger"
                      style="border-radius: 100%;"
                      tabindex="-1"
                      ><i class="fa fa-trash" /></a
                    >
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center;">
                    <div class="round-img">
                      <a href="#/">
                        <img
                          src="/img/voyer/perfil.png"
                          class="rounded-circle"
                          alt=""
                        />
                      </a>
                    </div>
                  </td>
                  <td> #16 </td>
                  <td>
                    <span class="name"> Edu </span>
                  </td>
                  <td> @PACHO </td>
                  <td style="text-align: center;">
                    <p>Sin definir</p>
                  </td>
                  <td style="text-align: center;">
                    <span class="count">0</span>
                  </td>
                  <td style="text-align: center;">
                    <a
                      data-toggle="modal"
                      id="16"
                      class="btn btn-info"
                      style="color: white; border-radius: 100%;"
                    >
                      <i class="fa fa-edit" />
                    </a>
                    <form
                      name="post_61b10f7ab5827651160854"
                      style="display:none;"
                      method="post"
                      action="/admin/bloquear/16"
                    >
                      <input type="hidden" name="_method" value="POST" /><input
                        type="hidden"
                        name="_csrfToken"
                        autocomplete="off"
                        value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                      />
                    </form>
                    <a
                      href="#/"
                      class="btn btn-success"
                      style="border-radius: 100%;"
                      tabindex="-1"><i class="fa fa-check" /></a
                    >
                    <form
                      name="post_61b10f7ab58aa317665529"
                      style="display:none;"
                      method="post"
                      action="/admin/eliminar/16"
                    >
                      <input type="hidden" name="_method" value="POST" /><input
                        type="hidden"
                        name="_csrfToken"
                        autocomplete="off"
                        value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                      />
                    </form>
                    <a
                      href="#/"
                      class="btn btn-danger"
                      style="border-radius: 100%;"
                      tabindex="-1"
                      ><i class="fa fa-trash" /></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="paginator">
              <ul class="pagination">
                <li class="previous disabled">
                  <a href="#/"><span aria-hidden="true">&lt; Anterior</span></a>
                </li>
                <li class="next disabled">
                  <a href="#/"><span aria-hidden="true">Siguiente &gt;</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="ver15"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-mb" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #bd3434">
          <h5 class="modal-title" id="mediumModalLabel" style="color: white">
            Editar campos
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/editarusuario"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                />
              </div>
              <input type="text" name="id" value="15" />
              <center style="margin-right: 40px;">
                <img
                  src="/img/voyer/perfil.png"
                  class="rounded-circle"
                  width="60px"
                  alt=""
                />
                <p style="text-align: center; margin-bottom: 0;">
                  <strong style="color: black">..::Fecha de Registro::..</strong
                  >
                </p>
                <p style="text-align: center;">14-04-2021</p>
              </center>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-user" /> Nombre</strong>
                  <div style="text-align: justify;">admin1</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Correo</strong>
                  <div style="text-align: justify;">admin@admin</div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Cuenta PayPal</strong>
                  <div style="text-align: justify;" />
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-location-arrow" /> País</strong>
                  <div style="text-align: justify;">Venezuela</div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <strong>@Usuario</strong>
                  <input
                    class="form-control"
                    value="ADMIN1"
                    name="usuarios"
                    style="text-align: justify;"
                  />
                </div>
                <div class="col-md-6">
                  <strong>Contraseña</strong>
                  <input
                    type="password"
                    class="form-control"
                    value="$2y$10$0uG1dZLlkqB3e.ZqLqrHm.mv/HWoAqeonobqkEx..f5TBdtFnShO2"
                    name="password"
                    style="text-align: justify;"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer" style="background: aliceblue;">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Cerrar</button
          >
          <button type="submit" class="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="ver16"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-mb" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #bd3434">
          <h5 class="modal-title" id="mediumModalLabel" style="color: white">
            Editar campos
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/editarusuario"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                  autocomplete="off"
                  value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                />
              </div>
              <input type="text" name="id" value="16" />
              <center style="margin-right: 40px;">
                <img
                  src="/img/voyer/perfil.png"
                  class="rounded-circle"
                  width="60px"
                  alt=""
                />
                <p style="text-align: center; margin-bottom: 0;">
                  <strong style="color: black">..::Fecha de Registro::..</strong
                  >
                </p>
                <p style="text-align: center;">20-04-2021</p>
              </center>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-user" /> Nombre</strong>
                  <div style="text-align: justify;">Edu</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Correo</strong>
                  <div style="text-align: justify;">joseeduog@gmail.com</div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Cuenta PayPal</strong>
                  <div style="text-align: justify;" />
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-location-arrow" /> País</strong>
                  <div style="text-align: justify;">Venezuela</div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <strong>@Usuario</strong>
                  <input
                    class="form-control"
                    value="PACHO"
                    name="usuarios"
                    style="text-align: justify;"
                  />
                </div>
                <div class="col-md-6">
                  <strong>Contraseña</strong>
                  <input
                    type="password"
                    class="form-control"
                    value="$2y$10$HxOUtKCixAySEFCknCSZ1eSxJ12in4788ddOYgrYxkT4ex./9HLC."
                    name="password"
                    style="text-align: justify;"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer" style="background: aliceblue;">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Cerrar</button
          >
          <button type="submit" class="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="ver17"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-mb" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #bd3434">
          <h5 class="modal-title" id="mediumModalLabel" style="color: white">
            Editar campos
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/editarusuario"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                  autocomplete="off"
                  value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                />
              </div>
              <input type="text" name="id" value="17" />
              <center style="margin-right: 40px;">
                <img
                  src="/img/voyer/perfil.png"
                  class="rounded-circle"
                  width="60px"
                  alt=""
                />
                <p style="text-align: center; margin-bottom: 0;">
                  <strong style="color: black">..::Fecha de Registro::..</strong
                  >
                </p>
                <p style="text-align: center;">11-05-2021</p>
              </center>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-user" /> Nombre</strong>
                  <div style="text-align: justify;">awddwa</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Correo</strong>
                  <div style="text-align: justify;">aawd@gma.com</div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Cuenta PayPal</strong>
                  <div style="text-align: justify;">auhwddk@gmail.com</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-location-arrow" /> País</strong>
                  <div style="text-align: justify;">Aruba</div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <strong>@Usuario</strong>
                  <input
                    class="form-control"
                    value="ADWWDA"
                    name="usuarios"
                    style="text-align: justify;"
                  />
                </div>
                <div class="col-md-6">
                  <strong>Contraseña</strong>
                  <input
                    type="password"
                    class="form-control"
                    value="$2y$10$36N560HjaSzUegSbEMZ/TuvEXyH3iYeFqGTXRRTkaIvoS0yFcEM76"
                    name="password"
                    style="text-align: justify;"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer" style="background: aliceblue;">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Cerrar</button
          >
          <button type="submit" class="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="ver18"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-mb" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #bd3434">
          <h5 class="modal-title" id="mediumModalLabel" style="color: white">
            Editar campos
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/editarusuario"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                  autocomplete="off"
                  value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                />
              </div>
              <input type="text" name="id" value="18" />
              <center style="margin-right: 40px;">
                <img
                  src="/img/voyer/perfil.png"
                  class="rounded-circle"
                  width="60px"
                  alt=""
                />
                <p style="text-align: center; margin-bottom: 0;">
                  <strong style="color: black">..::Fecha de Registro::..</strong
                  >
                </p>
                <p style="text-align: center;">17-06-2021</p>
              </center>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-user" /> Nombre</strong>
                  <div style="text-align: justify;">Bloque</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Correo</strong>
                  <div style="text-align: justify;">
                    bloquedecolores@gmail.com
                  </div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Cuenta PayPal</strong>
                  <div style="text-align: justify;" />
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-location-arrow" /> País</strong>
                  <div style="text-align: justify;">Venezuela</div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <strong>@Usuario</strong>
                  <input
                    class="form-control"
                    value="COLORES"
                    name="usuarios"
                    style="text-align: justify;"
                  />
                </div>
                <div class="col-md-6">
                  <strong>Contraseña</strong>
                  <input
                    type="password"
                    class="form-control"
                    value="$2y$10$hf1DFjNlhNHN.Ec1zuZxYOhOeWzenO7ccD52ALFqruZZ.tlsdYfUS"
                    name="password"
                    style="text-align: justify;"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer" style="background: aliceblue;">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Cerrar</button
          >
          <button type="submit" class="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="ver19"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-mb" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #bd3434">
          <h5 class="modal-title" id="mediumModalLabel" style="color: white">
            Editar campos
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/editarusuario"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                  autocomplete="off"
                  value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                />
              </div>
              <input type="text" name="id" value="19" />
              <center style="margin-right: 40px;">
                <img
                  src="/img/voyer/perfil.png"
                  class="rounded-circle"
                  width="60px"
                  alt=""
                />
                <p style="text-align: center; margin-bottom: 0;">
                  <strong style="color: black">..::Fecha de Registro::..</strong
                  >
                </p>
                <p style="text-align: center;">13-08-2021</p>
              </center>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-user" /> Nombre</strong>
                  <div style="text-align: justify;">Daniel Duno</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Correo</strong>
                  <div style="text-align: justify;">
                    shelovetheicecream@gmail.com
                  </div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Cuenta PayPal</strong>
                  <div style="text-align: justify;" />
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-location-arrow" /> País</strong>
                  <div style="text-align: justify;">Venezuela</div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <strong>@Usuario</strong>
                  <input
                    class="form-control"
                    value="DANIDUDU"
                    name="usuarios"
                    style="text-align: justify;"
                  />
                </div>
                <div class="col-md-6">
                  <strong>Contraseña</strong>
                  <input
                    type="password"
                    class="form-control"
                    value="$2y$10$3/AOp4OnSPOPA8QhrXeIzO8Lyr0VGMRJQlin9h0LT.ImlhtKJL3wy"
                    name="password"
                    style="text-align: justify;"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer" style="background: aliceblue;">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Cerrar</button
          >
          <button type="submit" class="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="ver111117"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-mb" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #bd3434">
          <h5 class="modal-title" id="mediumModalLabel" style="color: white">
            Editar campos
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/editarusuario"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                  autocomplete="off"
                  value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                />
              </div>
              <input type="text" name="id" value="111117" />
              <center style="margin-right: 40px;">
                <img
                  src="/img/voyer/perfil.png"
                  class="rounded-circle"
                  width="60px"
                  alt=""
                />
                <p style="text-align: center; margin-bottom: 0;">
                  <strong style="color: black">..::Fecha de Registro::..</strong
                  >
                </p>
                <p style="text-align: center;">07-05-2021</p>
              </center>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-user" /> Nombre</strong>
                  <div style="text-align: justify;">awddwa</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Correo</strong>
                  <div style="text-align: justify;">1111aawd@gma.com</div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Cuenta PayPal</strong>
                  <div style="text-align: justify;">111111@gmail.com</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-location-arrow" /> País</strong>
                  <div style="text-align: justify;">Aruba</div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <strong>@Usuario</strong>
                  <input
                    class="form-control"
                    value="11111"
                    name="usuarios"
                    style="text-align: justify;"
                  />
                </div>
                <div class="col-md-6">
                  <strong>Contraseña</strong>
                  <input
                    type="password"
                    class="form-control"
                    value="$2y$10$36N560HjaSzUegSbEMZ/TuvEXyH3iYeFqGTXRRTkaIvoS0yFcEM76"
                    name="password"
                    style="text-align: justify;"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer" style="background: aliceblue;">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Cerrar</button
          >
          <button type="submit" class="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="ver25457921"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-mb" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #bd3434">
          <h5 class="modal-title" id="mediumModalLabel" style="color: white">
            Editar campos
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/editarusuario"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                  autocomplete="off"
                  value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                />
              </div>
              <input type="text" name="id" value="25457921" />
              <center style="margin-right: 40px;">
                <img
                  src="/img/../fotoperfil/photo/2320c31c-bc20-45c7-8918-eeed5e3a48d9/124324389_120409983015999_8820865244548534138_n.jpg"
                  class="rounded-circle"
                  width="60px"
                  alt=""
                />
                <p style="text-align: center; margin-bottom: 0;">
                  <strong style="color: black">..::Fecha de Registro::..</strong
                  >
                </p>
                <p style="text-align: center;">10-02-2021</p>
              </center>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-user" /> Nombre</strong>
                  <div style="text-align: justify;">Jose Sanchez.</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Correo</strong>
                  <div style="text-align: justify;">
                    josefsanchez2511@gmail.com
                  </div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Cuenta PayPal</strong>
                  <div style="text-align: justify;">
                    sb-uuzv97089897@personal.example.com
                  </div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-location-arrow" /> País</strong>
                  <div style="text-align: justify;">Venezuela</div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <strong>@Usuario</strong>
                  <input
                    class="form-control"
                    value="JOSEFSANCHEZ2511"
                    name="usuarios"
                    style="text-align: justify;"
                  />
                </div>
                <div class="col-md-6">
                  <strong>Contraseña</strong>
                  <input
                    type="password"
                    class="form-control"
                    value="$2y$10$Ve3wLMfWuvT6fjwmA3gg.uWe9ta0Q8H.JdDW0upzOjMkq9h66Xlwi"
                    name="password"
                    style="text-align: justify;"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer" style="background: aliceblue;">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Cerrar</button
          >
          <button type="submit" class="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="ver26677798"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-mb" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #bd3434">
          <h5 class="modal-title" id="mediumModalLabel" style="color: white">
            Editar campos
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/editarusuario"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                  autocomplete="off"
                  value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                />
              </div>
              <input type="text" name="id" value="26677798" />
              <center style="margin-right: 40px;">
                <img
                  src="/img/../fotoperfil/photo/203a52d5-6068-46ff-98f9-b7eea9d5c947/Sinbad.png"
                  class="rounded-circle"
                  width="60px"
                  alt=""
                />
                <p style="text-align: center; margin-bottom: 0;">
                  <strong style="color: black">..::Fecha de Registro::..</strong
                  >
                </p>
                <p style="text-align: center;">08-02-2021</p>
              </center>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-user" /> Nombre</strong>
                  <div style="text-align: justify;">Alefrank Martinez</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Correo</strong>
                  <div style="text-align: justify;">Alefrank.m@gmail.com</div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Cuenta PayPal</strong>
                  <div style="text-align: justify;">luawd@gma.com</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-location-arrow" /> País</strong>
                  <div style="text-align: justify;">Túnez</div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <strong>@Usuario</strong>
                  <input
                    class="form-control"
                    value="DIWAII"
                    name="usuarios"
                    style="text-align: justify;"
                  />
                </div>
                <div class="col-md-6">
                  <strong>Contraseña</strong>
                  <input
                    type="password"
                    class="form-control"
                    value="$2y$10$N15392Q6wudGQDwIBgUcA..tqS9xHvCPohnSYfcSpXLSYUwutC1Vi"
                    name="password"
                    style="text-align: justify;"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer" style="background: aliceblue;">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Cerrar</button
          >
          <button type="submit" class="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="ver26677799"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-mb" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #bd3434">
          <h5 class="modal-title" id="mediumModalLabel" style="color: white">
            Editar campos
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/editarusuario"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                  autocomplete="off"
                  value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                />
              </div>
              <input type="text" name="id" value="26677799" />
              <center style="margin-right: 40px;">
                <img
                  src="/img/voyer/perfil.png"
                  class="rounded-circle"
                  width="60px"
                  alt=""
                />
                <p style="text-align: center; margin-bottom: 0;">
                  <strong style="color: black">..::Fecha de Registro::..</strong
                  >
                </p>
                <p style="text-align: center;">12-03-2021</p>
              </center>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-user" /> Nombre</strong>
                  <div style="text-align: justify;">¿?</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Correo</strong>
                  <div style="text-align: justify;">alefrank.m@gmail.com</div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Cuenta PayPal</strong>
                  <div style="text-align: justify;" />
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-location-arrow" /> País</strong>
                  <div style="text-align: justify;" />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <strong>@Usuario</strong>
                  <input
                    class="form-control"
                    value="ALEFRANKIE"
                    name="usuarios"
                    style="text-align: justify;"
                  />
                </div>
                <div class="col-md-6">
                  <strong>Contraseña</strong>
                  <input
                    type="password"
                    class="form-control"
                    value="$2y$10$kDVbg3rO.zYs9bqvoWOrDefx35SuZsJ9Ogw.6dCPFkNHoo8k7QkfG"
                    name="password"
                    style="text-align: justify;"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer" style="background: aliceblue;">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Cerrar</button
          >
          <button type="submit" class="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="ver26677875"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-mb" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #bd3434">
          <h5 class="modal-title" id="mediumModalLabel" style="color: white">
            Editar campos
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/editarusuario"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                  autocomplete="off"
                  value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                />
              </div>
              <input type="text" name="id" value="26677875" />
              <center style="margin-right: 40px;">
                <img
                  src="/img/../fotoperfil/photo/7722c768-04a1-49e9-b879-f2640252f484/116291793_4734272079920000_3716024264845943923_o.jpg"
                  class="rounded-circle"
                  width="60px"
                  alt=""
                />
                <p style="text-align: center; margin-bottom: 0;">
                  <strong style="color: black">..::Fecha de Registro::..</strong
                  >
                </p>
                <p style="text-align: center;">25-03-2021</p>
              </center>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-user" /> Nombre</strong>
                  <div style="text-align: justify;">Fely Garcia</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Correo</strong>
                  <div style="text-align: justify;">fgarciag97@gmail.com</div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Cuenta PayPal</strong>
                  <div style="text-align: justify;">fgarciag97@gmail.com</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-location-arrow" /> País</strong>
                  <div style="text-align: justify;">Venezuela</div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <strong>@Usuario</strong>
                  <input
                    class="form-control"
                    value="FGARCIAG97"
                    name="usuarios"
                    style="text-align: justify;"
                  />
                </div>
                <div class="col-md-6">
                  <strong>Contraseña</strong>
                  <input
                    type="password"
                    class="form-control"
                    value="$2y$10$p8q.b8CAQVoF38WD5i8Fse3/IEbjTTZr.aLJ/DrHk.7i97yDB.FJi"
                    name="password"
                    style="text-align: justify;"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer" style="background: aliceblue;">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Cerrar</button
          >
          <button type="submit" class="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="ver27503872"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-mb" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background: #bd3434">
          <h5 class="modal-title" id="mediumModalLabel" style="color: white">
            Editar campos
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-body">
            <form
              method="post"
              accept-charset="utf-8"
              role="form"
              action="/admin/editarusuario"
            >
              <div style="display:none;">
                <input type="hidden" name="_method" value="POST" /><input
                  type="hidden"
                  name="_csrfToken"
                  autocomplete="off"
                  value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
                />
              </div>
              <input type="text" name="id" value="27503872" />
              <center style="margin-right: 40px;">
                <img
                  src="/img/../fotoperfil/photo/d930c6dc-c5f9-48bf-9df8-73f5f85a43f9/photo_2021-03-17_08-02-02.jpg"
                  class="rounded-circle"
                  width="60px"
                  alt=""
                />
                <p style="text-align: center; margin-bottom: 0;">
                  <strong style="color: black">..::Fecha de Registro::..</strong
                  >
                </p>
                <p style="text-align: center;">25-03-2021</p>
              </center>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-user" /> Nombre</strong>
                  <div style="text-align: justify;">Luis Leal</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Correo</strong>
                  <div style="text-align: justify;">luisleal98e@gmail.com</div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">
                  <strong><i class="fa fa-at" /> Cuenta PayPal</strong>
                  <div style="text-align: justify;">luisleal98e@gmail.com</div>
                </div>
                <div class="col-md-6">
                  <strong><i class="fa fa-location-arrow" /> País</strong>
                  <div style="text-align: justify;">Venezuela</div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <strong>@Usuario</strong>
                  <input
                    class="form-control"
                    value="LUISLEAL98E"
                    name="usuarios"
                    style="text-align: justify;"
                  />
                </div>
                <div class="col-md-6">
                  <strong>Contraseña</strong>
                  <input
                    type="password"
                    class="form-control"
                    value="$2y$10$5zaoF34R3wGxbBAw7lv52Ov4PGv3y.3DowpzDdMs2mEKQYwUdDCku"
                    name="password"
                    style="text-align: justify;"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer" style="background: aliceblue;">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"
            >Cerrar</button
          >
          <button type="submit" class="btn btn-info">Editar</button>
        </div>
      </div>
    </div>
  </div>
</div>
