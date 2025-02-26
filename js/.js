document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("main section");
    
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            
            sections.forEach(section => {
                section.style.display = "none";
            });
            
            document.getElementById(targetId).style.display = "block";
        });
    });
});
