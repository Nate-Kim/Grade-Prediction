import React, { useState } from "react";
import SliderWithInput from '../components/SliderWithInput';
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
  const [param1, setParam1] = useState(50);
  const [param2, setParam2] = useState(50);
  const [param3, setParam3] = useState(50);

  const [results, setResults] = useState({});
  const [loading, setLoading] = useState({});

  const modelEndpoints = {
    model1: "predict/model1",
    model2: "predict/model2",
    model3: "predict/model3",
  };

  const handleSubmit = () => {
    const inputs = { param1, param2, param3 };

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
      <h1>Home Page</h1>
      <p>Predict a student's grade based on the following 3 parameters:</p>

      <SliderWithInput label="Param 1:" value={param1} setValue={setParam1} min={0} max={100} />
      <SliderWithInput label="Param 2:" value={param2} setValue={setParam2} min={0} max={100} />
      <SliderWithInput label="Param 3:" value={param3} setValue={setParam3} min={0} max={100} />

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