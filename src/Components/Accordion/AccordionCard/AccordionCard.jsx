import React from 'react';
import "./AccordionCard.css";

const AccordionCard = ({
  id,
  question,
  answer,
  selectedId,
  setSelected,
  multiSelection,
  multiSelected,
  setMultiSelected
}) => {
  const handleShow = () => {
    if (multiSelection) {
      let items = [...multiSelected];

      if (items.includes(id)) {
        // If id is already in the array, remove it
        items = items.filter(item => item !== id);
      } else {
        // If id is not in the array, add it
        items.push(id);
      }

      console.log(items);
      setMultiSelected(items);
    } else {
      // Toggle selectedId for single selection
      setSelected(selectedId === id ? null : id);

      // Reset multiSelected when transitioning to single-selection mode
      setMultiSelected([]);
    }
  };

  return (
    <div className='accordion-card'>
      <div className="card-header" onClick={handleShow}>
        <h3 className="question">{question}</h3>
        <span className="show-answer">
          {multiSelected.includes(id) || (selectedId === id && !multiSelection) ? "-" : "+"}
        </span>
      </div>
      <div className={`card-body ${multiSelected.includes(id) || (selectedId === id && !multiSelection) ? "active" : ""}`}>
        <p className="answer">{answer}</p>
      </div>
    </div>
  );
}

export default AccordionCard;
