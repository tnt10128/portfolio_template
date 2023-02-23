import background from './assets/background.jpg';
import { MAIN_HERO_DATA } from './main';

export default function Hero() {
    return (
        <div
            className="min-h-screen hero"
            style={{ backgroundImage: `url("${background}")` }}
            id="hero"
        >
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{MAIN_HERO_DATA.title}</h1>
                    <p className="mb-5">{MAIN_HERO_DATA.description}</p>
                    <span className="flex justify-center">
                        {MAIN_HERO_DATA.buttons.map(btn => (
                            <a className="mr-1 btn btn-primary" href={btn.location}>
                                {btn.text}
                            </a>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
}
