// / <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		session: any
		authenticated: boolean
	}

	// interface Platform {}

	interface Session {
		_id: string | undefined
		fullName: string | undefined
		username: string | undefined
		password: string | undefined
		authenticated: boolean
	}
	// interface Stuff {}
}
