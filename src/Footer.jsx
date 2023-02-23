import { FOOTER_TEXT } from './main';

export default function Footer() {
    return (
        <footer className="p-4 footer footer-center bg-base-300 text-base-content" id="footer">
            <div>{FOOTER_TEXT}</div>
        </footer>
    );
}
