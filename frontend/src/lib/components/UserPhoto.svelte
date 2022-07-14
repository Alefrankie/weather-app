<script>
	import { session } from '$app/stores'
</script>

<main>
	<div class="details">
		<span>
			{$session.fullName}
		</span>

		<span>@{$session.username}</span>
	</div>

	<div class="avatar">
		<figure>
			<img src="/img/voyer/profile.png" alt="" />
		</figure>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.details {
		display: flex;
		font-size: 16px;
		flex-direction: column;

		span:nth-child(1) {
			font-weight: bold;
			color: var(--primary-color);
		}
		span:nth-child(2) {
			color: var(--text-primary-color);
		}

		@media (max-width: 1200px) {
			span {
				display: none;
			}
		}
	}

	.avatar {
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
	}

	img {
		object-fit: cover;
		object-position: top;
		width: 100%;
		height: 100%;
	}
</style>
