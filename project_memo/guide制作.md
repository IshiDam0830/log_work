---
tags:
  - ホスティング
  - DB系
---
id:onamae_admin
pass:gmo_kirihara


DELETE FROM vps_categories WHERE id=0;


ALTER TABLE vps_categories ADD PRIMARY KEY(id);
ALTER TABLE vps_contents CHANGE id id int(4) AUTO_INCREMENT;