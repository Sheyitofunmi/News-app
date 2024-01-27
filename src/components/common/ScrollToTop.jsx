import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Log the current pathname for debugging (optional)
        console.log(pathname);

        // Scroll to the top of the page with smooth behavior
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);

        // The dependency array ensures this effect runs whenever pathname changes

        // Add an event listener for beforeunload to scroll to the top on full reload
        const handleBeforeUnload = () => {
            window.scrollTo(0, 0);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [pathname]);

    return null; // This component doesn't render anything
};

export default ScrollToTop;
