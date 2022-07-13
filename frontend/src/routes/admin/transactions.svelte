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
								<div class="stat-text">Pendientes</div>
								<div class="stat-heading" style="color: #455a64">
									Total:<span class="count">5</span>
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
								<div class="stat-text">Total por pagar</div>
								<div class="stat-heading" style="color: #455a64">
									$<span class="count">7278</span>
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
						<form method="post" accept-charset="utf-8" role="form" action="/admin/pendientes">
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
									placeholder="Usuario..."
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
						<strong class="card-title"> Lista de Usuarios pendientes por acreditar </strong>
					</div>
					<div class="table-stats order-table ov-h">
						<table class="table ">
							<thead>
								<tr>
									<th style="text-align: center;"> Avatar </th>
									<th> Nombre </th>
									<th> Usuario </th>
									<th> ¿Posee Paypal? </th>
									<th style="text-align: center;"> Neto </th>
									<th style="text-align: center;"> Comisión </th>
									<th style="text-align: center;"> A Pagar </th>
									<th style="text-align: center; width: 15%;"> Opciones </th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td style="text-align: center;">
										<div class="round-img">
											<a href="#/">
												<img
													src="/img/../fotoperfil/photo/7722c768-04a1-49e9-b879-f2640252f484/116291793_4734272079920000_3716024264845943923_o.jpg"
													class="rounded-circle"
													alt=""
												/>
											</a>
										</div>
									</td>
									<td>
										<span class="name"> Fely Garcia </span>
									</td>
									<td> @FGARCIAG97 </td>
									<td> Si </td>
									<td style="text-align: center;"> $1609.48 </td>
									<td style="text-align: center;"> $160.95 (10%) </td>
									<td style="text-align: center;"> $1448.53 </td>
									<td style="text-align: center;">
										<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
											<input name="cmd" type="hidden" value="_xclick" />
											<input name="business" type="hidden" value="fgarciag97@gmail.com" />
											<input name="undefined_quantity" type="hidden" value="1" />
											<input name="item_name" type="hidden" value="Pago Membresías VoyerClub" />
											<input name="item_number" type="hidden" value="VoyerClub" />
											<input name="amount" type="hidden" value="1448.532" />
											<input name="shipping" type="hidden" value="0.00" />
											<input name="no_shipping" type="hidden" value="1" />
											<input name="cn" type="hidden" value="Comments" />
											<input name="currency_code" type="hidden" value="USD" />
											<input name="lc" type="hidden" value="US" />
											<input name="bn" type="hidden" value="PP-BuyNowBF" />
											<input
												name="return"
												type="hidden"
												value="https://web.voyerclub.ga/admin/procesar/26677875/17/1609.48/160.948/0.1/1448.532"
											/>
											<input
												alt="VoyerClub"
												name="submit"
												src="/img/boton-paypal.png"
												type="image"
												style="width: 100%;"
											/>
										</form>
									</td>
								</tr>
								<tr>
									<td style="text-align: center;">
										<div class="round-img">
											<a href="#/">
												<img
													src="/img/../fotoperfil/photo/203a52d5-6068-46ff-98f9-b7eea9d5c947/Sinbad.png"
													class="rounded-circle"
													alt=""
												/>
											</a>
										</div>
									</td>
									<td>
										<span class="name"> Alefrank Martinez </span>
									</td>
									<td> @DIWAII </td>
									<td> Si </td>
									<td style="text-align: center;"> $1131.45 </td>
									<td style="text-align: center;"> $113.15 (10%) </td>
									<td style="text-align: center;"> $1018.31 </td>
									<td style="text-align: center;">
										<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
											<input name="cmd" type="hidden" value="_xclick" />
											<input name="business" type="hidden" value="luawd@gma.com" />
											<input name="undefined_quantity" type="hidden" value="1" />
											<input name="item_name" type="hidden" value="Pago Membresías VoyerClub" />
											<input name="item_number" type="hidden" value="VoyerClub" />
											<input name="amount" type="hidden" value="1018.305" />
											<input name="shipping" type="hidden" value="0.00" />
											<input name="no_shipping" type="hidden" value="1" />
											<input name="cn" type="hidden" value="Comments" />
											<input name="currency_code" type="hidden" value="USD" />
											<input name="lc" type="hidden" value="US" />
											<input name="bn" type="hidden" value="PP-BuyNowBF" />
											<input
												name="return"
												type="hidden"
												value="https://web.voyerclub.ga/admin/procesar/26677798/11/1131.45/113.145/0.1/1018.305"
											/>
											<input
												alt="VoyerClub"
												name="submit"
												src="/img/boton-paypal.png"
												type="image"
												style="width: 100%;"
											/>
										</form>
									</td>
								</tr>
								<tr>
									<td style="text-align: center;">
										<div class="round-img">
											<a href="#/">
												<img
													src="/img/../fotoperfil/photo/d930c6dc-c5f9-48bf-9df8-73f5f85a43f9/photo_2021-03-17_08-02-02.jpg"
													class="rounded-circle"
													alt=""
												/>
											</a>
										</div>
									</td>
									<td>
										<span class="name"> Luis Leal </span>
									</td>
									<td> @LUISLEAL98E </td>
									<td> Si </td>
									<td style="text-align: center;"> $4358.65 </td>
									<td style="text-align: center;"> $435.87 (10%) </td>
									<td style="text-align: center;"> $3922.79 </td>
									<td style="text-align: center;">
										<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
											<input name="cmd" type="hidden" value="_xclick" />
											<input name="business" type="hidden" value="luisleal98e@gmail.com" />
											<input name="undefined_quantity" type="hidden" value="1" />
											<input name="item_name" type="hidden" value="Pago Membresías VoyerClub" />
											<input name="item_number" type="hidden" value="VoyerClub" />
											<input name="amount" type="hidden" value="3922.785" />
											<input name="shipping" type="hidden" value="0.00" />
											<input name="no_shipping" type="hidden" value="1" />
											<input name="cn" type="hidden" value="Comments" />
											<input name="currency_code" type="hidden" value="USD" />
											<input name="lc" type="hidden" value="US" />
											<input name="bn" type="hidden" value="PP-BuyNowBF" />
											<input
												name="return"
												type="hidden"
												value="https://web.voyerclub.ga/admin/procesar/27503872/5/4358.65/435.865/0.1/3922.785"
											/>
											<input
												alt="VoyerClub"
												name="submit"
												src="/img/boton-paypal.png"
												type="image"
												style="width: 100%;"
											/>
										</form>
									</td>
								</tr>
								<tr>
									<td style="text-align: center;">
										<div class="round-img">
											<a href="#/">
												<img
													src="/img/../fotoperfil/photo/2320c31c-bc20-45c7-8918-eeed5e3a48d9/124324389_120409983015999_8820865244548534138_n.jpg"
													class="rounded-circle"
													alt=""
												/>
											</a>
										</div>
									</td>
									<td>
										<span class="name"> Jose Sanchez. </span>
									</td>
									<td> @JOSEFSANCHEZ2511 </td>
									<td> Si </td>
									<td style="text-align: center;"> $979.06 </td>
									<td style="text-align: center;"> $97.91 (10%) </td>
									<td style="text-align: center;"> $881.15 </td>
									<td style="text-align: center;">
										<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
											<input name="cmd" type="hidden" value="_xclick" />
											<input
												name="business"
												type="hidden"
												value="sb-uuzv97089897@personal.example.com"
											/>
											<input name="undefined_quantity" type="hidden" value="1" />
											<input name="item_name" type="hidden" value="Pago Membresías VoyerClub" />
											<input name="item_number" type="hidden" value="VoyerClub" />
											<input name="amount" type="hidden" value="881.154" />
											<input name="shipping" type="hidden" value="0.00" />
											<input name="no_shipping" type="hidden" value="1" />
											<input name="cn" type="hidden" value="Comments" />
											<input name="currency_code" type="hidden" value="USD" />
											<input name="lc" type="hidden" value="US" />
											<input name="bn" type="hidden" value="PP-BuyNowBF" />
											<input
												name="return"
												type="hidden"
												value="https://web.voyerclub.ga/admin/procesar/25457921/2/979.06/97.906/0.1/881.154"
											/>
											<input
												alt="VoyerClub"
												name="submit"
												src="/img/boton-paypal.png"
												type="image"
												style="width: 100%;"
											/>
										</form>
									</td>
								</tr>
								<tr>
									<td style="text-align: center;">
										<div class="round-img">
											<a href="#/">
												<img src="/img/voyer/perfil.png" class="rounded-circle" alt="" />
											</a>
										</div>
									</td>
									<td>
										<span class="name"> ¿? </span>
									</td>
									<td> @ALEFRANKIE </td>
									<td> No </td>
									<td style="text-align: center;"> $7.16 </td>
									<td style="text-align: center;"> $0.72 (10%) </td>
									<td style="text-align: center;"> $6.44 </td>
									<td style="text-align: center;">
										<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
											<input name="cmd" type="hidden" value="_xclick" />
											<input name="business" type="hidden" value="" />
											<input name="undefined_quantity" type="hidden" value="1" />
											<input name="item_name" type="hidden" value="Pago Membresías VoyerClub" />
											<input name="item_number" type="hidden" value="VoyerClub" />
											<input name="amount" type="hidden" value="6.444" />
											<input name="shipping" type="hidden" value="0.00" />
											<input name="no_shipping" type="hidden" value="1" />
											<input name="cn" type="hidden" value="Comments" />
											<input name="currency_code" type="hidden" value="USD" />
											<input name="lc" type="hidden" value="US" />
											<input name="bn" type="hidden" value="PP-BuyNowBF" />
											<input
												name="return"
												type="hidden"
												value="https://web.voyerclub.ga/admin/procesar/26677799/2/7.16/0.716/0.1/6.444"
											/>
											<input
												alt="VoyerClub"
												name="submit"
												src="/img/boton-paypal.png"
												type="image"
												style="width: 100%;"
											/>
										</form>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="paginator">
							<ul class="pagination">
								<li class="previous disabled">
									<a 	href="#/"><span aria-hidden="true">&lt; Anterior</span></a>
								</li>
								<li class="next disabled"><a 	href="#/"><span aria-hidden="true">Siguiente &gt;</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
