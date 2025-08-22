cmake_minimum_required(VERSION 3.16)

project(backend LANGUAGES CXX)

add_executable(backend_exe
    src/main.cpp
)

# use generated inport script
include(${CMAKE_BINARY_DIR}/stage/lib/cmake/nnet/nnet_export.cmake)

target_link_libraries(backend_exe PRIVATE
    nnet::nnet
    pthread
)
