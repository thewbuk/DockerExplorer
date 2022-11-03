import React, { Component } from 'react';
import Typist from 'react-typist';
import { isMobile } from 'react-device-detect';
import { optionsFirst, optionsSecond, optionsThird } from '../data';
import Select from 'react-select';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import classnames from 'classnames';

const styles = {
    body: 'absolute w-full h-full',
    container: 'flex flex-col items-center justify-center m-w-full',
    header: 'text-center flex-col ',
    logo: 'text-4xl font-bold text-gray-800 my-8',
    description: 'text-gray-800 text-lg',
    green: 'text-green-500 text-3xl font-bold my-6',
    options: 'w-2/6',
    input: 'my-5 border-indigo-700 text-center',
    results: 'min-w-92'

}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //   dark: JSON.parse(localStorage.getItem('dark')) || false,
            //   fastType: JSON.parse(localStorage.getItem('fastType')) || false,
            firstOption: null,
            showSecond: false,
            secondOption: null,
            showThird: false,
            thirdOption: null,
            nb: '',
            usage: '',
            copied: false
        };
    }

    handleToggle = (evt) => {
        const { id } = evt.target;

        this.setState(
            prevState => ({ [id]: !prevState[id] }),
            () => {
                localStorage.setItem(id, this.state[id]);
            }
        );
    };

    onFirstChange = (selectedOption) => {
        if (this.state.secondOption) {
            this.setState({
                firstOption: selectedOption,
                showSecond: true,
                secondOption: null,
                showThird: false,
                nb: '',
                usage: ''
            });
        } else if (optionsSecond[selectedOption.value].length === 1) {
            this.setState({ firstOption: selectedOption, showSecond: true });
            this.onSecondChange(optionsSecond[selectedOption.value][0]);
        } else {
            this.setState({ firstOption: selectedOption, showSecond: true });
        }
    };

    onSecondChange = (selectedOption) => {
        if (selectedOption.usage) {
            this.setState({ nb: '', usage: '' }, () => {
                this.setState({
                    secondOption: selectedOption,
                    showThird: false,
                    nb: selectedOption.nb,
                    usage: selectedOption.usage,
                    thirdOption: null
                });
            });
        } else if (optionsThird[selectedOption.value].length === 1) {
            this.setState({
                secondOption: selectedOption,
                showThird: true,
                thirdOption: null,
                nb: '',
                usage: ''
            });
            this.onThirdChange(optionsThird[selectedOption.value][0]);
        } else {
            this.setState({
                secondOption: selectedOption,
                showThird: true,
                thirdOption: null,
                nb: '',
                usage: ''
            });
        }
    };

    onThirdChange = (selectedOption) => {
        this.setState({ nb: '', usage: '' }, () => {
            this.setState({
                thirdOption: selectedOption,
                nb: selectedOption.nb,
                usage: selectedOption.usage
            });
        });
    };

    onCopy = () => {
        this.setState({ copied: true }, () => {
            if (this.timeout) {
                clearInterval(this.timeout);
            }
            this.timeout = setTimeout(() => {
                this.setState({ copied: false });
            }, 1000);
        });
    };

    copyUsage = () => {
        const el = document.createElement('textarea');
        el.value = this.state.usage;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selected = document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        this.onCopy();

        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    };

    render() {
        const {
            dark,
            firstOption,
            secondOption,
            thirdOption,
            showSecond,
            showThird,
            fastType,
            nb,
            usage,
            copied
        } = this.state;
        const avgTypingDelay = fastType ? 0 : 50;

        return (
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        Docker Explorer
                    </div>
                    <div className={styles.description}>
                        Find the right commands you need without digging through the web.
                    </div>
                    <div className={styles.green}>
                        I want to:
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.options}>
                        <Select
                            placeholder="..."
                            className={styles.input}
                            classNamePrefix="options-select"
                            isSearchable={true}
                            onChange={this.onFirstChange}
                            value={firstOption}
                            options={optionsFirst}
                        />

                        {showSecond ? (
                            <Select
                                placeholder="..."
                                className={styles.input}
                                classNamePrefix="options-select"
                                isSearchable={true}
                                onChange={this.onSecondChange}
                                value={secondOption}
                                options={optionsSecond[firstOption.value]}
                            />
                        ) : null}

                        {showThird ? (
                            <Select
                                placeholder="..."
                                className="options-select"
                                classNamePrefix="options-select"
                                isSearchable={true}
                                onChange={this.onThirdChange}
                                value={thirdOption}
                                options={optionsThird[secondOption.value]}
                            />
                        ) : null}
                    </div>
                </div>
                <div className={[styles.container, styles.results]}>
                    <div className={classnames('home')}>
                        <div className="content">
                            {/* <div className>
                                        <h2 className="content__title  dark-white">
                                            Docker <span>Explorer</span>
                                        </h2>
                                        <p className="content__subtitle dark-grey">
                                            Find the right commands you need without digging through the web.
                                        </p>

                                        <div className="options">
                                            <h4 className="options__title">I want to:</h4>

                                            <Select
                                                placeholder="..."
                                                className="options-select"
                                                classNamePrefix="options-select"
                                                isSearchable={true}
                                                onChange={this.onFirstChange}
                                                value={firstOption}
                                                options={optionsFirst}
                                            />

                                            {showSecond ? (
                                                <Select
                                                    placeholder="..."
                                                    className="options-select"
                                                    classNamePrefix="options-select"
                                                    isSearchable={true}
                                                    onChange={this.onSecondChange}
                                                    value={secondOption}
                                                    options={optionsSecond[firstOption.value]}
                                                />
                                            ) : null}

                                            {showThird ? (
                                                <Select
                                                    placeholder="..."
                                                    className="options-select"
                                                    classNamePrefix="options-select"
                                                    isSearchable={true}
                                                    onChange={this.onThirdChange}
                                                    value={thirdOption}
                                                    options={optionsThird[secondOption.value]}
                                                />
                                            ) : null}
                                        </div>
                                    </div> */}
                            <div className={styles.container}>
                                <div
                                    className={`board__group board__group--1 ${isMobile && !usage ? ' d-none' : ''}`}
                                >
                                    <h2 className="board__title  dark-white">Usage</h2>
                                    <div className="board board--1">
                                        <pre>
                                            {usage.length ? (
                                                <Typist avgTypingDelay={avgTypingDelay} cursor={{ show: false }}>
                                                    {usage}
                                                </Typist>
                                            ) : (
                                                <div />
                                            )}
                                        </pre>
                                        {usage.length ? (
                                            <div className="copy">
                                                <span className={`copy__popover ${copied ? 'show' : ''}`}>
                                                    command copied
                                                </span>

                                                <ContentCopyIcon onClick={this.copyUsage} cursor="pointer" />
                                            </div>
                                        ) : null}
                                    </div>

                                    {nb ? (
                                        <div className="board__group board__group--2">
                                            <h2 className="board__title  dark-white">Note</h2>
                                            <div className="board board--2">
                                                <pre>
                                                    <Typist avgTypingDelay={avgTypingDelay} cursor={{ show: false }}>
                                                        {nb}
                                                    </Typist>
                                                </pre>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
