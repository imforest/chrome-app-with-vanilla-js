function handleOffline() {
    console.log("You're offline.");
}
function handleOnline() {
    console.log("Welcome back!");
}
window.addEventListener("online", handleOnline);
window.addEventListener("onoffline", handleOffline);