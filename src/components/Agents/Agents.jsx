import { getAgents } from "../../utils/api";
import { useState, useEffect } from "react";

export default function Agents(props) {
  const [agents, setAgents] = useState([]);
  const [agentImage, setAgentImage] = useState("");
  const [agentRole, setAgentRole] = useState("");
  const [agentRoleIcon, setAgentRoleIcon] = useState("");
  const [agentRoleDescription, setAgentRoleDescription] = useState("");
  const [agentDescription, setAgentDescription] = useState("");
  const [agentAbilities, setAgentAbilities] = useState([]);
  const [agentCAbilityIcon, setAgentCAbilityIcon] = useState("");
  const [agentQAbilityIcon, setAgentQAbilityIcon] = useState("");
  const [agentEAbilityIcon, setAgentEAbilityIcon] = useState("");
  const [agentXAbilityIcon, setAgentXAbilityIcon] = useState("");
  const [agentAbility, setAgentAbility] = useState("");
  const [agentAbilityDescription, setAgentAbilityDescription] = useState("");
  const agentNames = [];

  useEffect(() => {
    getAgents().then((data) => {
      const playableFilter = data.data.filter((agent) =>
        agent.isPlayableCharacter ? agent : ""
      );
      setAgents(playableFilter);
    });
  }, []);

  function handleAgent(e) {
    const name = e.target.textContent;

    const agent = agents.filter((agent) => agent.displayName === name);
    handleImage(agent[0], e.target);
    handleRole(agent[0].role);
    handleDescription(agent[0]);
    handleAbilitiesIcon(agent[0].abilities);
    setAgentAbilities(agent[0].abilities);
    handleAgentAbilitiesChange(agent[0].abilities);
  }

  function handleImage(agent, button) {
    setAgentImage(agent.fullPortrait);
    document.querySelector(".agent__image").style.animation = "";
    setTimeout(
      () =>
        (document.querySelector(".agent__image").style.animation =
          "fadeIn 1s linear"),
      5
    );
  }

  function handleRole(role) {
    setAgentRoleDescription(role.description);
    setAgentRole(role.displayName);
    setAgentRoleIcon(role.displayIcon);
  }

  function handleDescription(agent) {
    setAgentDescription(agent.description);
  }

  function handleAbilitiesIcon(abilities) {
    setAgentCAbilityIcon(abilities[1].displayIcon);
    setAgentQAbilityIcon(abilities[0].displayIcon);
    setAgentEAbilityIcon(abilities[2].displayIcon);
    setAgentXAbilityIcon(abilities[3].displayIcon);
  }

  function handleAgentAbilitiesChange(abilities) {
    setAgentAbility(abilities[1].displayName);
    setAgentAbilityDescription(abilities[1].description);
  }

  function handleChangeAbilities(e) {
    const slot = e.target.alt;

    if (slot === "C key") {
      if (agentAbilities[1] && agentAbilities[1]) {
        setAgentAbility(agentAbilities[1].displayName);
        setAgentAbilityDescription(agentAbilities[1].description);
      } else {
        setAgentAbility("Dizzy");
        setAgentAbilityDescription(
          "EQUIP Dizzy. FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are Blinded. When Dizzy expires she reverts into a dormant globule. INTERACT to reclaim the globule and gain another Dizzy charge after a short cooldown."
        );
      }
    }
    if (slot === "Q key") {
      if (agentAbilities[0] && agentAbilities[0]) {
        setAgentAbility(agentAbilities[0].displayName);
        setAgentAbilityDescription(agentAbilities[0].description);
      } else {
        setAgentAbility("Wingman");
        setAgentAbilityDescription(
          "EQUIP Wingman. FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees. ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule. INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown."
        );
      }
    }
    if (slot === "E key") {
      if (agentAbilities[2] && agentAbilities[2]) {
        setAgentAbility(agentAbilities[2].displayName);
        setAgentAbilityDescription(agentAbilities[2].description);
      } else {
        setAgentAbility("Mosh Pit");
        setAgentAbilityDescription(
          "EQUIP Mosh. FIRE to throw Mosh like a grenade. ALT FIRE to lob. Upon landing Mosh duplicates across a large area that deals a small amount of damage over time then after a short delay explodes."
        );
      }
    }
    if (slot === "X key") {
      if (agentAbilities[3] && agentAbilities[3]) {
        setAgentAbility(agentAbilities[3].displayName);
        setAgentAbilityDescription(agentAbilities[3].description);
      } else {
        setAgentAbility("Thrash");
        setAgentAbilityDescription(
          "EQUIP Thrash. FIRE to link with Thrash’s mind and steer her through enemy territory. ACTIVATE to lunge forward and explode, Detaining any players in a small radius. When Thrash expires she reverts into a dormant globule. INTERACT to reclaim the globule and gain another Thrash charge after a short cooldown. Thrash can be reclaimed once."
        );
      }
    }
  }

  function handleNames() {
    agents.forEach((agent) => {
      agentNames.push(agent.displayName);
    });
  }

  handleNames();

  return (
    <>
      <div className="agent__container">
        <div className="agent">
          <div className="agent__names">
            {agentNames.map((name) => (
              <button className="agent__name" key={name} onClick={handleAgent}>
                {name}
              </button>
            ))}
          </div>
          <img
            className="agent__image"
            src={
              agentImage ||
              "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png"
            }
            alt="jett"
          />
          <div className="agent__role-container">
            <div className="agent__role-content">
              <div className="agent__role">
                <p className="agent__role-text">
                  Role: {agentRole || "Initiator"}
                </p>
                <img
                  className="agent__role-icon"
                  src={
                    agentRoleIcon ||
                    "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png"
                  }
                  alt="role icon"
                />
              </div>
              <p className="agent__description">
                {agentRoleDescription ||
                  "Initiators challenge angles by setting up their team to enter contested ground and push defenders away."}
              </p>
            </div>
            <div className="agent__history">
              <p className="agent__history-text">Biography</p>
              <p className="agent__description">
                {agentDescription ||
                  "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again."}
              </p>
            </div>
          </div>
        </div>
        <div className="agent__division"></div>
        <div className="agent__abilities-container">
          <h2 className="agent__abilities-title">SPECIAL ABILITIES</h2>
          <table className="agent__abilities-content">
            <thead>
              <tr className="agent__abilities">
                <th className="agent__ability-key">C</th>
                <th className="agent__ability-key">Q</th>
                <th className="agent__ability-key">E</th>
                <th className="agent__ability-key">X</th>
              </tr>
            </thead>
            <tbody>
              <tr className="agent__abilities">
                <td className='agent__ability-item'>
                  <button
                    className="agent__ability-button"
                    onClick={handleChangeAbilities}
                  >
                    <img
                      className="agent__ability-icon"
                      src={
                        agentCAbilityIcon ||
                        "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability2/displayicon.png"
                      }
                      alt="C key"
                    />
                  </button>
                </td>
                <td className='agent__ability-item'>
                  <button
                    className="agent__ability-button"
                    onClick={handleChangeAbilities}
                  >
                    <img
                      className="agent__ability-icon"
                      src={
                        agentQAbilityIcon ||
                        "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png"
                      }
                      alt="Q key"
                    />
                  </button>
                </td>
                <td className='agent__ability-item'>
                  <button
                    className="agent__ability-button"
                    onClick={handleChangeAbilities}
                  >
                    <img
                      className="agent__ability-icon"
                      src={
                        agentEAbilityIcon ||
                        "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/grenade/displayicon.png"
                      }
                      alt="E key"
                    />
                  </button>
                </td>
                <td className='agent__ability-item'>
                  <button
                    className="agent__ability-button"
                    onClick={handleChangeAbilities}
                  >
                    <img
                      className="agent__ability-icon"
                      src={
                        agentXAbilityIcon ||
                        "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ultimate/displayicon.png"
                      }
                      alt="X key"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="agent__ability__content">
            <p className="agent__ability-title">{agentAbility || "Dizzy"}</p>
            <p className="agent__ability-description">
              {agentAbilityDescription ||
                "EQUIP Dizzy. FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are Blinded. When Dizzy expires she reverts into a dormant globule. INTERACT to reclaim the globule and gain another Dizzy charge after a short cooldown."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
