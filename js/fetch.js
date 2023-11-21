import {keys} from "./keys.js";
const getUserEvents = (username) => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `token ${keys.github}`,
        },
    };
    return fetch(url, options)
        .then((response) => response.json())
        .catch(error=>{
            return error
        })
};

//MAIN
( async ()=> {
  const events = await getUserEvents("mdevine23");
    const lastEvent = events.filter((event) => event.type === "PushEvent")[0];
    const lastEventDate = new Date(lastEvent.created_at);
    console.log(events);
    console.log(lastEvent);
    console.log(lastEventDate);
})();