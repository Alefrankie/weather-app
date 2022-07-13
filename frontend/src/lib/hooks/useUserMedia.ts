const useUserMedia = (requestedMedia: any) => {
  let mediaStream = null as any

  const enableStream = async () => {
    try {
      const stream: any = await navigator.mediaDevices.getUserMedia(
        requestedMedia
      )
      mediaStream = stream
    } catch (err) {
      console.log(err)
    }
  }

  if (!mediaStream) {
    enableStream()
  } else {
    return function cleanup() {
      mediaStream.getTracks().forEach((track: any) => {
        track.stop()
      })
    }
  }
  return mediaStream
}

export default useUserMedia
