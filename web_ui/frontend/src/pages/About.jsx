export default function About() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>About The Project</h1>
      <p>
        This project is a frontend for a grade prediction tool designed to help students estimate their academic performance based on various factors. Developed by UC Davis students as part of the ECS 171 course, it combines data analysis and machine learning to provide insights into grade outcomes.
      </p>

      <h2>Dataset</h2>
      <p>
        The <a target="_blank" rel="noopener noreferrer" href="https://www.kaggle.com/datasets/adilshamim8/math-students">Math Students Dataset</a>, sourced from the UCI Machine Learning Repository, provides a comprehensive overview of student performance in a math program, incorporating both academic and socio-demographic information. It includes key attributes such as student demographics (age, sex, family size), parental background (education, occupation), and lifestyle factors (internet access, health, socializing). Academic performance is captured through grades (G1, G2, G3), the average of all 3 being the target variable for predictive analysis. The dataset includes a mix of behavioral and school-related data, such as study time, failures, and extracurricular involvement.
      </p>

      <h2>EDA</h2>
      <p>
        Something here?
      </p>
    </div>
  );
}
