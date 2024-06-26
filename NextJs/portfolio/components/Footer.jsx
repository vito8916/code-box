const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={'container md:mx-auto border-t border-silver-n60 flex flex-col justify-center items-center gap-2 py-6'}>
            <p>© Code Box. {currentYear} All rights reserved</p>
        </footer>
    );
};

export default Footer;