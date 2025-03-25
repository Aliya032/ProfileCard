import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/*should contain one skill component for each web dev skill that you have, customized with props*/}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar4.jpg" alt="Aliya Fatima Avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Aliya Fatima</h1>
      <p>Learning tech stuff honey.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="<⁄>" color="#ff1493" />
      <Skill skill="CSS" emoji="🎨🖌️" color="#ff4500" />
      <Skill skill="Java" emoji="👩‍💻" color="#bfff00" />
      <Skill skill="Python" emoji="💪" color="#00bfff" />
      <Skill skill="JS" emoji="🧩" color="#d62beb" />
      <Skill skill="React" emoji="🌐" color="#d90368" />
      <Skill skill="Node JS" emoji="💻" color="#ffdd00" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
