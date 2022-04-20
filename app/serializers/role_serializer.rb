class RoleSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug
  has_many :users
end
