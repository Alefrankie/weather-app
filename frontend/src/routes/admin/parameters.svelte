<div class="content">
	<div class="animated fadeIn">
		<div class="row">
			<div class="col-lg-6">
				<div class="card">
					<div class="card-header">Parámetros de Pago</div>
					<div class="card-body card-block">
						<form method="post" accept-charset="utf-8" role="form" action="/admin/parametros/1">
							<div style="display:none;">
								<input type="hidden" name="_method" value="POST" /><input
									type="hidden"
									name="_csrfToken"
									autocomplete="off"
									value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
								/>
							</div>
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-addon">15 Dias</div>
									<input
										class="form-control"
										name="1"
										type="number"
										min="0"
										max="100"
										maxlength="3"
										value="50"
									/>
									<div class="input-group-addon">
										<i class="fa fa-percent" />
									</div>
								</div>

								<br />

								<div class="input-group">
									<div class="input-group-addon">1 Mes</div>
									<input
										class="form-control"
										name="2"
										type="number"
										min="0"
										max="100"
										maxlength="3"
										value="0"
									/>
									<div class="input-group-addon">
										<i class="fa fa-percent" />
									</div>
								</div>

								<br />

								<div class="input-group">
									<div class="input-group-addon">6 Meses</div>
									<input
										class="form-control"
										name="3"
										type="number"
										min="0"
										max="100"
										maxlength="3"
										value="50"
									/>
									<div class="input-group-addon">
										<i class="fa fa-percent" />
									</div>
								</div>

								<br />

								<div class="input-group">
									<div class="input-group-addon">1 Año</div>
									<input
										class="form-control"
										name="4"
										type="number"
										min="0"
										max="100"
										maxlength="3"
										value="100"
									/>
									<div class="input-group-addon">
										<i class="fa fa-percent" />
									</div>
								</div>
							</div>
							<div class="form-actions form-group">
								<button class="btn btn-lg btn-danger btn-block" type="submit">
									<i class="fa fa-refresh fa-lg" />
									<span id="payment-button-amount"> Actualizar </span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="card">
					<div class="card-header">Parámetros de Cobro</div>
					<div class="card-body card-block">
						<form method="post" accept-charset="utf-8" role="form" action="/admin/parametros/2">
							<div style="display:none;">
								<input type="hidden" name="_method" value="POST" /><input
									type="hidden"
									name="_csrfToken"
									autocomplete="off"
									value="f3ca23415a0f0e9c9391174e107d06c94b7f77ebb3f98cb936836ddc57ef103d01dad06b72ddecfe5a232cb16ca991aa510501705d53ddf6e357aba264dca859"
								/>
							</div>
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-addon">Porcentaje</div>
									<input
										class="form-control"
										name="cobro"
										type="number"
										min="0"
										max="100"
										maxlength="3"
										value="10"
									/>
									<div class="input-group-addon">
										<i class="fa fa-percent" />
									</div>
								</div>
							</div>
							<div class="form-actions form-group">
								<button class="btn btn-lg btn-danger btn-block" type="submit">
									<i class="fa fa-refresh fa-lg" />
									<span id="payment-button-amount"> Actualizar </span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
