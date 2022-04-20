class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :dni, :code, :code, :avatar, :phone
  belongs_to :role
end
