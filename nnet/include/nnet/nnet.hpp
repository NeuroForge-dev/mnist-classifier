#pragma once
#include <vector>
#include <cstdint>

namespace nnet {
    std::vector<double> classify(const std::vector<uint8_t>& image);
}
