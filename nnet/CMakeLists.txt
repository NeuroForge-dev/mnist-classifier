add_library(nnet
    src/nnet.cpp
)

target_include_directories(nnet PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}/include
)
