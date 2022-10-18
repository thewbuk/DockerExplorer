import React, { useState, useEffect } from "react";
import Select from "react-select";
import data from '../data/data.json';

function Body() {
    const [country, setCountry] = useState(null);
    const [lang, setLang] = useState(null);
    const [langList, setLangList] = useState([]);
    const [link, setLink] = useState("");

    // handle change event of the country dropdown

    const handleCountryChange = (obj) => {
        setCountry(obj);
        setLangList(obj.languages);
        setLang(null);
    };

    // handle change event of the language dropdown
    const handleLanguageChange = (obj) => {
        setLang(obj);
    };

    // generate the link when both dropdowns are selected
    useEffect(() => {
        if (country && lang) {
            setLink(`https://www.${country.url}/search?q=Clue+Mediator&gl=${country.country_code}&hl=${lang.code}`);
        }
    }, [country, lang]);

    return (
        <div className="">
            <div>
                <b>Country</b>
                <Select
                    placeholder="Select Country"
                    value={country}
                    options={data}
                    onChange={handleCountryChange}
                    getOptionLabel={x => x.region}
                    getOptionValue={x => x.country_code}
                />
                <br />
                {country ?
                    <div>
                        <b>Language</b>

                        <Select
                            placeholder="Select Language"
                            value={lang}
                            options={langList}
                            onChange={handleLanguageChange}
                            getOptionLabel={x => x.name}
                            getOptionValue={x => x.code}
                        />
                    </div>
                    : null}
            </div>
            <span><b>Link:</b> {country && lang ? link : '-'}</span>
        </div>
    );
}

export default Body;