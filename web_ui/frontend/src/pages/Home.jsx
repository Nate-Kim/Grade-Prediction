import React, { useState } from "react";
import Slider from '../components/Slider';
import Dropdown from '../components/Dropdown';
import Tooltip from '../components/Tooltip';
import ClipLoader from "react-spinners/ClipLoader";
import './Home.css';

export default function Home() {
  // School
  const [p_school, setPSchool] = useState('GP');
  const cat_school = [
    { label: 'Gabriel Pereira', value: 'GP' },
    { label: 'Mousinho da Silveira', value: 'MS' },
  ];

  // Sex
  const [p_sex, setPSex] = useState('F');
  const cat_sex = [
    { label: 'Female', value: 'F' },
    { label: 'Male', value: 'M' },
  ];

  // Age
  const [p_age, setPAge] = useState(18);

  // Address
  const [p_address, setPAddress] = useState('U');
  const cat_address = [
    { label: 'Urban', value: 'U' },
    { label: 'Rural', value: 'R' },
  ];

  // Family size
  const [p_famsize, setPFamsize] = useState('LE3');
  const cat_famsize = [
    { label: 'Less or Equal to 3', value: 'LE3' },
    { label: 'Greater than 3', value: 'GT3' },
  ];

  // Parent's cohabitation status
  const [p_Pstatus, setPPstatus] = useState('T');
  const cat_Pstatus = [
    { label: 'Living together', value: 'T' },
    { label: 'Apart', value: 'A' },
  ];

  // Mother's education
  const [p_Medu, setPMedu] = useState(4);
  const cat_Medu = [
    { label: 'None', value: 0 },
    { label: 'Primary Education (4th grade)', value: 1 },
    { label: '5th to 9th grade', value: 2 },
    { label: 'Secondary Education', value: 3 },
    { label: 'Higher Education', value: 4 },
  ];

  // Father's education
  const [p_Fedu, setPFedu] = useState(4);
  const cat_Fedu = [
    { label: 'None', value: 0 },
    { label: 'Primary Education (4th grade)', value: 1 },
    { label: '5th to 9th grade', value: 2 },
    { label: 'Secondary Education', value: 3 },
    { label: 'Higher Education', value: 4 },
  ];

  // Mother's job
  const [p_Mjob, setPMjob] = useState('other');
  const cat_Mjob = [
    { label: 'Teacher', value: 'teacher' },
    { label: 'Health Care Related', value: 'health' },
    { label: 'Civil Services', value: 'services' },
    { label: 'At Home', value: 'athome' },
    { label: 'Other', value: 'other' },
  ];

  // Father's job
  const [p_Fjob, setPFjob] = useState('other');
  const cat_Fjob = [
    { label: 'Teacher', value: 'teacher' },
    { label: 'Health Care Related', value: 'health' },
    { label: 'Civil Services', value: 'services' },
    { label: 'At Home', value: 'athome' },
    { label: 'Other', value: 'other' },
  ];

  // Reason for choosing school
  const [p_reason, setPReason] = useState('other');
  const cat_reason = [
    { label: 'Close to home', value: 'home' },
    { label: 'School Reputation', value: 'reputation' },
    { label: 'Course Preference', value: 'course' },
    { label: 'Other', value: 'other' },
  ];

  // Guardian
  const [p_guardian, setPGuardian] = useState('other');
  const cat_guardian = [
    { label: 'Mother', value: 'mother' },
    { label: 'Father', value: 'father' },
    { label: 'Other', value: 'other' },
  ];

  // Home to school travel time
  const [p_traveltime, setPTraveltime] = useState(1);

  // Weekly study time
  const [p_studytime, setPStudytime] = useState(5);

  // Past class failures
  const [p_failures, setPFailures] = useState(0);

  // Extra educational support
  const [p_schoolsup, setPSchoolsup] = useState('no');
  const cat_schoolsup = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  // Family educational support
  const [p_famsup, setPFamsup] = useState('no');
  const cat_famsup = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  // Extra paid classes
  const [p_paid, setPPaid] = useState('no');
  const cat_paid = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  // Extra-curricular activities
  const [p_activities, setPActivities] = useState('no');
  const cat_activities = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  // Attended nursery school
  const [p_nursery, setPNursery] = useState('no');
  const cat_nursery = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  // Wants to take higher education
  const [p_higher, setPHigher] = useState('no');
  const cat_higher = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  // Internet access at home
  const [p_internet, setPInternet] = useState('no');
  const cat_internet = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  // Romantic relationship
  const [p_romantic, setPRomantic] = useState('no');
  const cat_romantic = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  // Quality of family relationships
  const [p_famrel, setPFamrel] = useState(5);

  // Free time after school
  const [p_freetime, setPFreetime] = useState(3);

  // Going out with friends
  const [p_goout, setPGoout] = useState(3);

  // Workday alcohol consumption
  const [p_dalc, setPDalc] = useState(1);

  // Weekend alcohol consumption
  const [p_walc, setPWalc] = useState(1);

  // Current health status
  const [p_health, setPHealth] = useState(5);

  // Number of school absences
  const [p_absences, setPAbsences] = useState(0);

  // First period grade
  const [p_G1, setPG1] = useState(10);

  // Second period grade
  const [p_G2, setPG2] = useState(12);




  const [results, setResults] = useState({});
  const [loading, setLoading] = useState({});

  const modelEndpoints = {
    polyreg: "predict/polyreg",
    rforest: "predict/rforest",
    mlp: "predict/mlp",
  };

  const handleSubmit = () => {
    const inputs = { param1: p_school, param2: p_sex, param3: p_age, };

    setResults({});
    setLoading({ polyreg: true, rforest: true, mlp: true });

    Object.entries(modelEndpoints).forEach(([model, url]) => {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      })
        .then((res) => res.json())
        .then((data) => {
          setResults((prev) => ({ ...prev, [model]: data.result }));
        })
        .catch((err) => {
          console.error(err);
          setResults((prev) => ({ ...prev, [model]: "Error" }));
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
          <Dropdown label="School:" info="Identifies the student's school" selected={p_school} onChange={setPSchool} options={cat_school} />
          <Dropdown label="Sex:" info="Student's sex demographics" selected={p_sex} onChange={setPSex} options={cat_sex} />
          <Slider label="Age:" info="Student's age, in years" value={p_age} setValue={setPAge} min={15} max={22} />
          <Dropdown label="Home Address Type:" info="Type of area where the student lives" selected={p_address} onChange={setPAddress} options={cat_address} />
          <Dropdown label="Family Size:" info="Number of family members in the student's family" selected={p_famsize} onChange={setPFamsize} options={cat_famsize} />
          <Dropdown label="Parent's Cohabitation Status:" info="Whether or not the student's parents live together" selected={p_Pstatus} onChange={setPPstatus} options={cat_Pstatus} />
          <Dropdown label="Mother's Education:" info="Highest level of education achieved by the student's mother" selected={p_Medu} onChange={setPMedu} options={cat_Medu} />
          <Dropdown label="Father's Education:" info="Highest level of education achieved by the student's father" selected={p_Fedu} onChange={setPFedu} options={cat_Fedu} />
          <Dropdown label="Mother's Job:" info="Mother's category of occupation" selected={p_Mjob} onChange={setPMjob} options={cat_Mjob} />
          <Dropdown label="Father's Job:" info="Father's category of occupation" selected={p_Fjob} onChange={setPFjob} options={cat_Fjob} />
          <Dropdown label="School Choice Reason:" info="Main reason for choosing the school" selected={p_reason} onChange={setPReason} options={cat_reason} />
          <Dropdown label="Guardian:" info="Primary guardian responsible for the student" selected={p_guardian} onChange={setPGuardian} options={cat_guardian} />
          <Slider label="Commute Time:" info="Time it takes to travel from home to school, in hours" value={p_traveltime} setValue={setPTraveltime} min={1} max={4} />
          <Slider label="Weekly Study Time:" info="Average time spent by the student studying per week, in hours" value={p_studytime} setValue={setPStudytime} min={1} max={10} />
          <Slider label="Number of Past Failures:" info="Number of past academically failed classes by the student" value={p_failures} setValue={setPFailures} min={0} max={3} />
          <Dropdown label="Extra Educational Support:" info="Does the student participate in extra school support programs?" selected={p_schoolsup} onChange={setPSchoolsup} options={cat_schoolsup} />
          <Dropdown label="Family Educational Support:" info="Does the student recieve educational support from their family?" selected={p_famsup} onChange={setPFamsup} options={cat_famsup} />
          <Dropdown label="Extra Paid Classes:" info="Is the student enrolled in extra, paid classes?" selected={p_paid} onChange={setPPaid} options={cat_paid} />
          <Dropdown label="Extra-curricular Activities:" info="Is the student involved in any extra-curricular activities?" selected={p_activities} onChange={setPActivities} options={cat_activities} />
          <Dropdown label="Attended Nursery School:" info="Did the student attend a nursery school in early childhood?" selected={p_nursery} onChange={setPNursery} options={cat_nursery} />
          <Dropdown label="Desires Higher Education:" info="Does the student intend to pursue higher education?" selected={p_higher} onChange={setPHigher} options={cat_higher} />
          <Dropdown label="Internet Access at Home:" info="Does the student have internet access at home?" selected={p_internet} onChange={setPInternet} options={cat_internet} />
          <Dropdown label="Romantic Relationship:" info="Is the student engaged in a romantic relationship?" selected={p_romantic} onChange={setPRomantic} options={cat_romantic} />
          <Slider label="Family Relationship Quality:" info="Self-assessed quality of the student's family relationships, where 5 is best" value={p_famrel} setValue={setPFamrel} min={1} max={5} />
          <Slider label="Free Time After School:" info="How much free time the student has after school, where 5 is a lot" value={p_freetime} setValue={setPFreetime} min={1} max={5} />
          <Slider label="Going Out with Friends:" info="How frequently the student goes out with friends, where 5 is most frequently" value={p_goout} setValue={setPGoout} min={1} max={5} />
          <Slider label="Workday Alcohol Consumption:" info="How frequently the student drinks alcohol on workdays, where 5 is most frequently" value={p_dalc} setValue={setPDalc} min={1} max={5} />
          <Slider label="Weekend Alcohol Consumption:" info="How frequently the student drinks alcohol on weekends, where 5 is most frequently" value={p_walc} setValue={setPWalc} min={1} max={5} />
          <Slider label="Health Status:" info="Student's current self-perceived health status, where 5 is best" value={p_health} setValue={setPHealth} min={1} max={5} />
          <Slider label="Number of School Absences:" info="Total number of school absences" value={p_absences} setValue={setPAbsences} min={0} max={93} />
          <Slider label="First Period Grade:" info="Grade received in the first grading period (G1)" value={p_G1} setValue={setPG1} min={0} max={20} />
          <Slider label="Second Period Grade:" info="Grade received in the second grading period (G2)" value={p_G2} setValue={setPG2} min={0} max={20} />
        </div>

        <div className="prediction">
          <center>
            <h2>Prediction</h2>
            <button className='button' onClick={handleSubmit} style={{ marginTop: "1rem" }}>Submit Parameters</button>
          </center>

          <div className="prediction-container">
            <div className="prediction-box">
              <h3>Polynomial Regression</h3>
              {loading.polyreg ? (
                <ClipLoader size={20} color="#ff8a00" />
              ) : (
                <span>{results.polyreg}</span>
              )}
            </div>

            <div className="prediction-box">
              <h3>Random Forest</h3>
              {loading.rforest ? (
                <ClipLoader size={20} color="#ff8a00" />
              ) : (
                <span>{results.rforest}</span>
              )}
            </div>

            <div className="prediction-box">
              <h3>MLP</h3>
              {loading.mlp ? (
                <ClipLoader size={20} color="#ff8a00" />
              ) : (
                <span>{results.mlp}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}