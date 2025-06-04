import React, { useState } from "react";
import Slider from '../components/Slider';
import Dropdown from '../components/Dropdown';
import Tooltip from '../components/Tooltip';
import ClipLoader from "react-spinners/ClipLoader";
import './Home.css';

export default function Home() {
  // Age
  const [p_age, setPAge] = useState(18);

  // Mother's education
  const [p_Medu, setPMedu] = useState(4);
  const cat_Medu = [
    { label: 'None', value: 0 },
    { label: 'Primary Education (4th grade)', value: 1 },
    { label: '5th to 9th grade', value: 2 },
    { label: 'Secondary Education', value: 3 },
    { label: 'Higher Education', value: 4 },
  ];

  // Weekly study time
  const [p_studytime, setPStudytime] = useState(5);

  // Past class failures
  const [p_failures, setPFailures] = useState(0);

  // Free time after school
  const [p_freetime, setPFreetime] = useState(3);

  // Going out with friends
  const [p_goout, setPGoout] = useState(3);

  // Current health status
  const [p_health, setPHealth] = useState(5);

  // Number of school absences
  const [p_absences, setPAbsences] = useState(0);


  const [results, setResults] = useState({});
  const [loading, setLoading] = useState({});

  const modelEndpoints = {
    polyreg: "predict/polyreg",
    rforest: "predict/rforest",
    mlp: "predict/mlp",
  };

  const handleSubmit = () => {
    const inputs = { 
      failures: p_failures, 
      absences: p_absences, 
      goout: p_goout, 
      age: p_age,
      health: p_health,
      freetime: p_freetime,
      studytime: p_studytime,
      Medu: p_Medu,
    };

    setResults({});
    setLoading({ polyreg: true, rforest: true, mlp: true });

    Object.entries(modelEndpoints).forEach(([model, url]) => {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      })
        .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.detail || "Server error");
        }
        const data = await res.json();
        setResults((prev) => ({ ...prev, [model]: data.result }));
      })
      .catch((err) => {
        console.error(`Error in ${model}:`, err.message);
        setResults((prev) => ({ ...prev, [model]: `Error: ${err.message}` }));
      })
      .finally(() => {
        setLoading((prev) => ({ ...prev, [model]: false }));
      });
  });
};

  return (
    <div style={{ padding: "1rem" }}>
      <div className="hook">
        <center>
          <h1>Grades made predictable!</h1>
          <p>Enter key student metrics to see predicted final grades using different machine learning models. <br />Powered by real data from 399 students.</p>
        </center>
      </div>

      <div className="container">
        <div className="parameters">
          <center><h2>Parameters</h2></center>
          <Slider label="Number of Past Failures:" info="Number of past academically failed classes by the student" value={p_failures} setValue={setPFailures} min={0} max={3} />
          <Slider label="Number of School Absences:" info="Total number of school absences" value={p_absences} setValue={setPAbsences} min={0} max={93} />
          <Slider label="Going Out with Friends:" info="How frequently the student goes out with friends, where 5 is most frequently" value={p_goout} setValue={setPGoout} min={1} max={5} />
          <Slider label="Age:" info="Student's age, in years" value={p_age} setValue={setPAge} min={15} max={22} />
          <Slider label="Health Status:" info="Student's current self-perceived health status, where 5 is best" value={p_health} setValue={setPHealth} min={1} max={5} />
          <Slider label="Free Time After School:" info="How much free time the student has after school, where 5 is a lot" value={p_freetime} setValue={setPFreetime} min={1} max={5} />
          <Slider label="Weekly Study Time:" info="Average time spent by the student studying per week, in hours" value={p_studytime} setValue={setPStudytime} min={1} max={10} />
          <Dropdown label="Mother's Education:" info="Highest level of education achieved by the student's mother" selected={p_Medu} onChange={setPMedu} options={cat_Medu} />

          <center>
            <button className='button' onClick={handleSubmit} style={{ marginTop: "1rem" }}>Predict</button>
            <br /><br />
            <div className="fine-print">From all of the available parameters, these 8 were chosen as the most important</div>
          </center>
        </div>

        <div className="prediction">

          <center><h2>Prediction</h2></center>
          <div className="prediction-container">
            <div className="prediction-box">
              <h3>Polynomial Regression</h3>
              {loading.polyreg ? (
                <ClipLoader size={20} color="#ff8a00" />
              ) : typeof results.polyreg === "number" ? (
                <>
                  <span className="result-success">{results.polyreg}</span>
                  <span> / 20</span>
                </>
              ) : (
                <span className="result-error">{results.polyreg}</span>
              )}
            </div>

            <div className="prediction-box">
              <h3>Random Forest</h3>
              {loading.rforest ? (
                <ClipLoader size={20} color="#ff8a00" />
              ) : typeof results.rforest === "number" ? (
                <>
                  <span className="result-success">{results.rforest}</span>
                  <span> / 20</span>
                </>
              ) : (
                <span className="result-error">{results.rforest}</span>
              )}
            </div>

            <div className="prediction-box">
              <h3>MLP</h3>
              {loading.mlp ? (
                <ClipLoader size={20} color="#ff8a00" />
              ) : typeof results.mlp === "number" ? (
                <>
                  <span className="result-success">{results.mlp}</span>
                  <span> / 20</span>
                </>
              ) : (
                <span className="result-error">{results.mlp}</span>
              )}
            </div>
          </div>
          <br />
          <center><div className="fine-print">The average grade across each trimester (G1, G2, G3)</div></center>
        </div>
      </div>
    </div>
  );
}