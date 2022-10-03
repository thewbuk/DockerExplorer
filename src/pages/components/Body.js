import React, { useState, useRef, useEffect } from 'react';
const SearchbarDropdown = (props) => {
    const { options, onInputChange } = props;
    const ulRef = useRef();
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.addEventListener('click', (event) => {
            event.stopPropagation();
            ulRef.current.style.display = 'flex';
            onInputChange(event);
        });
        document.addEventListener('click', (event) => {
            ulRef.current.style.display = 'none';
        });
    }, []);
    return (
        <div className="search-bar-dropdown">
            <input
                id="search-bar"
                type="text"
                className="form-control border-solid border-2 border-gray-300 rounded-lg"
                placeholder="Search"
                ref={inputRef}
                onChange={onInputChange}
            />
            <ul id="results" className="flex-col" ref={ulRef}>
                {options.map((option, index) => {
                    return (
                        <button
                            type="button"
                            key={index}
                            onClick={(e) => {
                                inputRef.current.value = option;
                            }}
                            className="border-solid border-2 border-gray-300 rounded-md p-2 m-1 w-2/6 justify-center"
                        >
                            {option}
                        </button>
                    );
                })}
            </ul>
        </div>
    );
};

const defaultOptions = [];
for (let i = 0; i < 10; i++) {
    defaultOptions.push(`option ${i}`);
    defaultOptions.push(`suggesstion ${i}`);
    defaultOptions.push(`advice ${i}`);
}



const styles = {
    text: "text-center text-2xl",
    input1: "text-center text-2xl",
    input2: "text-center text-2xl",

}
const Body = () => {
    const [options, setOptions] = useState([]);
    const onInputChange = (event) => {
        setOptions(
            defaultOptions.filter((option) => option.includes(event.target.value))
        );
    };
    return (
        <div className="grid grid-cols-6 text-black text-2xl m-32">
            <div className="col-span-3">
                <div className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </div>
                <div className={styles.input1}></div>
                <div className={styles.input2}></div>
                <div className="App container mt-2 mb-3">
                    <h1>Search Bar Dropdown</h1>
                    <SearchbarDropdown options={options} onInputChange={onInputChange} />
                    <br />
                </div>

            </div>
        </div>
    )

}


export default Body