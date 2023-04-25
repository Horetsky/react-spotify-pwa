
const clientId = process.env.REACT_APP_CLIET_ID;
const authUrl = process.env.REACT_APP_AUTH_URL;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const loginDialog = process.env.REACT_APP_LOGIN_DIALOG;

const LoginForm = () => {
    const login = () => {
        getSpotifyLoginRequest()
    }
    const  getSpotifyLoginRequest = () => {
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-recently-played",
            "user-library-read",
            "user-library-modify",
            "user-follow-read",
            "user-follow-modify",
            "user-top-read",
            "playlist-modify-public",
            "playlist-modify-private"
        ];

        if (authUrl && clientId && redirectUri) {
            const url = `${authUrl}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope.join(
                    " "
                )}&show_dialog=${loginDialog}`;
            window.location.href = url;
        }
    }
    return (
        <button
            onClick={() => login()}
        >
            Login
        </button>
    );
};

export default LoginForm;