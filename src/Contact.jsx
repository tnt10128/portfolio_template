import { CONTACT_DATA } from './main';

export default function Contact() {
    return (
        <div className="hero min-h-[50vh]" id="contact">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{CONTACT_DATA.title}</h1>
                    <p className="py-6">{CONTACT_DATA.description}</p>
                    <span className="flex justify-center mb-5">
                        {CONTACT_DATA.buttons.map(btn => (
                            <a className="mr-1 btn btn-primary" href={btn.link}>
                                {btn.name}
                            </a>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
}
