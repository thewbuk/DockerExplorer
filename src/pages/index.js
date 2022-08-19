import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import classNames from 'classnames';
import Select from 'react-select';
import { Footer, Nav } from '../components';


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={classNames('home')}>
        <div className="container home__container">
          <Nav mode={dark} onToggle={this.handleToggle} fastType={fastType} />
          <div className="content">
            <div className="row">
              <div className="col-5">
                <h2 className="content__title  dark-white">
                  Git <span>Command</span> Explorer
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
              </div>
              {/* <div className="col-7 boards">
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
                        <img
                          className="copy__image"
                          onClick={this.copyUsage}
                          src={clipboard}
                          alt="Clipboard"
                        />
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
              </div> */}
            </div>
          </div>
          <Footer dark={dark} />
        </div>
      </div>
    </div>
  )
}
