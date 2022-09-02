document.addEventListener('DOMContentLoaded', (e) => {
    document.querySelectorAll('.page--link').forEach((link, idx) => {
        ["localhost", "127.0.0"].some((e) => document.URL.includes(e)) ? link.href = '/typography.html' : link.href = "/Transiris-Grid/typography.html";
    });
});