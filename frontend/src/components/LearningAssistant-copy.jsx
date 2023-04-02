import React, { useCallback, useContext, useEffect, useState } from "react";
import "./LearningAssistant-copy.css";
import CircleNoTask from "./circleNoTask";
import BonnieProfileImage from "../Images/Ellipse 1.png";
import CyldeProfileImage from "../Images/Ellipse 15.png";
import { useParams } from "react-router-dom";
import axios from "../Axios/axios"
import UserContext from "../context/UserContext";
import NeedAPartner from "./NeedAPartner";
import Egg from '../Images/Group 70.png';
import DinoAnimated from '../Images/dino_animated.gif';
import Hatchling from '../Images/image 20.png';
import DinoWithEgg from '../Images/dino_login.png';
import { selfURL } from "../constants";


const LearningAssistantcopy = () => {
  function dinoEgg(score) {
    let img;
    if (score <= 2) {
        img = Egg;
    } else if (score <= 4) {
        img = Hatchling
    } else if (score <= 6) {
        img = DinoWithEgg
    } else if (score === 8) {
        img = DinoAnimated
    }
    return img
  }

  // fetch the topic by id
  const { token, user } = useContext(UserContext);
  const { topicId } = useParams();
  const [topic, setTopic] = useState(null);

  const fetchTopic = useCallback(async () => {
    const response = await axios.get(`/topic/${topicId}`, { headers: { Authorization: `Bearer ${token}` } });
    setTopic(response.data);
  }, [topicId, token])

  const removeTask = useCallback(async (taskId) => {
    await axios.delete(`ta  sk/${topicId}`,  { headers: { Authorization: `Bearer ${token}` }, body: { id: taskId } });
    fetchTopic();
  }, [topicId, token, fetchTopic])

  const addTask = useCallback(async (title) => {
    await axios.post(`task/${topicId}/`, { title, description: "hello" }, { headers: { Authorization: `Bearer ${token}` } });
    fetchTopic();
  }, [topicId, token, fetchTopic])

  const updateTask = useCallback(async (taskId, title, completed) => {
    await axios.post(`task/${topicId}`, { title, completed, id: taskId }, { headers: { Authorization: `Bearer ${token}` }});
    fetchTopic();
  }, [topicId, token, fetchTopic])

  useEffect(() => {
    fetchTopic()
  }, [fetchTopic])

  const onJoin = async () => {
    await axios.post(`/topic/${topicId}/add-user`, { }, { headers: { Authorization: `Bearer ${token}` } });
    fetchTopic();
  }

  useEffect(() => {
    console.log("topic changed")
    console.log(topic)
  }, [topic])

  const myTasks = topic?.tasks.filter(task => task.user === topic.user1) || [];
  const partnerTasks = topic?.tasks.filter(task => task.user === topic.user2) || [];
  const hasPartner = topic?.user2 !== null;
  const isOwner = topic?.user1 === user?.id;
  const score = topic?.tasks?.filter(task => task.completed).length || 0;
  const otherUser = (topic?.user1 === user?.id ? topic?.user2?.name : topic?.user1?.name) || "someone";

  return (
    <div className="LearningAssistantcopy">
      <div className="header">
        <div className="white-button">⌛ 7 days until end of week</div>
        <button className="white-button" onClick={() => navigator.clipboard.writeText(`${selfURL}/${topicId}`)}>Copy Link 📋</button>
      </div>
      <div className="main">
        { hasPartner ? (
          <div className="big-text">
            <span role="img" aria-label="sparkle">✨</span>
            You're now {otherUser}'s accountability partner
            <span role="img" aria-label="sparkle">✨</span>
          </div>
        ) : (
          <div className="big-text">
            <span role="img" aria-label="wave">👋</span>
            Let’s add your tasks & accountability partner!
          </div>
        )}
        <div className="small-text">
          If you don't complete your tasks, you will donate $5 to the opposing political party.
        </div>
        <div className="circles">  
          <CircleNoTask 
          disabled={isOwner}
          addTask={addTask}
          updateTask={updateTask}
          removeTask={removeTask}
          tasks={myTasks} 
          image={BonnieProfileImage}
          goal={topic?.user1Goal} 
          style={{
            alignSelf: "flex-start",
          }}/>
          <img src={dinoEgg(score)} alt="dino" className="dino" />
          {hasPartner ? (
            <CircleNoTask 
            disabled={!isOwner}
            addTask={addTask}
            updateTask={updateTask}
            removeTask={removeTask}
            style={{
              alignSelf: "flex-start",
            }}
            goal={topic?.user2Goal}
            tasks={partnerTasks} 
            image={CyldeProfileImage} 
            />
          )
          : <NeedAPartner isOwner={isOwner} onClick={onJoin} />}
        </div>
      </div>
    </div>
  );
};

export default LearningAssistantcopy;