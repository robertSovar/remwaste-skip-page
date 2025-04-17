const Footer = (skip) => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-16">
            <div className="container mx-auto flex justify-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} RemWaste. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;