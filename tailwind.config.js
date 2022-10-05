/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            spacing: {
                14: "3.5rem",
                "135px": "135px",
            },

            colors: {
                primary: {
                    400: "#1ED760",
                    500: "#18D760",
                },
                secondary: {
                    500: "#2D46B9",
                },
            },

            backgroundImage: (theme) => ({
                "spotify-theme": "url('/src/img/bursts.svg')",
                "spotify-theme-md": "url('/src/img/bursts-md.svg')",
                "spotify-theme-lg": "url('/src/img/bursts-lg.svg')",
            }),

            backgroundSize: {
                "175%": "175%",
                "195%": "195%",
            },

            backgroundPosition: {
                banner: "46% 4%",
                "banner-mobile": "top 25% center",
            },

            fontSize: {
                "9xl": "9rem",
            },
        },
    },
    plugins: [],
};
