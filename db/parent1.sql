/**--#Seeds#**/

/**--##Parent Data##**/
INSERT INTO parents (first_name, last_name, uid, createdAt, updatedAt)
VALUES ('Tina', 'Jones', 'google-oauth2|102407383841646010974', current_timestamp(), current_timestamp());


/**--##Parent Missions Data##**/
INSERT INTO parent_missions (mission_title, mission_point_value, mission_description, createdAt, updatedAt, mission_video_url, parentId)
VALUES ('Brush Teeth AM', 3, 'Brush teeth for 2 minutes.', current_timestamp(), current_timestamp(),
        'https://www.youtube.com/watch?v=Ku-ForS6G3I', 1);

INSERT INTO parent_missions (mission_title, mission_point_value, mission_description, createdAt, updatedAt, mission_video_url, parentId)
VALUES ('Brush Teeth PM', 3, 'Brush teeth for 2 minutes.', current_timestamp(), current_timestamp(),
        'https://www.youtube.com/watch?v=Ku-ForS6G3I', 1);


/**--##Parent Rewards Data##**/
INSERT INTO parent_rewards (reward_name, reward_description, reward_points_required, reward_category, createdAt, updatedAt, parentId)
VALUES ('Ice Cream', 'Ice Cream treat', 10, 'R', current_timestamp(), current_timestamp(), 1);

INSERT INTO parent_rewards (reward_name, reward_description, reward_points_required, reward_category, createdAt, updatedAt, parentId)
VALUES ('Tablet/Laptop 30', 'Tablet/Laptop Time for 30 minutes', 15, 'R', current_timestamp(), current_timestamp(), 1);


/**--##Child Data##**/
INSERT INTO children (first_name, nickname, uid, pass, createdAt, updatedAt, parentId, avatarId)
VALUES ('Maya', 'Supergirlie', 'maya', 'test', current_timestamp(), current_timestamp(), 1, 1);

INSERT INTO children (first_name, nickname, uid, pass, createdAt, updatedAt, parentId, avatarId)
VALUES ('Johnathan', 'Jon', 'jon', 'test', current_timestamp(), current_timestamp(), 1, 2);


/**--##Active Missions##**/
INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('C', current_timestamp(), current_timestamp(), current_timestamp(), 1, 1, 1);

INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('I', current_timestamp(), current_timestamp(), current_timestamp(), 2, 1, 1);

INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('C', current_timestamp(), current_timestamp(), current_timestamp(), 1, 2, 1);

INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('I', current_timestamp(), current_timestamp(), current_timestamp(), 2, 2, 1);


/**--##Active Rewards##**/
INSERT INTO active_rewards (reward_status, reward_status_date, createdAt, updatedAt, parentRewardId, childId, parentId)
VALUES ('R', current_timestamp(), current_timestamp(), current_timestamp(), 1, 1, 1);

INSERT INTO active_rewards (reward_status, reward_status_date, createdAt, updatedAt, parentRewardId, childId, parentId)
VALUES ('C', current_timestamp(), current_timestamp(), current_timestamp(), 2, 1, 1);