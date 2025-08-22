cmake_minimum_required(VERSION 3.16)
project(mnist_classifier LANGUAGES CXX)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# Set required C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED TRUE)

# enables cmake testing
enable_testing()

add_subdirectory(nnet)
add_subdirectory(backend)


# TODO add install target or custom target