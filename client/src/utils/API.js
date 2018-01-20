import axios from "axios";

export default {

// Gets the child with the given id
    getChild: function (id) {
        return axios.get("/api/child/" + id);
    },
//
    getChildren: function () {
        return axios.get("/parent/team");
    }
};
