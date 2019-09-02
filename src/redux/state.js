import { rerenderEntireTree } from "../render";


let state = {
  data: [
    {
      id: "9333000183101",
      user: "Kate",
      avatar: "https://i.pravatar.cc/300?img=5",
      created_at: "2019-08-17 23:30:11",
      message: "Hey, guys! Have you seen the new episode of 'Black Mirror'?"
    },
    {
      id: "9333000183102",
      user: "Dave",
      avatar: "https://i.pravatar.cc/300?img=14",
      created_at: "2019-08-17 23:54:45",
      message: "Nay, not yet:-("
    },
    {
      id: "9333000183103",
      user: "Taylor",
      avatar: "https://i.pravatar.cc/300?img=12",
      created_at: "2019-08-18 10:23:00",
      message: "I have! Let’s discuss it)"
    },
    {
      id: "9333000183104",
      user: "Dave",
      avatar: "https://i.pravatar.cc/300?img=14",
      created_at: "2019-08-18 10:24:32",
      message: "No spoilers!!! I will watch it asap."
    },
    {
      id: "9333000183105",
      user: "Kim",
      avatar: "https://i.pravatar.cc/300?img=31",
      created_at: "2019-08-18 10:29:03",
      message: "Oh, Dave! But please, hurry up!"
    },
    {
      id: "9333000183106",
      user: "Dave",
      avatar: "https://i.pravatar.cc/300?img=14",
      created_at: "2019-08-18 10:34:47",
      message: "I have to finish my work and afterwards I will watch it."
    },
    {
      id: "9333000183107",
      user: "Kate",
      avatar: "https://i.pravatar.cc/300?img=5",
      created_at: "2019-08-18 10:35:19",
      message: "Oh… I'll go see ‘The Boys’ while Dave is busy."
    },
    {
      id: "9333000183108",
      user: "Dave",
      avatar: "https://i.pravatar.cc/300?img=14",
      created_at: "2019-08-18 10:35:57",
      message: "OK :)"
    },
    {
      id: "9333000183109",
      user: "Taylor",
      avatar: "https://i.pravatar.cc/300?img=12",
      created_at: "2019-08-18 10:37:50",
      message: "Alright, Dave. We’ll wait until you finish your work."
    }
  ],
  newPostText: ''
};

export let addPost =() =>{
  let newMessage = {
    id: "9333000183103",
    user: "Taylor",
    avatar: "https://i.pravatar.cc/300?img=12",
    created_at: "2019-08-18 10:37:50",
    message: state.newPostText
  
  }
  state.data.push(newMessage);
  state.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText =(newText) =>{
  
  state.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;