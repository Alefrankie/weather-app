<script>
</script>

<main>
	<a href="/points" class="points">50</a>
	<span class="description">¡ACUMULA PUNTOS POR CADA SUSCRIPCIÓN!</span>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 2rem;
		border-radius: 10px;
		padding: 2rem 0;

		background-color: var(--third-color);
	}

	span {
		margin: 0;
		padding: 0;
	}
	.points {
		font-size: 5rem;
		color: var(--primary-color);
		// border: 1px solid white;
		text-align: center;
		&:hover {
			color: var(--red-color);
		}
	}

	.description {
		color: var(--text-color);
		// border: 1px solid white;
		text-align: center;
	}
</style>
