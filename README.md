# README
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|name|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :groups_users　
- has_many :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|title|text|null: false, unique: true|
### Association
- has_many :messages　
- has_many :groups_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
