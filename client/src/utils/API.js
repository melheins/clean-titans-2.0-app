import axios from "axios";

export default {

    // Loads team page
    loadTeamSec: function (id) {
        return axios.get("/api/parent/team/" + id);
    },
    // Loads missions page
    loadMissionSec: function () {
        return axios.get("/api/parent/missions");
    },
    // Loads rewards page
    loadRewardSec: function () {
        return axios.get("/api/parent/rewards");
    }
};
