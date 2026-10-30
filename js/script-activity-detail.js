
document.addEventListener("DOMContentLoaded", () => {

    const shareButton = document.getElementById("shareActivity");
    const copyButton = document.getElementById("copyLink");
    const toast = document.getElementById("detailToast");
    const toastMessage = document.getElementById("toastMessage");

    function showToast(message) {
        if (!toast || !toastMessage) return;

        toastMessage.textContent = message;

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }

    if (copyButton) {

        copyButton.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(window.location.href);

                showToast("Activity link copied!");

            } catch (error) {

                const temporaryInput = document.createElement("input");

                temporaryInput.value = window.location.href;

                document.body.appendChild(temporaryInput);

                temporaryInput.select();

                document.execCommand("copy");

                temporaryInput.remove();

                showToast("Activity link copied!");

            }

        });

    }

    if (shareButton) {

        shareButton.addEventListener("click", async () => {

            const shareData = {
                title: document.title,
                text: "Check out this CGC activity!",
                url: window.location.href
            };

            if (navigator.share) {

                try {

                    await navigator.share(shareData);

                } catch (error) {

                    if (error.name !== "AbortError") {
                        showToast("Unable to share activity.");
                    }

                }

            } else {

                try {

                    await navigator.clipboard.writeText(window.location.href);

                    showToast("Activity link copied!");

                } catch (error) {

                    showToast("Unable to copy link.");

                }

            }

        });

    }

});