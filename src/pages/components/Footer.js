import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    return (
        <footer className="text-center text-black fixed bottom-0 shadow-md rounded-2xl w-screen background-green" >

            <div className="flex justify-center">
                <GitHubIcon />
                <LinkedInIcon />
            </div>

            <div className="text-center text-gray-700  flex justify-center" >
                thewb
            </div>
        </footer>
    )
}

export default Footer