#include "crow.h"
#include "nnet/nnet.hpp"

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/classify").methods("POST"_method)( {
        auto body = req.body;
        if (body.size() != 784) {
            return crow::response(400, "Invalid image size");
        }

        std::vector<uint8_t> image(body.begin(), body.end());
        auto result = nnet::classify(image);

        crow::json::wvalue json;
        for (int i = 0; i < result.size(); ++i) {
            json[std::to_string(i)] = result[i];
        }

        return crow::response(json);
    });

    app.port(8080).multithreaded().run();
}
