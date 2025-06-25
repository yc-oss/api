# Y Combinator companies API

This repository contains an unofficial API for Y Combinator companies fetched
from the Y Combinator website's Algolia search index. It only includes
**publicly launched companies** with pages on the Y Combinator website. It does
not scrape the Y Combinator website, instead it uses the Algolia search index to
fetch the companies in a GitHub Actions workflow that runs every day.

<!--start generated readme-->

## ℹ️ Metadata

API endpoint: https://yc-oss.github.io/api/meta.json

- Last updated: June 25, 2025 at 1:00 AM
- Companies: 5249
- Batches: 44
- Industries: 58
- Tags: 331

## 💻 APIs

### 🏢 Companies

| List of companies                 | API endpoint                                                        |
| --------------------------------- | ------------------------------------------------------------------- |
| All launched companies            | https://yc-oss.github.io/api/companies/all.json                     |
| Top companies                     | https://yc-oss.github.io/api/companies/top.json                     |
| Black-founded companies           | https://yc-oss.github.io/api/companies/black-founded.json           |
| Hispanic/Latino-founded companies | https://yc-oss.github.io/api/companies/hispanic-latino-founded.json |
| Women-founded companies           | https://yc-oss.github.io/api/companies/women-founded.json           |
| Not-for-profit companies          | https://yc-oss.github.io/api/companies/nonprofit.json               |
| Companies currently hiring        | https://yc-oss.github.io/api/companies/hiring.json                  |

### 🎓 Batches

<details>
<summary>Companies per batch</summary>

| Batch       | Count | API endpoint                                          |
| ----------- | ----- | ----------------------------------------------------- |
| Winter 2012 | 66    | https://yc-oss.github.io/api/batches/winter-2012.json |
| Summer 2011 | 60    | https://yc-oss.github.io/api/batches/summer-2011.json |
| Winter 2011 | 45    | https://yc-oss.github.io/api/batches/winter-2011.json |
| Summer 2010 | 36    | https://yc-oss.github.io/api/batches/summer-2010.json |
| Winter 2010 | 27    | https://yc-oss.github.io/api/batches/winter-2010.json |
| Summer 2009 | 26    | https://yc-oss.github.io/api/batches/summer-2009.json |
| Winter 2009 | 16    | https://yc-oss.github.io/api/batches/winter-2009.json |
| Summer 2008 | 22    | https://yc-oss.github.io/api/batches/summer-2008.json |
| Winter 2008 | 21    | https://yc-oss.github.io/api/batches/winter-2008.json |
| Summer 2007 | 19    | https://yc-oss.github.io/api/batches/summer-2007.json |
| Winter 2007 | 13    | https://yc-oss.github.io/api/batches/winter-2007.json |
| Summer 2006 | 11    | https://yc-oss.github.io/api/batches/summer-2006.json |
| Winter 2006 | 7     | https://yc-oss.github.io/api/batches/winter-2006.json |
| Summer 2005 | 8     | https://yc-oss.github.io/api/batches/summer-2005.json |
| Summer 2012 | 83    | https://yc-oss.github.io/api/batches/summer-2012.json |
| Winter 2013 | 46    | https://yc-oss.github.io/api/batches/winter-2013.json |
| Summer 2013 | 52    | https://yc-oss.github.io/api/batches/summer-2013.json |
| Winter 2014 | 74    | https://yc-oss.github.io/api/batches/winter-2014.json |
| Summer 2014 | 78    | https://yc-oss.github.io/api/batches/summer-2014.json |
| Winter 2015 | 111   | https://yc-oss.github.io/api/batches/winter-2015.json |
| Summer 2015 | 105   | https://yc-oss.github.io/api/batches/summer-2015.json |
| Winter 2016 | 122   | https://yc-oss.github.io/api/batches/winter-2016.json |
| Summer 2017 | 125   | https://yc-oss.github.io/api/batches/summer-2017.json |
| Summer 2016 | 102   | https://yc-oss.github.io/api/batches/summer-2016.json |
| Winter 2017 | 116   | https://yc-oss.github.io/api/batches/winter-2017.json |
| Winter 2018 | 147   | https://yc-oss.github.io/api/batches/winter-2018.json |
| Summer 2018 | 131   | https://yc-oss.github.io/api/batches/summer-2018.json |
| Summer 2019 | 176   | https://yc-oss.github.io/api/batches/summer-2019.json |
| Winter 2019 | 195   | https://yc-oss.github.io/api/batches/winter-2019.json |
| Winter 2020 | 228   | https://yc-oss.github.io/api/batches/winter-2020.json |
| Summer 2020 | 208   | https://yc-oss.github.io/api/batches/summer-2020.json |
| Winter 2021 | 336   | https://yc-oss.github.io/api/batches/winter-2021.json |
| Summer 2021 | 391   | https://yc-oss.github.io/api/batches/summer-2021.json |
| Winter 2022 | 399   | https://yc-oss.github.io/api/batches/winter-2022.json |
| Summer 2022 | 234   | https://yc-oss.github.io/api/batches/summer-2022.json |
| Winter 2023 | 275   | https://yc-oss.github.io/api/batches/winter-2023.json |
| Summer 2023 | 219   | https://yc-oss.github.io/api/batches/summer-2023.json |
| Winter 2024 | 252   | https://yc-oss.github.io/api/batches/winter-2024.json |
| Winter 2025 | 163   | https://yc-oss.github.io/api/batches/winter-2025.json |
| Summer 2024 | 252   | https://yc-oss.github.io/api/batches/summer-2024.json |
| Fall 2024   | 95    | https://yc-oss.github.io/api/batches/fall-2024.json   |
| Spring 2025 | 143   | https://yc-oss.github.io/api/batches/spring-2025.json |
| Summer 2025 | 13    | https://yc-oss.github.io/api/batches/summer-2025.json |
| Unspecified | 1     | https://yc-oss.github.io/api/batches/unspecified.json |

</details>

### 🏭 Industries

<details>
<summary>Companies per industry</summary>

| Industry                        | Count | API endpoint                                                                |
| ------------------------------- | ----- | --------------------------------------------------------------------------- |
| Agriculture                     | 28    | https://yc-oss.github.io/api/industries/agriculture.json                    |
| Analytics                       | 118   | https://yc-oss.github.io/api/industries/analytics.json                      |
| Apparel and Cosmetics           | 49    | https://yc-oss.github.io/api/industries/apparel-and-cosmetics.json          |
| Asset Management                | 50    | https://yc-oss.github.io/api/industries/asset-management.json               |
| Automotive                      | 20    | https://yc-oss.github.io/api/industries/automotive.json                     |
| Aviation and Space              | 54    | https://yc-oss.github.io/api/industries/aviation-and-space.json             |
| B2B                             | 2586  | https://yc-oss.github.io/api/industries/b2b.json                            |
| Banking and Exchange            | 72    | https://yc-oss.github.io/api/industries/banking-and-exchange.json           |
| Climate                         | 53    | https://yc-oss.github.io/api/industries/climate.json                        |
| Construction                    | 43    | https://yc-oss.github.io/api/industries/construction.json                   |
| Consumer                        | 829   | https://yc-oss.github.io/api/industries/consumer.json                       |
| Consumer Electronics            | 40    | https://yc-oss.github.io/api/industries/consumer-electronics.json           |
| Consumer Finance                | 80    | https://yc-oss.github.io/api/industries/consumer-finance.json               |
| Consumer Health and Wellness    | 113   | https://yc-oss.github.io/api/industries/consumer-health-and-wellness.json   |
| Content                         | 109   | https://yc-oss.github.io/api/industries/content.json                        |
| Credit and Lending              | 73    | https://yc-oss.github.io/api/industries/credit-and-lending.json             |
| Diagnostics                     | 53    | https://yc-oss.github.io/api/industries/diagnostics.json                    |
| Drones                          | 19    | https://yc-oss.github.io/api/industries/drones.json                         |
| Drug Discovery and Delivery     | 47    | https://yc-oss.github.io/api/industries/drug-discovery-and-delivery.json    |
| Education                       | 123   | https://yc-oss.github.io/api/industries/education.json                      |
| Energy                          | 37    | https://yc-oss.github.io/api/industries/energy.json                         |
| Engineering, Product and Design | 538   | https://yc-oss.github.io/api/industries/engineering-product-and-design.json |
| Finance and Accounting          | 119   | https://yc-oss.github.io/api/industries/finance-and-accounting.json         |
| Fintech                         | 584   | https://yc-oss.github.io/api/industries/fintech.json                        |
| Food and Beverage               | 94    | https://yc-oss.github.io/api/industries/food-and-beverage.json              |
| Gaming                          | 69    | https://yc-oss.github.io/api/industries/gaming.json                         |
| Government                      | 37    | https://yc-oss.github.io/api/industries/government.json                     |
| Healthcare                      | 626   | https://yc-oss.github.io/api/industries/healthcare.json                     |
| Healthcare IT                   | 128   | https://yc-oss.github.io/api/industries/healthcare-it.json                  |
| Healthcare Services             | 70    | https://yc-oss.github.io/api/industries/healthcare-services.json            |
| Home and Personal               | 129   | https://yc-oss.github.io/api/industries/home-and-personal.json              |
| Housing and Real Estate         | 79    | https://yc-oss.github.io/api/industries/housing-and-real-estate.json        |
| Human Resources                 | 80    | https://yc-oss.github.io/api/industries/human-resources.json                |
| Industrial Bio                  | 33    | https://yc-oss.github.io/api/industries/industrial-bio.json                 |
| Industrials                     | 304   | https://yc-oss.github.io/api/industries/industrials.json                    |
| Infrastructure                  | 233   | https://yc-oss.github.io/api/industries/infrastructure.json                 |
| Insurance                       | 47    | https://yc-oss.github.io/api/industries/insurance.json                      |
| Job and Career Services         | 17    | https://yc-oss.github.io/api/industries/job-and-career-services.json        |
| Legal                           | 42    | https://yc-oss.github.io/api/industries/legal.json                          |
| Manufacturing and Robotics      | 77    | https://yc-oss.github.io/api/industries/manufacturing-and-robotics.json     |
| Marketing                       | 143   | https://yc-oss.github.io/api/industries/marketing.json                      |
| Medical Devices                 | 44    | https://yc-oss.github.io/api/industries/medical-devices.json                |
| Office Management               | 25    | https://yc-oss.github.io/api/industries/office-management.json              |
| Operations                      | 128   | https://yc-oss.github.io/api/industries/operations.json                     |
| Payments                        | 117   | https://yc-oss.github.io/api/industries/payments.json                       |
| Productivity                    | 204   | https://yc-oss.github.io/api/industries/productivity.json                   |
| Real Estate and Construction    | 142   | https://yc-oss.github.io/api/industries/real-estate-and-construction.json   |
| Recruiting and Talent           | 71    | https://yc-oss.github.io/api/industries/recruiting-and-talent.json          |
| Retail                          | 125   | https://yc-oss.github.io/api/industries/retail.json                         |
| Sales                           | 126   | https://yc-oss.github.io/api/industries/sales.json                          |
| Security                        | 97    | https://yc-oss.github.io/api/industries/security.json                       |
| Social                          | 115   | https://yc-oss.github.io/api/industries/social.json                         |
| Supply Chain and Logistics      | 119   | https://yc-oss.github.io/api/industries/supply-chain-and-logistics.json     |
| Therapeutics                    | 63    | https://yc-oss.github.io/api/industries/therapeutics.json                   |
| Transportation Services         | 27    | https://yc-oss.github.io/api/industries/transportation-services.json        |
| Travel, Leisure and Tourism     | 33    | https://yc-oss.github.io/api/industries/travel-leisure-and-tourism.json     |
| Unspecified                     | 18    | https://yc-oss.github.io/api/industries/unspecified.json                    |
| Virtual and Augmented Reality   | 22    | https://yc-oss.github.io/api/industries/virtual-and-augmented-reality.json  |

</details>

### 🏷️ Tags

<details>
<summary>Companies per tag</summary>

| Tag                                                    | Count | API endpoint                                                                                 |
| ------------------------------------------------------ | ----- | -------------------------------------------------------------------------------------------- |
| 3D Printed Foods                                       | 1     | https://yc-oss.github.io/api/tags/3d-printed-foods.json                                      |
| 3D Printing                                            | 11    | https://yc-oss.github.io/api/tags/3d-printing.json                                           |
| Advanced Materials                                     | 5     | https://yc-oss.github.io/api/tags/advanced-materials.json                                    |
| Advertising                                            | 33    | https://yc-oss.github.io/api/tags/advertising.json                                           |
| Aerospace                                              | 32    | https://yc-oss.github.io/api/tags/aerospace.json                                             |
| Agriculture                                            | 29    | https://yc-oss.github.io/api/tags/agriculture.json                                           |
| AI                                                     | 599   | https://yc-oss.github.io/api/tags/ai.json                                                    |
| AI Assistant                                           | 133   | https://yc-oss.github.io/api/tags/ai-assistant.json                                          |
| AI-Enhanced Learning                                   | 41    | https://yc-oss.github.io/api/tags/ai-enhanced-learning.json                                  |
| AI-powered Drug Discovery                              | 36    | https://yc-oss.github.io/api/tags/ai-powered-drug-discovery.json                             |
| AIOps                                                  | 49    | https://yc-oss.github.io/api/tags/aiops.json                                                 |
| Air Taxis                                              | 5     | https://yc-oss.github.io/api/tags/air-taxis.json                                             |
| Airlines                                               | 4     | https://yc-oss.github.io/api/tags/airlines.json                                              |
| Airplanes                                              | 10    | https://yc-oss.github.io/api/tags/airplanes.json                                             |
| Alternative Battery Tech                               | 2     | https://yc-oss.github.io/api/tags/alternative-battery-tech.json                              |
| Alternative Fuels                                      | 1     | https://yc-oss.github.io/api/tags/alternative-fuels.json                                     |
| Analytics                                              | 178   | https://yc-oss.github.io/api/tags/analytics.json                                             |
| Anti-Aging                                             | 8     | https://yc-oss.github.io/api/tags/anti-aging.json                                            |
| API                                                    | 136   | https://yc-oss.github.io/api/tags/api.json                                                   |
| APIs                                                   | 7     | https://yc-oss.github.io/api/tags/apis.json                                                  |
| Apparel                                                | 4     | https://yc-oss.github.io/api/tags/apparel.json                                               |
| AR                                                     | 5     | https://yc-oss.github.io/api/tags/ar.json                                                    |
| Architecture                                           | 2     | https://yc-oss.github.io/api/tags/architecture.json                                          |
| Art Trading Platforms                                  | 1     | https://yc-oss.github.io/api/tags/art-trading-platforms.json                                 |
| Artificial Intelligence                                | 723   | https://yc-oss.github.io/api/tags/artificial-intelligence.json                               |
| Assistive Tech                                         | 8     | https://yc-oss.github.io/api/tags/assistive-tech.json                                        |
| Augmented Reality                                      | 23    | https://yc-oss.github.io/api/tags/augmented-reality.json                                     |
| Auto Commerce                                          | 6     | https://yc-oss.github.io/api/tags/auto-commerce.json                                         |
| Automation                                             | 68    | https://yc-oss.github.io/api/tags/automation.json                                            |
| Automotive                                             | 20    | https://yc-oss.github.io/api/tags/automotive.json                                            |
| Autonomous Delivery                                    | 8     | https://yc-oss.github.io/api/tags/autonomous-delivery.json                                   |
| Autonomous Trucking                                    | 12    | https://yc-oss.github.io/api/tags/autonomous-trucking.json                                   |
| B2B                                                    | 1014  | https://yc-oss.github.io/api/tags/b2b.json                                                   |
| Banking as a Service                                   | 25    | https://yc-oss.github.io/api/tags/banking-as-a-service.json                                  |
| Batteryless IoT Sensors                                | 1     | https://yc-oss.github.io/api/tags/batteryless-iot-sensors.json                               |
| Beauty                                                 | 10    | https://yc-oss.github.io/api/tags/beauty.json                                                |
| Big Data                                               | 21    | https://yc-oss.github.io/api/tags/big-data.json                                              |
| Billing                                                | 8     | https://yc-oss.github.io/api/tags/billing.json                                               |
| Biometrics                                             | 6     | https://yc-oss.github.io/api/tags/biometrics.json                                            |
| Bioplastic                                             | 3     | https://yc-oss.github.io/api/tags/bioplastic.json                                            |
| Biotech                                                | 128   | https://yc-oss.github.io/api/tags/biotech.json                                               |
| Biotechnology                                          | 12    | https://yc-oss.github.io/api/tags/biotechnology.json                                         |
| Blockchain                                             | 2     | https://yc-oss.github.io/api/tags/blockchain.json                                            |
| Booking                                                | 2     | https://yc-oss.github.io/api/tags/booking.json                                               |
| Calendar                                               | 7     | https://yc-oss.github.io/api/tags/calendar.json                                              |
| Call Center                                            | 7     | https://yc-oss.github.io/api/tags/call-center.json                                           |
| Cannabis                                               | 7     | https://yc-oss.github.io/api/tags/cannabis.json                                              |
| Carbon Capture and Removal                             | 14    | https://yc-oss.github.io/api/tags/carbon-capture-and-removal.json                            |
| Careers                                                | 4     | https://yc-oss.github.io/api/tags/careers.json                                               |
| Cashierless Checkout                                   | 5     | https://yc-oss.github.io/api/tags/cashierless-checkout.json                                  |
| Cell Therapy                                           | 5     | https://yc-oss.github.io/api/tags/cell-therapy.json                                          |
| Cellular Agriculture                                   | 6     | https://yc-oss.github.io/api/tags/cellular-agriculture.json                                  |
| Chat                                                   | 5     | https://yc-oss.github.io/api/tags/chat.json                                                  |
| Chatbot                                                | 8     | https://yc-oss.github.io/api/tags/chatbot.json                                               |
| Chatbots                                               | 2     | https://yc-oss.github.io/api/tags/chatbots.json                                              |
| China                                                  | 3     | https://yc-oss.github.io/api/tags/china.json                                                 |
| Civic Tech                                             | 10    | https://yc-oss.github.io/api/tags/civic-tech.json                                            |
| Clean Meat                                             | 1     | https://yc-oss.github.io/api/tags/clean-meat.json                                            |
| Climate                                                | 151   | https://yc-oss.github.io/api/tags/climate.json                                               |
| ClimateTech                                            | 32    | https://yc-oss.github.io/api/tags/climatetech.json                                           |
| Cloud Computing                                        | 41    | https://yc-oss.github.io/api/tags/cloud-computing.json                                       |
| Cloud Gaming                                           | 3     | https://yc-oss.github.io/api/tags/cloud-gaming.json                                          |
| Cloud Workload Protection                              | 5     | https://yc-oss.github.io/api/tags/cloud-workload-protection.json                             |
| Coding Bootcamps                                       | 2     | https://yc-oss.github.io/api/tags/coding-bootcamps.json                                      |
| Collaboration                                          | 46    | https://yc-oss.github.io/api/tags/collaboration.json                                         |
| Commercial Space Launch                                | 7     | https://yc-oss.github.io/api/tags/commercial-space-launch.json                               |
| Community                                              | 61    | https://yc-oss.github.io/api/tags/community.json                                             |
| Compliance                                             | 65    | https://yc-oss.github.io/api/tags/compliance.json                                            |
| Computational Storage                                  | 1     | https://yc-oss.github.io/api/tags/computational-storage.json                                 |
| Computer Vision                                        | 67    | https://yc-oss.github.io/api/tags/computer-vision.json                                       |
| Construction                                           | 58    | https://yc-oss.github.io/api/tags/construction.json                                          |
| Consumer                                               | 200   | https://yc-oss.github.io/api/tags/consumer.json                                              |
| Consumer Finance                                       | 23    | https://yc-oss.github.io/api/tags/consumer-finance.json                                      |
| Consumer Health Services                               | 104   | https://yc-oss.github.io/api/tags/consumer-health-services.json                              |
| Consumer Products                                      | 13    | https://yc-oss.github.io/api/tags/consumer-products.json                                     |
| Conversational AI                                      | 36    | https://yc-oss.github.io/api/tags/conversational-ai.json                                     |
| Conversational Banking                                 | 2     | https://yc-oss.github.io/api/tags/conversational-banking.json                                |
| COVID-19                                               | 4     | https://yc-oss.github.io/api/tags/covid-19.json                                              |
| Creator Economy                                        | 30    | https://yc-oss.github.io/api/tags/creator-economy.json                                       |
| CRISPR                                                 | 3     | https://yc-oss.github.io/api/tags/crispr.json                                                |
| CRM                                                    | 21    | https://yc-oss.github.io/api/tags/crm.json                                                   |
| Crowdfunding                                           | 9     | https://yc-oss.github.io/api/tags/crowdfunding.json                                          |
| Crowdsourcing                                          | 3     | https://yc-oss.github.io/api/tags/crowdsourcing.json                                         |
| Crypto / Web3                                          | 89    | https://yc-oss.github.io/api/tags/crypto-web3.json                                           |
| Cryptocurrency                                         | 6     | https://yc-oss.github.io/api/tags/cryptocurrency.json                                        |
| Cryptography                                           | 3     | https://yc-oss.github.io/api/tags/cryptography.json                                          |
| Cultivated Meat                                        | 2     | https://yc-oss.github.io/api/tags/cultivated-meat.json                                       |
| Culture                                                | 2     | https://yc-oss.github.io/api/tags/culture.json                                               |
| Cultured Meat                                          | 3     | https://yc-oss.github.io/api/tags/cultured-meat.json                                         |
| Customer Service                                       | 20    | https://yc-oss.github.io/api/tags/customer-service.json                                      |
| Customer Success                                       | 28    | https://yc-oss.github.io/api/tags/customer-success.json                                      |
| Customer Support                                       | 32    | https://yc-oss.github.io/api/tags/customer-support.json                                      |
| Customization                                          | 2     | https://yc-oss.github.io/api/tags/customization.json                                         |
| Cyber Insurance                                        | 1     | https://yc-oss.github.io/api/tags/cyber-insurance.json                                       |
| Cybersecurity                                          | 37    | https://yc-oss.github.io/api/tags/cybersecurity.json                                         |
| DAO                                                    | 4     | https://yc-oss.github.io/api/tags/dao.json                                                   |
| Data Engineering                                       | 91    | https://yc-oss.github.io/api/tags/data-engineering.json                                      |
| Data Labeling                                          | 12    | https://yc-oss.github.io/api/tags/data-labeling.json                                         |
| Data Science                                           | 29    | https://yc-oss.github.io/api/tags/data-science.json                                          |
| Data Visualization                                     | 30    | https://yc-oss.github.io/api/tags/data-visualization.json                                    |
| Database Sharding                                      | 1     | https://yc-oss.github.io/api/tags/database-sharding.json                                     |
| Databases                                              | 26    | https://yc-oss.github.io/api/tags/databases.json                                             |
| Dating                                                 | 7     | https://yc-oss.github.io/api/tags/dating.json                                                |
| Deep Learning                                          | 41    | https://yc-oss.github.io/api/tags/deep-learning.json                                         |
| Deepfake Detection                                     | 1     | https://yc-oss.github.io/api/tags/deepfake-detection.json                                    |
| DeFi                                                   | 13    | https://yc-oss.github.io/api/tags/defi.json                                                  |
| Delivery                                               | 54    | https://yc-oss.github.io/api/tags/delivery.json                                              |
| Dental                                                 | 5     | https://yc-oss.github.io/api/tags/dental.json                                                |
| Design                                                 | 26    | https://yc-oss.github.io/api/tags/design.json                                                |
| Design Tools                                           | 57    | https://yc-oss.github.io/api/tags/design-tools.json                                          |
| Developer Tools                                        | 496   | https://yc-oss.github.io/api/tags/developer-tools.json                                       |
| DevOps                                                 | 47    | https://yc-oss.github.io/api/tags/devops.json                                                |
| DevSecOps                                              | 31    | https://yc-oss.github.io/api/tags/devsecops.json                                             |
| Diagnostics                                            | 32    | https://yc-oss.github.io/api/tags/diagnostics.json                                           |
| Digital Freight Brokerage                              | 2     | https://yc-oss.github.io/api/tags/digital-freight-brokerage.json                             |
| Digital Health                                         | 103   | https://yc-oss.github.io/api/tags/digital-health.json                                        |
| Diversity & Inclusion                                  | 5     | https://yc-oss.github.io/api/tags/diversity-and-inclusion.json                               |
| Documents                                              | 31    | https://yc-oss.github.io/api/tags/documents.json                                             |
| Drones                                                 | 24    | https://yc-oss.github.io/api/tags/drones.json                                                |
| Drug Delivery                                          | 6     | https://yc-oss.github.io/api/tags/drug-delivery.json                                         |
| Drug discovery                                         | 30    | https://yc-oss.github.io/api/tags/drug-discovery.json                                        |
| E-Commerce                                             | 44    | https://yc-oss.github.io/api/tags/e-commerce.json                                            |
| Edge Computing Semiconductors                          | 3     | https://yc-oss.github.io/api/tags/edge-computing-semiconductors.json                         |
| Edtech                                                 | 21    | https://yc-oss.github.io/api/tags/edtech.json                                                |
| Education                                              | 159   | https://yc-oss.github.io/api/tags/education.json                                             |
| eLearning                                              | 48    | https://yc-oss.github.io/api/tags/elearning.json                                             |
| Election Tech                                          | 2     | https://yc-oss.github.io/api/tags/election-tech.json                                         |
| Electric Vehicles                                      | 24    | https://yc-oss.github.io/api/tags/electric-vehicles.json                                     |
| Electronics                                            | 8     | https://yc-oss.github.io/api/tags/electronics.json                                           |
| Email                                                  | 24    | https://yc-oss.github.io/api/tags/email.json                                                 |
| Emerging Markets                                       | 7     | https://yc-oss.github.io/api/tags/emerging-markets.json                                      |
| Energy                                                 | 36    | https://yc-oss.github.io/api/tags/energy.json                                                |
| Energy Storage                                         | 13    | https://yc-oss.github.io/api/tags/energy-storage.json                                        |
| Enterprise                                             | 109   | https://yc-oss.github.io/api/tags/enterprise.json                                            |
| Enterprise Software                                    | 95    | https://yc-oss.github.io/api/tags/enterprise-software.json                                   |
| Entertainment                                          | 46    | https://yc-oss.github.io/api/tags/entertainment.json                                         |
| eSports                                                | 3     | https://yc-oss.github.io/api/tags/esports.json                                               |
| Fashion                                                | 20    | https://yc-oss.github.io/api/tags/fashion.json                                               |
| Feedback                                               | 5     | https://yc-oss.github.io/api/tags/feedback.json                                              |
| Femtech                                                | 6     | https://yc-oss.github.io/api/tags/femtech.json                                               |
| Fertility Tech                                         | 8     | https://yc-oss.github.io/api/tags/fertility-tech.json                                        |
| Finance                                                | 71    | https://yc-oss.github.io/api/tags/finance.json                                               |
| FinOps                                                 | 27    | https://yc-oss.github.io/api/tags/finops.json                                                |
| Fintech                                                | 691   | https://yc-oss.github.io/api/tags/fintech.json                                               |
| Fitness                                                | 18    | https://yc-oss.github.io/api/tags/fitness.json                                               |
| Food                                                   | 7     | https://yc-oss.github.io/api/tags/food.json                                                  |
| Food & Beverage                                        | 25    | https://yc-oss.github.io/api/tags/food-and-beverage.json                                     |
| Food Service Robots & Machines                         | 10    | https://yc-oss.github.io/api/tags/food-service-robots-and-machines.json                      |
| Food Tech                                              | 49    | https://yc-oss.github.io/api/tags/food-tech.json                                             |
| Fraud Detection                                        | 7     | https://yc-oss.github.io/api/tags/fraud-detection.json                                       |
| Fraud Prevention                                       | 4     | https://yc-oss.github.io/api/tags/fraud-prevention.json                                      |
| Fundraising                                            | 3     | https://yc-oss.github.io/api/tags/fundraising.json                                           |
| Furniture                                              | 7     | https://yc-oss.github.io/api/tags/furniture.json                                             |
| Fusion Energy                                          | 1     | https://yc-oss.github.io/api/tags/fusion-energy.json                                         |
| Gaming                                                 | 83    | https://yc-oss.github.io/api/tags/gaming.json                                                |
| Gardening                                              | 2     | https://yc-oss.github.io/api/tags/gardening.json                                             |
| Gene Therapy                                           | 13    | https://yc-oss.github.io/api/tags/gene-therapy.json                                          |
| Generative AI                                          | 269   | https://yc-oss.github.io/api/tags/generative-ai.json                                         |
| Genetic Engineering                                    | 2     | https://yc-oss.github.io/api/tags/genetic-engineering.json                                   |
| Genomics                                               | 26    | https://yc-oss.github.io/api/tags/genomics.json                                              |
| Geographic Information System                          | 4     | https://yc-oss.github.io/api/tags/geographic-information-system.json                         |
| Ghost Kitchens                                         | 11    | https://yc-oss.github.io/api/tags/ghost-kitchens.json                                        |
| GovTech                                                | 41    | https://yc-oss.github.io/api/tags/govtech.json                                               |
| GraphQL                                                | 3     | https://yc-oss.github.io/api/tags/graphql.json                                               |
| Grocery                                                | 30    | https://yc-oss.github.io/api/tags/grocery.json                                               |
| Hard Tech                                              | 90    | https://yc-oss.github.io/api/tags/hard-tech.json                                             |
| Hardware                                               | 111   | https://yc-oss.github.io/api/tags/hardware.json                                              |
| Health & Wellness                                      | 42    | https://yc-oss.github.io/api/tags/health-and-wellness.json                                   |
| Health Insurance                                       | 26    | https://yc-oss.github.io/api/tags/health-insurance.json                                      |
| Health Tech                                            | 162   | https://yc-oss.github.io/api/tags/health-tech.json                                           |
| Healthcare                                             | 191   | https://yc-oss.github.io/api/tags/healthcare.json                                            |
| Healthcare IT                                          | 31    | https://yc-oss.github.io/api/tags/healthcare-it.json                                         |
| Home Automation                                        | 3     | https://yc-oss.github.io/api/tags/home-automation.json                                       |
| Home Services                                          | 7     | https://yc-oss.github.io/api/tags/home-services.json                                         |
| Housing                                                | 18    | https://yc-oss.github.io/api/tags/housing.json                                               |
| HR Tech                                                | 67    | https://yc-oss.github.io/api/tags/hr-tech.json                                               |
| Human Resources                                        | 22    | https://yc-oss.github.io/api/tags/human-resources.json                                       |
| Hydrogen Energy                                        | 3     | https://yc-oss.github.io/api/tags/hydrogen-energy.json                                       |
| Identity                                               | 15    | https://yc-oss.github.io/api/tags/identity.json                                              |
| Immigration                                            | 5     | https://yc-oss.github.io/api/tags/immigration.json                                           |
| Income Share Agreements                                | 4     | https://yc-oss.github.io/api/tags/income-share-agreements.json                               |
| India                                                  | 38    | https://yc-oss.github.io/api/tags/india.json                                                 |
| Indoor Mapping                                         | 3     | https://yc-oss.github.io/api/tags/indoor-mapping.json                                        |
| Industrial                                             | 15    | https://yc-oss.github.io/api/tags/industrial.json                                            |
| Industrial Workplace Safety                            | 4     | https://yc-oss.github.io/api/tags/industrial-workplace-safety.json                           |
| Infrastructure                                         | 79    | https://yc-oss.github.io/api/tags/infrastructure.json                                        |
| Insurance                                              | 69    | https://yc-oss.github.io/api/tags/insurance.json                                             |
| International                                          | 6     | https://yc-oss.github.io/api/tags/international.json                                         |
| Investing                                              | 53    | https://yc-oss.github.io/api/tags/investing.json                                             |
| Investments                                            | 7     | https://yc-oss.github.io/api/tags/investments.json                                           |
| IoT                                                    | 45    | https://yc-oss.github.io/api/tags/iot.json                                                   |
| IoT Security                                           | 1     | https://yc-oss.github.io/api/tags/iot-security.json                                          |
| Kids                                                   | 9     | https://yc-oss.github.io/api/tags/kids.json                                                  |
| Kubernetes                                             | 13    | https://yc-oss.github.io/api/tags/kubernetes.json                                            |
| Lab-on-a-chip                                          | 1     | https://yc-oss.github.io/api/tags/lab-on-a-chip.json                                         |
| Latin America                                          | 21    | https://yc-oss.github.io/api/tags/latin-america.json                                         |
| Legal                                                  | 27    | https://yc-oss.github.io/api/tags/legal.json                                                 |
| LegalTech                                              | 47    | https://yc-oss.github.io/api/tags/legaltech.json                                             |
| Lending                                                | 18    | https://yc-oss.github.io/api/tags/lending.json                                               |
| Lidar                                                  | 2     | https://yc-oss.github.io/api/tags/lidar.json                                                 |
| Live                                                   | 5     | https://yc-oss.github.io/api/tags/live.json                                                  |
| Location-based                                         | 3     | https://yc-oss.github.io/api/tags/location-based.json                                        |
| Logistics                                              | 115   | https://yc-oss.github.io/api/tags/logistics.json                                             |
| Machine Learning                                       | 225   | https://yc-oss.github.io/api/tags/machine-learning.json                                      |
| Manufacturing                                          | 61    | https://yc-oss.github.io/api/tags/manufacturing.json                                         |
| Maritime                                               | 2     | https://yc-oss.github.io/api/tags/maritime.json                                              |
| Market Research                                        | 14    | https://yc-oss.github.io/api/tags/market-research.json                                       |
| Marketing                                              | 77    | https://yc-oss.github.io/api/tags/marketing.json                                             |
| Marketplace                                            | 307   | https://yc-oss.github.io/api/tags/marketplace.json                                           |
| Media                                                  | 39    | https://yc-oss.github.io/api/tags/media.json                                                 |
| Medical Devices                                        | 67    | https://yc-oss.github.io/api/tags/medical-devices.json                                       |
| Medical Robotics                                       | 5     | https://yc-oss.github.io/api/tags/medical-robotics.json                                      |
| Mental Health                                          | 11    | https://yc-oss.github.io/api/tags/mental-health.json                                         |
| Mental Health Tech                                     | 39    | https://yc-oss.github.io/api/tags/mental-health-tech.json                                    |
| Messaging                                              | 44    | https://yc-oss.github.io/api/tags/messaging.json                                             |
| Metaverse                                              | 8     | https://yc-oss.github.io/api/tags/metaverse.json                                             |
| Microfluidics                                          | 5     | https://yc-oss.github.io/api/tags/microfluidics.json                                         |
| Microinsurance                                         | 3     | https://yc-oss.github.io/api/tags/microinsurance.json                                        |
| Mining                                                 | 4     | https://yc-oss.github.io/api/tags/mining.json                                                |
| ML                                                     | 14    | https://yc-oss.github.io/api/tags/ml.json                                                    |
| Mobility                                               | 12    | https://yc-oss.github.io/api/tags/mobility.json                                              |
| Monitoring                                             | 13    | https://yc-oss.github.io/api/tags/monitoring.json                                            |
| Music                                                  | 20    | https://yc-oss.github.io/api/tags/music.json                                                 |
| Nanomedicine                                           | 5     | https://yc-oss.github.io/api/tags/nanomedicine.json                                          |
| Nanosensors                                            | 4     | https://yc-oss.github.io/api/tags/nanosensors.json                                           |
| Nanotechnology                                         | 11    | https://yc-oss.github.io/api/tags/nanotechnology.json                                        |
| Navigation                                             | 4     | https://yc-oss.github.io/api/tags/navigation.json                                            |
| Neobank                                                | 48    | https://yc-oss.github.io/api/tags/neobank.json                                               |
| Networks                                               | 3     | https://yc-oss.github.io/api/tags/networks.json                                              |
| Neurotechnology                                        | 14    | https://yc-oss.github.io/api/tags/neurotechnology.json                                       |
| Next-gen Network Security                              | 5     | https://yc-oss.github.io/api/tags/next-gen-network-security.json                             |
| NFT                                                    | 5     | https://yc-oss.github.io/api/tags/nft.json                                                   |
| NLP                                                    | 22    | https://yc-oss.github.io/api/tags/nlp.json                                                   |
| No-code                                                | 31    | https://yc-oss.github.io/api/tags/no-code.json                                               |
| Nonprofit                                              | 26    | https://yc-oss.github.io/api/tags/nonprofit.json                                             |
| Note-taking                                            | 6     | https://yc-oss.github.io/api/tags/note-taking.json                                           |
| Notifications                                          | 2     | https://yc-oss.github.io/api/tags/notifications.json                                         |
| Oncology                                               | 20    | https://yc-oss.github.io/api/tags/oncology.json                                              |
| Open Source                                            | 157   | https://yc-oss.github.io/api/tags/open-source.json                                           |
| Operations                                             | 27    | https://yc-oss.github.io/api/tags/operations.json                                            |
| Payments                                               | 140   | https://yc-oss.github.io/api/tags/payments.json                                              |
| Payroll                                                | 15    | https://yc-oss.github.io/api/tags/payroll.json                                               |
| Pediatrics                                             | 3     | https://yc-oss.github.io/api/tags/pediatrics.json                                            |
| Personalization                                        | 8     | https://yc-oss.github.io/api/tags/personalization.json                                       |
| Plant-based Meat                                       | 2     | https://yc-oss.github.io/api/tags/plant-based-meat.json                                      |
| Podcasts                                               | 7     | https://yc-oss.github.io/api/tags/podcasts.json                                              |
| Primary Care                                           | 8     | https://yc-oss.github.io/api/tags/primary-care.json                                          |
| Privacy                                                | 19    | https://yc-oss.github.io/api/tags/privacy.json                                               |
| Procurement                                            | 13    | https://yc-oss.github.io/api/tags/procurement.json                                           |
| Productivity                                           | 144   | https://yc-oss.github.io/api/tags/productivity.json                                          |
| Proptech                                               | 83    | https://yc-oss.github.io/api/tags/proptech.json                                              |
| Psychedelics                                           | 1     | https://yc-oss.github.io/api/tags/psychedelics.json                                          |
| Quantum Computing                                      | 6     | https://yc-oss.github.io/api/tags/quantum-computing.json                                     |
| Radar                                                  | 2     | https://yc-oss.github.io/api/tags/radar.json                                                 |
| Real Estate                                            | 78    | https://yc-oss.github.io/api/tags/real-estate.json                                           |
| Recommendation System                                  | 4     | https://yc-oss.github.io/api/tags/recommendation-system.json                                 |
| Recruiting                                             | 60    | https://yc-oss.github.io/api/tags/recruiting.json                                            |
| Referrals                                              | 2     | https://yc-oss.github.io/api/tags/referrals.json                                             |
| Regtech                                                | 15    | https://yc-oss.github.io/api/tags/regtech.json                                               |
| Reinforcement Learning                                 | 14    | https://yc-oss.github.io/api/tags/reinforcement-learning.json                                |
| Remittances                                            | 4     | https://yc-oss.github.io/api/tags/remittances.json                                           |
| Remote                                                 | 7     | https://yc-oss.github.io/api/tags/remote.json                                                |
| Remote Work                                            | 18    | https://yc-oss.github.io/api/tags/remote-work.json                                           |
| Renewable Energy                                       | 17    | https://yc-oss.github.io/api/tags/renewable-energy.json                                      |
| Restaurant Tech                                        | 10    | https://yc-oss.github.io/api/tags/restaurant-tech.json                                       |
| Retail                                                 | 48    | https://yc-oss.github.io/api/tags/retail.json                                                |
| Retail Tech                                            | 19    | https://yc-oss.github.io/api/tags/retail-tech.json                                           |
| Reviews                                                | 3     | https://yc-oss.github.io/api/tags/reviews.json                                               |
| Ridesharing                                            | 3     | https://yc-oss.github.io/api/tags/ridesharing.json                                           |
| Robotic Process Automation                             | 28    | https://yc-oss.github.io/api/tags/robotic-process-automation.json                            |
| Robotic Surgery                                        | 3     | https://yc-oss.github.io/api/tags/robotic-surgery.json                                       |
| Robotics                                               | 81    | https://yc-oss.github.io/api/tags/robotics.json                                              |
| Rocketry                                               | 3     | https://yc-oss.github.io/api/tags/rocketry.json                                              |
| SaaS                                                   | 1084  | https://yc-oss.github.io/api/tags/saas.json                                                  |
| Sales                                                  | 107   | https://yc-oss.github.io/api/tags/sales.json                                                 |
| Sales Enablement                                       | 35    | https://yc-oss.github.io/api/tags/sales-enablement.json                                      |
| Satellites                                             | 20    | https://yc-oss.github.io/api/tags/satellites.json                                            |
| Scheduling                                             | 11    | https://yc-oss.github.io/api/tags/scheduling.json                                            |
| Search                                                 | 17    | https://yc-oss.github.io/api/tags/search.json                                                |
| Security                                               | 83    | https://yc-oss.github.io/api/tags/security.json                                              |
| Security Orchestration, Automation and Response (SOAR) | 1     | https://yc-oss.github.io/api/tags/security-orchestration-automation-and-response-(soar).json |
| Self-Driving Vehicles                                  | 5     | https://yc-oss.github.io/api/tags/self-driving-vehicles.json                                 |
| Semiconductors                                         | 12    | https://yc-oss.github.io/api/tags/semiconductors.json                                        |
| SEO                                                    | 3     | https://yc-oss.github.io/api/tags/seo.json                                                   |
| Skincare                                               | 1     | https://yc-oss.github.io/api/tags/skincare.json                                              |
| Sleep Tech                                             | 8     | https://yc-oss.github.io/api/tags/sleep-tech.json                                            |
| Small Modular Reactors                                 | 2     | https://yc-oss.github.io/api/tags/small-modular-reactors.json                                |
| Smart Clothing                                         | 5     | https://yc-oss.github.io/api/tags/smart-clothing.json                                        |
| Smart Home Assistants                                  | 6     | https://yc-oss.github.io/api/tags/smart-home-assistants.json                                 |
| Smart Locks                                            | 1     | https://yc-oss.github.io/api/tags/smart-locks.json                                           |
| SMB                                                    | 13    | https://yc-oss.github.io/api/tags/smb.json                                                   |
| SMS                                                    | 7     | https://yc-oss.github.io/api/tags/sms.json                                                   |
| Social                                                 | 70    | https://yc-oss.github.io/api/tags/social.json                                                |
| Social Media                                           | 28    | https://yc-oss.github.io/api/tags/social-media.json                                          |
| Social Network                                         | 21    | https://yc-oss.github.io/api/tags/social-network.json                                        |
| Solar Power                                            | 16    | https://yc-oss.github.io/api/tags/solar-power.json                                           |
| Space Exploration                                      | 19    | https://yc-oss.github.io/api/tags/space-exploration.json                                     |
| Speech Recognition                                     | 4     | https://yc-oss.github.io/api/tags/speech-recognition.json                                    |
| Sports Tech                                            | 18    | https://yc-oss.github.io/api/tags/sports-tech.json                                           |
| Stocks                                                 | 4     | https://yc-oss.github.io/api/tags/stocks.json                                                |
| Subscriptions                                          | 39    | https://yc-oss.github.io/api/tags/subscriptions.json                                         |
| Supply Chain                                           | 71    | https://yc-oss.github.io/api/tags/supply-chain.json                                          |
| Sustainability                                         | 14    | https://yc-oss.github.io/api/tags/sustainability.json                                        |
| Sustainable Agriculture                                | 2     | https://yc-oss.github.io/api/tags/sustainable-agriculture.json                               |
| Sustainable Fashion                                    | 9     | https://yc-oss.github.io/api/tags/sustainable-fashion.json                                   |
| Sustainable Tourism                                    | 3     | https://yc-oss.github.io/api/tags/sustainable-tourism.json                                   |
| Swarm Robotics                                         | 2     | https://yc-oss.github.io/api/tags/swarm-robotics.json                                        |
| Synthetic Biology                                      | 30    | https://yc-oss.github.io/api/tags/synthetic-biology.json                                     |
| Talent Acquisition                                     | 5     | https://yc-oss.github.io/api/tags/talent-acquisition.json                                    |
| Team Collaboration                                     | 13    | https://yc-oss.github.io/api/tags/team-collaboration.json                                    |
| Telecommunications                                     | 26    | https://yc-oss.github.io/api/tags/telecommunications.json                                    |
| Telehealth                                             | 28    | https://yc-oss.github.io/api/tags/telehealth.json                                            |
| Telemedicine                                           | 29    | https://yc-oss.github.io/api/tags/telemedicine.json                                          |
| Therapeutics                                           | 44    | https://yc-oss.github.io/api/tags/therapeutics.json                                          |
| Ticketing                                              | 3     | https://yc-oss.github.io/api/tags/ticketing.json                                             |
| Time Series                                            | 4     | https://yc-oss.github.io/api/tags/time-series.json                                           |
| Trading                                                | 7     | https://yc-oss.github.io/api/tags/trading.json                                               |
| Transportation                                         | 38    | https://yc-oss.github.io/api/tags/transportation.json                                        |
| Travel                                                 | 44    | https://yc-oss.github.io/api/tags/travel.json                                                |
| Trust & Safety                                         | 6     | https://yc-oss.github.io/api/tags/trust-and-safety.json                                      |
| Unmanned Vehicle                                       | 3     | https://yc-oss.github.io/api/tags/unmanned-vehicle.json                                      |
| Vertical Farming                                       | 4     | https://yc-oss.github.io/api/tags/vertical-farming.json                                      |
| Video                                                  | 78    | https://yc-oss.github.io/api/tags/video.json                                                 |
| Virtual Reality                                        | 14    | https://yc-oss.github.io/api/tags/virtual-reality.json                                       |
| VR Health                                              | 2     | https://yc-oss.github.io/api/tags/vr-health.json                                             |
| Warehouse Management Tech                              | 15    | https://yc-oss.github.io/api/tags/warehouse-management-tech.json                             |
| Weather                                                | 3     | https://yc-oss.github.io/api/tags/weather.json                                               |
| Web Development                                        | 24    | https://yc-oss.github.io/api/tags/web-development.json                                       |
| Women's Health                                         | 14    | https://yc-oss.github.io/api/tags/women's-health.json                                        |
| Workflow Automation                                    | 59    | https://yc-oss.github.io/api/tags/workflow-automation.json                                   |

</details>
<!--end generated readme-->

## 📀 Schema

Each endpoint (with the exception of `meta.json`) returns an array of objects.
Each object has the following properties:

| Property                | Type     | Description                                                      |
| ----------------------- | -------- | ---------------------------------------------------------------- |
| `id`                    | number   | The company's ID decided by Y Combinator                         |
| `name`                  | string   | The company's name                                               |
| `slug`                  | string   | The company's human-readable slug                                |
| `former_names`          | string[] | The company's former names, if the company was renamed           |
| `small_logo_thumb_url`  | string   | The URL of the company's logo as a square hosted by Y Combinator |
| `website`               | string   | The company's website URL                                        |
| `all_locations`         | string   | The company's locations separated by colons (;)                  |
| `long_description`      | string   | The company's long description                                   |
| `one_liner`             | string   | The company's one-liner description                              |
| `team_size`             | number   | The company's team size                                          |
| `highlight_black`       | boolean  | Whether the company is highlighted for Black founders            |
| `highlight_latinx`      | boolean  | Whether the company is highlighted for Hispanic/Latino founders  |
| `highlight_women`       | boolean  | Whether the company is highlighted for women founders            |
| `industry`              | string   | The company's industry                                           |
| `subindustry`           | string   | The company's subindustry                                        |
| `launched_at`           | number   | The company's launch date as a Unix timestamp                    |
| `tags`                  | string[] | The company's tags                                               |
| `top_company`           | boolean  | Whether the company is a top company                             |
| `isHiring`              | boolean  | Whether the company is hiring                                    |
| `nonprofit`             | boolean  | Whether the company is a nonprofit                               |
| `batch`                 | string   | The company's batch                                              |
| `status`                | string   | The company's status                                             |
| `industries`            | string[] | The company's industries                                         |
| `regions`               | string[] | The company's regions                                            |
| `stage`                 | string   | The company's stage                                              |
| `app_video_public`      | boolean  | Whether the company's app video is public                        |
| `demo_day_video_public` | boolean  | Whether the company's demo day video is public                   |
| `app_answers`           | object   | The company's app answers                                        |
| `question_answers`      | boolean  | Whether the company's question answers are public                |
| `url`                   | string   | The company's URL on the Y Combinator website                    |
| `api`                   | string   | The company's API endpoint from this repository                  |

For example, the `airbnb.json` endpoint returns the following object:

```json
{
  "id": 271,
  "name": "Airbnb",
  "slug": "airbnb",
  "former_names": [],
  "small_logo_thumb_url": "https://bookface-images.s3.amazonaws.com/small_logos/3e9a0092bee2ccf926e650e59c06503ec6b9ee65.png",
  "website": "http://airbnb.com",
  "all_locations": "San Francisco, CA, USA",
  "long_description": "Founded in August of 2008 and based in San Francisco, California, Airbnb is a trusted community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 33,000 cities and 192 countries. And with world-class customer service and a growing community of users, Airbnb is the easiest way for people to monetize their extra space and showcase it to an audience of millions.  \r\n\r\nNo global movement springs from individuals. It takes an entire team united behind something big. Together, we work hard, we laugh a lot, we brainstorm nonstop, we use hundreds of Post-Its a week, and we give the best high-fives in town. Headquartered in San Francisco, we have satellite offices in Dublin, London, Barcelona, Paris, Milan, Copenhagen, Berlin, Moscow, São Paolo, Sydney, and Singapore.",
  "one_liner": "Book accommodations around the world.",
  "team_size": 6132,
  "highlight_black": false,
  "highlight_latinx": false,
  "highlight_women": false,
  "industry": "Consumer",
  "subindustry": "Consumer -> Travel, Leisure and Tourism",
  "launched_at": 1326790856,
  "tags": ["Marketplace", "Travel"],
  "tags_highlighted": [],
  "top_company": true,
  "isHiring": false,
  "nonprofit": false,
  "batch": "W09",
  "status": "Public",
  "industries": ["Consumer", "Travel, Leisure and Tourism"],
  "regions": ["United States of America", "America / Canada"],
  "stage": "Growth",
  "app_video_public": false,
  "demo_day_video_public": false,
  "app_answers": null,
  "question_answers": false,
  "url": "https://www.ycombinator.com/companies/airbnb",
  "api": "https://yc-oss.github.io/api/batches/w09/airbnb.json"
}
```

Here are first 10 companies from the Top Companies API
(https://yc-oss.github.io/api/companies/top.json):

| Logo                                                                                                                                   | Name       | One-liner                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------- |
| <img src="https://bookface-images.s3.amazonaws.com/small_logos/33ee27aa9c6b3036b40ec6c7f0c2a98ccaf32f40.png" width="50" height="50" /> | PlanGrid   | Mobile applications for the construction industry.                      |
| <img src="https://bookface-images.s3.amazonaws.com/small_logos/6ce7845c2e268525f5f04915212ac0a106fb7e3d.png" width="50" height="50" /> | Gusto      | Provides growing businesses with everything to take care of their team. |
| <img src="https://bookface-images.s3.amazonaws.com/small_logos/b271a79c3b59d6344c90e2803525a22f2a5e8406.png" width="50" height="50" /> | Matterport | Turn physical objects and environments into 3D models in seconds.       |
| <img src="https://bookface-images.s3.amazonaws.com/small_logos/fa98c8a53255b3fd2e9d4a65dbb47eec293729f1.png" width="50" height="50" /> | Amplitude  | Digital Analytics Platform.                                             |
| <img src="https://bookface-images.s3.amazonaws.com/small_logos/1bbfeae646cc8051b5ad469413e67295e9fae353.png" width="50" height="50" /> | Sendwave   | Instant, no fee international remittances.                              |
| <img src="https://bookface-images.s3.amazonaws.com/small_logos/ee26c3b11a260e7a045f68b47d8c804b306db89f.png" width="50" height="50" /> | Codecademy | The leading online learning platform for technical skills.              |
| <img src="https://bookface-images.s3.amazonaws.com/small_logos/99f5abd1f15fa4ca4394b5781c98d8ff23db6f7b.png" width="50" height="50" /> | Segment    | Software and APIs to collect, clean, and control customer data.         |
| <img src="https://bookface-images.s3.amazonaws.com/small_logos/251df7a6d1d16ee11aac63b910791aca861aff29.png" width="50" height="50" /> | HelloSign  | eSignature software for small and mid-market businesses.                |
| <img src="https://bookface-images.s3.amazonaws.com/small_logos/e57fe3f2f5b8a158002acd8fef99c01e7294b55c.png" width="50" height="50" /> | Fivestars  | Customer loyalty and payments platform for small businesses.            |
| <img src="https://bookface-images.s3.amazonaws.com/small_logos/4f3a455935f36a6655742aae286b206df1cd13bd.png" width="50" height="50" /> | GOAT Group | Platform for the greatest products from the past, present and future.   |
