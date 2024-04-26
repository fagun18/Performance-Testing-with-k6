import http from "k6/http";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
    thresholds: {
        http_req_duration: ["p(95)<150"],
    },
    vus: 10,
    duration: "10s",
};

export default function () {
    http.get("https://fagun.com");
}

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
        "summary.txt": textSummary(data, { indent: " ", enableColors: true }),
    };
}
