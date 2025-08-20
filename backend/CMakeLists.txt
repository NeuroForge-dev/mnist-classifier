add_executable(backend
    src/main.cpp
)

target_include_directories(backend PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}/../nnet/include
)

target_link_libraries(backend PRIVATE
    nnet
)
