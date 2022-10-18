const Navbar = () => {

    const styles = {
        logo: "text-center",
        swich: "col-start-6 col-span-2",
    }
    return (
        <div className="flex items-center justify-center my-0 fixed w-full">
            <div className="bg-white shadow-2xl rounded-2xl h-16 my-3 w-5/6" >
                <div className={styles.logo}>Logo</div>

            </div>
        </div>

    )
}

export default Navbar;