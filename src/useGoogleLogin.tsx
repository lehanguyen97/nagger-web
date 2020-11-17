import { useState, useEffect } from "react";

const loadGoogleApiScript = (callback: () => void): void => {
    const existingApiScript = document.getElementById("googleApiScript");

    if (!existingApiScript) {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/api.js";
        script.id = "googleApiScript";
        document.head.appendChild(script);

        script.onload = () => {
            if (callback) callback();
        }
    }

    if (existingApiScript && callback) callback();
}

const useGoogleLogin = () => {
    const [loaded, setLoaded] = useState(false);
    if (!loaded) {
        loadGoogleApiScript(() => {
            setLoaded(true);
        });
    }
}

export default useGoogleLogin;