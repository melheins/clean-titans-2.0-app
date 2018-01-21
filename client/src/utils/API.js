import axios from "axios";

export default {

    // Loads team page
    loadTeamSec: function (id) {
        return axios.get("/api/parent/team/" + id);
    },
    // Loads parent missions page
    loadMissionSec: function () {
        return axios.get("/api/parent/missions");
    },
    // Loads parent rewards page
    loadRewardSec: function () {
        return axios.get("/api/parent/rewards");
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
    }
};
