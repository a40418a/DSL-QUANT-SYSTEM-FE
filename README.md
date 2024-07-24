# Frontend

use React

```
DSL-QUANT-SYSTEM
├─ .DS_Store
├─ Frontend
│  ├─ .DS_Store
│  ├─ README.md
│  └─ front-end
│     ├─ .DS_Store
│     ├─ .env
│     ├─ README.md
│     ├─ dist
│     │  ├─ .DS_Store
│     │  ├─ assets
│     │  │  ├─ btn_kakao-B31Xk6U5.svg
│     │  │  ├─ index-CBpYh4X1.css
│     │  │  └─ index-CirjTMGQ.js
│     │  ├─ favicon.ico
│     │  ├─ index.html
│     │  ├─ kw.svg
│     │  ├─ logo192.png
│     │  ├─ logo512.png
│     │  ├─ manifest.json
│     │  └─ robots.txt
│     ├─ index.html
│     ├─ package.json
│     ├─ public
│     │  ├─ .DS_Store
│     │  ├─ favicon.ico
│     │  ├─ kw.svg
│     │  ├─ logo192.png
│     │  ├─ logo512.png
│     │  ├─ manifest.json
│     │  └─ robots.txt
│     ├─ src
│     │  ├─ .DS_Store
│     │  ├─ App.jsx
│     │  ├─ app.css
│     │  ├─ assets
│     │  │  ├─ .DS_Store
│     │  │  ├─ fonts.css
│     │  │  └─ kakao_login_medium_wide.png
│     │  ├─ components
│     │  │  ├─ .DS_Store
│     │  │  ├─ box
│     │  │  │  ├─ basicBox
│     │  │  │  │  ├─ BasicBox.jsx
│     │  │  │  │  └─ basicBox.css
│     │  │  │  ├─ checkBox
│     │  │  │  │  ├─ CheckBox.jsx
│     │  │  │  │  └─ checkBox.css
│     │  │  │  ├─ featuredInfoBox
│     │  │  │  │  ├─ FeaturedInfoBox.jsx
│     │  │  │  │  └─ featuredInfoBox.css
│     │  │  │  ├─ inputBox
│     │  │  │  │  ├─ InputBox.jsx
│     │  │  │  │  └─ inputBox.css
│     │  │  │  └─ selectBox
│     │  │  │     ├─ SelectBox.jsx
│     │  │  │     └─ selectBox.css
│     │  │  ├─ button
│     │  │  │  ├─ ColorBtn
│     │  │  │  │  ├─ ColorBtn.jsx
│     │  │  │  │  └─ colorBtn.css
│     │  │  │  ├─ TextBtn
│     │  │  │  │  ├─ TextBtn.jsx
│     │  │  │  │  └─ textBtn.css
│     │  │  │  └─ WideBtn
│     │  │  │     ├─ WideBtn.jsx
│     │  │  │     └─ wideBtn.css
│     │  │  ├─ chart
│     │  │  │  ├─ Chart03.jsx
│     │  │  │  ├─ ChartBar.jsx
│     │  │  │  ├─ ChartCandle.jsx
│     │  │  │  ├─ ChartLine.jsx
│     │  │  │  ├─ chart.css
│     │  │  │  ├─ chart02.css
│     │  │  │  ├─ chart02.jsx
│     │  │  │  └─ chart03.css
│     │  │  ├─ emoticon
│     │  │  │  ├─ arrow
│     │  │  │  │  ├─ Arrow.jsx
│     │  │  │  │  └─ arrow.css
│     │  │  │  └─ logo
│     │  │  │     ├─ Logo.jsx
│     │  │  │     ├─ btn_google.svg
│     │  │  │     ├─ btn_kakao.svg
│     │  │  │     ├─ btn_naver.svg
│     │  │  │     └─ logo.css
│     │  │  ├─ featuredInfo
│     │  │  │  ├─ FeaturedInfo.jsx
│     │  │  │  └─ featuredInfo.css
│     │  │  ├─ footbar
│     │  │  │  ├─ Footbar.jsx
│     │  │  │  └─ footbar.css
│     │  │  ├─ input
│     │  │  │  ├─ Input.jsx
│     │  │  │  └─ input.css
│     │  │  ├─ table
│     │  │  │  ├─ tableHorizon
│     │  │  │  │  ├─ TableHorizon.jsx
│     │  │  │  │  └─ tableHorizon.css
│     │  │  │  └─ tableVertical
│     │  │  │     ├─ TableVertical.jsx
│     │  │  │     └─ tableVertical.css
│     │  │  └─ topbar
│     │  │     ├─ Topbar.jsx
│     │  │     └─ topbar.css
│     │  ├─ context
│     │  │  ├─ StrategyContext.tsx
│     │  │  └─ _context.txt
│     │  ├─ data
│     │  │  ├─ dummyData.xlsx
│     │  │  ├─ dummyData01.js
│     │  │  ├─ dummyData02.js
│     │  │  ├─ dummyData03.js
│     │  │  ├─ excelToDummy.js
│     │  │  └─ tableData.xlsx
│     │  ├─ dto
│     │  │  ├─ BacktestingHistoryDTO.ts
│     │  │  ├─ LoginDTO.ts
│     │  │  ├─ MyPageCheckDTO.ts
│     │  │  ├─ MyPageDTO.ts
│     │  │  ├─ ResultDTO.ts
│     │  │  ├─ StockInfoDTO.ts
│     │  │  ├─ StrategyDTO.ts
│     │  │  └─ _dto.txt
│     │  ├─ handler
│     │  │  └─ AuthContext.jsx
│     │  ├─ index.jsx
│     │  ├─ pages
│     │  │  ├─ info
│     │  │  │  ├─ login
│     │  │  │  │  ├─ Login.jsx
│     │  │  │  │  ├─ LoginHandler.jsx
│     │  │  │  │  └─ login.css
│     │  │  │  ├─ myPage
│     │  │  │  │  ├─ MyPage.jsx
│     │  │  │  │  └─ myPage.css
│     │  │  │  └─ myPageCheck
│     │  │  │     ├─ MyPageCheck.jsx
│     │  │  │     └─ myPageCheck.css
│     │  │  ├─ main
│     │  │  │  ├─ home
│     │  │  │  │  ├─ Home.jsx
│     │  │  │  │  └─ home.css
│     │  │  │  ├─ result
│     │  │  │  │  ├─ Result.jsx
│     │  │  │  │  └─ result.css
│     │  │  │  ├─ stockInfo
│     │  │  │  │  ├─ StockInfo.jsx
│     │  │  │  │  └─ stockInfo.css
│     │  │  │  └─ strategy
│     │  │  │     ├─ StrategyBollinger.jsx
│     │  │  │     ├─ StrategyGolden.jsx
│     │  │  │     ├─ StrategyMain.jsx
│     │  │  │     ├─ StrategyRSI.jsx
│     │  │  │     └─ strategy.css
│     │  │  └─ preview
│     │  │     └─ explain
│     │  │        ├─ Explain.jsx
│     │  │        └─ explain.css
│     │  └─ utils
│     │     └─ api.js
│     ├─ tsconfig.json
│     ├─ vite.config.js
│     └─ yarn.lock
├─ README.md
└─ Real-BackEnd
   ├─ .idea
   │  ├─ Real-BackEnd.iml
   │  ├─ compiler.xml
   │  ├─ gradle.xml
   │  ├─ jarRepositories.xml
   │  ├─ misc.xml
   │  ├─ modules.xml
   │  ├─ uiDesigner.xml
   │  └─ vcs.xml
   ├─ README.md
   └─ Real-BackEnd
      ├─ .gradle
      │  ├─ 8.7
      │  │  ├─ checksums
      │  │  │  ├─ checksums.lock
      │  │  │  ├─ md5-checksums.bin
      │  │  │  └─ sha1-checksums.bin
      │  │  ├─ dependencies-accessors
      │  │  │  └─ gc.properties
      │  │  ├─ executionHistory
      │  │  │  ├─ executionHistory.bin
      │  │  │  └─ executionHistory.lock
      │  │  ├─ expanded
      │  │  ├─ fileChanges
      │  │  │  └─ last-build.bin
      │  │  ├─ fileHashes
      │  │  │  ├─ fileHashes.bin
      │  │  │  ├─ fileHashes.lock
      │  │  │  └─ resourceHashesCache.bin
      │  │  ├─ gc.properties
      │  │  └─ vcsMetadata
      │  ├─ buildOutputCleanup
      │  │  ├─ buildOutputCleanup.lock
      │  │  ├─ cache.properties
      │  │  └─ outputFiles.bin
      │  ├─ file-system.probe
      │  └─ vcs-1
      │     └─ gc.properties
      ├─ .idea
      │  ├─ .name
      │  ├─ compiler.xml
      │  ├─ dbnavigator.xml
      │  ├─ gradle.xml
      │  ├─ inspectionProfiles
      │  │  └─ Project_Default.xml
      │  ├─ jarRepositories.xml
      │  ├─ misc.xml
      │  ├─ modules
      │  │  └─ Be-FE-Test.main.iml
      │  ├─ modules.xml
      │  ├─ uiDesigner.xml
      │  └─ vcs.xml
      ├─ HELP.md
      ├─ bin
      │  ├─ default
      │  ├─ generated-sources
      │  │  └─ annotations
      │  ├─ generated-test-sources
      │  │  └─ annotations
      │  ├─ main
      │  │  ├─ application.properties
      │  │  └─ com
      │  │     └─ example
      │  │        └─ BeFETest
      │  │           ├─ BeFeTestApplication.class
      │  │           ├─ BusinessLogicLayer
      │  │           │  └─ kakao
      │  │           │     ├─ AccountService.class
      │  │           │     └─ authService.class
      │  │           ├─ DTO
      │  │           │  ├─ coinDTO
      │  │           │  │  ├─ BollingerBandsStrategyDTO.class
      │  │           │  │  ├─ GoldenDeadCrossStrategyDTO.class
      │  │           │  │  ├─ IndicatorBasedStrategyDTO.class
      │  │           │  │  ├─ StrategyCommonDTO.class
      │  │           │  │  └─ TradeStrategyDTO.class
      │  │           │  ├─ kakaoDTO
      │  │           │  │  ├─ Account$AccountBuilder.class
      │  │           │  │  ├─ Account.class
      │  │           │  │  ├─ JwtResponse.class
      │  │           │  │  ├─ KakaoAccountDto$KakaoAccount$Profile.class
      │  │           │  │  ├─ KakaoAccountDto$KakaoAccount.class
      │  │           │  │  ├─ KakaoAccountDto$Properties.class
      │  │           │  │  ├─ KakaoAccountDto.class
      │  │           │  │  ├─ KakaoTokenDto.class
      │  │           │  │  ├─ LoginResponseDto.class
      │  │           │  │  └─ RefreshTokenRequest.class
      │  │           │  ├─ kosdak
      │  │           │  │  ├─ KosdakConverter.class
      │  │           │  │  ├─ KosdakDTO.class
      │  │           │  │  └─ KosdakResponseDTO.class
      │  │           │  ├─ kosdak2000
      │  │           │  │  ├─ Kosdak2000Converter.class
      │  │           │  │  ├─ Kosdak2000DTO.class
      │  │           │  │  └─ Kosdak2000ResponseDTO.class
      │  │           │  ├─ kospi
      │  │           │  │  ├─ KospiConverter.class
      │  │           │  │  ├─ KospiDTO.class
      │  │           │  │  └─ KospiResponseDTO.class
      │  │           │  ├─ ubai
      │  │           │  │  ├─ UbaiConverter.class
      │  │           │  │  ├─ UbaiDTO.class
      │  │           │  │  └─ UbaiResponseDTO.class
      │  │           │  ├─ ubmi
      │  │           │  │  ├─ UbmiConverter.class
      │  │           │  │  ├─ UbmiDTO.class
      │  │           │  │  └─ UbmiResponseDTO.class
      │  │           │  └─ ubmi30
      │  │           │     ├─ Ubmi30Converter.class
      │  │           │     ├─ Ubmi30DTO.class
      │  │           │     └─ Ubmi30ResponseDTO.class
      │  │           ├─ DataInitializer.class
      │  │           ├─ Entity
      │  │           │  ├─ BacktestingHistory.class
      │  │           │  ├─ RefreshToken.class
      │  │           │  ├─ UserEntity.class
      │  │           │  ├─ UserInfo.class
      │  │           │  ├─ UserRequest.class
      │  │           │  ├─ kosdak
      │  │           │  │  ├─ KosdakEntity.class
      │  │           │  │  └─ KosdakResponse.class
      │  │           │  ├─ kosdak2000
      │  │           │  │  ├─ Kosdak2000Entity.class
      │  │           │  │  └─ Kosdak2000Response.class
      │  │           │  ├─ kospi
      │  │           │  │  ├─ KospiEntity.class
      │  │           │  │  └─ KospiResponse.class
      │  │           │  ├─ ubai
      │  │           │  │  ├─ UbaiEntity.class
      │  │           │  │  └─ UbaiResponse.class
      │  │           │  ├─ ubmi
      │  │           │  │  ├─ UbmiEntity.class
      │  │           │  │  └─ UbmiResponse.class
      │  │           │  └─ ubmi30
      │  │           │     ├─ Ubmi30Entity.class
      │  │           │     └─ Ubmi30Response.class
      │  │           ├─ Error
      │  │           │  ├─ CustomAccessDeniedHandler.class
      │  │           │  ├─ CustomAuthenticationEntryPoint.class
      │  │           │  ├─ CustomExceptions$BadGatewayException.class
      │  │           │  ├─ CustomExceptions$BadRequestException.class
      │  │           │  ├─ CustomExceptions$ConflictException.class
      │  │           │  ├─ CustomExceptions$CustomException.class
      │  │           │  ├─ CustomExceptions$ForbiddenException.class
      │  │           │  ├─ CustomExceptions$GatewayTimeoutException.class
      │  │           │  ├─ CustomExceptions$InternalServerErrorException.class
      │  │           │  ├─ CustomExceptions$MethodNotAllowedException.class
      │  │           │  ├─ CustomExceptions$ResourceNotFoundException.class
      │  │           │  ├─ CustomExceptions$ServiceUnavailableException.class
      │  │           │  ├─ CustomExceptions$UnauthorizedException.class
      │  │           │  ├─ CustomExceptions.class
      │  │           │  ├─ ErrorCode.class
      │  │           │  ├─ ErrorResponse.class
      │  │           │  └─ GlobalExceptionHandler.class
      │  │           ├─ JWT
      │  │           │  ├─ JwtAuthenticationFilter.class
      │  │           │  └─ JwtUtil.class
      │  │           ├─ Repository
      │  │           │  ├─ BacktestingHistoryRepository.class
      │  │           │  ├─ Kosdak2000EntityRepository.class
      │  │           │  ├─ Kosdak2000Repository.class
      │  │           │  ├─ KosdakEntityRepository.class
      │  │           │  ├─ KosdakRepository.class
      │  │           │  ├─ KospiEntityRepository.class
      │  │           │  ├─ KospiRepository.class
      │  │           │  ├─ RefreshTokenRepository.class
      │  │           │  ├─ UserRepository.class
      │  │           │  └─ kakao
      │  │           │     └─ accountRepo.class
      │  │           ├─ Strategy
      │  │           │  ├─ BackTestingBB.class
      │  │           │  ├─ BackTestingGD.class
      │  │           │  ├─ BackTestingIndicator.class
      │  │           │  ├─ CommonFunction$1.class
      │  │           │  ├─ CommonFunction$Candle.class
      │  │           │  ├─ CommonFunction.class
      │  │           │  ├─ Upbit$1.class
      │  │           │  ├─ Upbit$Candle.class
      │  │           │  ├─ Upbit.class
      │  │           │  └─ upbit.py
      │  │           ├─ config
      │  │           │  ├─ CorsConfig.class
      │  │           │  ├─ SecurityConfig$1.class
      │  │           │  ├─ SecurityConfig.class
      │  │           │  └─ WebConfig.class
      │  │           └─ controller
      │  │              ├─ loginController$UserInfo.class
      │  │              ├─ loginController.class
      │  │              └─ testController.class
      │  └─ test
      │     └─ com
      │        └─ example
      │           └─ BeFETest
      │              └─ BeFeTestApplicationTests.class
      ├─ build
      │  ├─ classes
      │  │  └─ java
      │  │     ├─ main
      │  │     │  └─ com
      │  │     │     └─ example
      │  │     │        └─ BeFETest
      │  │     │           ├─ BeFeTestApplication.class
      │  │     │           ├─ BusinessLogicLayer
      │  │     │           │  └─ kakao
      │  │     │           │     ├─ AccountService.class
      │  │     │           │     └─ authService.class
      │  │     │           ├─ DTO
      │  │     │           │  ├─ coinDTO
      │  │     │           │  │  ├─ BollingerBandsStrategyDTO.class
      │  │     │           │  │  ├─ GoldenDeadCrossStrategyDTO.class
      │  │     │           │  │  ├─ IndicatorBasedStrategyDTO.class
      │  │     │           │  │  ├─ StrategyCommonDTO.class
      │  │     │           │  │  └─ TradeStrategyDTO.class
      │  │     │           │  ├─ kakaoDTO
      │  │     │           │  │  ├─ Account$AccountBuilder.class
      │  │     │           │  │  ├─ Account.class
      │  │     │           │  │  ├─ JwtResponse.class
      │  │     │           │  │  ├─ KakaoAccountDto$KakaoAccount$Profile.class
      │  │     │           │  │  ├─ KakaoAccountDto$KakaoAccount.class
      │  │     │           │  │  ├─ KakaoAccountDto$Properties.class
      │  │     │           │  │  ├─ KakaoAccountDto.class
      │  │     │           │  │  ├─ KakaoTokenDto.class
      │  │     │           │  │  ├─ LoginResponseDto.class
      │  │     │           │  │  └─ RefreshTokenRequest.class
      │  │     │           │  ├─ kosdak
      │  │     │           │  │  ├─ KosdakConverter.class
      │  │     │           │  │  ├─ KosdakDTO.class
      │  │     │           │  │  └─ KosdakResponseDTO.class
      │  │     │           │  ├─ kosdak2000
      │  │     │           │  │  ├─ Kosdak2000Converter.class
      │  │     │           │  │  ├─ Kosdak2000DTO.class
      │  │     │           │  │  └─ Kosdak2000ResponseDTO.class
      │  │     │           │  ├─ kospi
      │  │     │           │  │  ├─ KospiConverter.class
      │  │     │           │  │  ├─ KospiDTO.class
      │  │     │           │  │  └─ KospiResponseDTO.class
      │  │     │           │  ├─ ubai
      │  │     │           │  │  ├─ UbaiConverter.class
      │  │     │           │  │  ├─ UbaiDTO.class
      │  │     │           │  │  └─ UbaiResponseDTO.class
      │  │     │           │  ├─ ubmi
      │  │     │           │  │  ├─ UbmiConverter.class
      │  │     │           │  │  ├─ UbmiDTO.class
      │  │     │           │  │  └─ UbmiResponseDTO.class
      │  │     │           │  └─ ubmi30
      │  │     │           │     ├─ Ubmi30Converter.class
      │  │     │           │     ├─ Ubmi30DTO.class
      │  │     │           │     └─ Ubmi30ResponseDTO.class
      │  │     │           ├─ DataInitializer.class
      │  │     │           ├─ Entity
      │  │     │           │  ├─ BacktestingHistory.class
      │  │     │           │  ├─ RefreshToken.class
      │  │     │           │  ├─ UserEntity.class
      │  │     │           │  ├─ UserInfo.class
      │  │     │           │  ├─ UserRequest.class
      │  │     │           │  ├─ kosdak
      │  │     │           │  │  ├─ KosdakEntity.class
      │  │     │           │  │  └─ KosdakResponse.class
      │  │     │           │  ├─ kosdak2000
      │  │     │           │  │  ├─ Kosdak2000Entity.class
      │  │     │           │  │  └─ Kosdak2000Response.class
      │  │     │           │  ├─ kospi
      │  │     │           │  │  ├─ KospiEntity.class
      │  │     │           │  │  └─ KospiResponse.class
      │  │     │           │  ├─ ubai
      │  │     │           │  │  ├─ UbaiEntity.class
      │  │     │           │  │  └─ UbaiResponse.class
      │  │     │           │  ├─ ubmi
      │  │     │           │  │  ├─ UbmiEntity.class
      │  │     │           │  │  └─ UbmiResponse.class
      │  │     │           │  └─ ubmi30
      │  │     │           │     ├─ Ubmi30Entity.class
      │  │     │           │     └─ Ubmi30Response.class
      │  │     │           ├─ Error
      │  │     │           │  ├─ CustomAccessDeniedHandler.class
      │  │     │           │  ├─ CustomAuthenticationEntryPoint.class
      │  │     │           │  ├─ CustomExceptions$BadGatewayException.class
      │  │     │           │  ├─ CustomExceptions$BadRequestException.class
      │  │     │           │  ├─ CustomExceptions$ConflictException.class
      │  │     │           │  ├─ CustomExceptions$CustomException.class
      │  │     │           │  ├─ CustomExceptions$ForbiddenException.class
      │  │     │           │  ├─ CustomExceptions$GatewayTimeoutException.class
      │  │     │           │  ├─ CustomExceptions$InternalServerErrorException.class
      │  │     │           │  ├─ CustomExceptions$MethodNotAllowedException.class
      │  │     │           │  ├─ CustomExceptions$ResourceNotFoundException.class
      │  │     │           │  ├─ CustomExceptions$ServiceUnavailableException.class
      │  │     │           │  ├─ CustomExceptions$UnauthorizedException.class
      │  │     │           │  ├─ CustomExceptions.class
      │  │     │           │  ├─ ErrorCode.class
      │  │     │           │  ├─ ErrorResponse.class
      │  │     │           │  └─ GlobalExceptionHandler.class
      │  │     │           ├─ JWT
      │  │     │           │  ├─ JwtAuthenticationFilter.class
      │  │     │           │  └─ JwtUtil.class
      │  │     │           ├─ Repository
      │  │     │           │  ├─ BacktestingHistoryRepository.class
      │  │     │           │  ├─ Kosdak2000EntityRepository.class
      │  │     │           │  ├─ Kosdak2000Repository.class
      │  │     │           │  ├─ KosdakEntityRepository.class
      │  │     │           │  ├─ KosdakRepository.class
      │  │     │           │  ├─ KospiEntityRepository.class
      │  │     │           │  ├─ KospiRepository.class
      │  │     │           │  ├─ RefreshTokenRepository.class
      │  │     │           │  ├─ UserRepository.class
      │  │     │           │  └─ kakao
      │  │     │           │     └─ accountRepo.class
      │  │     │           ├─ Strategy
      │  │     │           │  ├─ BackTestingBB.class
      │  │     │           │  ├─ BackTestingGD.class
      │  │     │           │  ├─ BackTestingIndicator.class
      │  │     │           │  ├─ commonFunction$1.class
      │  │     │           │  ├─ commonFunction$Candle.class
      │  │     │           │  ├─ commonFunction.class
      │  │     │           │  ├─ upbit$1.class
      │  │     │           │  ├─ upbit$Candle.class
      │  │     │           │  └─ upbit.class
      │  │     │           ├─ config
      │  │     │           │  ├─ CorsConfig.class
      │  │     │           │  ├─ SecurityConfig$1.class
      │  │     │           │  ├─ SecurityConfig.class
      │  │     │           │  └─ WebConfig.class
      │  │     │           └─ controller
      │  │     │              ├─ loginController$UserInfo.class
      │  │     │              ├─ loginController.class
      │  │     │              └─ testController.class
      │  │     └─ test
      │  │        └─ com
      │  │           └─ example
      │  │              └─ BeFETest
      │  │                 └─ BeFeTestApplicationTests.class
      │  ├─ libs
      │  │  ├─ Be-FE-Test-0.0.1-SNAPSHOT-plain.jar
      │  │  └─ Be-FE-Test-0.0.1-SNAPSHOT.jar
      │  ├─ reports
      │  │  └─ tests
      │  │     └─ test
      │  │        ├─ css
      │  │        │  ├─ base-style.css
      │  │        │  └─ style.css
      │  │        ├─ index.html
      │  │        └─ js
      │  │           └─ report.js
      │  ├─ resolvedMainClassName
      │  ├─ resources
      │  │  └─ main
      │  │     └─ application.properties
      │  ├─ test-results
      │  │  └─ test
      │  │     └─ binary
      │  │        ├─ output.bin
      │  │        ├─ output.bin.idx
      │  │        └─ results.bin
      │  └─ tmp
      │     ├─ bootJar
      │     │  └─ MANIFEST.MF
      │     ├─ compileJava
      │     │  ├─ compileTransaction
      │     │  │  └─ stash-dir
      │     │  │     └─ testController.class.uniqueId0
      │     │  └─ previous-compilation-data.bin
      │     ├─ compileTestJava
      │     │  ├─ compileTransaction
      │     │  │  └─ stash-dir
      │     │  │     └─ BeFeTestApplicationTests.class.uniqueId0
      │     │  └─ previous-compilation-data.bin
      │     └─ jar
      │        └─ MANIFEST.MF
      ├─ build.gradle
      ├─ gradle
      │  └─ wrapper
      │     ├─ gradle-wrapper.jar
      │     └─ gradle-wrapper.properties
      ├─ gradlew
      ├─ gradlew.bat
      ├─ out
      │  └─ production
      │     ├─ classes
      │     │  └─ com
      │     │     └─ example
      │     │        └─ BeFETest
      │     │           ├─ BeFeTestApplication.class
      │     │           ├─ DTO
      │     │           │  └─ coinDTO
      │     │           │     ├─ historyInDTO.class
      │     │           │     ├─ historyOutDTO.class
      │     │           │     ├─ logInDTO.class
      │     │           │     └─ logOutDTO.class
      │     │           ├─ DataInitializer.class
      │     │           ├─ Entity
      │     │           │  ├─ BacktestingHistory.class
      │     │           │  ├─ HistoryEntity.class
      │     │           │  ├─ LogEntity.class
      │     │           │  ├─ UserEntity.class
      │     │           │  ├─ UserInfo.class
      │     │           │  ├─ UserRequest.class
      │     │           │  ├─ kosdak
      │     │           │  │  ├─ KosdakEntity.class
      │     │           │  │  └─ KosdakResponse.class
      │     │           │  ├─ kosdak2000
      │     │           │  │  ├─ Kosdak2000Entity.class
      │     │           │  │  └─ Kosdak2000Response.class
      │     │           │  └─ kospi
      │     │           │     ├─ KospiEntity.class
      │     │           │     └─ KospiResponse.class
      │     │           ├─ Error
      │     │           │  ├─ EnumModel.class
      │     │           │  ├─ ErrorCode.class
      │     │           │  ├─ ErrorResponse.class
      │     │           │  └─ InternalServerErrorException.class
      │     │           ├─ Repository
      │     │           │  ├─ BacktestingHistoryRepository.class
      │     │           │  ├─ HistoryRepo.class
      │     │           │  ├─ Kosdak2000EntityRepository.class
      │     │           │  ├─ Kosdak2000Repository.class
      │     │           │  ├─ KosdakEntityRepository.class
      │     │           │  ├─ KosdakRepository.class
      │     │           │  ├─ KospiEntityRepository.class
      │     │           │  ├─ KospiRepository.class
      │     │           │  ├─ LogRepo.class
      │     │           │  └─ UserRepository.class
      │     │           ├─ config
      │     │           │  ├─ WebConfig$1.class
      │     │           │  └─ WebConfig.class
      │     │           └─ controller
      │     │              └─ testController.class
      │     └─ resources
      │        └─ application.properties
      ├─ settings.gradle
      └─ src
         ├─ main
         │  ├─ java
         │  │  └─ com
         │  │     └─ example
         │  │        └─ BeFETest
         │  │           ├─ BeFeTestApplication.java
         │  │           ├─ BusinessLogicLayer
         │  │           │  └─ kakao
         │  │           │     ├─ AccountService.java
         │  │           │     └─ authService.java
         │  │           ├─ DTO
         │  │           │  ├─ coinDTO
         │  │           │  │  ├─ BollingerBandsStrategyDTO.java
         │  │           │  │  ├─ GoldenDeadCrossStrategyDTO.java
         │  │           │  │  ├─ IndicatorBasedStrategyDTO.java
         │  │           │  │  ├─ StrategyCommonDTO.java
         │  │           │  │  ├─ TradeStrategyDTO.java
         │  │           │  │  ├─ historyInDTO.java
         │  │           │  │  ├─ historyOutDTO.java
         │  │           │  │  ├─ logInDTO.java
         │  │           │  │  └─ logOutDTO.java
         │  │           │  ├─ kakaoDTO
         │  │           │  │  ├─ Account.java
         │  │           │  │  ├─ JwtResponse.java
         │  │           │  │  ├─ KakaoAccountDto.java
         │  │           │  │  ├─ KakaoTokenDto.java
         │  │           │  │  ├─ LoginResponseDto.java
         │  │           │  │  └─ RefreshTokenRequest.java
         │  │           │  ├─ kosdak
         │  │           │  │  ├─ KosdakConverter.java
         │  │           │  │  ├─ KosdakDTO.java
         │  │           │  │  └─ KosdakResponseDTO.java
         │  │           │  ├─ kosdak2000
         │  │           │  │  ├─ Kosdak2000Converter.java
         │  │           │  │  ├─ Kosdak2000DTO.java
         │  │           │  │  └─ Kosdak2000ResponseDTO.java
         │  │           │  ├─ kospi
         │  │           │  │  ├─ KospiConverter.java
         │  │           │  │  ├─ KospiDTO.java
         │  │           │  │  └─ KospiResponseDTO.java
         │  │           │  ├─ ubai
         │  │           │  │  ├─ UbaiConverter.java
         │  │           │  │  ├─ UbaiDTO.java
         │  │           │  │  └─ UbaiResponseDTO.java
         │  │           │  ├─ ubmi
         │  │           │  │  ├─ UbmiConverter.java
         │  │           │  │  ├─ UbmiDTO.java
         │  │           │  │  └─ UbmiResponseDTO.java
         │  │           │  └─ ubmi30
         │  │           │     ├─ Ubmi30Converter.java
         │  │           │     ├─ Ubmi30DTO.java
         │  │           │     └─ Ubmi30ResponseDTO.java
         │  │           ├─ DataInitializer.java
         │  │           ├─ Entity
         │  │           │  ├─ BacktestingHistory.java
         │  │           │  ├─ HistoryEntity.java
         │  │           │  ├─ LogEntity.java
         │  │           │  ├─ RefreshToken.java
         │  │           │  ├─ UserEntity.java
         │  │           │  ├─ UserInfo.java
         │  │           │  ├─ UserRequest.java
         │  │           │  ├─ kosdak
         │  │           │  │  ├─ KosdakEntity.java
         │  │           │  │  └─ KosdakResponse.java
         │  │           │  ├─ kosdak2000
         │  │           │  │  ├─ Kosdak2000Entity.java
         │  │           │  │  └─ Kosdak2000Response.java
         │  │           │  ├─ kospi
         │  │           │  │  ├─ KospiEntity.java
         │  │           │  │  └─ KospiResponse.java
         │  │           │  ├─ ubai
         │  │           │  │  ├─ UbaiEntity.java
         │  │           │  │  └─ UbaiResponse.java
         │  │           │  ├─ ubmi
         │  │           │  │  ├─ UbmiEntity.java
         │  │           │  │  └─ UbmiResponse.java
         │  │           │  └─ ubmi30
         │  │           │     ├─ Ubmi30Entity.java
         │  │           │     └─ Ubmi30Response.java
         │  │           ├─ Error
         │  │           │  ├─ CustomAccessDeniedHandler.java
         │  │           │  ├─ CustomAuthenticationEntryPoint.java
         │  │           │  ├─ CustomExceptions.java
         │  │           │  ├─ ErrorCode.java
         │  │           │  ├─ ErrorResponse.java
         │  │           │  ├─ GlobalExceptionHandler.java
         │  │           │  └─ InternalServerErrorException.java
         │  │           ├─ JWT
         │  │           │  ├─ JwtAuthenticationFilter.java
         │  │           │  └─ JwtUtil.java
         │  │           ├─ Repository
         │  │           │  ├─ BacktestingHistoryRepository.java
         │  │           │  ├─ HistoryRepo.java
         │  │           │  ├─ Kosdak2000EntityRepository.java
         │  │           │  ├─ Kosdak2000Repository.java
         │  │           │  ├─ KosdakEntityRepository.java
         │  │           │  ├─ KosdakRepository.java
         │  │           │  ├─ KospiEntityRepository.java
         │  │           │  ├─ KospiRepository.java
         │  │           │  ├─ LogRepo.java
         │  │           │  ├─ RefreshTokenRepository.java
         │  │           │  ├─ UserRepository.java
         │  │           │  └─ kakao
         │  │           │     └─ accountRepo.java
         │  │           ├─ Strategy
         │  │           │  ├─ BackTestingBB.java
         │  │           │  ├─ BackTestingGD.java
         │  │           │  ├─ BackTestingIndicator.java
         │  │           │  ├─ CommonFunction.java
         │  │           │  ├─ Upbit.java
         │  │           │  └─ upbit.py
         │  │           ├─ config
         │  │           │  ├─ CorsConfig.java
         │  │           │  ├─ SecurityConfig.java
         │  │           │  └─ WebConfig.java
         │  │           └─ controller
         │  │              ├─ loginController.java
         │  │              └─ testController.java
         │  └─ resources
         │     └─ application.properties
         └─ test
            └─ java
               └─ com
                  └─ example
                     └─ BeFETest
                        └─ BeFeTestApplicationTests.java

```
