/**--#Seeds#**/

/**--##Parent Data##**/
INSERT INTO parents (first_name, last_name, uid, createdAt, updatedAt)
VALUES ('Doug', 'Brek', 'google-oauth2|109231980162844507501', current_timestamp(), current_timestamp());


/**--##Parent Missions Data##**/
INSERT INTO parent_missions (mission_title, mission_point_value, mission_description, createdAt, updatedAt, mission_video_url, parentId)
VALUES ('Brush Teeth AM', 3, 'Brush teeth for 2 minutes.', current_timestamp(), current_timestamp(),
        'https://www.youtube.com/watch?v=Ku-ForS6G3I', 2);

INSERT INTO parent_missions (mission_title, mission_point_value, mission_description, createdAt, updatedAt, mission_video_url, parentId)
VALUES ('Brush Teeth PM', 3, 'Brush teeth for 2 minutes.', current_timestamp(), current_timestamp(),
        'https://www.youtube.com/watch?v=Ku-ForS6G3I', 2);


/**--##Parent Rewards Data##**/
INSERT INTO parent_rewards (reward_name, reward_description, reward_points_required, reward_category, createdAt, updatedAt, parentId)
VALUES ('Ice Cream', 'Ice Cream treat', 10, 'R', current_timestamp(), current_timestamp(), 2);

INSERT INTO parent_rewards (reward_name, reward_description, reward_points_required, reward_category, createdAt, updatedAt, parentId)
VALUES ('Tablet/Laptop 30', 'Tablet/Laptop Time for 30 minutes', 15, 'R', current_timestamp(), current_timestamp(), 2);


/**--##Child Data##**/
INSERT INTO children (first_name, nickname, uid, pass, createdAt, updatedAt, parentId, avatarId)
VALUES ('Lilly', 'Goldie', 'lilly', 'test', current_timestamp(), current_timestamp(), 2, 1);

INSERT INTO children (first_name, nickname, uid, pass, createdAt, updatedAt, parentId, avatarId)
VALUES ('Mike', 'Capt', 'mike', 'test', current_timestamp(), current_timestamp(), 2, 2);


/**--##Active Missions##**/
INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('C', current_timestamp(), current_timestamp(), current_timestamp(), 3, 3, 2);

INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('I', current_timestamp(), current_timestamp(), current_timestamp(), 4, 3, 2);

INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('C', current_timestamp(), current_timestamp(), current_timestamp(), 3, 4, 2);

INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('I', current_timestamp(), current_timestamp(), current_timestamp(), 4, 4, 2);


/**--##Active Rewards##**/
INSERT INTO active_rewards (reward_status, reward_status_date, createdAt, updatedAt, parentRewardId, childId, parentId)
VALUES ('R', current_timestamp(), current_timestamp(), current_timestamp(), 3, 3, 2);

INSERT INTO active_rewards (reward_status, reward_status_date, createdAt, updatedAt, parentRewardId, childId, parentId)
VALUES ('C', current_timestamp(), current_timestamp(), current_timestamp(), 4, 3, 2);