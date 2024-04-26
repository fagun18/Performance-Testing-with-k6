# Performance Testing with k6

When it comes to performance testing, JMeter has long been a popular choice. However, k6, an open-source load testing tool introduced in 2017, offers a compelling alternative with its efficiency and ease of use.

## Why k6?

- **Written in Go**: k6 is built on Go, which prioritizes performance, making it highly efficient.
- **Easy Load Generation**: A single instance of k6 can handle thousands of virtual users on a single machine, simplifying load distribution.
- **Protocol Support**: k6 supports various protocols including HTTP/1.1, HTTP/2, WebSockets, gRPC, and SOAP/REST webservices.

## Getting Started

### Installation

To start using k6, install it based on your operating system:

- **Mac**: Use Homebrew with `brew install k6`.
- **Windows**: Utilize the Windows Package Manager with `winget install k6`.

For other installation options, refer to the [k6 downloads page](https://k6.io/docs/getting-started/installation).

### Writing Your First k6 Load Test

1. **Set Up**: Install Visual Studio Code for creating JavaScript/TypeScript-based tests.
2. **Creating a Load Test**: Begin by writing a simple k6 load test.

```javascript
import http from "k6/http";

export default function () {
  http.get("https://test-api.k6.io/public/crocodiles/");
}
```

## Running the Test
Execute the test using the terminal command k6 
```javascript
run k6-loadTest.js.
```

## Enhancing Load Tests
- Adding Thresholds: Define acceptance criteria using thresholds to specify acceptable request durations or failure rates.
- Adding Virtual Users: Configure the number of virtual users (vus) and duration to apply load.


## License

[MIT License](LICENSE)


## Follow Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/mejbaur/)
[![Facebook](https://img.shields.io/badge/Facebook-Follow-blue)](https://www.facebook.com/mbfagun)
[![YouTube](https://img.shields.io/badge/YouTube-Subscribe-red)](https://www.youtube.com/channel/UC4Pgj5J2ZUxAVH9iAPfqL5g)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-blue)](https://twitter.com/fagun018)
[![Website](https://img.shields.io/badge/Website-Visit-blue)](https://mbfagun.blogspot.com/)
[![Medium](https://img.shields.io/badge/Medium-Follow-blue)](https://fagun18.medium.com/)


![Mejbaur Bahar Fagun](https://th.bing.com/th/id/OIP.kZ7sZWgg-zvkLAeAjttqpgHaHa?rs=1&pid=ImgDetMain)  
**Mejbaur Bahar Fagun**  
Product Acceptance Engineer (L2) @ DEVxHUB | 🥸 Lead SQA and 🐞 Security Analysts 🐛 Bug Bounty 👻 DevSecOps
