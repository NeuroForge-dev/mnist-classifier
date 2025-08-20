#pragma once
#include <vector>
#include <cstdint>

namespace nnet {
    std::vector<float> classify(const std::vector<uint8_t>& image);
}
