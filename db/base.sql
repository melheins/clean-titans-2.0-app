/**--#Seeds#**/


/**--##Avatar Data##**/

INSERT INTO avatars (avatar_name, avatar_url, createdAt, updatedAt)
VALUES ('Supergirl','supergirl',current_timestamp(),current_timestamp());

INSERT INTO avatars (avatar_name, avatar_url, createdAt, updatedAt)
VALUES ('Superman','superman',current_timestamp(),current_timestamp());

INSERT INTO avatars (avatar_name, avatar_url, createdAt, updatedAt)
VALUES ('Spider Girl','spider-girl',current_timestamp(),current_timestamp());

INSERT INTO avatars (avatar_name, avatar_url, createdAt, updatedAt)
VALUES ('Spider Boy','spiderman',current_timestamp(),current_timestamp());

INSERT INTO avatars (avatar_name, avatar_url, createdAt, updatedAt)
VALUES ('Bat Girl','batgirl',current_timestamp(),current_timestamp());

INSERT INTO avatars (avatar_name, avatar_url, createdAt, updatedAt)
VALUES ('Batman','batman',current_timestamp(),current_timestamp());

INSERT INTO avatars (avatar_name, avatar_url, createdAt, updatedAt)
VALUES ('Wonder Woman','wonder-woman',current_timestamp(),current_timestamp());

INSERT INTO avatars (avatar_name, avatar_url, createdAt, updatedAt)
VALUES ('Captain American','captain-american',current_timestamp(),current_timestamp());


/**--##Missions Data##**/
INSERT INTO missions (mission_title, mission_point_value, mission_description, createdAt,updatedAt, mission_video_url)
VALUES ('Brush Teeth AM', 3,'Brush teeth for 2 minutes.', current_timestamp(),current_timestamp(),'https://www.youtube.com/watch?v=Ku-ForS6G3I');

INSERT INTO missions (mission_title, mission_point_value, mission_description, createdAt,updatedAt, mission_video_url)
VALUES ('Brush Teeth PM', 3,'Brush teeth for 2 minutes.', current_timestamp(),current_timestamp(),'https://www.youtube.com/watch?v=Ku-ForS6G3I');

INSERT INTO missions (mission_title, mission_point_value, mission_description, createdAt,updatedAt, mission_video_url)
VALUES ('Empty Cat Litter', 8,'Remove all cat waste with a scoop, dispose of in plastic bag. Wear Gloves!', current_timestamp(),current_timestamp(),'https://youtu.be/2WJD8Kij_JM');

INSERT INTO missions (mission_title, mission_point_value, mission_description, createdAt,updatedAt, mission_video_url)
VALUES ('Empty Dishwasher', 6,'Put away all of the clean dishes.', current_timestamp(),current_timestamp(),'https://www.youtube.com/watch?v=01EaSAIH91k');



/**--##Rewards Data##**/
INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('Ice Cream', 'Ice Cream treat',10,'R', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('Tablet/Laptop 30', 'Tablet/Laptop Time for 30 minutes',15,'R', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('TV Time - Single Episode', 'Single Episode, under an hour.',15,'R', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('TV Time - Full Movie', 'Full-length Movie',25,'R', current_timestamp(),current_timestamp());
