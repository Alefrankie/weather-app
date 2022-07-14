/* eslint-disable @typescript-eslint/no-explicit-any */
const headers = new Headers({
	'Content-Type': 'application/json',
	Accept: '*/*',
	origin: '*'
})

// create new Headers

// const HOST = 'http://192.168.138.210:3000'
// const HOST = 'http://localhost:3001'
const HOST = 'https://magical-jewel-production.up.railway.app'
// const HOST = window.location.protocol + window.location.host

export const Get = async ({ url }: { url: string }) => {
	const res = await fetch(HOST + url, {
		method: 'GET',
		headers,
		credentials: 'include'
	})

	const data = await res.json()

	if (!res.ok) throw new Error(data.message)

	return data || {}
}

export const Post = async ({ url, body }) => {
	const res = await fetch(HOST + url, {
		method: 'POST',
		headers,
		body: JSON.stringify(body),
		credentials: 'include'
	})

	const data = await res.json()

	if (!res.ok) throw new Error(data.message)

	return data || {}
}

export const Put = async ({ url, body }) => {
	const res = await fetch(HOST + url, {
		method: 'PUT',
		headers,
		body: JSON.stringify(body)
	})

	const data = await res.json()

	if (!res.ok) throw new Error(data.message)

	return data || {}
}
export const Patch = async ({ url, body }) => {
	const res = await fetch(HOST + url, {
		method: 'PATCH',
		headers,
		body: JSON.stringify(body)
	})

	const data = await res.json()

	if (!res.ok) throw new Error(data.message)

	return data || {}
}

export const Delete = async ({ url, body = {} }) => {
	const res = await fetch(HOST + url, {
		method: 'DELETE',
		headers,
		body: JSON.stringify(body)
	})

	const data = await res.json()

	if (!res.ok) throw new Error(data.message)

	return data || {}
}

export const http = { Get, Post, Put, Patch, Delete }
