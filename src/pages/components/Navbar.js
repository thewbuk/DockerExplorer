const Navbar = () => {

    const styles = {
        logo: "col-start-2 col-span-4 text-center",
        swich: "col-start-6 col-span-2",
    }
    return (
        <div className="fixed top-0 bg-white w-screen shadow-md rounded-2xl grid grid-cols-6 h-16" >
            <div className={styles.logo}>Logo</div>

        </div>
    )
}

export default Navbar;