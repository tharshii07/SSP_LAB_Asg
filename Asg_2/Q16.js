// 16. Write a JavaScript function to parse an URL.
function parseURL(url) {
 const parsedURL = new URL(url);
 
 return {
 protocol: parsedURL.protocol,
 hostname: parsedURL.hostname,
 port: parsedURL.port,
 pathname: parsedURL.pathname,
 search: parsedURL.search,
 hash: parsedURL.hash,
 username: parsedURL.username,
 password: parsedURL.password,
 origin: parsedURL.origin,
 };
}
// Example usage:
const url = "https://www.example.com:8080/path/to/page?query=string#section";
const parsedURL = parseURL(url);
console.log(parsedURL);