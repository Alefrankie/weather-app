import { io } from 'socket.io-client'

export const socket = io('http://192.168.3.79:3001', { timeout: 1000 })
