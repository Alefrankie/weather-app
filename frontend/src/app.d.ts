// / <reference types="@sveltejs/kit" />

/*
 * See https://kit.svelte.dev/docs/typescript
 * for information about these interfaces
 */
declare namespace App {
	interface Locals {
		session: any
		authenticated: boolean
	}

	// interface Platform {}

	interface Session {
		_id: string
		profilePhoto: string
		coverPhoto: string
		firstName: string
		lastName: string
		username: string
		subscriptions: []
		authenticated: boolean
	}

	// interface Stuff {}
}
