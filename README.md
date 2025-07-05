<h1 align="center">DSL QUANT SYSTEM</h1>

<p align="center">
시중 전략 벡테스팅 및 커스텀 전략 실행을 위한 금융 데이터 분석 웹 플랫폼입니다.<br/>
2024 광운대학교 졸업작품으로 제작되었습니다.
</p>

---

## 🌐 Link

🔗 [DSL QUANT SYSTEM](https://dslquant.site) _(배포종료)_

---

## ✨ Features

- 시중에 존재하는 전략 단일 실행 및 다중 실행(backtesting) 기능
- 무작위 전략을 통한 데이터 탐색 및 결과 확인
- 코스피, 코스피200, 코스닥 지수 데이터 크롤링
- 전략 실행 결과 리포트 저장 및 조회 기능
- 사용자별 전략 결과 관리 및 다운로드

---

## 📹 Screenshots

> 아래 이미지들은 실제 캡처 이미지로 교체해 주세요.

**무작위 전략 실행 화면**

<p align="center">
  <img src="https://your-random-strategy-screenshot-url" width="600"/>
</p>

**코스피/코스닥 데이터 크롤링 화면**

<p align="center">
  <img src="https://your-crawling-screenshot-url" width="600"/>
</p>

**공통 전략 설정 화면**

<p align="center">
  <img src="https://your-strategy-settings-screenshot-url" width="600"/>
</p>

**이전 전략 결과 조회 화면**

<p align="center">
  <img src="https://your-history-screenshot-url" width="600"/>
</p>

---

## 🛠️ Skills & Tech Stack



### 💻 Frontend

| Category       | Details                                                       |
|----------------|---------------------------------------------------------------|
| **Framework**   | React                                                         |
| **Hosting**     | AWS Amplify (static hosting)                                  |
| **Domain**      | dslquant.site (connected via Route53)                         |
| **Structure**   | Single Page Application (SPA) 

### 💻 Backend

| Category       | Details                                                                   |
|----------------|---------------------------------------------------------------------------|
| **Language**     | Java 17                                                                  |
| **Framework**   | Spring Boot                                                              |
| **Security**    | Spring Security                                                          |
| **ORM**         | Spring Data JPA                                                          |
| **Build Tool**  | Gradle                                                                   |
| **API**         | RESTful API (api.dslquant.site)                                         |
| **Deployment**  | JAR build → CodeDeploy deployment → EC2 server execution                |

### 🌐 Infrastructure

|Category        | Details                                                   |
|-----------------|-----------------------------------------------------------|
| **DNS & Domain** | AWS Route53                                               |
| **CI/CD**       | GitHub Actions + AWS CodeDeploy + S3                      |
| **Compute**     | AWS EC2 (Spring Boot application deployment)              |
| **Storage**     | Amazon S3 (JAR artifacts)                                 |
| **Database**    | Amazon RDS (MySQL)                                        |
| **IAM**         | AWS IAM (access control & authentication)                 |
| **Proxy**       | Nginx (reverse proxy, 8080 → 80 port)                     |

---

## 👫🏻 Contributors

| Role              | Name                                   |
|------------------|--------------------------------------|
| FrontEnd       | 최승아                                |
| BackEnd            | 김호성, 김효석, 나상연, 김민혁             |


---

## 📦 Key Packages

### 🖥️ Frontend Packages

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-FF9900?style=for-the-badge&logo=awsamplify&logoColor=white)
![ApexCharts](https://img.shields.io/badge/ApexCharts-FF4560?style=for-the-badge&logo=apexcharts&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

### 🖥️ Backend Packages

![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=OpenJDK&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![Spring Data JPA](https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Gradle](https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

### 🚀 DevOps & Cloud

![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![AWS RDS](https://img.shields.io/badge/AWS_RDS-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?style=for-the-badge&logo=amazonaws&logoColor=white)
![AWS CodeDeploy](https://img.shields.io/badge/AWS_CodeDeploy-6DB33F?style=for-the-badge&logo=amazonaws&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)


---

## 📂 Directory Structure
```
DSL QUANT SYSTEM/
├── backend/
│   ├── Real-BackEnd/
│   │   ├── .gradle/
│   │   ├── build/
│   │   ├── gradle/
│   │   ├── scripts/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/com/example/BeFETest/
│   │   │   │   │   ├── BusinessLogicLayer/
│   │   │   │   │   ├── DTO/
│   │   │   │   │   ├── Entity/
│   │   │   │   │   ├── Error/
│   │   │   │   │   ├── JWT/
│   │   │   │   │   ├── Repository/
│   │   │   │   │   ├── Scheduling/
│   │   │   │   │   ├── Strategy/
│   │   │   │   │   ├── config/
│   │   │   │   │   └── controller/
│   │   │   │   └── resources/
│   │   │   └── test/
│   │   ├── build.gradle
│   │   ├── gradlew
│   │   ├── gradlew.bat
│   │   ├── settings.gradle
│   │   └── appspec.yml
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── box/
    │   │   ├── button/
    │   │   ├── chart/
    │   │   ├── emoticon/
    │   │   ├── error/
    │   │   ├── featuredInfo/
    │   │   ├── loading/
    │   │   └── table/
    │   ├── config/
    │   ├── context/
    │   ├── layouts/
    │   │   ├── footer/
    │   │   └── navigator/
    │   ├── pages/
    │   │   ├── info/
    │   │   │   ├── login/
    │   │   │   └── myPage/
    │   │   ├── main/
    │   │   │   ├── home/
    │   │   │   ├── result/
    │   │   │   ├── stockInfo/
    │   │   │   ├── stockList/
    │   │   │   └── strategy/
    │   │   └── preview/
    │   │       ├── explain/
    │   │       └── notfound/
    │   ├── routes/
    │   ├── types/
    │   └── utils/
    └── 기타 설정 파일
```