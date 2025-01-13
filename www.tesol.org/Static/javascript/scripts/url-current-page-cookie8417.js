if (window.location.pathname != "/member-log-in-message/" && window.location.pathname != "/members-log-in/") {
    document.cookie = `currentUrl=${window.location.pathname};path=/`;
}