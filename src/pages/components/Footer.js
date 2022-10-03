import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    return (
        <footer className="text-center text-black fixed bottom-0 shadow-md rounded-2xl my-8 mx-5 w-screen" >

            <div className="flex justify-center text-2xl">
                <a href='https://github.com/thewbuk/DockerExplorer' target="_blank" rel="noreferrer" className='hover:text-blue-500'>
                    <GitHubIcon sx={{ fontSize: 40 }} />
                </a>
                <a href='https://www.linkedin.com/in/wojciech-bandzerewicz/' target="_blank" rel="noreferrer" className='hover:text-blue-500'>
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                </a>
            </div>

            <div className="text-center text-gray-700  flex justify-center text-xl my-2" >
                Made with ❤ by&nbsp; <a href='https://thewb.uk' target="_blank" rel="noreferrer" className='hover:text-blue-500'>thewb</a>
            </div>
        </footer >
    )
}

export default Footer