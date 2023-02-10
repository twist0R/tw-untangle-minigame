import { makeStyles } from '@mui/styles';

export default makeStyles({
    minigameUntangleContainer: {
        width: '640px',
        height: '640px',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        pointerEvents: 'all',
        backgroundColor: 'rgb(34, 40, 49)'
    },
    minigameUntangleBreached: {
        width: '640px',
        height: '640px',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        pointerEvents: 'all',
        backgroundColor: 'rgb(34, 40, 49)'
    },
    minigameUntangleFinished: {
        width: '640px',
        height: '640px',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        pointerEvents: 'all',
        backgroundColor: 'rgb(34, 40, 49)'
    },
    minigameUntangleInnerContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    minigameUntangleGameContainer: {
        border: '35px solid rgb(34, 40, 49)',
        display: 'flex',
        position: 'relative',
        boxSizing: 'content-box',
        alignItems: 'center',
        borderRadius: '0.5vh',
        pointerEvents: 'all',
        backgroundColor: 'rgb(0, 34, 0)',
        "&::after": {
            top: '0px',
            width: '100%',
            height: '100%',
            content: '""',
            opacity: '0.05',
            zIndex: '5',
            position: 'absolute',
            animation: '120s ease 0s infinite normal none running static',
            background: 'url("https://becky.dev/assets/images/whitenoise-e05ce92bb85e9688f3fd742c6e4eb6bf.png") repeat',
            pointerEvents: 'none'
        }
    },
});