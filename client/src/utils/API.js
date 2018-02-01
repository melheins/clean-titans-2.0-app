import axios from "axios";

export default {
    //<--PARENT-->
    loadParentAccount: function (userId) {
        console.log("userInfo" + userId);
        return axios.get("/api/parent/account/" + userId);
    },
    createNewUser: function (newParent) {
        console.log("new Parent API Call: " + newParent);
        return axios.post("api/parent", newParent);
    },
    // Loads Mission Approvals
    loadMisApprovalsSec: function (id) {
        return axios.get("/api/parent/misappr/" + id);
    },
    // Loads Reward Approvals
    loadRewApprovalsSec: function (id) {
        return axios.get("/api/parent/rewappr/" + id);
    },
    // Loads team page
    loadTeamSec: function (id) {
        return axios.get("/api/parent/team/" + id);
    },
    loadAvatars: function () {
        return axios.get("/api/parent/team/addchild/avatars");
    },
    teamAddChild: function (id, name,nick,avatar) {
        return axios.post("/api/parent/team/addchild/save/" + id, {
            name: name,
            nick: nick,
            avatar: avatar
        });
    },
    // Loads parent missions page
    loadMissionSec: function (id) {
        return axios.get("/api/parent/missions/" + id);
    },
    // Loads parent rewards page
    loadRewardSec: function (id) {
        return axios.get("/api/parent/rewards/" + id);
    },
    approveDenyMission: function (id, status, childId, points) {
        console.log('id: ' + id + ' newStatus: ' + status + ' cid: ' + childId + ' addPoints:  ' + points);
        return axios.put("/api/parent/missions/approvedeny/" + id, {
            newStatus: status,
            cid: childId,
            addPoints: points
        });
    },
    approveReward: function (id, data) {
        return axios.put("/api/parent/rewards/approve/" + id, {newStatus: data})
    },


    //<--CHILD-->
    // Loads child nav
    loadChildNav: function (id) {
        return axios.get("/api/child/" + id);
    },
    // Loads child missions page
    loadChildMissionSec: function (id) {
        return axios.get("/api/child/missions/" + id);
    },
    // Loads child rewards page
    loadChildRewardSec: function (id) {
        return axios.get("/api/child/rewards/" + id);
    },
    updateChildMissionStatus: function (id, data) {
        console.log(data);
        return axios.put("/api/child/missions/updatestatus/" + id, {newStatus: data})
    },
    purchaseChildReward: function (id, status, childId, points) {
        return axios.post("/api/child/rewards/purchase/" + id, {
            newStatus: status,
            cid: childId,
            addPoints: points
        })
    },

    //<--CHILD Login-->
    // Loads child login page
    loadChildLogin: function (id) {
        return axios.get("/api/childlogin/" + id);
    },
};
