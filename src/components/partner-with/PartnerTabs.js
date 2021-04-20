import React, {useRef, useState} from 'react';
import styles from './whoWePartnerWith.styles';
import gsap from 'gsap';

const PartnerTabs = ({sections, handleChange}) => {
    const wrapperRef = useRef(null);
    const activeEl = useRef(null);
    const [activeSection, setActiveSection] = useState(sections[0])
    function renderSections() {
        return sections.map(section => {
            return <PartnerButton key={`index-${section}`} section={section} handleClick={handleClick} activeSection={activeSection} />
        })
    }

    function handleClick(e) {
        const wrapperPositionX = wrapperRef.current.getBoundingClientRect().x
        const xPos = e.target.getBoundingClientRect().x - wrapperPositionX - 10
        setActiveSection(e.target.innerText)
        handleChange(e, sections.indexOf(e.target.innerText))
        // gsap.to(activeEl.current, {x: xPos, duration: 0.4, ease: 'back'});

        gsap.to(activeEl.current, {keyframes: [
            {scale: 0.75, duration: 0.15, ease: 'power1.out'},
            {x: xPos, duration: 0.2, ease: 'power1.out'},
            {scale: 1, duration: 0.15, ease: 'power1.out'},
          ]});
    }

    return (
        <div ref={wrapperRef} className='partner-tabs-wrapper'>
            <div ref={activeEl} className='active-indicator' />
            {renderSections()}
        </div>
    );
};

const PartnerButton = ({section, handleClick, activeSection}) => {
    return (
        <button 
            onClick={handleClick} 
            className={`section-button ${activeSection === section ? 'active' : ''}`} 
        >
        {section}
    </button>
    )
}

export default PartnerTabs;