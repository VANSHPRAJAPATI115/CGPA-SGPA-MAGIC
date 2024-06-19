import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import './App.css'; // Import your CSS file

function TextForm() {
  const [creditEarned, setCreditEarned] = useState('');
  const [pointScored, setPointScored] = useState('');
  const [cgpa, setCgpa] = useState(null);
  const [showCgpaResult, setShowCgpaResult] = useState(false);

  const [semesterCredits, setSemesterCredits] = useState('');
  const [semesterPoints, setSemesterPoints] = useState('');
  const [sgpa, setSgpa] = useState(null);
  const [showSgpaResult, setShowSgpaResult] = useState(false);

  const handleCreditEarnedChange = (e) => {
    setCreditEarned(e.target.value);
  };

  const handlePointScoredChange = (e) => {
    setPointScored(e.target.value);
  };

  const handleSemesterCreditsChange = (e) => {
    setSemesterCredits(e.target.value);
  };

  const handleSemesterPointsChange = (e) => {
    setSemesterPoints(e.target.value);
  };

  const calculateCGPA = () => {
    const credit = parseFloat(creditEarned);
    const points = parseFloat(pointScored);

    if (!isNaN(credit) && !isNaN(points) && credit !== 0) {
      const result = points / credit;
      setCgpa(result.toFixed(2));
      setShowCgpaResult(true);
    } else {
      alert('Please enter valid numbers for both fields and ensure credit earned is not zero.');
    }
  };

  const calculateSGPA = () => {
    const semesterCredit = parseFloat(semesterCredits);
    const semesterPoint = parseFloat(semesterPoints);

    if (!isNaN(semesterCredit) && !isNaN(semesterPoint) && semesterCredit !== 0) {
      const result = semesterPoint / semesterCredit;
      setSgpa(result.toFixed(2));
      setShowSgpaResult(true);
    } else {
      alert('Please enter valid numbers for both fields and ensure semester credits are not zero.');
    }
  };

  const hideResults = () => {
    setShowCgpaResult(false);
    setShowSgpaResult(false);
    setCgpa(null);
    setSgpa(null);
    setCreditEarned('');
    setPointScored('');
    setSemesterCredits('');
    setSemesterPoints('');
  };

  return (
    <div className="converter-wrapper">
      <div className="converter">
        <h2><i>CALCULATE YOUR CGPA</i></h2>
        <div className="input-group">
          <label>Total Points Scored (Present + Previous) Semester:</label>
          <input
            type="text"
            value={pointScored}
            onChange={handlePointScoredChange}
          />
        </div>
        <div className="input-group">
          <label>Total Credit Earned (Present + Previous) Semester:</label>
          <input
            type="text"
            value={creditEarned}
            onChange={handleCreditEarnedChange}
          />
        </div>
        <button onClick={showCgpaResult ? hideResults : calculateCGPA}>
          {showCgpaResult ? 'Hide Result' : 'Calculate CGPA'}
        </button>
        {showCgpaResult && cgpa !== null && (
          <div className="result">
            <h3>Your CGPA: {cgpa}</h3>
          </div>
        )}
      </div>

      <div className="converter">
        <h2><i>CALCULATE YOUR SGPA</i></h2>
        <div className="input-group">
          <label>Point Scored in Present Semester:</label>
          <input
            type="text"
            value={semesterPoints}
            onChange={handleSemesterPointsChange}
          />
        </div>
        <div className="input-group">
          <label>Credits Earned in Present Semester:</label>
          <input
            type="text"
            value={semesterCredits}
            onChange={handleSemesterCreditsChange}
          />
        </div>
        <button onClick={showSgpaResult ? hideResults : calculateSGPA}>
          {showSgpaResult ? 'Hide Result' : 'Calculate SGPA'}
        </button>
        {showSgpaResult && sgpa !== null && (
          <div className="result">
            <h3>Your SGPA: {sgpa}</h3>
          </div>
        )}
      </div>

      <div className="note">
        <p><FontAwesomeIcon icon={faThumbtack} /> <b>Note:</b> If you want to know the CGPA of the semester you are in, you need to add the total marks from the first semester to the current semester. Enter those marks in the text box.</p>
      </div>
    </div>
  );
}

export default TextForm;
