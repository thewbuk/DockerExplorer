const Navbar = () => {

    const styles = {
        logo: "text-center",
        swich: "col-start-6 col-span-2",
        container: 'flex items-center justify-center w-full',
        navbar: 'bg-white shadow-2xl rounded-2xl h-16 my-3 w-5/6',

    }
    return (
        <div className={styles.container}>
            <div className={styles.navbar} >
                <div className={styles.logo}>Logo</div>

            </div>
        </div>

    )
}

export default Navbar;