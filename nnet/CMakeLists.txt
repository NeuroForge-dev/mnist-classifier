cmake_minimum_required(VERSION 3.15)

project(nnet VERSION 0.0.1 LANGUAGES CXX C)

add_library(${PROJECT_NAME} 
    src/nnet.cpp
)

target_include_directories(nnet PUBLIC 
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
    $<INSTALL_INTERFACE:include>
)

# Testing
set(testname "${PROJECT_NAME}_test")
add_executable(${testname} test/nnet_test.cpp)
target_link_libraries(${testname} PRIVATE ${PROJECT_NAME} gtest gtest_main pthread )
add_test(NAME ${testname} COMMAND ${testname})



install(TARGETS ${PROJECT_NAME} EXPORT nnet_export
		RUNTIME DESTINATION bin 
		ARCHIVE DESTINATION lib
		LIBRARY DESTINATION lib
		INCLUDES DESTINATION include
)

install(FILES 
	include/nnet/nnet.hpp
	DESTINATION include/nnet)

 # create export file which can be imported by other cmake projects
install(EXPORT nnet_export
	NAMESPACE nnet::
	DESTINATION lib/cmake/${PROJECT_NAME}
)