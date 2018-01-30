import axios from "axios";

export default {
    //<--PARENT-->
    // Loads team page
    loadTeamSec: function (id) {
        return axios.get("/api/parent/team/" + id);
    },
    // Loads parent missions page
    loadMissionSec: function (id) {
        return axios.get("/api/parent/missions/" + id);
    },
    // Loads parent rewards page
    loadRewardSec: function (id) {
        return axios.get("/api/parent/rewards/" + id);
    },
    // Loads child missions page
    loadChildMissionSec: function (id) {
        return axios.get("/api/child/missions/" + id);
    },
    // Loads child rewards page
    loadChildRewardSec: function (id) {
        return axios.get("/api/child/rewards/" + id);
    },
    // Loads child rewards page
    loadChildNav: function (id) {
        return axios.get("/api/child/" + id);
    },
    // Loads child login page
    loadChildLogin: function (id) {
        return axios.get("/api/childlogin/" + id);
    },
    loadParentAccount: function (userId) {
        console.log("userInfo" + userId);
        return axios.get("/api/parent/account/" + userId);
    },
    createNewUser: function (newParent) {
        console.log("new Parent API Call: " + newParent);
        return axios.post("api/parent", newParent);
    }

    //<--CHILD-->
    updateChildMission: function (id, data) {
        return axios.put("/api/child/missions/" +id, data)
    }
    updateChildReward: function ()
};
