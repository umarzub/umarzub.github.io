const blogs = [
    {
        title: "AI and Studies: How I scored 3.7+ CGPA 📚 as an Engineering Student👨‍🎓",
        description: "Achieving a high CGPA in engineering is no small feat, especially when juggling multiple subjects...",
        link: "https://medium.com/@engineerumarzubairi/ai-and-studies-how-i-scored-3-7-cgpa-as-an-engineering-student-f3eecabdab6f"
    },
    {
        title: "Empowering the Visually Impaired: Creative Technologies for Enhanced Navigation",
        description: "Navigating the world without sight presents significant challenges. For the 2.2 billion people living ...",
        link: "https://medium.com/@engineerumarzubairi/empowering-the-visually-impaired-creative-technologies-for-enhanced-navigation-4ebd18821b96"
    }
];


const aboutText = "I'm an AI Engineer and a Data-Science Expert. I possess an Engineering Degree in Telecommunications. Technology has always been a part of my life, growing with all tech hobbies."


const aboutCont = document.getElementById('about-content');
aboutCont.textContent = aboutText


const blogContainer = document.getElementById('blog-cards');

blogs.forEach(blog => {
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');
    
    const blogTitle = document.createElement('h3');
    blogTitle.textContent = blog.title;
    
    const blogDescription = document.createElement('p');
    blogDescription.textContent = blog.description;
    
    const blogLink = document.createElement('a');
    blogLink.href = blog.link;
    blogLink.textContent = "Read more";
    
    blogCard.appendChild(blogTitle);
    blogCard.appendChild(blogDescription);
    blogCard.appendChild(blogLink);
    
    blogContainer.appendChild(blogCard);
});



function LinkedIn() {
    window.open("https://www.linkedin.com/in/umar-zubairi");
}

function WhatsApp() {
    window.open("https://wa.me/923260941361");
}

function Email() {
    window.open("mailto:engineerumarzubairi@gmail.com")
}

function Medium() {
    window.open("https://medium.com/@engineerumarzubairi")
}
