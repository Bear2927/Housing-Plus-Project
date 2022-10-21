class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :admin
end
