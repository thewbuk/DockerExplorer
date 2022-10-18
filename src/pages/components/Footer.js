import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    return (
        <div className="flex items-center justify-center my-6 bottom-0 fixed w-full">
            <div className=" text-white bottom-0 shadow-2xl  bg-white rounded-2xl w-4/6 text-center drop-shadow-2xl  py-2">


                <a href='https://github.com/thewbuk/DockerExplorer' target="_blank" rel="noreferrer" className='hover:text-blue-500 text-black'>
                    <GitHubIcon sx={{ fontSize: 30         }} />
                </a>
                <a href='https://www.linkedin.com/in/wojciech-bandzerewicz/' target="_blank" rel="noreferrer" className='hover:text-blue-500 text-black'>
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                </a>

            <div className="text-center text-gray-800 text-xl" >
                Made with ❤ by&nbsp; <a href='https://thewb.uk' target="_blank" rel="noreferrer" className='hover:text-blue-500'>thewb</a>
            </div>
        </div >
        </div>
    )
}

export default Footer