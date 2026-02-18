export default function showHide(showTarget, hideTarget) {
  if (showTarget) {
    showTarget.classList.remove("hidden");
    showTarget.style.visibility = "unset";
  }
  if (hideTarget) {
    hideTarget.classList.add("hidden");
    hideTarget.style.visibility = "hidden";
  }
}
