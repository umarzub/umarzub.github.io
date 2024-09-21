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


const aboutText = "Recent Telecommunications Engineering Graduate with a strong academic track record and a deep passion for Artificial Intelligence (AI) and Machine Learning (ML). Proficient in Python, MATLAB, and C#, with practical experience in developing and deploying AI/ML models and solutions. Adept at applying advanced AI techniques such as Supervised Learning, Deep Learning, Reinforcement Learning, and Transfer Learning Processing to tackle complex problems and drive technological innovation. Demonstrated expertise in implementing cutting-edge ML algorithms, fine-tuning large language models, and integrating AI solutions into practical applications. Seeking opportunities to leverage AI and ML skills to contribute to groundbreaking projects and advance technology in the AI/ML field."


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
