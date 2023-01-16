export const useShare = () => {
    const canShare = ref(false)

    onMounted(() => {
        canShare.value = !!navigator.share
    })

    const share = (title: string, text: string, url: string) => {
        navigator.share({
            title,
            text,
            url
        })
    }

    return {
        share,
        canShare,
    }
}