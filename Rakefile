require "rake"
require 'shounak/build/docker_build'
require 'shounak/build/build'

task default: :build 



IMAGE_NAME = 'ghcr.io/shounaka/shounaka-site'
VERSION_TAG = Shounak::Build::VERSION

desc "Build the container"
task :build do |t, args|
    builder = Shounak::Build::Docker.new(image_name: IMAGE_NAME, version_tag: VERSION_TAG )
    builder.build_container
    builder.push_container

end