# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.

if Rails.env.production?
  EmberSandbox::Application.config.secret_token = ENV['SECRET_TOKEN']
else
  EmberSandbox::Application.config.secret_token = ENV['SECRET_TOKEN'] || '9214248d18f0dd0f644cb6df803631f92edd1509ad55af330b1fdcf88464f2a334747d41b53509b1c7cf722d932deb8fce608969fe92c4a6cc6a78004f5d3bee'
end