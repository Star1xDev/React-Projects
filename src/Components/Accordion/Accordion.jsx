import React, {useState} from 'react';
import "./Accordion.css";
import AccordionCard from './AccordionCard/AccordionCard';
import DATA from "./Data.js"

const Accordion = () => {

    const [selected, setSelected] = useState(null);
    const [multiSelection, setMultiSelection] = useState(false);
    const [multiSelected, setMultiSelected] = useState([]);
    console.log(multiSelected)
    return (
        <div className='accordion-container'>
            <div className="accordion-content">
                <button onClick={() => setMultiSelection(!multiSelection)}>Enable Multiselection</button>
                {DATA.map((item) => (
                    <AccordionCard key={item.id}
                        question={item.question}
                        answer={item.answer}
                        id={item.id}
                        selectedId={selected}
                        setSelected={setSelected}
                        multiSelection={multiSelection}
                        multiSelected={multiSelected}
                        setMultiSelected={setMultiSelected} />
                ))}
            </div>
        </div>
    );
}

export default Accordion;
