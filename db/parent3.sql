/**--#Seeds#**/

/**--##Parent Data##**/
INSERT INTO parents (first_name, last_name, uid, createdAt, updatedAt)
VALUES ('Tess', 'Tester', 'auth0|5a6ce08a2442774d62e43f82', current_timestamp(), current_timestamp());


/**--##Parent Missions Data##**/
INSERT INTO parent_missions (mission_title, mission_point_value, mission_description, createdAt, updatedAt, mission_video_url, parentId)
VALUES ('Brush Teeth AM', 3, 'Brush teeth for 2 minutes.', current_timestamp(), current_timestamp(),
        'https://www.youtube.com/watch?v=Ku-ForS6G3I', 3);

INSERT INTO parent_missions (mission_title, mission_point_value, mission_description, createdAt, updatedAt, mission_video_url, parentId)
VALUES ('Brush Teeth PM', 3, 'Brush teeth for 2 minutes.', current_timestamp(), current_timestamp(),
        'https://www.youtube.com/watch?v=Ku-ForS6G3I', 3);

INSERT INTO parent_missions (mission_title, mission_point_value, mission_description, createdAt, updatedAt, mission_video_url, parentId)
VALUES ('Empty Cat Litter', 8,'Remove all cat waste with a scoop, dispose of in plastic bag. Wear Gloves!', current_timestamp(), current_timestamp(),
        'https://youtu.be/2WJD8Kij_JM', 3);

INSERT INTO parent_missions (mission_title, mission_point_value, mission_description, createdAt, updatedAt, mission_video_url, parentId)
VALUES ('Empty Dishwasher', 6,'Put away all of the clean dishes.', current_timestamp(), current_timestamp(),
        'https://www.youtube.com/watch?v=01EaSAIH91k', 3);

/**--##Parent Rewards Data##**/
INSERT INTO parent_rewards (reward_name, reward_description, reward_points_required, reward_category, createdAt, updatedAt, parentId)
VALUES ('Ice Cream', 'Ice Cream treat', 10, 'R', current_timestamp(), current_timestamp(), 3);

INSERT INTO parent_rewards (reward_name, reward_description, reward_points_required, reward_category, createdAt, updatedAt, parentId)
VALUES ('Tablet/Laptop 30', 'Tablet/Laptop Time for 30 minutes', 15, 'R', current_timestamp(), current_timestamp(), 3);

INSERT INTO parent_rewards (reward_name, reward_description, reward_points_required, reward_category, createdAt, updatedAt, parentId)
VALUES ('TV Time - Single Episode', 'Single Episode, under an hour.',15,'R', current_timestamp(), current_timestamp(), 3);

INSERT INTO parent_rewards (reward_name, reward_description, reward_points_required, reward_category, createdAt, updatedAt, parentId)
VALUES ('TV Time - Full Movie', 'Full-length Movie',25,'R', current_timestamp(), current_timestamp(), 3);


/**--##Child Data##**/
INSERT INTO children (first_name, nickname, uid, pass, createdAt, updatedAt, parentId, avatarId)
VALUES ('Erica', 'Eri', 'maya', 'test', current_timestamp(), current_timestamp(), 3, 1);

INSERT INTO children (first_name, nickname, uid, pass, createdAt, updatedAt, parentId, avatarId)
VALUES ('Michael', 'Mike', 'jon', 'test', current_timestamp(), current_timestamp(), 3, 2);


/**--##Active Missions##**/
INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('C', current_timestamp(), current_timestamp(), current_timestamp(), 5, 5, 3);

INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('I', current_timestamp(), current_timestamp(), current_timestamp(), 6, 5, 3);

INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('C', current_timestamp(), current_timestamp(), current_timestamp(), 5, 6, 3);

INSERT INTO active_missions (mission_status, mission_status_date, createdAt, updatedAt, parentMissionId, childId, parentId)
VALUES ('I', current_timestamp(), current_timestamp(), current_timestamp(), 6, 6, 3);


/**--##Active Rewards##**/
INSERT INTO active_rewards (reward_status, reward_status_date, createdAt, updatedAt, parentRewardId, childId, parentId)
VALUES ('I', current_timestamp(), current_timestamp(), current_timestamp(), 5, 5, 3);

INSERT INTO active_rewards (reward_status, reward_status_date, createdAt, updatedAt, parentRewardId, childId, parentId)
VALUES ('I', current_timestamp(), current_timestamp(), current_timestamp(), 6, 5, 3);

INSERT INTO active_rewards (reward_status, reward_status_date, createdAt, updatedAt, parentRewardId, childId, parentId)
VALUES ('I', current_timestamp(), current_timestamp(), current_timestamp(), 5, 6, 3);

INSERT INTO active_rewards (reward_status, reward_status_date, createdAt, updatedAt, parentRewardId, childId, parentId)
VALUES ('I', current_timestamp(), current_timestamp(), current_timestamp(), 6, 6, 3);