# Contributing to aiDataCenterEnergyMonitor

Thank you for your interest in contributing to the aiDataCenterEnergyMonitor project! We welcome contributions from developers of all skill levels. Below are the guidelines to help you get started.

## Code of Conduct

Please review and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). This document outlines the expectations for behavior within our community.

## How to Contribute

### Reporting Issues

If you encounter any issues or have suggestions for improvements, please open an issue on our [GitHub Issues page](https://github.com/yourusername/aiDataCenterEnergyMonitor/issues). When reporting an issue, please include:

- A clear and descriptive title.
- Detailed steps to reproduce the issue.
- Expected behavior versus actual behavior.
- Any relevant error messages or logs.
- Information about your environment (e.g., operating system, Node.js version).

### Submitting Pull Requests

To submit a pull request, follow these steps:

1. **Fork the Repository:** Click the "Fork" button on the [GitHub repository](https://github.com/yourusername/aiDataCenterEnergyMonitor) to create a copy of the project in your GitHub account.

2. **Clone Your Fork:** Clone your forked repository to your local machine.
   bash
   git clone https://github.com/yourusername/aiDataCenterEnergyMonitor.git
   cd aiDataCenterEnergyMonitor
   

3. **Create a New Branch:** Create a new branch for your changes.
   bash
   git checkout -b feature/your-feature-name
   

4. **Make Your Changes:** Edit the files as needed. Make sure to follow the coding standards and guidelines outlined below.

5. **Test Your Changes:** Run the tests to ensure your changes do not break existing functionality.
   bash
   npm test
   

6. **Commit Your Changes:** Commit your changes with a descriptive commit message.
   bash
   git commit -m "Add your descriptive commit message here"
   

7. **Push Your Changes:** Push your changes to your forked repository.
   bash
   git push origin feature/your-feature-name
   

8. **Open a Pull Request:** Go to the [GitHub repository](https://github.com/yourusername/aiDataCenterEnergyMonitor) and click the "New Pull Request" button. Select your branch as the source and the main branch of the original repository as the destination. Provide a clear description of your changes and why they are necessary.

### Coding Standards and Guidelines

- **TypeScript:** Use TypeScript for all new code. Ensure that your code is well-typed and adheres to the existing type definitions.
- **Modular Design:** Follow the modular design principles used in the project. Keep functions and classes focused on a single responsibility.
- **Code Formatting:** Use Prettier for code formatting. You can run Prettier to format your code with the following command:
  bash
  npx prettier --write .
  
- **Documentation:** Update the documentation as needed. Ensure that your code is well-documented and includes comments where appropriate.
- **Testing:** Write unit tests for your new code. Ensure that your tests cover all possible scenarios and edge cases.

### Development Setup

1. **Install Dependencies:** Install the project dependencies using npm or yarn.
   bash
   npm install
   # or
   yarn install
   

2. **Run the Project:** Start the project locally to see your changes in action.
   bash
   npm start
   # or
   yarn start
   

3. **Build the Project:** Build the project to generate the production-ready code.
   bash
   npm run build
   # or
   yarn build
   

## License

By contributing to aiDataCenterEnergyMonitor, you agree that your contributions will be licensed under the MIT License, which is the same license as the project itself. Please see the [LICENSE](LICENSE) file for more details.

We appreciate your contributions and look forward to working with you!