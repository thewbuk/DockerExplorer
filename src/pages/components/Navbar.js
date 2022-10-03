const Navbar = () => {

    const styles = {
        logo: "col-start-2 col-span-4 text-center",
        swich: "col-start-6 col-span-2",
    }
    return (
        <div className="fixed top-0 bg-white w-screen shadow-md rounded-2xl grid grid-cols-6 h-16" >
            <div className={styles.logo}>Logo</div>
            <label for="toggleNine" class="flex items-center cursor-pointer select-none">
                <div class="relative">
                    <input type="checkbox" id="toggleNine" class="sr-only" />
                    <div class="block bg-[#EAEEFB] w-14 h-8 rounded-full"></div>
                    <div class="
         dot
         absolute
         left-1
         top-1
         bg-white
         w-6
         h-6
         rounded-full
         transition
         flex
         items-center
         justify-center
         ">
                        <span class="w-3 h-3 rounded-full bg-primary"></span>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Navbar;