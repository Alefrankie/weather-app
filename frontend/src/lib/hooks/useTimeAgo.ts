import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
export const useTimeAgo = (date: Date) => {
	dayjs.extend(relativeTime)
	return dayjs(date).fromNow()
}
