import axios from "axios";

export default {

// Gets the child with the given id
    getChild: function (id) {
        return axios.get("/api/child/" + id);
    },
// Saves a book to the database
    getChildren: function () {
        return axios.get("/api/children");
    }
};
