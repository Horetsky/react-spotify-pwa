import './style.scss'

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
        <div className="login-form">
            <h1>Welcom to Music Portal</h1>
            <button
                onClick={() => login()}
                className="login-button"
            >
                Login with Spotify
            </button>
        </div>
    );
};

export default LoginForm;