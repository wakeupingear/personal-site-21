export async function ScrollTo(element: string, isPortrait?: boolean) {
    const elementToScrollTo = document.getElementById(element);
    if (elementToScrollTo !== null && (!isPortrait || true)) {
        setTimeout(() => {
            let y: number | undefined = elementToScrollTo.offsetTop + elementToScrollTo.clientHeight;
            window.scrollTo({
                top: y,
                left: 0,
                behavior: "smooth",
            });
        }, 80);
    }
}