import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import carouselImage1 from './assets/carousel1.jpg';
import carouselImage2 from './assets/carousel2.jpg';
import carouselImage3 from './assets/carousel3.jpg';

export const NAVBAR_TITLE = 'Your Name';

export const MAIN_HERO_DATA = {
    title: "Hi, I'm Your Name",
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sequi enim! ' +
        'Autem, aliquam assumenda veritatis dolore architecto vitae molestiae natus.',
    buttons: [
        {
            text: 'GitHub',
            location: 'https://github.com/tnt10128'
        },
        {
            text: 'Twitter',
            location: 'https://twitter.com'
        }
    ]
};

export const SKILLS_DATA = {
    title: 'Skills',
    description:
        'The skills section of my portfolio website showcases my technical and creative ' +
        'skills. By presenting my abilities in a clear and concise way, I demonstrate the value that I ' +
        'can bring to any project or team.',
    table: [
        {
            name: 'Rust',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit!'
        },
        {
            name: 'Go',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit!'
        },
        {
            name: 'JavaScript',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit!'
        },
        {
            name: 'Node.js',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit!'
        },
        {
            name: 'React',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit!'
        },
        {
            name: 'MongoDB',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit!'
        },
        {
            name: 'Express',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit!'
        }
    ]
};

export const PROJECTS_DATA = {
    title: 'Screenshots',
    description:
        'This section displays images of the work that I have completed, demonstrating my ' +
        'expertise and experience in my field. It provides potential clients or collaborators ' +
        'with a visual representation of the quality and scope of my work, and showcases my ' +
        'ability to deliver outstanding results.',
    images: [carouselImage1, carouselImage2, carouselImage3]
};

export const CONTACT_DATA = {
    title: 'Get in touch',
    description: 'You can contact me through the following:',
    buttons: [
        {
            name: 'Email',
            link: 'mailto:example@example.com'
        },
        {
            name: 'Discord',
            link: 'https://discord.com'
        }
    ]
};

export const FOOTER_TEXT = '© 2023 Your Name';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
