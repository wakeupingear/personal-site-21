export function getAPIUrl(): string {
    if (window.location.hostname==="localhost") return "http://localhost:5000/";
    return "https://api.willfarhat.com:5000/";
}