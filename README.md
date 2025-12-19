# aiDataCenterEnergyMonitor

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

This project aims to provide a TypeScript-based solution for monitoring and analyzing the energy consumption of AI data centers. Inspired by recent news concerning the increasing energy demands of AI and its impact on electricity bills, this tool helps track estimated energy usage, associated costs, and potential carbon footprint of data center operations.  It's designed to be a foundational library that can be integrated into larger data center management systems or used for independent analysis.

## Problem Statement

The rapid growth of Artificial Intelligence is creating unprecedented demand on power grids.  AI data centers require massive amounts of energy for training and inference, potentially driving up electricity costs for consumers and increasing carbon emissions.  Understanding and monitoring this energy consumption is crucial for sustainable AI development.

## Features

*   **Data Center Modeling:** Define and configure virtual data centers with specific server configurations (CPU, GPU, memory) and utilization rates.
*   **Energy Consumption Estimation:** Calculate estimated energy usage based on server specifications, utilization, and PUE (Power Usage Effectiveness).
*   **Cost Analysis:** Project electricity costs based on location (using dynamically fetched electricity rates) and estimated energy consumption.
*   **Carbon Footprint Calculation:** Estimate the carbon footprint of data center operations, considering energy source and location.
*   **TypeScript & Modular Design:** Built with TypeScript for type safety and maintainability, with a modular architecture allowing for easy extension and customization.
*   **Data Export:** Option to export collected data in common formats (JSON, CSV).

## Getting Started

### Prerequisites

*   Node.js (version 18 or higher)
*   npm or yarn

### Installation

```bash
git clone https://github.com/[your-username]/aiDataCenterEnergyMonitor.git
cd aiDataCenterEnergyMonitor
npm install
```

### Usage

```typescript
import { DataCenter, Server } from './src/datacenter';

// Define a server configuration
const server = new Server({
    cpuCores: 32,
    gpuCount: 4,
    memoryGB: 128,
    powerDrawWatts: 300 // Average power draw
});

// Create a data center
const dataCenter = new DataCenter({
    name: 'Example Data Center',
    location: 'Virginia, USA', // Used for fetching electricity rates
    servers: [server, server] // Add multiple servers
});

// Set utilization rate (0-100)
dataCenter.setUtilization(75);

// Calculate energy consumption for 24 hours
const dailyEnergyConsumption = dataCenter.calculateDailyEnergyConsumption();
console.log(`Daily Energy Consumption: ${dailyEnergyConsumption} kWh`);

//Calculate cost
const dailyCost = dataCenter.calculateDailyCost();
console.log(`Daily cost: ${dailyCost} $`);

// Calculate carbon footprint (requires energy source configuration - see documentation)
const carbonFootprint = dataCenter.calculateCarbonFootprint();
console.log(`Carbon Footprint: ${carbonFootprint} kg CO2e`);
```

## Data Sources

*   **Electricity Rates:** This project aims to integrate with publicly available APIs to fetch real-time electricity rates based on location. Currently, stub data is used, but integration with APIs like ElectricityMaps is planned.
*   **Server Specifications:** Relies on user-defined server configurations.
*   **PUE (Power Usage Effectiveness):**  Uses a default PUE value of 1.5, but allows for customization.
*   **Carbon Emission Factors:**  Leverages standard carbon emission factors for different energy sources (coal, gas, renewable).

## Roadmap

*   Integration with ElectricityMaps API for real-time electricity rate data.
*   Support for more detailed server configurations (e.g., specific CPU/GPU models).
*   Implementation of a user interface (e.g., using React or Vue.js) for data visualization and management.
*   Data persistence using a database (e.g., PostgreSQL, MongoDB).
*   Advanced analytics and reporting features.
*   Support for different data center cooling methods and their impact on energy consumption.

## Contributing

Contributions are welcome! Please see the `CONTRIBUTING.md` file for guidelines on how to contribute to this project.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

Inspired by the reporting on AI data center energy consumption led by Senator Elizabeth Warren and others, and the growing need for sustainable AI practices.
```