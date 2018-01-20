import axios from "axios";

export default {

    // Loads team page
    loadTeamSec: function (id) {
        return axios.get("/parent/team/" + id);
    },
    // Loads missions page
    loadMissionSec: function () {
        return axios.get("/parent/missions");
    },
    // Loads rewards page
    loadRewardSec: function () {
        return axios.get("/parent/rewards");
    }
};
