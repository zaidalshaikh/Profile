// Array of links with their names and URLs
const links = [
    { name: "Phone", url: "tel:+962788850531" },
    { name: "Instgram", url: "https://www.instagram.com/zaidalshaikh.05/" },
    { name: "Facebook", url: "https://www.facebook.com/zaid.alshaiskh" },
    { name: "Whatsapp", url: "https://wa.me/962788850531" },
    { name: "Snapchat", url: "https://snapchat.com/t/6ObtCtIF" },
     { name: "LinkedIn", url: "https://www.linkedin.com/in/zaidalshaikh", icon: "fa-brands fa-linkedin" }
];

// Function to generate links dynamically
function generateLinks() {
    const linksContainer = document.getElementById("links");

    // Loop through the links array and create <a> elements
    links.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.textContent = link.name;
        linkElement.target = "_blank"; // Open links in a new tab
        linksContainer.appendChild(linkElement);
    });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", generateLinks);
