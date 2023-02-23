import { PROJECTS_DATA } from './main';

export default function Projects() {
    const carouselItems = [];
    const carouselButtons = [];

    for (let i = 0; i < PROJECTS_DATA.images.length; i++) {
        carouselItems.push(
            <div id={`item${i}`} className="w-full carousel-item">
                <img src={PROJECTS_DATA.images[i]} className="w-full rounded-xl" />
            </div>
        );

        carouselButtons.push(
            <a href={`#item${i}`} className="btn btn-xs">
                {i + 1}
            </a>
        );
    }

    return (
        <div className="min-h-screen hero bg-base-200" id="projects">
            <div className="text-center hero-content">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold">{PROJECTS_DATA.title}</h1>
                    <p className="py-6">{PROJECTS_DATA.description}</p>
                    <div className="w-10/12 carousel">{carouselItems}</div>
                    <div className="flex justify-center w-full py-2 gap-2">{carouselButtons}</div>
                </div>
            </div>
        </div>
    );
}
