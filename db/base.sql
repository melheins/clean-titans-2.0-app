/**--#Seeds#**/


/**--##Avatar Data##**/

INSERT INTO avatars (avatar_name, avatar_url, createdAt, updatedAt)
VALUES ('Supergirl','supergirl',current_timestamp(),current_timestamp());

INSERT INTO avatars (avatar_name, avatar_url, createdAt, updatedAt)
VALUES ('Superman','superman',current_timestamp(),current_timestamp());



/**--##Missions Data##**/
INSERT INTO missions (mission_title, mission_point_value, mission_description, createdAt,updatedAt, mission_video_url)
VALUES ('Brush Teeth AM', 3,'Brush teeth for 2 minutes.', current_timestamp(),current_timestamp(),'https://www.youtube.com/watch?v=Ku-ForS6G3I');

INSERT INTO missions (mission_title, mission_point_value, mission_description, createdAt,updatedAt, mission_video_url)
VALUES ('Brush Teeth PM', 3,'Brush teeth for 2 minutes.', current_timestamp(),current_timestamp(),'https://www.youtube.com/watch?v=Ku-ForS6G3I');



/**--##Rewards Data##**/
INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('Ice Cream', 'Ice Cream treat',10,'R', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('Tablet/Laptop 30', 'Tablet/Laptop Time for 30 minutes',15,'R', current_timestamp(),current_timestamp());

