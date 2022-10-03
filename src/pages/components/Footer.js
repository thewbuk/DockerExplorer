import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    return (
        <footer className="text-center text-black fixed bottom-0 shadow-md rounded-2xl w-screen background-green" >

            <div className="flex justify-center">
                <a href='https://github.com/thewbuk/DockerExplorer' target="_blank" rel="noreferrer" className='hover:text-blue-500'>
                    <GitHubIcon />
                </a>
                <a href='https://www.linkedin.com/in/wojciech-bandzerewicz/' target="_blank" rel="noreferrer" className='hover:text-blue-500'>
                    <LinkedInIcon />
                </a>
            </div>

            <div className="text-center text-gray-700  flex justify-center text-lg" >
                Made with ❤ by&nbsp; <a href='https://thewb.uk' target="_blank" rel="noreferrer" className='hover:text-blue-500 hover:underline'>thewb</a>
            </div>
        </footer >
    )
}

export default Footer