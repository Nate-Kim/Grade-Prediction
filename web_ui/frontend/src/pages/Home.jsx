import React, { useState } from "react";
import SliderWithInput from '../components/SliderWithInput';
import Dropdown from '../components/Dropdown';
import Tooltip from '../components/Tooltip';
import ClipLoader from "react-spinners/ClipLoader";

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
    model1: "predict/model1",
    model2: "predict/model2",
    model3: "predict/model3",
  };

  const handleSubmit = () => {
    const inputs = { param1: p_school, param2: p_sex, param3: p_age, };

    setResults({});
    setLoading({ model1: true, model2: true, model3: true });

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
      <p>Predict a student's grade based on the following parameters:</p>

      School: <Tooltip tooltipText="Identifies the student's school" />
      <Dropdown selected={p_school} onChange={setPSchool} options={cat_school} />
      Sex: <Tooltip tooltipText="Student's sex demographics" />
      <Dropdown selected={p_sex} onChange={setPSex} options={cat_sex} />
      Age: <Tooltip tooltipText="Student's age, in years" />
      <SliderWithInput value={p_age} setValue={setPAge} min={15} max={22} />
      Home Address Type: <Tooltip tooltipText="Type of area where the student lives" />
      <Dropdown selected={p_address} onChange={setPAddress} options={cat_address} />
      Family Size: <Tooltip tooltipText="Number of family members in the student's family" />
      <Dropdown selected={p_famsize} onChange={setPFamsize} options={cat_famsize} />
      Parent's Cohabitation Status: <Tooltip tooltipText="Whether or not the student's parents live together" />
      <Dropdown selected={p_Pstatus} onChange={setPPstatus} options={cat_Pstatus} />
      Mother's Education: <Tooltip tooltipText="Highest level of education achieved by the student's mother" />
      <Dropdown selected={p_Medu} onChange={setPMedu} options={cat_Medu} />
      Father's Education: <Tooltip tooltipText="Highest level of education achieved by the student's father" />
      <Dropdown selected={p_Fedu} onChange={setPFedu} options={cat_Fedu} />
      Mother's Job: <Tooltip tooltipText="Mother's category of occupation" />
      <Dropdown selected={p_Mjob} onChange={setPMjob} options={cat_Mjob} />
      Father's Job: <Tooltip tooltipText="Father's category of occupation" />
      <Dropdown selected={p_Fjob} onChange={setPFjob} options={cat_Fjob} />
      School Choice Reason: <Tooltip tooltipText="Main reason for choosing the school" />
      <Dropdown selected={p_reason} onChange={setPReason} options={cat_reason} />
      Guardian: <Tooltip tooltipText="Primary guardian responsible for the student" />
      <Dropdown selected={p_guardian} onChange={setPGuardian} options={cat_guardian} />
      Commute Time: <Tooltip tooltipText="Time it takes to travel from home to school, in hours" />
      <SliderWithInput value={p_traveltime} setValue={setPTraveltime} min={1} max={4} />
      Weekly Study Time: <Tooltip tooltipText="Average time spent by the student studying per week, in hours" />
      <SliderWithInput label="" value={p_studytime} setValue={setPStudytime} min={1} max={10} />
      Number of Past Failures: <Tooltip tooltipText="Number of past academically failed classes by the student" />
      <SliderWithInput value={p_failures} setValue={setPFailures} min={0} max={3} />
      Extra Educational Support: <Tooltip tooltipText="Does the student participate in extra school support programs?" />
      <Dropdown selected={p_schoolsup} onChange={setPSchoolsup} options={cat_schoolsup} />
      Family Educational Support: <Tooltip tooltipText="Does the student recieve educational support from their family?" />
      <Dropdown selected={p_famsup} onChange={setPFamsup} options={cat_famsup} />
      Extra Paid Classes: <Tooltip tooltipText="Is the student enrolled in extra, paid classes?" />
      <Dropdown selected={p_paid} onChange={setPPaid} options={cat_paid} />
      Extra-curricular Activities: <Tooltip tooltipText="Is the student involved in any extra-curricular activities?" />
      <Dropdown selected={p_activities} onChange={setPActivities} options={cat_activities} />
      Attended Nursery School: <Tooltip tooltipText="Did the student attend a nursery school in early childhood?" />
      <Dropdown selected={p_nursery} onChange={setPNursery} options={cat_nursery} />
      Desires Higher Education: <Tooltip tooltipText="Does the student intend to pursue higher education?" />
      <Dropdown selected={p_higher} onChange={setPHigher} options={cat_higher} />
      Internet Access at Home: <Tooltip tooltipText="Does the student have internet access at home?" />
      <Dropdown selected={p_internet} onChange={setPInternet} options={cat_internet} />
      Romantic Relationship: <Tooltip tooltipText="Is the student engaged in a romantic relationship?" />
      <Dropdown  selected={p_romantic} onChange={setPRomantic} options={cat_romantic} />
      Family Relationship Quality: <Tooltip tooltipText="Self-assessed quality of the student's family relationships, where 5 is best" />
      <SliderWithInput value={p_famrel} setValue={setPFamrel} min={1} max={5} />
      Free Time After School: <Tooltip tooltipText="How much free time the student has after school, where 5 is a lot" />
      <SliderWithInput value={p_freetime} setValue={setPFreetime} min={1} max={5} />
      Going Out with Friends: <Tooltip tooltipText="How frequently the student goes out with friends, where 5 is most frequently" />
      <SliderWithInput value={p_goout} setValue={setPGoout} min={1} max={5} />
      Workday Alcohol Consumption: <Tooltip tooltipText="How frequently the student drinks alcohol on workdays, where 5 is most frequently" />
      <SliderWithInput value={p_dalc} setValue={setPDalc} min={1} max={5} />
      Weekend Alcohol Consumption: <Tooltip tooltipText="How frequently the student drinks alcohol on weekends, where 5 is most frequently" />
      <SliderWithInput value={p_walc} setValue={setPWalc} min={1} max={5} />
      Health Status: <Tooltip tooltipText="Student's current self-perceived health status, where 5 is best" />
      <SliderWithInput value={p_health} setValue={setPHealth} min={1} max={5} />
      Number of School Absences: <Tooltip tooltipText="Total number of school absences" />
      <SliderWithInput value={p_absences} setValue={setPAbsences} min={0} max={93} />
      First Period Grade: <Tooltip tooltipText="Grade received in the first grading period (G1)" />
      <SliderWithInput value={p_G1} setValue={setPG1} min={0} max={20} />
      Second Period Grade: <Tooltip tooltipText="Grade received in the second grading period (G2)" />
      <SliderWithInput value={p_G2} setValue={setPG2} min={0} max={20} />

      <button onClick={handleSubmit} style={{ marginTop: "1rem" }}>Submit</button>

      <div style={{ marginTop: "1.5rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          Output 1:{" "}
          {loading.model1 ? (
            <ClipLoader size={20} color="#ff8a00" />
          ) : (
            <span>{results.model1}</span>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          Output 2:{" "}
          {loading.model2 ? (
            <ClipLoader size={20} color="#ff8a00" />
          ) : (
            <span>{results.model2}</span>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          Output 3:{" "}
          {loading.model3 ? (
            <ClipLoader size={20} color="#ff8a00" />
          ) : (
            <span>{results.model3}</span>
          )}
        </div>
      </div>
    </div>
  );
}