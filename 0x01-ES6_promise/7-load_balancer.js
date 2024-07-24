export default async function loadBalancer(download1, download2) {
    const fastest = await Promise.race([download1, download2]);

    return (fastest);
}